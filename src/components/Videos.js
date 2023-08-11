import React, { useEffect, useState } from 'react';
import './Videos.css';
import axios from 'axios';

const Videos = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const apiKey = 'AIzaSyDb2FuBotGo8g_p7N5kuT4eoyp1Q_ZND1M';
      const playlistId = 'PLMC9KNkIncKvYin_USF1qoJQnIyMAfRxl';
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${playlistId}&key=${apiKey}`
      );
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div className="videos-container">
      {videos.map((video, index) => (
        <div className="video-item" key={index}>
          <a
            href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={video.snippet.thumbnails.default.url}
              alt={video.snippet.title}
              className="video-thumbnail"
            />
          </a>
          <div className="video-info">
            <h3>{video.snippet.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Videos;
