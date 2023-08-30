"use client";
import apiClient from "@/lib/apiClient";
import React, { useState } from "react";

const FileUpload = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);

    // ファイルの選択
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setSelectedFile(event.target.files[0]);
        }
    };

    const token = "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";
    const owner = "yutakoseki";
    const repo = "vocallery-storage";
    const filePath = "images/test/img_1.jpg";
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`;

    // 選択したファイルをbase64化させる
    const fileToBase64 = async (file: File): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                if (event.target && event.target.result) {
                    const base64str = (event.target.result as string).split(",")[1]; // "data:image/jpeg;base64," の部分を取り除く
                    resolve(base64str);
                } else {
                    reject(new Error("Error reading file."));
                }
            };
            reader.onerror = (error) => {
                reject(error);
            };
            reader.readAsDataURL(file);
        });
    };

    // ファイルアップロード
    const handleUpload = async () => {
        try {

            if (!selectedFile) {
                console.error("ファイルが選択されていません。");
                return;
            }
            const content = await fileToBase64(selectedFile);

            // formで送信する内容を作成
            // const formData = new FormData();
            // formData.append("branch", "master");
            // formData.append("message", "upload image");
            // formData.append("content", content);

            const data = JSON.stringify({
                branch: 'master',
                message: 'upload image',
                content: `${content}`
              });

            // 適切なヘッダーを設定してリクエストを送信
            const p = {
                method: "PUT",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: data,
            };
            const res = await fetch(url, p);
            if (res.ok) {
                const resJson = await res.json();
                console.log(`Upload succeeded.`, resJson.content.download_url);
            } else {
                console.log(`Upload failed.`, res.status);
            }
        } catch (err) {
            console.log("Error uploading:", err);
        }
    };

    return (
        <div>
            <h1>GitHubへのファイルアップロード</h1>
            <input type="file" onChange={handleFileChange} />
            <button className="bg-blue-500" onClick={handleUpload}>
                GitHubにアップロード
            </button>
        </div>
    );
};

export default FileUpload;
