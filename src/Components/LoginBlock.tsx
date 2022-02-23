import React ,{useState} from 'react'
import { AppState } from './Interface';

function LoginBlock(props: {logInStatus:boolean,changeStatus: React.Dispatch<React.SetStateAction<boolean>>,authenticationDetails:AppState["authenticationDetails"],changeAuthenticationDetails:AppState["changeAuthenticationDetails"]}) {

    //initializing login details
    const [loginDetails, setLoginDetails] = useState({
        username: "",
        password: ""

    })
    //handles changes to username and password inputs, change login details above
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
        //check if authentication details are valid
        if(loginDetails.username === 'Paul' && loginDetails.password === 'Karen') {
            //change the authentication details for state in App for future use if needed
            props.changeAuthenticationDetails({
                username: loginDetails.username,
                password: loginDetails.password
            })
            //change login status for App state
            props.changeStatus(!props.logInStatus)
        }
    }

  return (
    <div>
        {/*username input*/}
        <input
            type='text'
            name='username'
            placeholder='Username'
            onChange={onChangeHandler}
            value={loginDetails.username}
        />
        {/*password input*/}
        <input
            type='password'
            name='password'
            placeholder='Password'
            onChange={onChangeHandler}
            value={loginDetails.password}
        />
        {/*button to start the authetication details check*/}
        <button onClick={onClickHandler}>
            Log In
        </button>
    </div>
  )
}

export default LoginBlock