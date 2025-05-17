import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slideImages = [
  'https://i.postimg.cc/fTGVWFgm/Whats-App-Image-2025-05-16-at-11-53-49-99cdcf4f.jpg',
  'https://i.postimg.cc/DzbZw23d/Whats-App-Image-2025-05-16-at-11-53-48-7fe7199a.jpg',
  'https://i.postimg.cc/bvFQKYHx/Whats-App-Image-2025-05-16-at-11-53-48-39eb69cd.jpg',
];

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [viewportHeight, setViewportHeight] = useState('100vh');

  useEffect(() => {
    setLoaded(true);
    
    const updateViewportHeight = () => {
      const navbarHeight = 64;
      const availableHeight = window.innerHeight - navbarHeight;
      setViewportHeight(`${availableHeight}px`);
    };

    updateViewportHeight();
    window.addEventListener('resize', updateViewportHeight);

    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  return (
    <div className="relative" style={{ height: viewportHeight, marginTop: '64px' }}>
      {/* Grid Background */}
      <div 
        className="absolute inset-0 transition-opacity duration-300 hover:opacity-20 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 119, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 119, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        loop
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className="w-full h-full"
      >
        {slideImages.map((image, index) => (
          <SwiperSlide key={index} className="w-full h-full">
            <motion.div 
              className="relative w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: loaded ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-contain bg-primary"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-black bg-opacity-30" />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}