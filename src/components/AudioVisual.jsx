import React from 'react';

const AudioVisual = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-12">Audio-Visual Gallery</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* YouTube Video */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">YouTube Video</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96 rounded-lg" // Increased height to h-96
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your video URL
                title="YouTube Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Facebook Video */}
          <div className="shadow-lg rounded-lg overflow-hidden">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Facebook Video</h2>
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-96 rounded-lg" // Increased height to h-96
                src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FFacebookApp%2Fvideos%2F10153231379946729%2F&show_text=false" // Replace with your video URL
                title="Facebook Video"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioVisual;
