import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Tag, Search, X } from 'lucide-react';

interface ArchiveItem {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
}

export default function ArdorArchive() {
  const [items, setItems] = useState<ArchiveItem[]>([]);
  const [filteredItems, setFilteredItems] = useState<ArchiveItem[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    // Simulating archive data
    const archiveData: ArchiveItem[] = [
      {
        id: 1,
        title: 'Digital Neon Collection',
        description: 'Our first digital clothing collection featuring neon accents and cyberpunk aesthetics.',
        image: 'https://images.pexels.com/photos/2531728/pexels-photo-2531728.jpeg?auto=compress&cs=tinysrgb&w=1600',
        date: '2020-03-15',
        category: 'clothing'
      },
      {
        id: 2,
        title: 'Minimalist Avatar Set',
        description: 'A set of minimalist avatar clothing designed for clean, understated digital presence.',
        image: 'https://images.pexels.com/photos/7319080/pexels-photo-7319080.jpeg?auto=compress&cs=tinysrgb&w=1600',
        date: '2021-06-22',
        category: 'avatar'
      },
      {
        id: 3,
        title: 'Holographic Accessories',
        description: 'Digital accessories with holographic effects that respond to in-game lighting.',
        image: 'https://images.pexels.com/photos/2842068/pexels-photo-2842068.jpeg?auto=compress&cs=tinysrgb&w=1600',
        date: '2021-11-05',
        category: 'accessories'
      },
      {
        id: 4,
        title: 'Voxel Collaboration',
        description: 'A special collaboration with voxel artists creating unique blocky fashion items.',
        image: 'https://images.pexels.com/photos/3802667/pexels-photo-3802667.jpeg?auto=compress&cs=tinysrgb&w=1600',
        date: '2022-02-18',
        category: 'collaboration'
      },
      {
        id: 5,
        title: 'Digital Brutalist Series',
        description: 'Clothing inspired by brutalist architecture with raw textures and bold forms.',
        image: 'https://images.pexels.com/photos/3699295/pexels-photo-3699295.jpeg?auto=compress&cs=tinysrgb&w=1600',
        date: '2022-09-30',
        category: 'clothing'
      },
      {
        id: 6,
        title: 'Wireframe Collection',
        description: 'Experimental clothing showing the digital construction process as part of the design.',
        image: 'https://images.pexels.com/photos/3964426/pexels-photo-3964426.jpeg?auto=compress&cs=tinysrgb&w=1600',
        date: '2023-04-12',
        category: 'clothing'
      },
    ];
    
    setItems(archiveData);
    setFilteredItems(archiveData);
  }, []);

  useEffect(() => {
    let results = items;
    
    // Filter by category
    if (activeCategory !== 'all') {
      results = results.filter(item => item.category === activeCategory);
    }
    
    // Filter by search term
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      results = results.filter(
        item => 
          item.title.toLowerCase().includes(lowercaseSearch) ||
          item.description.toLowerCase().includes(lowercaseSearch)
      );
    }
    
    setFilteredItems(results);
  }, [searchTerm, activeCategory, items]);

  const categories = ['all', 'clothing', 'accessories', 'avatar', 'collaboration'];

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            ardor archive<span className="text-accent">*</span>
          </h1>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            A chronological collection of our past digital creations and virtual fashion items.
          </p>
        </motion.div>

        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-grow relative">
              <input
                type="text"
                placeholder="Search the archive..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-3 pl-10 bg-transparent border border-accent/30 focus:border-accent outline-none transition-colors"
              />
              <Search size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary/50" />
              {searchTerm && (
                <button 
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-secondary/50 hover:text-accent"
                  onClick={() => setSearchTerm('')}
                >
                  <X size={18} />
                </button>
              )}
            </div>
            
            <div className="flex overflow-x-auto pb-2 gap-2 md:w-auto">
              {categories.map(category => (
                <button
                  key={category}
                  className={`px-4 py-2 whitespace-nowrap ${
                    activeCategory === category 
                      ? 'bg-accent text-primary' 
                      : 'border border-accent/30 text-secondary/70 hover:border-accent'
                  } transition-colors`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {filteredItems.length === 0 ? (
          <motion.div 
            className="text-center py-16 border border-accent/20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-xl text-secondary/50">No items found matching your criteria.</p>
            <button 
              className="mt-4 btn"
              onClick={() => {
                setSearchTerm('');
                setActiveCategory('all');
              }}
            >
              Reset Filters
            </button>
          </motion.div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                className="archive-item cursor-hover"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="p-4 flex-grow flex flex-col">
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-flex items-center text-xs text-secondary/60">
                      <Calendar size={12} className="mr-1" />
                      {formatDate(item.date)}
                    </span>
                    <span className="inline-flex items-center text-xs text-accent">
                      <Tag size={12} className="mr-1" />
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-secondary/70 text-sm mb-4 flex-grow">
                    {item.description}
                  </p>
                  <button className="text-accent text-sm font-mono hover:underline self-end">
                    View Details
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}