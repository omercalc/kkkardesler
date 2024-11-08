

const About = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2">
          <img 
            src="https://blog.bucketlist.com.tr/wp-content/uploads/2023/01/ahsap-sanati-hakkinda-her-sey.webp" 
            alt="Sword Woods Atelier" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="md:w-1/2 md:ml-8 mt-8 md:mt-0">
          <h1 className="text-4xl font-bold mb-4">Sword Woods Atelier</h1>
          <p className="text-lg text-gray-700 mb-4">
            Sword Woods Atelier is a dedicated woodcraft studio specializing in both standard and custom-made wooden creations. With a commitment to quality craftsmanship, each piece is carefully handcrafted, highlighting the beauty and unique character of wood. Our artisans combine traditional techniques with a modern touch, producing timeless items that blend seamlessly into any space. Whether it’s bespoke furniture, intricate decor, or functional art, Sword Woods Atelier transforms raw wood into pieces that tell a story. Our personalized approach ensures that every item reflects the individuality of its owner, making each creation as unique as it is enduring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;