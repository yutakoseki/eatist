// 全体で使いまわすための関数を作成
"use client";
import apiClient from "@/lib/apiClient";
import React, { ReactNode, useContext, useEffect, useState } from "react";

interface AuthContextType {
    user: null | { id: number; username: string; email: string };
    login: (token: string) => void;
    logout: () => void;
}

interface AuthProviderProps {
    children: ReactNode;
}

// 初期値
const AuthContext = React.createContext<AuthContextType>({
    user: null,
    login: () => {},
    logout: () => {},
});

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<null | { id: number; username: string; email: string }>(null);

    // 初回にローカルstorageからtokenを取得し、ユーザーデータに変換
    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        if (token) {
            apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
            apiClient
                .get("/users/find")
                .then((res) => {
                    setUser(res.data.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }, []);

    const login = async (token: string) => {
        localStorage.setItem("auth_token", token);
        apiClient.defaults.headers["Authorization"] = `Bearer ${token}`;
        try {
            apiClient
                .get("/users/find")
                .then((res) => {
                    setUser(res.data.user);
                })
                .catch((err) => {
                    console.log(err);
                });
        } catch (err) {
            console.log(err);
        }
    };

    const logout = () => {
        localStorage.removeItem("auth_token");
        delete apiClient.defaults.headers["Authorization"];
        setUser(null);
    };

    // これらのvalueを使いまわせるようにProviderに渡す
    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
