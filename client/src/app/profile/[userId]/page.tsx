"use client";
import apiClient from "@/lib/apiClient";
import { PostType, Profile } from "@/types";
import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { profile } from "console";

interface PageProps {
    params: {
        userId: number;
    };
}

interface Posts {
    id: number;
    content: string;
    createdAt: string;
    authorId: number;
    author: Author;
}
interface Author {
    profileImageUrl: string | undefined;
    id: number;
    username: string;
    email: string;
    password: string;
}

const UserProfile: NextPage<PageProps> = ({ params }) => {
    const [userProfile, setUserProfile] = useState<Profile>();
    const [userPosts, setUserPosts] = useState<Posts>();

    console.log(userPosts);

    // 初回にユーザー情報読み込み
    useEffect(() => {
        const fetchUserProfile = async () => {
            try {
                const response = await apiClient.get(`/users/profile/${params.userId}`);
                setUserProfile(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchUserProfile();

        const fetchUserPosts = async () => {
            try {
                const response = await apiClient.get(`/posts/${params.userId}`);
                setUserPosts(response.data);
            } catch (err) {
                console.log("fetchUserPostsError", err);
            }
        };
        fetchUserPosts();
    }, [params]); // userId が変わるたびに再度データを読み込む

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="w-full max-w-xl mx-auto">
                <div className="bg-white shadow-md rounded-lg p-6 mb-4">
                    <div className="flex items-center">
                        <img src={userProfile?.profileImageUrl} className="w-20 h-20 rounded-full mr-4" alt="User Avatar" />
                        <div>
                            <h2 className="text-2xl font-semibold mb-1">{userProfile?.user.username}</h2>
                            <p className="text-gray-600">{userProfile?.bio}</p>
                        </div>
                    </div>
                </div>
                {userPosts?.map((post: Posts) => (
                    <div className="bg-white shadow-md rounded p-4 mb-4" key={post.id}>
                        <div className="mb-4">
                            <div className="flex items-center mb-2">
                                <img className="w-10 h-10 rounded-full mr-2" alt="User Avatar" src={userProfile?.user.username} />
                                <div>
                                    <h2 className="font-semibold text-md">{post.author.username}</h2>
                                    <p className="text-gray-500 text-sm">{post.createdAt}</p>
                                </div>
                            </div>
                            <p className="text-gray-700">{post.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default UserProfile;
