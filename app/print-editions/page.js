import Image from 'next/image';
import Link from 'next/link';

export default function PrintEditions() {
  // Sample data for print editions
  const editions = [
    {
      id: '1',
      title: "Quarterly Issue - March 2023",
      releaseDate: "March 2023",
      image: "/print-editions/one.jpg",
      description: "A special edition covering the latest trends and insights in SMEs and entrepreneurship.",
    },
    {
      id: '2',
      title: "Quarterly Issue - June 2023",
      releaseDate: "June 2023",
      image: "/print-editions/two.jpg",
      description: "Our summer issue packed with tips and profiles of disruptive businesses across Africa.",
    },
    {
      id: '3',
      title: "Quarterly Issue - September 2023",
      releaseDate: "September 2023",
      image: "/print-editions/three.jpg",
      description: "Dive into our fall issue for more strategies and resources for emerging entrepreneurs.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-16 lg:px-32 font-sans">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Print Editions</h1>
        <p className="text-lg text-gray-700 mt-4">
          Explore our quarterly print magazines, filled with in-depth insights and inspiring stories from industry experts.
        </p>
      </header>

      {/* Editions Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {editions.map((edition) => (
          <Link href={`/print-editions/${edition.id}`} key={edition.id} className="relative block bg-gray-100 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <div className="relative w-full h-[28rem]">
              <Image
                src={edition.image}
                alt={`${edition.title} Cover`}
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-6 flex flex-col justify-end rounded-lg">
                <h2 className="text-2xl font-bold text-white mb-1">{edition.title}</h2>
                <p className="text-gray-300 text-sm mb-1">{edition.releaseDate}</p>
                <p className="text-gray-200 text-base">{edition.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
