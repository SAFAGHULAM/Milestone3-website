import Image from 'next/image';

const testimonials = [
  {
    name: 'John Doe',
    review: 'Amazing quality and fast shipping! Highly recommend.',
    image: '/images/user1.jpeg',
  },
  {
    name: 'Jane Smith',
    review: 'Customer service was fantastic. The product exceeded expectations.',
    image: '/images/user2.webp',
  },
];

export default function Testimonials() {
  return (
    <section className="my-12 bg-[#e0bf79] py-8">
      <h2 className="text-3xl font-bold text-center mb-6">What Our Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 border rounded-md shadow-md text-center flex flex-col items-center"
          >
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={350}
              height={350}
              className="w-16 h-16 rounded-full mb-4 object-cover"
            />
            <p className="text-lg italic">
              &quot;{testimonial.review}&quot; {/* Escaping the quotes */}
            </p>
            <h3 className="text-xl font-bold mt-4">{testimonial.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
