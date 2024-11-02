'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import "./arcticles.css"

const ArticlesPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const articles = [
    {
      id:1,
      title: "The Future of Finance in SMEs",
      description: "An in-depth look at financial strategies for small and medium enterprises.",
      category: "Finance",
      tags: ["Finance", "Economy", "SME"],
      author: "John Doe",
      date: "Oct 25, 2024",
      image: "/articles/finance-future.jpg",
      slug: "future-of-finance",
      trending: true,
    },
    {
        id:2,
      title: "Technological Advancements in Africa",
      description: "How tech is shaping the future of African businesses and entrepreneurship.",
      category: "Technology",
      tags: ["Tech", "Africa", "Innovation"],
      author: "Jane Smith",
      date: "Sep 18, 2024",
      image: "/articles/tech-africa.jpg",
      slug: "tech-advancements-africa",
      trending: false,
    },
    {
      id:3,
      title: "Leadership Strategies for Emerging Markets",
      description: "Essential leadership insights for navigating and thriving in emerging markets.",
      category: "Leadership",
      tags: ["Leadership", "Emerging Markets"],
      author: "Alice Brown",
      date: "Aug 12, 2024",
      image: "/articles/leadership-strategies.jpg",
      slug: "leadership-strategies",
      trending: false,
    },
    {
      id:4,
      title: "Legal Challenges in the Digital Age",
      description: "Exploring the impact of digital transformation on legal frameworks and practices.",
      category: "Legal",
      tags: ["Law", "Digital Transformation", "Privacy"],
      author: "Emily White",
      date: "Jul 5, 2024",
      image: "/articles/legal-digital-age.jpg",
      slug: "legal-challenges-digital-age",
      trending: false,
    },
    {
      id:5,
      title: "How AI is Revolutionizing Healthcare",
      description: "A look at the latest AI innovations transforming the healthcare sector.",
      category: "Technology",
      tags: ["AI", "Healthcare", "Innovation"],
      author: "David Lee",
      date: "Jun 15, 2024",
      image: "/articles/ai-healthcare.jpg",
      slug: "ai-revolution-healthcare",
      trending: true,
    },
    {
        id:6,
      title: "Financial Planning for a Secure Retirement",
      description: "Guidelines on building a retirement plan to ensure financial security.",
      category: "Finance",
      tags: ["Finance", "Retirement", "Planning"],
      author: "Sarah Johnson",
      date: "May 10, 2024",
      image: "/articles/financial-planning.jpg",
      slug: "financial-planning-retirement",
      trending: false,
    },
    {
        id:7,
      title: "Building a Resilient Business in Uncertain Times",
      description: "Key strategies for creating stability in times of economic uncertainty.",
      category: "Leadership",
      tags: ["Leadership", "Resilience", "Business"],
      author: "Mark Brown",
      date: "Apr 20, 2024",
      image: "/articles/business-resilience.jpg",
      slug: "resilient-business",
      trending: true,
    },
    {
        id:8,
      title: "The Role of Blockchain in Modern Finance",
      description: "An overview of how blockchain technology is reshaping the financial industry.",
      category: "Finance",
      tags: ["Blockchain", "Finance", "Technology"],
      author: "Lucy Green",
      date: "Mar 30, 2024",
      image: "/articles/blockchain-finance.jpg",
      slug: "blockchain-modern-finance",
      trending: false,
    },
    {
        id:9,
      title: "Effective Time Management for Leaders",
      description: "Tips and techniques for leaders to enhance productivity and time management.",
      category: "Leadership",
      tags: ["Leadership", "Productivity", "Time Management"],
      author: "Michael Blue",
      date: "Feb 14, 2024",
      image: "/articles/time-management.jpg",
      slug: "effective-time-management",
      trending: true,
    },
    {
        id:10,
      title: "The Impact of Globalization on Local Economies",
      description: "Examining the pros and cons of globalization on local markets.",
      category: "Finance",
      tags: ["Globalization", "Economy", "Finance"],
      author: "Laura Wells",
      date: "Jan 25, 2024",
      image: "/articles/globalization-economy.jpg",
      slug: "impact-globalization-local-economies",
      trending: false,
    },
    {
        id:11,
      title: "Cybersecurity Essentials for Small Businesses",
      description: "Essential cybersecurity practices to protect small businesses from cyber threats.",
      category: "Technology",
      tags: ["Cybersecurity", "Tech", "Small Business"],
      author: "Chris Adams",
      date: "Dec 5, 2023",
      image: "/articles/cybersecurity-small-business.jpg",
      slug: "cybersecurity-essentials",
      trending: true,
    },
    {
        id:12,
      title: "Insights into Sustainable Business Practices",
      description: "How companies are adopting sustainable practices for a greener future.",
      category: "Insights",
      tags: ["Sustainability", "Business", "Environment"],
      author: "Anna Perry",
      date: "Nov 20, 2023",
      image: "/articles/sustainable-business.jpg",
      slug: "sustainable-business-practices",
      trending: false,
    },
    {
        id:13,
      title: "The Rise of Remote Work and Its Impact",
      description: "Analyzing the long-term effects of remote work on productivity and lifestyle.",
      category: "Insights",
      tags: ["Remote Work", "Productivity", "Lifestyle"],
      author: "Tom Black",
      date: "Oct 1, 2023",
      image: "/articles/remote-work.jpg",
      slug: "rise-of-remote-work",
      trending: true,
    },
  ];
  
  // Filter articles based on search term
  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="px-4 py-10 md:px-16 lg:px-32">
      {/* Trending Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Trending Now</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.filter(article => article.trending).slice(0, 3).map((article, index) => (
            <div key={index} className="relative">
              <Image
                src={article.image}
                alt={article.title}
                width={800}
                height={450}
                className="object-cover w-full h-64 md:h-72 rounded-lg"
              />
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                <Link href={`/articles/${article.id}`}>
                  <h3 className="text-xl font-semibold">{article.title}</h3>
                </Link>
                <p className="text-sm">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Search Bar */}
      <div className="mb-8">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-1/2 p-3 rounded-lg border border-gray-300"
        />
      </div>

      {/* Article Groups by Category */}
      {Array.from(new Set(articles.map(article => article.category))).map((category, catIndex) => (
        <div id={category.toLowerCase()} key={catIndex} className="mb-12">
          <h2  className="text-2xl font-bold mb-4">{category}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredArticles
              .filter(article => article.category === category)
              .map((article, index) => (
                <div key={index} className="relative">
                  <Image
                    src={article.image}
                    alt={article.title}
                    width={800}
                    height={450}
                    className="object-cover w-full h-64 md:h-72 rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent text-white">
                    <Link href={`/articles/${article.id}`}>
                      <h3 className="text-lg font-semibold">{article.title}</h3>
                    </Link>
                    <p className="text-sm">{article.description}</p>
                    <p className="text-gray-300 text-xs mt-2">By {article.author} • {article.date}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ArticlesPage;
