import React ,{useState} from 'react'
import { AppState } from './Interface';

function LoginBlock({
    logInStatus,
    changeStatus,
    authenticationDetails,
    changeAuthenticationDetails,
}:{
    logInStatus:boolean,
    changeStatus: React.Dispatch<React.SetStateAction<boolean>>,
    authenticationDetails:AppState["authenticationDetails"],
    changeAuthenticationDetails:AppState["changeAuthenticationDetails"]
}) {

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
            changeAuthenticationDetails({
                username: loginDetails.username,
                password: loginDetails.password
            })
            //change login status for App state
            changeStatus(!logInStatus)
        }
    }

    if (!logInStatus) {
        return (
            <div className='flex flex-col w-full justify-center my-5'>
                <div className='w-full flex justify-center m-1'>
                    <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        onChange={onChangeHandler}
                        value={loginDetails.username}
                        className='text-left w-1/4 rounded-lg py-1 px-2 border-2'
                    />
                </div>
                <div className='w-full flex justify-center m-1'>
                    <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        onChange={onChangeHandler}
                        onKeyUp={(e) => {
                            if (e.key === 'Enter') {
                                if (loginDetails.username === 'Paul' && loginDetails.password === 'Karen') {
                                    changeAuthenticationDetails({
                                        username: loginDetails.username,
                                        password: loginDetails.password
                                    })
                                    //change login status for App state
                                    changeStatus(!logInStatus)
                                }
                            }
                        }}
                        value={loginDetails.password}
                        className='text-left w-1/4 rounded-lg py-1 px-2 border-2'
                    />
                </div>
                <div className='w-full flex justify-center my-2'>
                    {/*button to start the authetication details check*/}
                    <button onClick={onClickHandler} className='text-yellow-400 bg-black rounded-lg py-1 px-2'>
                        Log In
                    </button>
                </div>
            </div>
        )
    } else {
        return (
            <div className='w-full flex justify-center'>
                {/*button to start the authetication details check*/}
                <button onClick={onClickHandler} className='text-yellow-400'>
                    Log Out
                </button>
            </div>
        )
    }
}

export default LoginBlock