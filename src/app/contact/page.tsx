import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="max-w-7xl mx-auto p-4 space-y-12">
      {/* Page Header */}
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600">
          Have questions or feedback? We&apos;d love to hear from you! Reach out to us using the details below or send us a message.
        </p>
      </header>

      {/* Contact Information Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Email */}
        <div className="flex flex-col items-center text-center">
          <FaEnvelope className="text-gray-700 text-4xl mb-4" />
          <h2 className="text-xl font-semibold">Email</h2>
          <p className="text-gray-600">support@ecommerce.com</p>
        </div>

        {/* Phone */}
        <div className="flex flex-col items-center text-center">
          <FaPhone className="text-gray-700 text-4xl mb-4" />
          <h2 className="text-xl font-semibold">Phone</h2>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>

        {/* Address */}
        <div className="flex flex-col items-center text-center">
          <FaMapMarkerAlt className="text-gray-700 text-4xl mb-4" />
          <h2 className="text-xl font-semibold">Address</h2>
          <p className="text-gray-600">
            123 E-Commerce St., Suite 100, Shopping City, SC 12345
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-[#f7e899] p-8 rounded-lg shadow-md">
        <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>
        <form className="space-y-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-[#f5f5f3] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f5e69f]"
              placeholder="Enter your name"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-[#f5f5f3] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f5e69f]"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-lg font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              className="w-full bg-[#f5f5f3] border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#f5e69f]"
              placeholder="Write your message here"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-3 rounded-lg text-lg font-semibold hover:bg-gray-500 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}
