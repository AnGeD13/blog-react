export function getNormalizePost(postList) {
    const ids = []
    const byIds = []

    postList.map(post => {
        const newId = post.id-1
        ids.push(newId)
        byIds[newId] = post
    })


    return [ids, byIds]
}