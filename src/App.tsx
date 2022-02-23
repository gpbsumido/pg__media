import React, {useState} from 'react';
import './App.css';
import Body from './Components/Body'
import PostList from './Components/PostList';

//interface for post
export interface AppState {
  posts : {
      postID: string,
      imgurl: string,
      liked: boolean,
      descr: string
  }[],
  updatePosts: React.Dispatch<React.SetStateAction<{
    postID: string;
    imgurl: string;
    liked: boolean;
    descr: string;
  }[]>>
}

function App() {

  //state for whether user is logged in
  const [isLoggedIn,changeAuthentication] = useState<boolean>(false)

  //state for keeping track of posts
  const [posts,updatePosts] = useState<AppState["posts"]>([{
    postID:"100",
    imgurl:"",
    liked:false,
    descr:"First Post",
  }])


  return (
    <div className="App">

      {/*Body component, different prompts based on authentication status*/}
      <Body logInStatus = {isLoggedIn} changeStatus = {changeAuthentication}/>

      {/*conditional, if logged in, show posts, otherwise don't show posts*/}
      {
        isLoggedIn 
          ? <PostList posts = {posts} setPosts = {updatePosts} /> 
          : <div></div>
      }

    </div>
  );
}

export default App;
