import { useState } from 'react';
import { AppState } from './Interface';
import PostList from "./PostList";

const Body = () =>  {

    //state for keeping track of posts
    const [posts,updatePosts] = useState<AppState["posts"]>([{
        title:"Tim Duncan",
        imgurl:"https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2018/05/duncan1.jpg",
        liked:false,
        descr:"Goat",
    }])
    
    return (
        <div className='flex flex-col justify-center w-full'>
            <PostList posts = {posts} setPosts = {updatePosts} /> 
        </div>
    )
    
}

export default Body