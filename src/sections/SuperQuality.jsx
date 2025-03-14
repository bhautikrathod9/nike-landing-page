import { arrowRight } from "../assets/icons";
import { shoe8 } from "../assets/images";
import Button from '../components/Button';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SuperQuality = () => {
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
      id='about-us'
      className='flex justify-between items-center max-lg:flex-col gap-10 w-full max-container relative group'
    >
      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin capitalize text-4xl lg:max-w-lg font-bold'>
          We Provide You
          <span className='text-coral-red'> Super </span>
          <span className='text-coral-red'>Quality </span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg info-text'>
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className='mt-6 lg:max-w-lg info-text'>
          Our dedication to detail and excellence ensures your satisfaction
        </p>
        <div className='mt-11'>
          <Button label="View details" iconURL={arrowRight}/>
        </div>
      </div>

      <div className='flex-1 flex justify-center items-center transition-transform duration-300 ease-in-out transform scale-100 group-hover:scale-105 py-10'>
        <img
          src={shoe8}
          alt='product detail'
          width={570}
          height={522}
          className='object-contain '
        />
      </div>
    </motion.section>
  );
};

export default SuperQuality;