import Image from 'next/image';

const categories = [
    { name: 'Electronics', image: '/images/electronics.png' },
    { name: 'Fashion', image: '/images/fashion.webp' },
    { name: 'Kitchen', image: '/images/kitchen.webp' },
  ];
  
  export default function Categories() {
    return (
      <section className="my-12">
        <h2 className="text-3xl font-bold text-center mb-6">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-md group"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={400}
                height={300}
                className=" h-48 object-contain"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
                <h3 className="text-white text-2xl font-bold">{category.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  