import { addPost, getPosts, deletePost } from "./api/post"
import Lenta from "./components/Lenta/Lenta"
import Post from "./components/Post/Post"
import "./main.css"
import { useEffect, useState } from "react"
import { v4 as uuidv4 } from 'uuid'
import { getNormalizePost } from "./utils/nozmalize-post"

function App() {
    const [postId, setPostId] = useState(null)
    const [posts, setPosts] = useState(null)

    const [form, setForm] = useState({
        title: '',
        body: ''
    })

    const [error, setError] = useState({
        title: false,
        body: false
    })

    useEffect(() => {
        getPosts()
            .then(data => {
                const [ids, byIds] = getNormalizePost(data)

                setPostId(ids)
                setPosts(byIds)
            })
    }, [])

    function handleChangeData(event) {
        const {name, value} = event.target
        setForm({
            ...form, [name]: value
        })
    }

    function checkLength() {
        const title = form.title.length
        const body = form.body.length
        console.log("title", title)
        console.log("body", body)
        setError({
            title: false,
            body: false
        })


        if (title > 10) {
            setError({
                title: true,
                body: false
            })
            console.log(error)
            return false
        }

        if (body > 20) {
            setError({
                title: false,
                body: true
            })
            console.log(error)
            return false
        }

        return true
    }

    function handleAddPost() {
        if (!checkLength()) {
            return
        }
        let newPost = {
            id: uuidv4(),
            title: form.title,
            body: form.body
        }

        setPostId([newPost.id, ...postId])
        setPosts({
            [newPost.id]: newPost,
            ...posts
        })

        addPost(newPost)
    }

    function handleDeletePost(id) {
        setPostId(postId.filter((el) => el !== id))
        deletePost(id)
    }

    return (
        <div className="main">
            <Post
                change={handleChangeData}
                add={handleAddPost}
                error={error}
            />
            <Lenta 
                posts={posts}
                ids={postId}
                onDelete={handleDeletePost}
            />
        </div>
    )
}

export default App
