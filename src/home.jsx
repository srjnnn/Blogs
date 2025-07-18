import { Link } from 'react-router-dom';

export default function Home() {
  // fetching data from the backend
  const posts = [
    { id: 1, title: 'How Blood4Life is Saving Lives', slug: 'blood4life-saving-lives' },
    { id: 2, title: 'Why React is Awesome', slug: 'why-react-is-awesome' },
  ];

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Blood4Life Blog</h1>
      <p>Your source for tech, health, and social impact stories.</p>
      <h2>Latest Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
