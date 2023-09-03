export interface Profile {
    id: number;
    bio: string;
    profileImageUrl: string;
    userId: number;
    user: UserType;
}

export interface UserType {
    id: number;
    username: string;
    email: string;
    password: string;
    posts: PostType[];
    profile: Profile;
}

export interface PostType {
    id: number;
    content: string;
    createdAt: string;
    authorId: number;
    author: UserType;
}

export interface Gallery {
    id: number;
    title: string;
    content: string;
    createdAt: string;
    authorId: number;
    filepath: string;
    imagename: string;
    author: {
        profileImageUrl: string | undefined;
        id: number;
        username: string;
        email: string;
        password: string;
    };
}

export interface GalleryEditType {
    props: {
        editId: number;
    };
}

export interface Task {
    [x: string]: any;
    id: number;
    text: string;
}

export interface DishId {
    params: {
        dishId: number;
    };
}

export interface Dish {
    [x: string]: any;
    id: number;
    text: string;
    url: string;
    comment: string;
    taskId: number;
    createdAt: string;
    updatedAt: string;
}