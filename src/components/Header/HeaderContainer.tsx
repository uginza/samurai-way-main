import React from "react";
import axios from "axios";
import {Header} from "./Header";
import {connect} from "react-redux";
import {AppRootStateType} from "../../redux/reduxStore";
import {setUserData, toggleIsFetching} from "../../redux/authReducer";
import {Preloader} from "../common/Preloader/Preloader";

export type mapStateToPropsType = {
    isAuth: boolean,
    login: string,
    isFetching:boolean
}

class HeaderContainer extends React.Component<any, any> {
    componentDidMount() {
        this.props.toggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then(response => {
                this.props.toggleIsFetching(false)
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setUserData(id, login, email)
                    console.log(response.data.data)
                }
            });
    }

    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Header {...this.props} isAuth={this.props.isAuth} login={this.props.login}/>
        </>
    }
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    isFetching:state.auth.isFetching
})

export default connect(mapStateToProps, {setUserData, toggleIsFetching})(HeaderContainer)