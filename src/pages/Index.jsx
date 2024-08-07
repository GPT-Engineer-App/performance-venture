import { Cat, Paw, Eye, Ear, MessageCircle, Facebook, Twitter, Instagram, Mail, Heart } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const [funFact, setFunFact] = useState("Cats sleep for 70% of their lives.");
  const [factCount, setFactCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const [likedBreeds, setLikedBreeds] = useState({});

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes.", image: "https://upload.wikimedia.org/wikipedia/commons/2/25/Siam_lilacpoint.jpg" },
    { name: "Persian", description: "Recognized for their long, luxurious coat and flat face.", image: "https://upload.wikimedia.org/wikipedia/commons/1/15/White_Persian_Cat.jpg" },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds with a distinctive ruff around their neck.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5f/Maine_Coon_cat_by_Tomitheos.JPG" },
    { name: "Bengal", description: "Have a wild appearance with their spotted or marbled coat.", image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Paintedcats_Red_Star_standing.jpg" },
    { name: "Scottish Fold", description: "Famous for their folded ears and round faces.", image: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Adult_Scottish_Fold.jpg" },
  ];

  const characteristics = [
    { icon: <Paw className="h-8 w-8" />, text: "Excellent hunters with sharp claws" },
    { icon: <Eye className="h-8 w-8" />, text: "Keen night vision" },
    { icon: <Ear className="h-8 w-8" />, text: "Exceptional hearing" },
    { icon: <MessageCircle className="h-8 w-8" />, text: "Communicate through various vocalizations" },
  ];

  const handleNewFact = () => {
    const facts = [
      "A group of cats is called a 'clowder'.",
      "Cats can jump up to six times their length.",
      "A cat's hearing is better than a dog's.",
      "Cats spend 70% of their lives sleeping.",
      "A cat can't climb head first down a tree because its claws are curved the wrong way.",
    ];
    setFunFact(facts[Math.floor(Math.random() * facts.length)]);
    setFactCount(prevCount => prevCount + 1);
  };

  const toggleLike = (breedName) => {
    setLikedBreeds(prev => ({
      ...prev,
      [breedName]: !prev[breedName]
    }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="relative h-screen bg-fixed bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl font-bold text-white mb-6 flex items-center"
          >
            <Cat className="mr-4 h-16 w-16" /> All About Cats
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-8">
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-2xl mb-12 text-center"
        >
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
        </motion.p>

        <Tabs defaultValue="characteristics" className="mb-16">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="characteristics">Characteristics</TabsTrigger>
            <TabsTrigger value="breeds">Popular Breeds</TabsTrigger>
          </TabsList>
          <TabsContent value="characteristics">
            <h2 className="text-4xl font-semibold mb-8 text-center">Characteristics of Cats</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {characteristics.map((char, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg transition-all duration-300 hover:bg-purple-100"
                >
                  {char.icon}
                  <p className="mt-4 text-lg">{char.text}</p>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="breeds">
            <h2 className="text-4xl font-semibold mb-8 text-center">Popular Cat Breeds</h2>
            <Carousel>
              <CarouselContent>
                {catBreeds.map((breed, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          <div className="relative">
                            <img src={breed.image} alt={breed.name} className="w-full h-48 object-cover rounded-t-lg" />
                            <motion.button
                              whileTap={{ scale: 0.9 }}
                              onClick={() => toggleLike(breed.name)}
                              className="absolute top-2 right-2 bg-white rounded-full p-2"
                            >
                              <Heart className={`h-6 w-6 ${likedBreeds[breed.name] ? 'text-red-500 fill-red-500' : 'text-gray-500'}`} />
                            </motion.button>
                            <h3 className="text-xl font-semibold mt-4">{breed.name}</h3>
                            <p className="mt-2">{breed.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
        </Tabs>

        <h2 className="text-4xl font-semibold mb-8 text-center">Cat Fun Fact</h2>
        <Card className="mb-16">
          <CardContent className="p-8">
            <AnimatePresence mode="wait">
              <motion.p
                key={funFact}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="text-2xl text-center mb-6"
              >
                {funFact}
              </motion.p>
            </AnimatePresence>
            <div className="flex justify-center items-center">
              <Button 
                onClick={handleNewFact}
                className="px-6 py-3 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors text-lg"
              >
                New Fun Fact
              </Button>
              <Badge variant="secondary" className="ml-4 text-xl">Facts learned: {factCount}</Badge>
            </div>
          </CardContent>
        </Card>

        <motion.div
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={{
            visible: { opacity: 1, y: 0 },
            hidden: { opacity: 0, y: 50 }
          }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-lg mb-16"
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Subscribe to Cat Facts</h2>
          <div className="flex max-w-md mx-auto">
            <Input type="email" placeholder="Enter your email" className="mr-2" />
            <Button>Subscribe</Button>
          </div>
        </motion.div>
      </div>

      <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">About Us</h3>
              <p>We are passionate about cats and dedicated to providing the best information about our feline friends.</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Home</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cat Breeds</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Cat Care</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-purple-400 transition-colors"><Facebook /></a>
                <a href="#" className="hover:text-purple-400 transition-colors"><Twitter /></a>
                <a href="#" className="hover:text-purple-400 transition-colors"><Instagram /></a>
                <a href="#" className="hover:text-purple-400 transition-colors"><Mail /></a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p>&copy; 2023 All About Cats. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
