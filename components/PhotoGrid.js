const gallery2024 = [
  "/gallery/spinco.jpeg",
  "/gallery/hackher2.jpeg",
  "/gallery/hackher.jpeg",
  "/gallery/oweekbooth.jpeg",
  "/gallery/hackher3.jpeg",
  "/gallery/formal.jpeg",
  "/gallery/hackher4.jpeg",
  "/gallery/braceletmaking.jpg",
  "/gallery/hackher5.jpeg",
  "/gallery/oweek2.jpeg",
  "/gallery/hackher6.png",
  "/gallery/hackher.jpeg",
];

const PhotoGrid = () => {
  return (
    <div className="px-6 py-10 space-y-16">
      {/* 2025–2026 (Coming Soon) */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-400">2025–2026 (Coming Soon)</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 opacity-30 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="w-full aspect-[4/3] bg-gray-200 rounded-lg" />
          ))}
        </div>
      </section>

      {/* 2024–2025 */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-center">2024–2025</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery2024.map((src, index) => (
            <div key={index} className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md">
              <img
                src={src}
                alt={`Gallery 2024 photo ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default PhotoGrid;

