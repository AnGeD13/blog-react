function PostItem({id, post, onDelete}) {
    return (
        <div className="post">
            <p className="post__title">{post.title}</p>
            <p className="post__body">{post.body}</p>
            <button 
                className="delete-btn"
                onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    )
}

export default PostItem