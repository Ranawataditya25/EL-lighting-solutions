import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { YoutubeVideo } from '@shared/schema';
import { Skeleton } from '@/components/ui/skeleton';

// Fetch function for videos API
async function fetchYoutubeVideos(): Promise<YoutubeVideo[]> {
  const response = await fetch('/api/youtube-videos');
  if (!response.ok) {
    throw new Error('Failed to fetch videos');
  }
  return response.json();
}

const VideosSection: React.FC = () => {
  const { data: videos, isLoading, isError } = useQuery<YoutubeVideo[], Error>({
    queryKey: ['/api/youtube-videos'],
    queryFn: fetchYoutubeVideos,
  });

  const displayedVideos = videos?.slice(0, 3);

  const VideoSkeleton = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Skeleton className="w-full h-48" />
      <div className="p-6">
        <Skeleton className="h-7 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Tutorial Videos</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Watch our instructional physiotherapy videos to learn proper exercises and techniques for pain relief and rehabilitation.
          </p>
        </div>

        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[...Array(3)].map((_, idx) => (
              <VideoSkeleton key={idx} />
            ))}
          </div>
        )}

        {isError && (
          <div className="text-center py-8">
            <p className="text-gray-600 mb-4">Unable to load videos at this time.</p>
          </div>
        )}

        {!isLoading && !isError && displayedVideos && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {displayedVideos.map((video) => (
                <div
                  key={video.id}
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300"
                >
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
                      <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="white"
                          className="w-6 h-6 ml-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  </a>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 line-clamp-1">{video.title}</h3>
                    {video.description && (
                      <p className="text-gray-600 mb-4 line-clamp-2">{video.description}</p>
                    )}
                    <p className="text-sm text-primary font-medium">
                      {video.category || 'Physiotherapy'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/videos">
                <Button className="bg-primary hover:bg-primary/90">
                  View All Tutorial Videos
                </Button>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default VideosSection;
