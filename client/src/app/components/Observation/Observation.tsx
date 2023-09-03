"use client";
import React, { useEffect, useState } from "react";
import AddTask from "../Task/AddTask";
import List from "../List/List";

const Observation = () => {
    const [count, setCount] = useState(0);
    const [addItem, setAddItem] = useState<string>("");
    const [updateItem, setUpdateItem] = useState<string>("");
    const [deleteItem, setDeleteItem] = useState<number>(0);
    useEffect(() => {
        setCount(count + 1);
    },[addItem, updateItem, deleteItem]);
    return (
        <>
            <AddTask setAddItem={setAddItem}/>
            <List count={count} setUpdateItem={setUpdateItem} setDeleteItem={setDeleteItem}/>
        </>
    );
};

export default Observation;
