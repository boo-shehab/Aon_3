import { useEffect } from "react"
import usePostsStore from "../../store/usePostsStore"

const PostCards = () => {
    const posts = usePostsStore((state) => state.posts)
    useEffect(() => {
        console.log(posts);
    }, [posts])
    return (
        <div>
            {posts.map((post) => (
                <div key={post.id} className="border p-4 rounded mb-4">
                    <button onClick={() => {
                        console.log('work');
                        
                    }}> button </button>
                    <h3 className="text-lg font-bold mb-2">{post.title}</h3>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    )
}
export default PostCards