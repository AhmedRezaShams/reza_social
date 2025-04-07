
import PostCard from "../components/PostCard";

const res = await fetch('https://dummyjson.com/posts')
  const data = await res.json()
  const posts = data.posts

export default function DashboardPage() {
  
    return (
      <div className="text-gray-800 text-xl font-semibold mt-2 ml-5 ">
       {Array.isArray(posts) && posts.map((post) => (
      <PostCard key={post.id } post={post} />
    ))}
        
      </div>
    )
  }
  