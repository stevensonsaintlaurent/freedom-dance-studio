import { Play } from "lucide-react";

const videos = [
  {
    title: "Take a Tour of Freedom Dance Studio",
    description: "See the space, dance floor, and setup possibilities.",
    videoId: "pJqSAwVAjc8",
  },
  {
    title: "Freedom Dance Studio Space",
    description: "Take a closer look at the studio before booking.",
    videoId: "8ZKyjrjztQQ",
  },
];

export default function RentalVideo() {
  return (
    <section className="py-16 sm:py-20 bg-base-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Play size={16} />
            See the Studio
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold">
            See the Space Before You Book
          </h2>

          <p className="mt-4 text-base-content/70">
            Take a virtual look at Freedom Dance Studio and see what makes our
            space perfect for classes, events, workshops, parties, and private
            rentals.
          </p>
        </div>

        {/* Videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {videos.map((video) => (
            <div
              key={video.videoId}
              className="bg-base-100 rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative aspect-video w-full">
                <iframe
                  className="absolute inset-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${video.videoId}`}
                  title={video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-bold">{video.title}</h3>

                <p className="mt-2 text-base-content/70">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
