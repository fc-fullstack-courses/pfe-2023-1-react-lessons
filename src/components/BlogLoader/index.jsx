import React from 'react';
import { useData } from '../../hooks';

const loadPosts = () => fetch('/posts.json').then((res) => res.json());

function BlogLoader(props) {
  const { data: posts, isLoading, isError } = useData(loadPosts);

  if (isLoading) {
    return <h1>LOADING ...</h1>;
  }

  if (isError) {
    return <h1>ERROR HAPPENED</h1>;
  }

  const postList = posts.map((post) => (
    <article key={post.id}>
      <h2>{post.title}</h2>
      <p>{post.text}</p>
      <button>Learn more</button>
    </article>
  ));

  return <div>{postList}</div>;
}

export default BlogLoader;
