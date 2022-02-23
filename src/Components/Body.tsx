import React from "react"

function Body(props: {logInStatus:boolean,changeStatus: React.Dispatch<React.SetStateAction<boolean>>})  {

    //usestate from App is passed down and used as click handler for login/logout button
    const onClickHandler = () => {
        props.changeStatus(!props.logInStatus)
    }

    //check to see if logged in or not
    if (props.logInStatus) {
        //if logged in, return a button to logout
        return (
            <div>
                <button onClick={onClickHandler} >
                    Logout
                </button>
            </div>
        )
    } else {
        //if not logged in, return prompt to log in and a log in button
        return (
            <div>
                <h1>Please log in!</h1>
                <button onClick={onClickHandler}>
                    Log In
                </button>
            </div>
        )
    }
}

export default Body