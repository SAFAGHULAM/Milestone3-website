export default function CallToAction() {
    return (
      <section className="my-12 bg-gradient-to-r from-[#ada44e] to-[#d89d46] text-white py-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
        <p className="mb-6">Subscribe to our newsletter for exclusive deals and offers!</p>
        <form className="flex flex-col sm:flex-row justify-center items-center max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-l-lg focus:outline-none w-full sm:w-auto sm:rounded-l-md mb-4 sm:mb-0"
          />
          <button className="px-6 py-2 bg-[#071313] rounded-r-lg hover:bg-[#424444] w-full sm:w-auto">
            Subscribe
          </button>
        </form>
      </section>
    );
  }
  