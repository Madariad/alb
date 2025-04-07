import React, { useState } from 'react';
import Player from './Player';
import { Play } from 'lucide-react';
import './edu.css'

export default function Education() {
  const [currentVideo, setCurrentVideo] = useState(0);

  const playlist = [
    {
      id: 1,
      title: "Урок 1",
      url: "https://www.youtube.com/watch?v=ZpLI2802pxM&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA",
      duration: "18:23"
    },
    {
      id: 2,
      title: "Урок 2.",
      url: "https://www.youtube.com/watch?v=prz_YUoFXRs&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=2",
      duration: "23:00"
    },
    {
      id: 3,
      title: "Урок 3",
      url: "https://www.youtube.com/watch?v=niSLOWhdm0Y&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=3",
      duration: "31:36"
    },
    {
        id: 4,
        title: "Урок 4",
        url: "https://www.youtube.com/watch?v=Pgbrnf7FHMw&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=4",
        duration: "25:53"
      },
      {
        id: 5,
        title: "Урок 5",
        url: "https://www.youtube.com/watch?v=KOlmb8OmEx4&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=5",
        duration: "32:01"
      },
      {
        id: 6,
        title: "Урок 6",
        url: "https://www.youtube.com/watch?v=ofkC5aWasSA&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=6",
        duration: "16:00"
      },
      {
        id: 7,
        title: "Урок 7",
        url: "https://www.youtube.com/watch?v=qH20CEixxB4&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=7",
        duration: "19:21"
      },
      {
        id: 8,
        title: "Урок 8",
        url: "https://www.youtube.com/watch?v=s1WSEAxh21g&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=8",
        duration: "26:07"
      },
      
      {
          id: 9,
          title: "Урок 9",
          url: "https://www.youtube.com/watch?v=bb28R_xR2Ok&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=9",
          duration: "7:06"
        },
        {
          id: 10,
          title: "Урок 10",
          url: "https://www.youtube.com/watch?v=njz1at6ZjXQ&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=10",
          duration: "16:38"
        },
        {
          id: 11,
          title: "Урок 11",
          url: "https://www.youtube.com/watch?v=8dGtGOPNT5o&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=11",
          duration: "15:57"
        },
        {
            id: 12,
            title: "Урок 12",
            url: "https://www.youtube.com/watch?v=4kqAl3HpMEU&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=12",
            duration: "17:37"
          },

          {
            id: 13,
            title: "Урок 13",
            url: "https://www.youtube.com/watch?v=WmVoGe2HO4Y&list=PLnnFSS9Rswo3a2TPHcf2jMP2EsV1g7asA&index=13",
            duration: "1:26:18"
          },
   
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-2 md:p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-4 md:mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Курс <span className="text-blue-500">GeoGebra</span>
          </h1>
          <p className="mt-2 text-sm md:text-base text-gray-600">
            Полный курс по изучению GeoGebra
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Video Player - Full width on mobile */}
          <div className="lg:col-span-2 -mx-2 md:mx-0">
            <div className="bg-white shadow-lg overflow-hidden md:rounded-2xl">
              <div className="aspect-video w-full">
                <Player url={playlist[currentVideo].url} />
              </div>
              <div className="p-3 md:p-4">
                <h2 className="text-lg md:text-xl font-semibold text-gray-900">
                  {playlist[currentVideo].title}
                </h2>
                <p className="mt-1 text-xs md:text-sm text-gray-500">
                  Урок {currentVideo + 1} из {playlist.length}
                </p>
              </div>
            </div>
          </div>

          {/* Playlist - Shorter on mobile */}
          <div className="bg-white shadow-lg md:rounded-2xl p-3 md:p-4 h-[400px] md:h-[600px] overflow-y-auto">
            <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-3 md:mb-4">
              Список уроков
            </h3>
            <div className="space-y-2">
              {playlist.map((video, index) => (
                <button
                  key={video.id}
                  onClick={() => setCurrentVideo(index)}
                  className={`
                    w-full flex items-center gap-2 md:gap-3 p-2 md:p-3 rounded-lg transition-all
                    ${currentVideo === index 
                      ? 'bg-blue-50 text-blue-600' 
                      : 'hover:bg-gray-50 text-gray-700'}
                  `}
                >
                  <div className={`
                    w-7 h-7 md:w-8 md:h-8 rounded-lg flex items-center justify-center
                    ${currentVideo === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-500'}
                  `}>
                    {currentVideo === index ? (
                      <Play size={14} className="md:w-4 md:h-4" fill="currentColor" />
                    ) : (
                      index + 1
                    )}
                  </div>
                  <div className="flex-1 text-left">
                    <h4 className="font-medium text-xs md:text-sm">
                      {video.title}
                    </h4>
                    <p className="text-[10px] md:text-xs text-gray-500">
                      {video.duration}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}