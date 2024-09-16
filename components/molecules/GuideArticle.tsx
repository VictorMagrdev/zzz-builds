import React from 'react';

interface GuideArticleProps {
  title: string;
  author: string;
}

const GuideArticle: React.FC<GuideArticleProps> = ({ title, author }) => {
  return (
    <article className='border-solid border-2 border-white rounded-sm'>
      <h2 className='text-white'>{title}</h2>
      <p className='text-white'>By {author}</p>
    </article>
  );
};

export default GuideArticle;
