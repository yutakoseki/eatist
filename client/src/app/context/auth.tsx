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

// ローカルストレージにtokenをセット
export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<null | { id: number; username: string; email: string }>(null);
    // 初回にローカルstorageからtokenを取得
    useEffect(() => {
        const token = localStorage.getItem("auth_token");
        debugger;
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
            console.log(user);
    }, []);

    const login = async (token: string) => {
        localStorage.setItem("auth_token", token);
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
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
