const ADD_POST="ADD-POST";
const UPDATE_NEW_POST_TEXT="UPDATE-NEW-POST-TEXT";

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
    _callSubscriber(state:RootStateType) {
    },
    getState(){
        return this._state
    },
    subscribe (observer: (state: RootStateType) => void){
        this._callSubscriber = observer
    },
    dispatch (action:ActionType) {
if(action.type===ADD_POST){
    let newPost = {
        id: 5,
        value: this._state.myProfilePage.newPostText,
        likeCount: 44
    }
    this._state.myProfilePage.myPosts.push(newPost)
    this._state.myProfilePage.newPostText = ''
    this._callSubscriber(this._state)
}else if(action.type===UPDATE_NEW_POST_TEXT){

    this._state.myProfilePage.newPostText = action.text
    this._callSubscriber(this._state)
}
    }
}

export const addPostActionCreater=()=>({type:ADD_POST,text:""})
export const updateNewPostTextActionCreater=(text:any)=>({type:UPDATE_NEW_POST_TEXT, text:text})

export type ActionType = {
    type: string;
    text: string;
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
