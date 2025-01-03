import Post from './Post';
const Feed = ({posts}) => {
  return (
    <>
        {posts.map(post => (
            <Post key = {posts.id} post={post} />
        ))}
    </>
  )
}

export default Feed