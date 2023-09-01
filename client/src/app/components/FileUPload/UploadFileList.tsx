import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@nextui-org/react";
import { Gallery, GalleryEditType } from "@/types";
import apiClient from "@/lib/apiClient";

const UploadFileList = ({ props }: GalleryEditType) => {
    const [selectedColor] = useState("default");
    const userid = props.editId;
    const [gallery, setGallery] = useState([]);

    // Gallery情報を取得
    useEffect(() => {
        const fetchLatestPosts = async () => {
            try {
                const response = await apiClient.get("/gallery/get_latest_image", {
                    authorId: userid,
                });
                setGallery(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchLatestPosts();
    }, []);

    return (
        <>
            <div className="flex flex-col gap-3">
                <Table color={selectedColor} selectionMode="multiple" defaultSelectedKeys={["2", "3"]} aria-label="Example static collection table">
                    <TableHeader>
                        <TableColumn>TITLE</TableColumn>
                        <TableColumn>REGISTER DATE</TableColumn>
                        <TableColumn>ID</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {gallery.map((item: Gallery, index: number) => {
                            return (
                                <TableRow key={`${index}`}>
                                    <TableCell>{item.imagename}</TableCell>
                                    <TableCell>{item.createdAt}</TableCell>
                                    <TableCell>{item.id}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </>
    );
};

export default UploadFileList;
