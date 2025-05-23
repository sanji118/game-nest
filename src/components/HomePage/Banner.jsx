import React, { useEffect, useState } from 'react'

const Banner = () => {
  const slides = [
    {
      bg: "https://i.ibb.co/n88B2Tgk/gaming-blank-banner-background-23-2150390427.jpg",
      title: "Level Up Your Gaming",
      desc: "Explore top-tier gear and accessories tailored for pro gamers.",
    },
    {
      bg: "https://i.ibb.co/hF52dnBc/cool-geometric-triangular-figure-neon-laser-light-great-backgrounds-wallpapers-181624-9331.jpg",
      title: "Feel the Neon Power",
      desc: "Immerse in futuristic designs and next-gen lighting aesthetics.",
    },
    {
      bg: "https://i.ibb.co/7x1ysQmv/detailed-gamer-room-illustration-23-2148923561.jpg",
      title: "Dream Gaming Setup",
      desc: "Design the ultimate room with high-performance gear and comfort.",
    },
    {
      bg: "https://i.ibb.co/1JrXqktZ/digital-videogame-controller-techno-background-with-light-effect-1017-54785.jpg",
      title: "Next-Gen Controllers",
      desc: "Experience precision and power at your fingertips.",
    },
    {
      bg: "https://i.ibb.co/BKBw5hHZ/3d-rendering-gamer-room-illustration-23-2151642712.jpg",
      title: "Immersive Gamer Rooms",
      desc: "Visualize your space with stunning 3D interior ideas.",
    },
    {
      bg: "https://i.ibb.co/vC9607yy/high-angle-gaming-setup-indoors.jpg",
      title: "Game Like a Pro",
      desc: "Upgrade your space with elite-quality tech and immersive ambiance.",
    },
    
    {
      bg: "https://i.ibb.co/h19K9kvj/view-illuminated-neon-gaming-keyboard-setup-controller.jpg",
      title: "Ultimate RGB Vibes",
      desc: "Enjoy the glow of a perfect RGB keyboard and controller combo.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCurrentIndex(prev => (prev + 1) % slides.length);
    }, 4000);

    return ()=> clearInterval(interval)
  })

  return (
    <div className="carousel w-full min-h-screen md:my-10 relative overflow-hidden">
      {slides.length > 0 && (
        <div
          key={currentIndex}
          className="carousel-item relative w-full min-h-screen bg-center bg-no-repeat bg-cover transition-all duration-700 ease-in-out"
          style={{
            backgroundImage: `url(${slides[currentIndex].bg})`,
          }}
        >
          <div className="w-full min-h-screen flex flex-col justify-center items-start px-8">
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 mx-auto">
              {slides[currentIndex].title}
            </h2>
            <p className="text-white text-xl max-w-xl mx-auto">
              {slides[currentIndex].desc}
            </p>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <button
              className="btn md:btn-circle p-1 "
              onClick={() =>
                setCurrentIndex((currentIndex - 1 + slides.length) % slides.length)
              }
            >
              ❮
            </button>
            <button
              className="btn md:btn-circle p-1 "
              onClick={() => setCurrentIndex((currentIndex + 1) % slides.length)}
            >
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );

}

export default Banner;
