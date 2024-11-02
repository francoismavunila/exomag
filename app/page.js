// app/page.js
'use client'
import Image from 'next/image'
import { useState, useEffect} from 'react'
import Link from 'next/link'
import { FaBook, FaChartLine, FaLaptop, FaGavel, FaLightbulb } from 'react-icons/fa';
import articles from './articles/articles.json'; 

const categories = [
  { 
    name: 'Finance', 
    icon: <FaChartLine />, 
    description: 'Discover strategies and insights on managing money and investments.' 
  },
  { 
    name: 'Technology', 
    icon: <FaLaptop />, 
    description: 'Stay updated with the latest trends in the tech industry.' 
  },
  { 
    name: 'Leadership', 
    icon: <FaLightbulb />, 
    description: 'Explore resources to enhance your leadership skills and inspire others.' 
  },
  { 
    name: 'Legal', 
    icon: <FaGavel />, 
    description: 'Gain knowledge on legal matters and policies that shape our world.' 
  },
  { 
    name: 'Insights', 
    icon: <FaBook />, 
    description: 'Deepen your understanding with in-depth insights and analysis.' 
  },
];



export default function Home() {
  const [featuredArticles, setFeaturedArticles] = useState([])
  const [latestArticle, setLatestArticle] = useState({})
  const [trendingArticle, setTrendingArticle] = useState({})
  const trendingArticles = articles.filter((article) => article.trending === true);
  const randomTrendingArticle = trendingArticles[Math.floor(Math.random() * trendingArticles.length)];
  console.log(randomTrendingArticle);
  useEffect(()=>{
    setFeaturedArticles(articles.slice(0, 3));
    setLatestArticle(articles[articles.length-1])
    setTrendingArticle(randomTrendingArticle)
  },[])
  return (
    <div>
      {/* Hero Section */}
      <header className="relative w-full h-screen flex items-center justify-center bg-gray-900">
        {/* Desktop Magazine Cover */}
        <div className="hidden md:block w-full h-full">
          <Image 
            src="/cover.jpg" // Desktop cover image
            alt="Latest Excomag Cover for Desktop" 
            fill 
            className="object-cover opacity-80"
          />
        </div>

        {/* Mobile Magazine Cover */}
        <div className="md:hidden w-full h-full">
          <Image 
            src="/cover-mobile.jpg" // Mobile cover image
            alt="Latest Excomag Cover for Mobile" 
            fill 
            className="object-cover opacity-80"
          />
        </div>
      </header>

      {/* Categories */}
      <section className="py-16 px-6 md:px-20 lg:px-40 bg-gradient-to-r from-gray-700 to-black-200 rounded-lg shadow-lg">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-black mb-10">  <span className="">
    Explore Our Categories
  </span></h2>
      <div className="grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link href={`/articles/#${category.name.toLowerCase()}`} key={category.name} className="flex items-center bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:scale-105">
            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-700 text-2xl mr-4">
              {category.icon}
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-700">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{category.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>

      {/* Most Popular Article */}
      <section className="py-12 px-4 md:px-16 lg:px-32 bg-gray-50">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-500">Most Popular Article</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden md:flex md:space-x-6 p-6">
          <Image src={trendingArticle.image || "/articles/placeholder.jpg"} alt="Most Popular Article" width={400} height={250} className="rounded-lg w-full md:w-1/2 object-cover" />
          <div className="md:w-1/2 p-6">
            <h3 className="text-2xl font-semibold">{trendingArticle?.title}</h3>
            <p className="mt-4 text-gray-600">{trendingArticle?.description}</p>
            <Link href={`/articles/${trendingArticle.id}`} className="mt-6 inline-block text-blue-600 hover:underline">
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Article */}
      <section className="py-12 px-4 md:px-16 lg:px-32 bg-gray-200">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-700">Latest Article</h2>
        <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6">
          <Image src={latestArticle?.image || "/articles/placeholder.jpg"} alt="Latest Article" width={800} height={450} className="rounded-lg object-cover w-full" />
          <div className="p-6">
            <h3 className="text-2xl font-semibold">{latestArticle?.title}</h3>
            <p className="mt-4 text-gray-600">{latestArticle?.description}</p>
            <Link href={`/articles/${latestArticle?.id}`} className="mt-6 inline-block text-blue-600 hover:underline">
              Read more
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-12 bg-gray-50 px-4 md:px-16 lg:px-32">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8 text-gray-700">Featured Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image 
              src={article.image} 
              alt={article.title} 
              width={400} 
              height={250} 
              className="object-cover w-[400px] h-[250px]" 
            />
              <div className="p-6">
                <h3 className="text-lg font-semibold">{article.title}</h3>
                <p className="mt-2 text-gray-600">{article.description}</p>
                <Link href={`/articles/${article.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* Media Section */}
      <section className="py-12 px-4 md:px-16 lg:px-32 bg-gray-300 text-center">
        <h2 className="text-2xl md:text-4xl font-bold mb-8 text-gray-700">Media</h2>
        <div className="flex flex-col md:flex-row md:space-x-6 items-center">
          <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/JvZbvT9jLRY" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen 
            className="w-full md:w-1/2 h-64 rounded-lg shadow-lg mb-6 md:mb-0"
          ></iframe>
          <div className="text-left md:w-1/2">
            <p className="text-lg text-gray-600">Discover more about our latest media offerings, including insightful video content, interviews, and more.</p>
            <Link href="/media" className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition">
              Explore More
            </Link>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section className="py-12 px-4 md:px-16 lg:px-32 bg-gradient-to-r from-gray-300 to-gray-800 text-white text-center">
        <h2 className="text-2xl md:text-4xl text-gray-300 font-bold">About Excomag</h2>
        <p className="mt-4">Get to know the team behind the magazine and what drives us to bring you valuable insights for SMEs.</p>
        <Link href="/about" className="mt-8 inline-block bg-white text-black py-3 px-8 rounded-full hover:bg-gray-300 transition">
          Learn More
        </Link>
      </section>
    </div>
  );
}
