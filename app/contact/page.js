import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export default function ContactUs() {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4 md:px-16 lg:px-32 font-sans">
      {/* Page Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Contact Us</h1>
        <p className="text-lg text-gray-700 mt-4">We’d love to hear from you! Reach out to us through any of the options below.</p>
      </header>

      {/* Contact Details */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-around space-y-8 md:space-y-0">
        {/* Phone */}
        <div className="flex items-center text-gray-800">
          <FaPhoneAlt className="text-3xl text-blue-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Phone</h3>
            <p className="text-gray-600">+123 456 7890</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center text-gray-800">
          <FaEnvelope className="text-3xl text-green-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600">contact@company.com</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-center text-gray-800">
          <FaMapMarkerAlt className="text-3xl text-red-500 mr-4" />
          <div>
            <h3 className="text-xl font-semibold">Address</h3>
            <p className="text-gray-600">123 Business St., City, Country</p>
          </div>
        </div>
      </div>

      {/* Social Media */}
      <div className="text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-900">Follow Us</h2>
        <div className="flex justify-center space-x-6 mt-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FaFacebook className="text-3xl text-blue-700 hover:text-blue-500" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <FaTwitter className="text-3xl text-blue-500 hover:text-blue-300" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="text-3xl text-blue-900 hover:text-blue-700" />
          </a>
        </div>
      </div>
    </div>
  );
}
