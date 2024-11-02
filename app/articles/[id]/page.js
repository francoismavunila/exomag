'use client'
// import fs from 'fs';
// import path from 'path';
import Image from 'next/image';
import { useState, useEffect } from 'react'
import articles from '../articles.json'; // Import the JSON data

const ArticlePage = ({params,}) => {

    const [id, setId] = useState(null);

    useEffect(() => {
      const unwrapParams = async () => {
        const unwrappedParams = await params;
        setId(unwrappedParams.id);
      };
  
      unwrapParams();
    }, [params]);
  
    if (!id) {
      return <div>Loading...</div>;
    }
  console.log("the id is",id)
  // Find the article by id
  const article = articles.find((article) => article.id == id);

  // If article is not found, display a message
  if (!article) {
    return <p>Article not found</p>;
  }

  return (
    <div className="px-4 py-10 md:px-16 lg:px-32">
      {/* Article Header */}
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p className="text-gray-500 text-sm mb-4">
        By {article.author} • {article.date}
      </p>

      {/* Article Image */}
      <div className="mb-8">
        <Image
          src={article.image}
          alt={article.title}
          width={800}
          height={450}
          className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="prose max-w-none">
        <p>{article.content}</p>
      </div>

      {/* Back to Articles */}
      <button
        onClick={() => router.back()}
        className="mt-8 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Back to Articles
      </button>
    </div>
  );
};

export default ArticlePage;
