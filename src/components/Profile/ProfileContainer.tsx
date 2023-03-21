import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {setUserProfile} from "../../redux/profileReducer";
import {ProfileType} from "../../redux/store";
import {RouteComponentProps, withRouter} from "react-router-dom";

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

type PathParamsType={
    userId:string
}

type OwnProfileAPIType=MapStateToPropsType & MapDispatchToPropsType

type PropsType=OwnProfileAPIType & RouteComponentProps<PathParamsType>

class ProfileAPIContainer extends React.Component<PropsType, any>{

    componentDidMount() {
        let userId=this.props.match.params.userId
        if(!userId){
           userId="2"
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/`+userId)
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

const ProfileWithRouterContainer=withRouter(ProfileAPIContainer)

export const ProfileContainer= connect<MapStateToPropsType,MapDispatchToPropsType,{},AppRootStateType>(mapStateToProps,{setUserProfile})(ProfileWithRouterContainer)
