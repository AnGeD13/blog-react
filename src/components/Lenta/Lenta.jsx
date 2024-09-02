import PostItem from "../PostItem/PostItem"
import Title from "../Title/Title"

function Lenta({posts, ids, onDelete}) {
    return (
        <div className="lenta">
            <Title title="Лента"/>
            {!ids && <p className="no-posts">Тут пока пусто...</p>}
            {ids && 
                ids.map((id) => 
                    <PostItem
                        key={id}
                        id={id}
                        post={posts[id]}
                        onDelete={onDelete}
                    />
                )
            }
        </div>
    )
}

export default Lenta