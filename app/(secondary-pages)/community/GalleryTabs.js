"use client";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import "react-tabs/style/react-tabs.css"; // default styling

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

const gallery2025 = []; // Coming soon

const GalleryTabs = () => {
  const renderGallery = (images) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
      {images.map((src, index) => (
        <div key={index} className="w-full aspect-[4/3] overflow-hidden rounded-lg shadow-md">
          <img
            src={src}
            alt={`Photo ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="px-6 py-10 max-w-6xl mx-auto">
      <Tabs>
        <TabList>
          <Tab>2024–2025</Tab>
          <Tab>2025–2026</Tab>
        </TabList>

        <TabPanel>
          {renderGallery(gallery2024)}
        </TabPanel>

        <TabPanel>
          <div className="text-center text-gray-400 mt-10">Gallery coming soon...</div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default GalleryTabs;

