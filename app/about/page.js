import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const teamMembers = [
    {
      name: "Mellisa Tshuma",
      role: "Editor In Chief",
      image: "/team/Mellisa-Tshuma.jpeg",
    },
    {
      name: "John Doe",
      role: "Lead Designer",
      image: "/team/no-person.jpeg",
    },
    {
      name: "Jane Smith",
      role: "Senior Developer",
      image: "/team/no-person.jpeg",
    },
  ];

  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Header */}
      <header className="relative w-full h-72 flex items-center justify-center bg-gray-900">
        <div className="relative w-full h-full">
          <Image 
            src="/about/about.jpg" 
            alt="About Us Cover" 
            layout="fill" 
            objectFit="cover" 
            className="opacity-80" 
          />
          <div className="absolute inset-0 bg-black opacity-70"></div>
        </div>
        <div className="absolute text-center text-white p-8">
          <h1 className="text-5xl md:text-6xl font-bold">About Us</h1>
        </div>
      </header>

      {/* About Content */}
      <section className="py-16 px-6 md:px-20 lg:px-40 bg-white text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Welcome to Our World</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Are you ready to dive into the world of everything SMEs and entrepreneurship? Look no further! We are here to provide you with valuable insights, tips, and resources to help you navigate the exciting journey of building and growing a successful business.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Whether you're a seasoned entrepreneur or just starting out, this platform has something for everyone. The exhibitors’ corner is an entrepreneurship digi-zine to Grow, Connect, and Equip emerging businesses - A profiling hub that celebrates outstanding, unique, and disruptive businesses and brands across Africa.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Topped with a quarterly published magazine, surrounding online content, and events - we aim to help aspiring entrepreneurs, business owners, and founders start, navigate, and scale up their businesses.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Our Team</h2>
        <div className="flex flex-wrap justify-center gap-10 px-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="w-60 bg-white shadow-lg rounded-lg p-6 transform transition duration-300 hover:-translate-y-2">
          <Image 
            src={member.image} 
            alt={member.name} 
            width={150} 
            height={150} 
            className="object-cover rounded-full mx-auto w-[150px] h-[150px]" 
          />
              <p className="mt-6 text-xl font-semibold text-gray-900">{member.name}</p>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>


    </div>
  );
}
