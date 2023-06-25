import P from 'prop-types';
import PostCard from '../PostCard';
import './styles.css';

export default function Posts({ posts = [] }) {
  return (
    <div className="posts">
      {posts.map((post) => (
        <PostCard
          title={post.title}
          body={post.body}
          cover={post.cover}
          id={post.id}
          key={post.id}
        />
      ))}
    </div>
  );
}

Posts.propTypes = {
  posts: P.arrayOf(
    P.shape({
      title: P.string.isRequired,
      cover: P.string.isRequired,
      body: P.string.isRequired,
      id: P.number.isRequired,
    }),
  ),
};
