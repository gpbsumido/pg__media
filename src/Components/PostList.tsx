import React,{useState} from "react";
import { AppState } from "../App";

const PostList = (props: {posts: AppState["posts"],setPosts: AppState["updatePosts"]}) => {

    //initialize latest post to be added
    const [postInput,setInput] = useState({
        postID:"",
        imgurl:"",
        liked:false,
        descr:"",
    })

    //change handler for inputs for details of latest post to be added
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
       setInput({
        ...postInput,
        [e.target.name]: [e.target.value]
       }
       )
    }

    //handler to add latest post to list of posts in App State
    const onClickHandlerSave = () => {
        props.setPosts([
            ...props.posts,
            {
                postID: postInput.postID,
                imgurl: postInput.imgurl,
                liked: postInput.liked,
                descr: postInput.descr
            }
        ])
    }

    //handler for clearing list of posts in App state
    const onClickHandlerClear = () => {
        props.setPosts([])

    }

    return(
        <div>
            {/*unordered list of posts, taken from App state*/}
            <ul>
                {props.posts.map(post => {
                    return (
                        <div>
                            <h3>
                                {post.postID}
                            </h3>
                            <img src={post.imgurl} alt="post"/>
                            <h4>
                                {post.descr}
                            </h4>
                        </div>
                    )
                })}
            </ul>
            {/* inputs for latest post */}
            <div>
                <input
                    type="text"
                    name="postID"
                    placeholder="PostID"
                    value={postInput.postID}
                    onChange={(onChangeHandler)}
                />
                <input
                    type="text"
                    name="imgurl"
                    placeholder="URL"
                    value={postInput.imgurl}
                    onChange={onChangeHandler}
                />
                <input
                    type="textArea"
                    name="descr"
                    placeholder="Description"
                    value={postInput.descr}
                    onChange={onChangeHandler}
                />
            </div>
            {/*button for saving latest post to list in App state*/}
            <button
                onClick={onClickHandlerSave}
                name="savePost"
            >
                Save Post
            </button>
            {/*button for clearing App state post list*/}
            <button
                onClick={onClickHandlerClear}
                name="clearPosts"
            >
                Clear All Posts
            </button>
        </div>
    )
}


export default PostList