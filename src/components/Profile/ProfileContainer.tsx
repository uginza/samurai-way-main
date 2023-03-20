import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {setUserProfile} from "../../redux/profileReducer";
import {ProfileType} from "../../redux/store";

export type MapStateToPropsType={
    profile: ProfileType

}

export type MapDispatchToPropsType={
    setUserProfile:(profile:{
        photos:{
            small: (string)
            large: (string)
        }
    })=>void
}

type ProfileAPIType=MapStateToPropsType & MapDispatchToPropsType

class ProfileAPIContainer extends React.Component<ProfileAPIType, any>{
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
            this.props.setUserProfile(response.data)
        });
    }
    render(){
        return <Profile {...this.props} profile={this.props.profile}/>
    }
}

let mapStateToProps=(state:AppRootStateType):MapStateToPropsType=>({
    profile:state.profile.profile
})

export const ProfileContainer= connect(mapStateToProps,{setUserProfile})(ProfileAPIContainer)
