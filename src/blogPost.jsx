import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

// Example dummy data — later replace with API or Markdown loader
const blogPosts = [
  {
    slug: 'blood4life-saving-lives',
    title: 'How Blood4Life is Saving Lives',
    date: '2025-07-18',
    content: `
      ## Introduction
      
      Blood4Life is a revolutionary app aimed at saving lives by connecting blood donors with recipients...
      
      ### Features
      
      - Real-time notifications
      - Location tracking
      - Easy registration
      
      **Join us today!**
    `,
  },
  {
    slug: 'why-react-is-awesome',
    title: 'Why React is Awesome',
    date: '2025-07-10',
    content: `
      React makes building interactive UIs a breeze.
      
      ### Benefits
      
      - Component-based architecture
      - Virtual DOM for speed
      - Huge community support
    `,
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const foundPost = blogPosts.find((p) => p.slug === slug);
    setPost(foundPost);
  }, [slug]);

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <article style={{ padding: '2rem' }}>
      <h1>{post.title}</h1>
      <p><em>Published on {post.date}</em></p>
      <div>
        {/* Simple markdown rendering */}
        {post.content.split('\n').map((line, idx) => {
          if (line.startsWith('### ')) {
            return <h3 key={idx}>{line.replace('### ', '')}</h3>;
          }
          if (line.startsWith('## ')) {
            return <h2 key={idx}>{line.replace('## ', '')}</h2>;
          }
          if (line.startsWith('- ')) {
            return <li key={idx}>{line.replace('- ', '')}</li>;
          }
          if (line.startsWith('**') && line.endsWith('**')) {
            return <strong key={idx}>{line.replace(/\*\*/g, '')}</strong>;
          }
          return <p key={idx}>{line}</p>;
        })}
      </div>
    </article>
  );
}
