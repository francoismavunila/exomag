import Image from 'next/image';
import Link from 'next/link';

export default function MediaPage() {
  // Sample data for media items with YouTube links
  const mediaContent = {
    documentaries: [
      {
        id: '1',
        title: "The Rise of African Entrepreneurs",
        description: "A deep dive into the world of African entrepreneurship and the inspiring stories of business leaders.",
        coverImage: "/media/rise.jpeg",
        link: "https://www.youtube.com/watch?v=example1",
      },
      {
        id: '2',
        title: "Sustainable Business in Action",
        description: "Exploring sustainable practices in African businesses and their global impact.",
        coverImage: "/media/rise.jpeg",
        link: "https://www.youtube.com/watch?v=example2",
      },
    ],
    tvShows: [
      {
        id: '3',
        title: "Innovate Africa",
        description: "A series featuring tech innovations and entrepreneurs leading the way in Africa.",
        coverImage: "/media/tv.jpeg",
        link: "https://www.youtube.com/watch?v=example3",
      },
      {
        id: '4',
        title: "Business Leaders",
        description: "Interviews with influential business leaders from diverse industries across Africa.",
        coverImage: "/media/tv.jpeg",
        link: "https://www.youtube.com/watch?v=example4",
      },
    ],
    podcasts: [
      {
        id: '5',
        title: "Startup Stories",
        description: "A podcast series about the challenges and victories of African startups.",
        coverImage: "/media/podcast.jpg",
        link: "https://www.youtube.com/watch?v=example5",
      },
      {
        id: '6',
        title: "The Business Roundtable",
        description: "Insights and discussions with business experts and entrepreneurs.",
        coverImage: "/media/podcast.jpg",
        link: "https://www.youtube.com/watch?v=example6",
      },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-16 lg:px-32 font-sans">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Media</h1>
        <p className="text-lg text-gray-700 mt-4">Explore our documentaries, TV shows, and podcasts on YouTube.</p>
      </header>

      {/* Media Sections */}
      <div className="space-y-16">
        {/* Documentaries Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Documentaries</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaContent.documentaries.map((item) => (
              <Link href={item.link} key={item.id} target="_blank" rel="noopener noreferrer" className="relative block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative w-full h-64">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="text-blue-600 hover:underline">Watch on YouTube</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* TV Shows Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">TV Shows</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaContent.tvShows.map((item) => (
              <Link href={item.link} key={item.id} target="_blank" rel="noopener noreferrer" className="relative block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative w-full h-64">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="text-blue-600 hover:underline">Watch on YouTube</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Podcasts Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Podcasts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {mediaContent.podcasts.map((item) => (
              <Link href={item.link} key={item.id} target="_blank" rel="noopener noreferrer" className="relative block bg-white shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                <div className="relative w-full h-64">
                  <Image
                    src={item.coverImage}
                    alt={item.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <span className="text-blue-600 hover:underline">Listen on YouTube</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
