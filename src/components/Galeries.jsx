import { useState } from "react";

import dance1 from "../assets/recentClip.jpeg";
import dance2 from "../assets/recentClip1.jpeg";
import dance3 from "../assets/recentClip2.jpeg";
import dance4 from "../assets/recentLeader.jpeg";
import dance5 from "../assets/followerClip.jpeg";
import dance6 from "../assets/followerClip.jpeg";
import party1 from "../assets/sbkParty/FJ8A6466.jpg";
import party2 from "../assets/sbkParty/FJ8A6603.jpg";
import party3 from "../assets/sbkParty/FJ8A6605.jpg";
import concert2 from "../assets/concert-freedom-jazz/P1990974.jpg";

const images = [
  {
    id: 1,
    title: "SBK Social Night",
    image: party1,
  },
  {
    id: 2,
    title: "Bachata Ladies",
    image: dance5,
  },
  {
    id: 3,
    title: "Salsa  Group",
    image: dance3,
  },
  {
    id: 4,
    title: "Party Night",
    image: party2,
  },
  {
    id: 5,
    title: "Freedom Dance Family",
    image: dance2,
  },
  {
    id: 6,
    title: "Live Orchestra",
    image: concert2,
  },
];

const videos = [
  {
    id: 1,
    title: "Freedom Salsa Performance",
    url: "https://www.youtube.com/embed/ScMzIvxBSi4",
  },
  {
    id: 2,
    title: "Bachata Showcase",
    url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: 3,
    title: "Kizomba Social",
    url: "https://www.youtube.com/embed/ysz5S6PUM-U",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-base-200 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-primary">Gallery</h2>

          <p className="mt-4 text-lg text-base-content/70">
            Relive the energy of our dance classes, socials, performances,
            workshops, and live music events.
          </p>
        </div>

        {/* Photo Gallery */}

        <h3 className="text-3xl font-bold mb-8">📸 Photo Gallery</h3>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((photo) => (
            <div
              key={photo.id}
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition hover:scale-105 cursor-pointer"
              onClick={() => setSelectedImage(photo)}
            >
              <figure>
                <img
                  src={photo.image}
                  alt={photo.title}
                  className="h-72 w-full object-cover"
                />
              </figure>

              <div className="card-body">
                <h2 className="card-title">{photo.title}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Video Gallery */}

        <div className="mt-20">
          <h3 className="text-3xl font-bold mb-8">🎥 Video Gallery</h3>

          <div className="grid gap-8 lg:grid-cols-3">
            {videos.map((video) => (
              <div key={video.id} className="card bg-base-100 shadow-xl">
                <figure className="aspect-video">
                  <iframe
                    className="w-full h-full"
                    src={video.url}
                    title={video.title}
                    allowFullScreen
                  ></iframe>
                </figure>

                <div className="card-body">
                  <h2 className="card-title">{video.title}</h2>

                  <button className="btn btn-primary">Watch Video</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}

        <div className="hero bg-primary rounded-3xl mt-20">
          <div className="hero-content text-center text-primary-content">
            <div>
              <h2 className="text-4xl font-bold">Become Part of Our Story</h2>

              <p className="py-5">
                Join Freedom Dance Studio and create unforgettable memories
                through Salsa, Bachata, Kizomba, Konpa, performances, workshops,
                and live music.
              </p>

              <button className="btn btn-secondary">Join Us Today</button>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}

      {selectedImage && (
        <dialog className="modal modal-open">
          <div className="modal-box max-w-5xl">
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="rounded-xl w-full"
            />

            <h3 className="font-bold text-2xl mt-4">{selectedImage.title}</h3>

            <div className="modal-action">
              <button className="btn" onClick={() => setSelectedImage(null)}>
                Close
              </button>
            </div>
          </div>

          <form method="dialog" className="modal-backdrop">
            <button onClick={() => setSelectedImage(null)}>close</button>
          </form>
        </dialog>
      )}
    </section>
  );
}
