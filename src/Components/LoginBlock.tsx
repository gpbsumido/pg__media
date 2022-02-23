import React ,{useState} from 'react'
import { AppState } from "../App";

function LoginBlock(props: {logInStatus:boolean,changeStatus: React.Dispatch<React.SetStateAction<boolean>>,authenticationDetails:AppState["authenticationDetails"],changeAuthenticationDetails:AppState["changeAuthenticationDetails"]}) {

    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: ""

    })
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.name === 'username') {
            setLoginDetails({
                username: e.target.value,
                password: loginDetails.password
            })
        } else {
            setLoginDetails({
                username: loginDetails.username,
                password: e.target.value
            })
        }
    }
    //usestate from App is passed down and used as click handler for login/logout button
    const onClickHandler = () => {
        props.changeAuthenticationDetails({
            username: loginDetails.username,
            password: loginDetails.password
        })
        if(loginDetails.username === 'Paul' && loginDetails.password === 'Karen') {
            props.changeStatus(!props.logInStatus)
        }
    }

  return (
    <div>
        <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={onChangeHandler}
            value={loginDetails.username}
        />
        <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={onChangeHandler}
            value={loginDetails.password}
        />
        <button onClick={onClickHandler}>
            Log In
        </button>
    </div>
  )
}

export default LoginBlock