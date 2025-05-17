import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Filter, ChevronDown } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
}

export default function ShopRL() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    // Simulating product data
    const productData: Product[] = [
      {
        id: 1,
        name: 'ardor* electronics trucker hat (red)',
        price: 35.00,
        image: 'https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'headwear'
      },
      {
        id: 2,
        name: 'ardor* Enamel Pins',
        price: 15.00,
        image: 'https://images.pexels.com/photos/1314187/pexels-photo-1314187.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'accessories'
      },
      {
        id: 3,
        name: 'ardor* nothing, im just casually making virtual items',
        price: 35.00,
        image: 'https://images.pexels.com/photos/35185/hats-fedora-hat-manufacture-stack.jpg?auto=compress&cs=tinysrgb&w=1600',
        category: 'headwear'
      },
      {
        id: 4,
        name: 'ardor* Digital Realm Hoodie',
        price: 65.00,
        image: 'https://images.pexels.com/photos/6311387/pexels-photo-6311387.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'apparel'
      },
      {
        id: 5,
        name: 'ardor* Metaverse T-Shirt',
        price: 30.00,
        image: 'https://images.pexels.com/photos/4066293/pexels-photo-4066293.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'apparel'
      },
      {
        id: 6,
        name: 'ardor* Digital Glitch Stickers',
        price: 12.00,
        image: 'https://images.pexels.com/photos/5638602/pexels-photo-5638602.jpeg?auto=compress&cs=tinysrgb&w=1600',
        category: 'accessories'
      },
    ];
    
    setProducts(productData);
    setFilteredProducts(productData);
  }, []);

  useEffect(() => {
    if (selectedCategory === 'all') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(product => product.category === selectedCategory));
    }
  }, [selectedCategory, products]);

  const categories = ['all', 'apparel', 'headwear', 'accessories'];

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Shop RL</h1>
          <p className="text-xl text-secondary/70 max-w-2xl mx-auto">
            Physical merchandise inspired by our virtual designs. Wear ardor* in the real world.
          </p>
        </motion.div>

        {/* Mobile Filter Button */}
        <div className="md:hidden mb-6">
          <button 
            className="w-full flex items-center justify-between btn"
            onClick={() => setIsFilterOpen(!isFilterOpen)}
          >
            <span className="flex items-center">
              <Filter size={16} className="mr-2" />
              Filter
            </span>
            <ChevronDown size={16} className={`transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isFilterOpen && (
            <motion.div 
              className="mt-2 bg-primary border border-accent/20 p-4"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`px-4 py-2 border ${
                      selectedCategory === category 
                        ? 'border-accent bg-accent/10 text-accent' 
                        : 'border-accent/30 text-secondary/70 hover:border-accent/60'
                    } transition-colors`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filter Sidebar */}
          <motion.aside 
            className="hidden md:block w-64 flex-shrink-0"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="sticky top-24 border border-accent/20 p-6">
              <h2 className="text-xl font-bold mb-4 flex items-center">
                <Filter size={18} className="mr-2 text-accent" />
                Filter
              </h2>
              
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    className={`w-full text-left px-3 py-2 ${
                      selectedCategory === category 
                        ? 'bg-accent/10 text-accent border-l-2 border-accent' 
                        : 'text-secondary/70 hover:bg-accent/5'
                    } transition-colors`}
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </motion.aside>

          {/* Products Grid */}
          <motion.div 
            className="flex-grow"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  className="product-card"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-mono text-lg mb-2">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      <span className="font-bold">${product.price.toFixed(2)} USD</span>
                      <button className="p-2 rounded-full bg-accent/10 hover:bg-accent/20 text-accent transition-colors">
                        <ShoppingBag size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}