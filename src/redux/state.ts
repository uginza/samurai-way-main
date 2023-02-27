export let store = {
    _state: {
        myProfilePage: {
            myPosts: [
                {id: 1, value: "Hi.How are you", likeCount: 35},
                {id: 2, value: "Putin put out", likeCount: 335}
            ],
            newPostText: ""
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
    },
    getState(){
        return this._state
    },
    _callSubscriber(state:RootStateType) {
    },
    addPost() {
        let newPost = {
            id: 5,
            value: this._state.myProfilePage.newPostText,
            likeCount: 44
        }
        this._state.myProfilePage.myPosts.push(newPost)
        this._state.myProfilePage.newPostText = ''
        this._callSubscriber(this._state)
    },
    updateNewPost (text: string) {

        this._state.myProfilePage.newPostText = text
        this._callSubscriber(this._state)
    },
    subscribe (observer: (state: RootStateType) => void){
        this._callSubscriber = observer
    }
}


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
    newPostText: string
}

export type dialogsPageType = {
    dialogs: Array<DialogItemType>
    messages: Array<MessageType>
}

export type RootStateType = {
    myProfilePage: MyProfilePageType
    dialogsPage: dialogsPageType
}
