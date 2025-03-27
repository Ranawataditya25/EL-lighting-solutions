import { YoutubeVideo } from "@shared/schema";

interface VideoCardProps {
  video: YoutubeVideo;
}

const VideoCard = ({ video }: VideoCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
      <div className="relative">
        <a 
          href={`https://www.youtube.com/watch?v=${video.videoId}`} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block relative"
        >
          <img 
            src={video.thumbnailUrl || `https://img.youtube.com/vi/${video.videoId}/maxresdefault.jpg`} 
            alt={video.title} 
            className="w-full h-48 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 24 24" 
                fill="white" 
                className="w-8 h-8 ml-1"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{video.title}</h3>
        {video.description && (
          <p className="text-text-secondary mb-4">{video.description}</p>
        )}
        <div className="flex justify-between items-center">
          <span className="text-sm text-primary font-medium">
            {video.category || "Physiotherapy"}
          </span>
          <a 
            href={`https://www.youtube.com/watch?v=${video.videoId}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary font-medium hover:text-secondary transition duration-200 inline-flex items-center"
          >
            Watch Video <i className="fas fa-external-link-alt ml-2"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;