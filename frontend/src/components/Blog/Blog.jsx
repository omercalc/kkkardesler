

const Blog = () => {
  const blogs = [
    {
      title: "The Art of Woodcraft: Transforming Raw Wood into Timeless Pieces",
      content: `In this post, we explore the journey from raw wood to refined art at Sword Woods Atelier. Each piece crafted in our atelier is not just furniture or decor; it’s a blend of tradition and innovation. We believe in the timeless beauty of wood, respecting its natural grain and characteristics. Our artisans use both traditional handcrafting techniques and modern tools to bring each piece to life, carefully balancing durability and aesthetics. The post would include:
      Insights into our process, from wood selection to finishing.
      Examples of popular items created in the atelier.
      How we achieve that unique "Sword Woods" style, making each piece a functional work of art.
      This blog entry would be a deep dive into our philosophy and the meticulous artistry behind every piece, helping readers appreciate the skill and dedication involved.`,
      imageUrl: "https://i.pinimg.com/236x/a2/59/ef/a259efec442d7c1d2dd3529c4a07beb9.jpg",
      imagePosition: "right"
    },
    {
      title: "Customized Woodwork: Crafting Pieces that Reflect Your Style",
      content: `Sword Woods Atelier offers personalized woodcraft for clients who want a touch of uniqueness in their spaces. This post would explain how our custom process works—from the initial consultation to the final reveal. Topics would cover:
      How we collaborate with clients to bring their vision to life.
      Different customization options, such as size, wood type, finish, and design.
      Stories of past projects where we’ve created bespoke furniture or decor pieces, each with its unique story and charm.
      This piece would illustrate how our personalized approach allows clients to own truly unique items, infused with personal meaning and created to last a lifetime.`,
      imageUrl: "https://i.pinimg.com/1200x/ab/bf/01/abbf01f93e4999a1c2eb8104a42dc2e1.jpg",
      imagePosition: "left"
    },
    {
      title: "Sustainable Craftsmanship: Our Commitment to Eco-Friendly Woodwork",
      content: `This blog would focus on the sustainable practices at Sword Woods Atelier. Woodcraft has a beautiful relationship with nature, and we’re committed to sourcing eco-friendly materials while minimizing waste. We believe in giving wood a second life and creating items that last generations. Key points include:
      Our sustainable sourcing practices and the types of wood we choose.
      The importance of quality craftsmanship in reducing waste through durable products.
      How we recycle and repurpose wood scraps to create smaller items, reducing waste.
      This blog would resonate with environmentally conscious readers, showing how Sword Woods Atelier combines artistry with responsibility to create pieces that are as kind to the environment as they are beautiful.`,
      imageUrl: "https://www.firmamerkezi.com/asset/image/article/ah%C5%9Fapi%C5%9Fcili%C4%9Fi-4-lu-1.webp",
      imagePosition: "right"
    }
  ];

  return (
    <div className="container mx-auto p-8 md:px-16">
      {blogs.map((blog, index) => (
        <div key={index} className="flex flex-col md:flex-row items-center mb-12">
          {blog.imagePosition === "left" && (
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          )}
          <div className={`md:w-1/2 ${blog.imagePosition === "left" ? "md:ml-8" : "md:mr-8"} mt-8 md:mt-0`}>
            <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
            <p className="text-lg text-gray-700">{blog.content}</p>
          </div>
          {blog.imagePosition === "right" && (
            <div className="md:w-1/2 mb-4 md:mb-0">
              <img 
                src={blog.imageUrl} 
                alt={blog.title} 
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Blog;