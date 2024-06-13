import { useState } from "react";
import { Contact } from "../components/Contact";

export function Portfolio() {
  const [photos] = useState([
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410027/mali-home/14_cxrsym.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410027/mali-home/2_b97mxs.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410027/mali-home/13_xd6rzz.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410027/mali-home/4_r64exo.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410027/mali-home/12_kfvhhv.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410027/mali-home/11_ene8bg.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410026/mali-home/7_vjb410.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410026/mali-home/10_exvo98.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410026/mali-home/9_npetlo.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410026/mali-home/8_sjrkp0.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410026/mali-home/6_rkoyau.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410026/mali-home/5_uq9vma.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410026/mali-home/3_bkhv5r.jpg",
    "https://res.cloudinary.com/drm4hffoi/image/upload/v1719410026/mali-home/1_spzx49.jpg",
  ]);

  const [selectedPhoto, setSelectedPhoto] = useState(null);

  //@ts-expect-error photo has no type at the moment
  const openModal = (photo) => {
    setSelectedPhoto(photo);
  };

  const closeModal = () => {
    setSelectedPhoto(null);
  };

  return (
    <section className="py-24 relative">
      <div className="w-full max-w-7xl px-6 lg:px-8 mx-auto">
        <div className="flex items-center justify-center flex-col gap-5 mb-14 animate-in fade-in slide-in-from-top duration-300">
          <span className="bg-indigo-50 text-indigo-500 text-xs font-medium px-3.5 py-1 rounded-full">
            Products
          </span>
          <h2 className="font-manrope font-bold text-4xl text-gray-900 text-center">
            Our Collections
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-3xl mx-auto text-center">
            Transform your home into a sanctuary with our exquisite furniture
            collections. Discover timeless pieces that blend comfort, style, and
            craftsmanship.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-14">
          {photos.map((photo, index) => (
            <div
              className="block animate-in fade-in slide-in-from-left duration-300"
              key={index}
              onClick={() => openModal(photo)}
            >
              <div className="w-full h-64 overflow-hidden rounded-lg cursor-pointer">
                <img
                  src={photo}
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 transform hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
        <Contact />
      </div>
      {selectedPhoto && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center animate-in fade-in slide-in-from-top duration-300">
          <img
            src={selectedPhoto}
            alt="Selected Photo"
            className="max-w-full max-h-full"
          />
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 bg-white text-black px-3 py-1 rounded-full"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  );
}

export default Portfolio;
