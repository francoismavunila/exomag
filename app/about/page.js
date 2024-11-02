import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="bg-white text-black min-h-screen font-sans">
      {/* Header */}
      <header className="relative w-full h-64 flex items-center justify-center bg-gray-900">
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
          <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
        </div>
      </header>

      {/* About Content */}
      <section className="py-12 px-4 md:px-16 lg:px-32 bg-white">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Welcome to Our World</h2>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Are you ready to dive into the world of everything SMEs and entrepreneurship? Look no further! We are here to provide you with valuable insights, tips, and resources to help you navigate the exciting journey of building and growing a successful business.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Whether you're a seasoned entrepreneur or just starting out, this platform has something for everyone. The exhibitors’ corner is an entrepreneurship digi-zine to Grow, Connect and Equip emerging businesses - A profiling hub that celebrates outstanding, unique and disruptive businesses, brands across Africa.
        </p>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
          Topped with a quarterly published magazine, surrounding online content and events - we aim to help aspiring entrepreneurs, business owners and founders start, navigate and scale up their businesses.
        </p>
        <div className="text-center mt-12">
  <h2 className="text-3xl font-bold mb-8">Our Team</h2>
  <div className="flex flex-wrap justify-center gap-8">
    <div className="w-60">
      <Image 
        src="/editor.jpg" 
        alt="Mellisa Tshuma" 
        width={150} 
        height={150} 
        className="rounded-full mx-auto"
      />
      <p className="mt-4 text-xl font-semibold">Mellisa Tshuma</p>
      <p className="text-gray-600">Editor In Chief</p>
    </div>
    <div className="w-60">
      <Image 
        src="/designer.jpg" 
        alt="John Doe" 
        width={150} 
        height={150} 
        className="rounded-full mx-auto"
      />
      <p className="mt-4 text-xl font-semibold">John Doe</p>
      <p className="text-gray-600">Lead Designer</p>
    </div>
    <div className="w-60">
      <Image 
        src="/developer.jpg" 
        alt="Jane Smith" 
        width={150} 
        height={150} 
        className="rounded-full mx-auto"
      />
      <p className="mt-4 text-xl font-semibold">Jane Smith</p>
      <p className="text-gray-600">Senior Developer</p>
    </div>
  </div>
</div>
      </section>
    </div>
  );
}
