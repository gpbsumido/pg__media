import React,{useState} from "react";
import { AppState } from './Interface';

const PostList = ({
    posts,
    setPosts,
}:{
    posts: AppState["posts"],
    setPosts: AppState["updatePosts"] 
}) => {

    //initialize latest post to be added
    const [postInput,setInput] = useState({
        title:"",
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
        setPosts([
            ...posts,
            {
                title: postInput.title,
                imgurl: postInput.imgurl,
                liked: postInput.liked,
                descr: postInput.descr
            }
        ])
        setInput({
            title:"",
            imgurl:"",
            liked:false,
            descr:""
        })
    }

    //handler for clearing list of posts in App state
    const onClickHandlerClear = () => {
        setPosts([])

    }

    return(
        <div className="flex flex-col">
            <div className="w-full flex justify-center">
                <h1 className="">Posts</h1>
            </div>
            <div className="w-full flex justify-center">
                {/*unordered list of posts, taken from App state*/}
                <ul>
                    {posts.map(post => {
                        return (
                            <div className="flex flex-col my-3 w-full">
                                <h3 className="flex justify-center w-full"> {post.title} </h3>
                                <div className="flex justify-center my-2 min-h-20">
                                    <img src={post.imgurl} alt="post"/>
                                </div>
                                <h4 className="flex justify-center w-full"> {post.descr} </h4>
                            </div>
                        )
                    })}
                </ul>
            </div>
            {/* inputs for latest post */}
            <div className="w-full flex justify-center">
                <input
                    type="text"
                    name="title"
                    placeholder="title"
                    value={postInput.title}
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