import { motion } from 'framer-motion';

export default function AboutArtist() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-4xl md:text-6xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Jay E.
          <span className="text-accent">Creative Director of ardor*</span>
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="text-secondary/90 space-y-6 font-mono leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p>
              <span className="text-accent font-bold">Meet Jay:</span> Jay is a 27-year-old creative visionary with over 13 years of experience in digital and virtual design. Specializing in unique clothing and accessories across multiple virtual platforms, Jay's expertise covers the full spectrum of virtual item creation, including rigging, texturing, 3D modeling, and animation. His talents have allowed him to craft compelling experiences and items in both digital and physical spaces.
            </p>
            
            <p>
              A graduate of Drake University with a B.A. in Graphic Design, Jay merges formal education with a deep passion for innovation. While much of his work thrives in virtual spaces, he has also ventured into physical product design, bringing his artistic vision into tangible form. From high-quality virtual creations to physical products, Jay's work reflects a seamless blend of creativity across mediums.
            </p>
            
            <p>
              As the Owner and Creative Director of ardor*, Jay has dedicated the past two years to shaping and perfecting his brand. Founded in 2014, ardor* has consistently been a sensation on virtual platforms, with over 33,548,331 million sales cross-platform. For Jay, ardor* is more than just a brand—it's a lifelong journey fueled by his passion for creating art that connects the virtual and physical worlds.
            </p>
            
            <p className="text-xl italic text-accent">
              Imagination fueled, ardor driven.*
            </p>

            <div className="pt-4">
              <a href="mailto:jay@ardorcompany.com" className="btn inline-block">
                Contact Jay
              </a>
              <p className="mt-4 text-secondary/60 text-sm">
                For business inquiries: jay@ardorcompany.com
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="relative">
              <div className="absolute inset-0 border border-accent/50 transform translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1600" 
                alt="Jay E. - Creative Director" 
                className="relative z-10 w-full h-auto object-cover object-center"
              />
              <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent h-1/3 w-full">
                <div className="absolute bottom-0 left-0 p-4">
                  <span className="text-xs text-secondary/60 font-mono">
                    ardor* CEO - 2025
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">
            <span className="text-accent">*</span> Timeline
          </h2>
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute top-0 bottom-0 left-1/2 transform -translate-x-1/2 w-px bg-accent/30"></div>
            
            {[
              { year: '2014', event: 'Founded ardor*', delay: 0.7 },
              { year: '2017', event: 'Expanded to multiple virtual platforms', delay: 0.8 },
              { year: '2019', event: 'Launched first physical merchandise collection', delay: 0.9 },
              { year: '2021', event: 'Reached 10 million sales milestone', delay: 1.0 },
              { year: '2023', event: 'Opened metaverse showroom', delay: 1.1 },
              { year: '2025', event: 'Current: Expanding global presence', delay: 1.2 },
            ].map((item, index) => (
              <motion.div 
                key={index}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? 'justify-end' : 'justify-start'
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                  <span className="text-accent font-mono font-bold">{item.year}</span>
                  <p className="mt-1">{item.event}</p>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-accent border-2 border-primary"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}