export type MyPostType = {
    id: number,
    value: string;
    likeCount: number;
}

export type DialogItemType = {
    id: number,
    name: string
}

export type MessageType = {
    id: number,
    message: string
}

export type MyProfilePageType = {
    myPosts: Array<MyPostType>
}

export type dialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

export type RootStateType={
    myProfilePage:MyProfilePageType
    dialogsPage:dialogsPageType
}

export let state: RootStateType = {
    myProfilePage: {
        myPosts: [
            {id: 1, value: "Hi.How are you", likeCount: 35},
            {id: 2, value: "Putin put out", likeCount: 335}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: "Valera"},
            {id: 2, name: "Katya"},
            {id: 3, name: "Kamilla"},
            {id: 4, name: "Lucreciy"}
        ],
        messages: [
            {id: 1, message: "Hi"},
            {id: 2, message: "Yo"},
            {id: 3, message: "How are you"},
        ]
    }
}