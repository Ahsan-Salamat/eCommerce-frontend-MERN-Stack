import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ product }) => {
  const { name, image, price, originalPrice, colors, isSale } = product;

  return (
    <motion.div
      className="relative bg-gradient-to-r from-zinc-200/80 to-zinc-100/90 rounded-lg overflow-hidden shadow-md w-64"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
      }}
      transition={{ duration: 0.3 }}
    >
      {/* Sale Badge */}
      {isSale && (
        <motion.div
          className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          SALE
        </motion.div>
      )}

      {/* Product Image */}
      <img src={image} alt={name} className="w-full h-72 object-cover" />

      <div className="p-5">
        {/* Product Name */}
        <motion.h3
          className="font-bold text-lg mb-1"
          whileHover={{ color: "#3b82f6" }}
        >
          {name}
        </motion.h3>

        {/* Color Options */}
        <p className="text-gray-500 text-sm mb-3">{colors.length} Colors</p>

        {/* Price */}
        <div className="flex items-center gap-2">
          {isSale ? (
            <>
              <motion.span
                className="text-xl font-bold text-red-500"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 }}
              >
                ${price}
              </motion.span>
              <motion.span
                className="line-through text-gray-400"
                initial={{ x: -10 }}
                animate={{ x: 0 }}
              >
                ${originalPrice}
              </motion.span>
            </>
          ) : (
            <span className="text-xl font-bold">${price}</span>
          )}
        </div>
      </div>

    </motion.div>
  );
};

// Featured Products Section
const FeaturedProducts = () => {
 const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=400&q=80",
    price: 149,
    originalPrice: 199,
    colors: ["Black", "White"],
    isSale: true,
  },
  {
    id: 2,
    name: "Smartwatch Pro",
    image: "https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg",
    price: 99,
    colors: ["Black", "Silver"],
    isSale: false,
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    image: "https://img.freepik.com/free-photo/wireless-white-smart-speaker-digital-device_53876-96821.jpg?t=st=1752337510~exp=1752341110~hmac=95e7ca87c151ba9bef1e237e2f2ba5856bb8bf8e887d9d91a9af42789e47eb27&w=1800",
    price: 59,
    originalPrice: 89,
    colors: ["Red", "Blue", "Black"],
    isSale: true,
  },
  {
    id: 4,
    name: "Gaming Mouse",
    image: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=400&q=80",
    price: 39,
    originalPrice: 55,
    colors: ["Black", "RGB"],
    isSale: true,
  },
  {
    id: 5,
    name: "Mechanical Keyboard",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=400&q=80",
    price: 89,
    colors: ["Black", "White"],
    isSale: false,
  },
  {
    id: 6,
    name: "HD Webcam",
    image: "https://img.freepik.com/free-psd/technological-camera-isolated_23-2151196899.jpg",
    price: 44,
    originalPrice: 60,
    colors: ["Black"],
    isSale: true,
  },
  {
    id: 7,
    name: "Gaming PC",
    image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=400&q=80",
    price: 79,
    colors: ["Gray", "Black"],
    isSale: false,
  },
  {
    id: 8,
    name: "Future Proof Pc",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=400&q=80",
    price: 25,
    originalPrice: 35,
    colors: ["Silver", "Gray"],
    isSale: true,
  },
];

  return (
    <section className="py-16 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default FeaturedProducts;