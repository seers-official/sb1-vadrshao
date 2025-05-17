import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Maximize2 } from 'lucide-react';

interface VirtualWorld {
  id: number;
  name: string;
  description: string;
  image: string;
  platform: string;
  link: string;
}

export default function VirtualRealm() {
  const [selectedWorld, setSelectedWorld] = useState<VirtualWorld | null>(null);
  
  const virtualWorlds: VirtualWorld[] = [
    {
      id: 1,
      name: 'ardor* cross meta',
      description: 'Our flagship metaverse space featuring exclusive digital fashion shows and interactive experiences.',
      image: 'https://images.pexels.com/photos/6498989/pexels-photo-6498989.jpeg?auto=compress&cs=tinysrgb&w=1600',
      platform: 'Horizon Worlds',
      link: '#'
    },
    {
      id: 2,
      name: 'ardor* digital arcade',
      description: 'A retro-futuristic arcade featuring playable games and exclusive digital collectibles.',
      image: 'https://images.pexels.com/photos/5011647/pexels-photo-5011647.jpeg?auto=compress&cs=tinysrgb&w=1600',
      platform: 'Decentraland',
      link: '#'
    },
    {
      id: 3,
      name: 'ardor* neon district',
      description: 'Cyberpunk-inspired virtual shopping district with limited edition digital fashion drops.',
      image: 'https://images.pexels.com/photos/3124340/pexels-photo-3124340.jpeg?auto=compress&cs=tinysrgb&w=1600',
      platform: 'Roblox',
      link: '#'
    },
    {
      id: 4,
      name: 'ardor* void space',
      description: 'Minimalist exhibition space showcasing our most experimental digital creations.',
      image: 'https://images.pexels.com/photos/3617457/pexels-photo-3617457.jpeg?auto=compress&cs=tinysrgb&w=1600',
      platform: 'Spatial',
      link: '#'
    }
  ];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Virtual Realm</span>
            <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
          </h1>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            Explore our digital spaces across multiple platforms. Wear ardor* virtually and interact with our digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {virtualWorlds.map((world, index) => (
            <motion.div
              key={world.id}
              className="group relative overflow-hidden border border-accent/20 hover:border-accent cursor-hover transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              onClick={() => setSelectedWorld(world)}
            >
              <div className="aspect-video overflow-hidden">
                <img 
                  src={world.image} 
                  alt={world.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
              </div>
              
              <div className="absolute bottom-0 left-0 p-6 w-full">
                <span className="inline-block px-3 py-1 text-xs font-mono bg-accent/20 text-accent mb-3">
                  {world.platform}
                </span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                  {world.name}
                </h3>
                <p className="text-secondary/70 mb-4 max-w-md">
                  {world.description}
                </p>
              </div>
              
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="p-2 bg-accent text-primary rounded-full">
                  <Maximize2 size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold mb-4">Join the Virtual Experience</h2>
          <p className="text-secondary/70 max-w-2xl mx-auto mb-8">
            Enjoy wearing ardor* virtually. Below are current virtual worlds where you will find our authentic products across official social media accounts and communities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Roblox', 'Decentraland', 'Horizon Worlds', 'Spatial', 'VRChat'].map((platform, index) => (
              <button
                key={index}
                className="btn"
              >
                {platform}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selectedWorld && (
        <motion.div 
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedWorld(null)}
        >
          <motion.div 
            className="bg-primary border border-accent max-w-4xl w-full max-h-[90vh] overflow-auto"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <img 
                src={selectedWorld.image} 
                alt={selectedWorld.name}
                className="w-full h-full object-cover"
              />
              <button 
                className="absolute top-4 right-4 p-2 bg-primary text-secondary rounded-full"
                onClick={() => setSelectedWorld(null)}
              >
                <Maximize2 size={18} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold">{selectedWorld.name}</h3>
                <span className="px-3 py-1 text-xs font-mono bg-accent/20 text-accent">
                  {selectedWorld.platform}
                </span>
              </div>
              <p className="text-secondary/80 mb-6">
                {selectedWorld.description}
              </p>
              <a 
                href={selectedWorld.link} 
                className="btn inline-flex items-center"
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span>Visit Virtual World</span>
                <ExternalLink size={16} className="ml-2" />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}