import { useState } from "react";
import {
  Maximize,
  Camera,
  Video,
  X,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// ====================== PHOTOS ======================
import dance2 from "../assets/recentClip1.jpeg";
import dance3 from "../assets/recentClip2.jpeg";
import dance5 from "../assets/lady/followerClip.jpeg";

import party1 from "../assets/sbkParty/FJ8A6466.jpg";
import party2 from "../assets/sbkParty/FJ8A6603.jpg";

import concert2 from "../assets/concert-freedom-jazz/P1990974.jpg";

// ====================== VIDEOS ======================
import { videos } from "../data/video";

// ====================== PHOTO DATA ======================
const images = [
  {
    id: 1,
    title: "SBK Social Night",
    image: party1,
    category: "Social",
  },
  {
    id: 2,
    title: "Bachata Ladies",
    image: dance5,
    category: "Bachata",
  },
  {
    id: 3,
    title: "Salsa Group",
    image: dance3,
    category: "Salsa",
  },
  {
    id: 4,
    title: "Party Night",
    image: party2,
    category: "Events",
  },
  {
    id: 5,
    title: "Freedom Dance Family",
    image: dance2,
    category: "Community",
  },
  {
    id: 6,
    title: "Live Orchestra",
    image: concert2,
    category: "Live Music",
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  // =====================================================
  // REMOVE THE STUDENT INTERVIEW FROM THE GALLERY
  // =====================================================
  const galleryVideos = videos.filter(
    (video) => video.title !== "A Student’s Experience at Freedom Dance Studio",
  );

  // =====================================================
  // CONVERT YOUTUBE URL TO EMBED URL
  // =====================================================
  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";

    try {
      const parsedUrl = new URL(url);

      // https://youtu.be/VIDEO_ID
      if (parsedUrl.hostname === "youtu.be") {
        const videoId = parsedUrl.pathname.substring(1);

        return `https://www.youtube.com/embed/${videoId}`;
      }

      // https://www.youtube.com/watch?v=VIDEO_ID
      if (parsedUrl.hostname.includes("youtube.com")) {
        const videoId = parsedUrl.searchParams.get("v");

        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
      }

      return url;
    } catch (error) {
      console.error("Invalid YouTube URL:", url);
      return "";
    }
  };

  return (
    <section className="bg-base-200 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* ================================================= */}
        {/* HEADER */}
        {/* ================================================= */}

        <div className="text-center mb-16">
          <div className="badge badge-primary badge-lg gap-2 mb-4">
            <Camera size={16} />
            Freedom Dance Studio
          </div>

          <h2 className="text-4xl md:text-6xl font-black text-primary">
            Our Gallery
          </h2>

          <p className="mt-5 text-base md:text-lg text-base-content/70 max-w-3xl mx-auto">
            Relive the energy of our dance classes, socials, performances,
            workshops, and live music events.
          </p>
        </div>

        {/* ================================================= */}
        {/* PHOTO GALLERY */}
        {/* ================================================= */}

        <div className="flex items-center gap-3 mb-8">
          <div className="badge badge-primary badge-lg">
            <Camera size={17} />
          </div>

          <h3 className="text-3xl font-black">Photo Gallery</h3>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {images.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedImage(photo)}
              className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-base-100
                shadow-xl
                cursor-pointer
                transition-all
                duration-700
                hover:-translate-y-3
                hover:shadow-2xl
                animate-[fadeInUp_0.7s_ease-out]
              "
              style={{
                animationDelay: `${index * 100}ms`,
                animationFillMode: "both",
              }}
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={photo.image}
                  alt={photo.title}
                  loading="lazy"
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-110
                    group-hover:rotate-1
                  "
                />

                {/* Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/90
                    via-black/20
                    to-transparent
                    opacity-70
                    group-hover:opacity-90
                    transition-opacity
                    duration-500
                  "
                />

                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="badge badge-primary shadow-lg">
                    {photo.category}
                  </span>
                </div>

                {/* Center button */}
                <div
                  className="
                    absolute
                    inset-0
                    flex
                    items-center
                    justify-center
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                  "
                >
                  <div
                    className="
                      btn
                      btn-circle
                      btn-lg
                      btn-primary
                      shadow-2xl
                      scale-75
                      group-hover:scale-100
                      transition-transform
                      duration-500
                    "
                  >
                    <Maximize size={24} />
                  </div>
                </div>

                {/* Title */}
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h4 className="text-2xl font-bold">{photo.title}</h4>

                  <p
                    className="
                      text-sm
                      opacity-0
                      translate-y-3
                      group-hover:opacity-90
                      group-hover:translate-y-0
                      transition-all
                      duration-500
                    "
                  >
                    Click to view
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ================================================= */}
        {/* YOUTUBE VIDEO GALLERY */}
        {/* ================================================= */}

        <div className="mt-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="badge badge-secondary badge-lg">
              <Video size={17} />
            </div>

            <h3 className="text-3xl font-black">Video Gallery</h3>
          </div>

          <p className="text-base-content/60 mb-8">
            Watch our latest dance videos directly from YouTube.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {galleryVideos.map((video) => {
              const embedUrl = getYouTubeEmbedUrl(video.url);

              return (
                <div
                  key={video.id}
                  className="
                    group
                    card
                    bg-base-100
                    shadow-xl
                    overflow-hidden
                    rounded-3xl
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:shadow-2xl
                  "
                >
                  {/* YouTube Player */}
                  <div className="relative aspect-video bg-black overflow-hidden">
                    <iframe
                      src={embedUrl}
                      title={video.title}
                      className="w-full h-full"
                      loading="lazy"
                      allow="
                        accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture;
                        web-share
                      "
                      allowFullScreen
                    />
                  </div>

                  {/* Video information */}
                  <div className="card-body">
                    <h2 className="card-title text-xl md:text-2xl">
                      {video.title}
                    </h2>

                    <p className="text-base-content/60">
                      Watch this video from Freedom Dance Studio.
                    </p>

                    <div className="card-actions justify-end mt-3">
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary gap-2"
                      >
                        Watch on YouTube
                        <ExternalLink size={17} />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ================================================= */}
        {/* CTA */}
        {/* ================================================= */}

        <div className="hero bg-primary rounded-3xl mt-20 shadow-2xl overflow-hidden">
          <div className="hero-content text-center text-primary-content py-14 px-6">
            <div className="max-w-2xl">
              <div className="badge badge-secondary mb-4">Join the Family</div>

              <h2 className="text-3xl md:text-5xl font-black">
                Become Part of Our Story
              </h2>

              <p className="py-5 opacity-90 text-base md:text-lg">
                Join Freedom Dance Studio and create unforgettable memories
                through Salsa, Bachata, Kizomba, Konpa, performances, workshops,
                and live music.
              </p>

              <button
                className="btn btn-secondary btn-lg gap-2"
                onClick={() => navigate("/contact")}
              >
                Join Us Today
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================= */}
      {/* IMAGE MODAL */}
      {/* ================================================= */}

      {selectedImage && (
        <dialog className="modal modal-open">
          <div
            className="
              modal-box
              max-w-6xl
              p-0
              overflow-hidden
              bg-base-100
              shadow-2xl
            "
          >
            {/* Image */}
            <div className="relative">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="
                  w-full
                  max-h-[75vh]
                  object-contain
                  bg-black
                "
              />

              {/* Close */}
              <button
                onClick={() => setSelectedImage(null)}
                className="
                  btn
                  btn-circle
                  btn-sm
                  absolute
                  top-4
                  right-4
                  bg-black/60
                  text-white
                  border-none
                  hover:bg-black/80
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Information */}
            <div className="p-6">
              <div className="badge badge-primary mb-3">
                {selectedImage.category}
              </div>

              <h3 className="font-black text-2xl md:text-3xl">
                {selectedImage.title}
              </h3>

              <div className="modal-action">
                <button className="btn" onClick={() => setSelectedImage(null)}>
                  Close
                </button>
              </div>
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
