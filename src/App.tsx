import React, {useState} from 'react';
import './App.css';
import Body from './Components/Body'
import PostList from './Components/PostList';
import { AppState } from './Components/Interface';

function App() {

  //state for whether user is logged in
  const [isLoggedIn,changeAuthentication] = useState<boolean>(false)

  //state for whether user is logged in
  const [authenticationDetails,changeAuthenticationDetails] = useState<AppState["authenticationDetails"]>({
    username:"",
    password:""
  })

  //state for keeping track of posts
  const [posts,updatePosts] = useState<AppState["posts"]>([{
    title:"Tim Duncan",
    imgurl:"https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2018/05/duncan1.jpg",
    liked:false,
    descr:"Goat",
  }])

  return (
    <div className="App">
      {/*conditional, if logged in, show posts, otherwise don't show posts*/}
      {
        isLoggedIn 
          ? <PostList posts = {posts} setPosts = {updatePosts} /> 
          : <div></div>
      }
      {/*Body component, different prompts based on authentication status*/}
      <Body 
        logInStatus = {isLoggedIn} 
        changeStatus = {changeAuthentication} 
        authenticationDetails={authenticationDetails} 
        changeAuthenticationDetails={changeAuthenticationDetails}
      />
    </div>
  );
}

export default App;
