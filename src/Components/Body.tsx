import React from "react"
import LoginBlock from "./LoginBlock"
import { AppState } from './Interface';

const Body = (props: {logInStatus:boolean,changeStatus: React.Dispatch<React.SetStateAction<boolean>>,authenticationDetails:AppState["authenticationDetails"],changeAuthenticationDetails:AppState["changeAuthenticationDetails"]}) =>  {

    //usestate from App is passed down and used as click handler for login/logout button
    const onClickHandler = () => {
        props.changeStatus(!props.logInStatus)
    }

    //check to see if logged in or not
    if (props.logInStatus) {
        //if logged in, return a button to logout
        return (
            <div>
                <button 
                    onClick={onClickHandler} 
                >
                    Logout
                </button>
            </div>
        )
    } else {
        //if not logged in, return prompt to log in and a log in block
        return (
            <div>
                <h1>Please log in!</h1>
                <LoginBlock 
                    logInStatus = {props.logInStatus} 
                    changeStatus = {props.changeStatus}  
                    authenticationDetails={props.authenticationDetails} 
                    changeAuthenticationDetails={props.changeAuthenticationDetails}
                />
            </div>
        )
    }
}

export default Body