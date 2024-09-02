// import { useState } from "react"
import Title from "../Title/Title"

function Post({change, add, error}) {

    return (
        <div className="post-data">
            <Title title="Новый пост"/>
            <input 
                type="text" 
                placeholder="Заголовок"
                name="title"
                onChange={(event) => change(event)}
            />
            <textarea
                name="body"
                onChange={(event) => change(event)}
            ></textarea>
            <button className="add-btn" onClick={add}>Опубликовать</button>
            {error.title && <p className="error">Title error</p>}
            {error.body && <p className="error">Body error</p>}
        </div>
    )
}

export default Post