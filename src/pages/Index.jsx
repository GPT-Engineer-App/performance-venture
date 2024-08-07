import { Cat, Paw, Eye, Ear, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";
import { useState } from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const [funFact, setFunFact] = useState("Cats sleep for 70% of their lives.");

  const catBreeds = [
    { name: "Siamese", description: "Known for their distinctive color points and blue eyes." },
    { name: "Persian", description: "Recognized for their long, luxurious coat and flat face." },
    { name: "Maine Coon", description: "One of the largest domestic cat breeds with a distinctive ruff around their neck." },
    { name: "Bengal", description: "Have a wild appearance with their spotted or marbled coat." },
    { name: "Scottish Fold", description: "Famous for their folded ears and round faces." },
  ];

  const characteristics = [
    { icon: <Paw className="h-8 w-8" />, text: "Excellent hunters with sharp claws" },
    { icon: <Eye className="h-8 w-8" />, text: "Keen night vision" },
    { icon: <Ear className="h-8 w-8" />, text: "Exceptional hearing" },
    { icon: <MessageCircle className="h-8 w-8" />, text: "Communicate through various vocalizations" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-100 to-pink-100">
      <div className="relative h-96 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80')"}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-white mb-6 flex items-center">
            <Cat className="mr-4 h-12 w-12" /> All About Cats
          </h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-8">
        <p className="text-xl mb-8 text-center">
          Cats are fascinating creatures that have been domesticated for thousands of years. They are known for their independence, agility, and affectionate nature.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-center">Characteristics of Cats</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {characteristics.map((char, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              {char.icon}
              <p className="mt-2">{char.text}</p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-semibold mb-6 text-center">Popular Cat Breeds</h2>
        <Accordion type="single" collapsible className="mb-12">
          {catBreeds.map((breed, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{breed.name}</AccordionTrigger>
              <AccordionContent>{breed.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <h2 className="text-3xl font-semibold mb-6 text-center">Cat Fun Fact</h2>
        <Card className="mb-12">
          <CardContent className="p-6">
            <p className="text-lg text-center">{funFact}</p>
            <button 
              onClick={() => setFunFact("A group of cats is called a 'clowder'.")}
              className="mt-4 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors block mx-auto"
            >
              New Fun Fact
            </button>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-4xl mx-auto flex justify-center space-x-6">
          <a href="#" className="hover:text-purple-400 transition-colors"><Facebook /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Twitter /></a>
          <a href="#" className="hover:text-purple-400 transition-colors"><Instagram /></a>
        </div>
        <p className="text-center mt-4">&copy; 2023 All About Cats. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
