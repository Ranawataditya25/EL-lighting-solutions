import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@tanstack/react-query';
import { YoutubeVideo } from '@shared/schema';
import VideoCard from '@/components/youtube/VideoCard';
import CategoryFilter from '@/components/youtube/CategoryFilter';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';

const VideosPage = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [categories, setCategories] = useState<string[]>([]);

  const { 
    data: videos, 
    isLoading, 
    isError,
    error 
  } = useQuery<YoutubeVideo[]>({ 
    queryKey: ['/api/youtube-videos'],
    enabled: activeCategory === null
  });

  const { 
    data: filteredVideos, 
    isLoading: isLoadingFiltered,
    isError: isErrorFiltered 
  } = useQuery<YoutubeVideo[]>({ 
    queryKey: [`/api/youtube-videos/category/${activeCategory}`, activeCategory],
    enabled: activeCategory !== null
  });

  const displayedVideos = activeCategory === null ? videos : filteredVideos;
  const isLoadingVideos = activeCategory === null ? isLoading : isLoadingFiltered;
  const hasError = activeCategory === null ? isError : isErrorFiltered;

  // Extract unique categories from videos
  useEffect(() => {
    if (videos) {
      const uniqueCategories = Array.from(
        new Set(
          videos
            .filter((video: YoutubeVideo) => video.category)
            .map((video: YoutubeVideo) => video.category as string)
        )
      );
      setCategories(uniqueCategories);
    }
  }, [videos]);

  // Loading skeleton for videos
  const VideoSkeleton = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-md">
      <Skeleton className="w-full h-48" />
      <div className="p-6">
        <Skeleton className="h-7 w-3/4 mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-2/3 mb-4" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-28" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto px-4 py-12">
      <Helmet>
        <title>PhysioForU | Tutorial Videos</title>
        <meta name="description" content="Watch our instructional physiotherapy tutorial videos to learn exercises and techniques for pain relief and rehabilitation." />
      </Helmet>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Tutorial Videos</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Watch our instructional physiotherapy videos to learn proper exercises and 
          techniques to help with pain relief and rehabilitation at home.
        </p>
      </div>

      {/* Category filter */}
      {categories.length > 0 && (
        <CategoryFilter 
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
      )}

      {/* Error state */}
      {hasError && (
        <div className="text-center py-16">
          <h3 className="text-xl font-medium text-gray-900 mb-2">
            Unable to load videos
          </h3>
          <p className="text-gray-500 mb-6">
            There was an error loading the videos. Please try again later.
          </p>
          <Button 
            onClick={() => window.location.reload()}
            className="bg-primary hover:bg-primary/90"
          >
            Refresh Page
          </Button>
        </div>
      )}

      {/* Loading state */}
      {isLoadingVideos && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <VideoSkeleton key={index} />
          ))}
        </div>
      )}

      {/* Videos grid */}
      {!isLoadingVideos && !hasError && displayedVideos && (
        <>
          {displayedVideos.length === 0 ? (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No videos found
              </h3>
              <p className="text-gray-500">
                {activeCategory 
                  ? `No videos found in the "${activeCategory}" category.` 
                  : "No videos are currently available."}
              </p>
              {activeCategory && (
                <Button 
                  onClick={() => setActiveCategory(null)}
                  variant="outline"
                  className="mt-4"
                >
                  View All Videos
                </Button>
              )}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayedVideos.map((video: YoutubeVideo) => (
                <VideoCard key={video.id} video={video} />
              ))}
            </div>
          )}
        </>
      )}

      {/* Channel link */}
      <div className="text-center mt-12 pt-8 border-t border-gray-200">
        <h3 className="text-xl font-bold mb-3">Want to see more videos?</h3>
        <p className="text-gray-600 mb-4">
          Visit our YouTube channel for more physiotherapy tutorials and guidance.
        </p>
        <a 
          href="https://www.youtube.com/@physioforu" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-medium px-6 py-3 rounded-lg transition duration-200"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="currentColor" 
            viewBox="0 0 24 24"
            className="w-5 h-5"
          >
            <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
          </svg>
          Visit Our YouTube Channel
        </a>
      </div>
    </div>
  );
};

export default VideosPage;