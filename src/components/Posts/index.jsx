import PostCard from "../PostCard"
import './styles.css'

export default function Posts({ posts }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          post={post}
          key={post.id}
        />
      ))}
    </div>
  )
}