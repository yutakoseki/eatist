"use client";
import apiClient from "@/lib/apiClient";
import React, { useState } from "react";

interface props {
    props: {
        editId: number;
    };
}

const FileUpload = ({ props }: props) => {
    const userid = props.editId;
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [extension, setExtention] = useState<string>("");

    // ファイルの選択
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            const selected = event.target.files[0];
            const allowedExtensions = ["png", "jpeg", "jpg"];
            const fileExtension = selected.name.split(".").pop()?.toLowerCase();
            if (fileExtension && allowedExtensions.includes(fileExtension)) {
                setExtention(fileExtension);
                setSelectedFile(selected);
            } else {
                alert("画像ファイル（png, jpeg, jpg）を選択してください。");
                console.error("画像ファイル（png, jpeg, jpg）を選択してください。");
            }
        }
    };

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
                alert("画像ファイルを選択してください。");
                console.error("ファイルが選択されていません。");
                return;
            }

            // TODO storage用github情報 秘匿情報としたい
            const token = "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";
            const owner = "yutakoseki";
            const repo = "vocallery-storage";

            let now = new Date();
            let formattedDate = formatDate(now);
            const uploadImageName = formattedDate + "." + extension;
            const imageName = selectedFile.name;
            const filePath = `images/${userid}/${uploadImageName}`;
            const url = `https://api.github.com/repos/${owner}/${repo}/contents/${filePath}`; // 投稿用のURL
            const urlPath = `https://raw.githubusercontent.com/yutakoseki/vocallery-storage/master/${filePath}?`; // 表示用のURL

            // 画像データ
            const content = await fileToBase64(selectedFile);
            const data = JSON.stringify({
                branch: "master",
                message: "upload image",
                content: `${content}`,
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

            // アップロードに成功した場合はDBへパスを登録
            try {
                await apiClient.post("/gallery/register", {
                    imageName,
                    uploadImageName,
                    urlPath,
                    userid,
                });
            } catch (err) {
                console.log("db register error", err);
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

function formatDate(date: Date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hour = String(date.getHours()).padStart(2, "0");
    const minute = String(date.getMinutes()).padStart(2, "0");
    const second = String(date.getSeconds()).padStart(2, "0");

    const formattedDate = year + month + day + hour + minute + second;
    return formattedDate;
}

export default FileUpload;
