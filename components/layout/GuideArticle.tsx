import React from 'react';

interface GuideArticleProps {
  title: string;
  author: string;
}

const GuideArticle: React.FC<GuideArticleProps> = ({ title, author }) => {
  return (
    <article className='border-solid border-2 border-gray-600'>
      <h2>{title}</h2>
      <p>By {author}</p>
    </article>
  );
};

export default GuideArticle;
