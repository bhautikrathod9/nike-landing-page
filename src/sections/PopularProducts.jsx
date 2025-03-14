import PopularProductCard from "../components/PupularProductCard";
import { products } from "../constants";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const PopularProducts = () => {

  const { ref, inView } = useInView({
    triggerOnce: true, // Animation triggers only once
    threshold: 0.1, // 10% of the element must be visible
  });

  return (
    <motion.section 
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      id='products' className='max-container max-sm:mt-12'>
      <div className='flex flex-col justify-start gap-10'>
        <h2 className='text-4xl font-palanquin font-bold'>
          Our <span className='text-coral-red'> Popular </span> Products
        </h2>
        <p className='lg:max-w-lg mt-2 font-montserrat text-slate-gray'>
          Experience top-notch quality and style with our sought-after
          selections. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14'>
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
      </div>
    </motion.section>
  );
};

export default PopularProducts;