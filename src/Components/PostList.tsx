import React,{useState} from "react";
import { AppState } from "../App";

const PostList = (props: {posts: AppState["posts"],setPosts: AppState["updatePosts"]}) => {

    const [postInput,setInput] = useState({
        postID:"",
        imgurl:"",
        liked:false,
        descr:"",
    })

    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
       setInput({
        ...postInput,
        [e.target.name]: [e.target.value]
       }
       )
    }

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
    const onClickHandlerClear = () => {
        props.setPosts([])

    }

    return(
        <div>
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
            <button
            onClick={onClickHandlerSave}
            name="savePost"
            >
                Save Post
            </button>
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