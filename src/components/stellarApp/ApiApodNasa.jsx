import React, { useState, useEffect } from "react";
import moment from "moment";

const apiKey = process.env.REACT_APP_NASA_KEY;

const ApiApodNasa = () => {
  const [media, setMedia] = useState(null);

  useEffect(() => {
    fetchMedia();

    async function fetchMedia() {
      const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
      const res = await fetch(url);
      const data = await res.json();
      setMedia(data);
      console.log(data);
    }
  }, []);

  if (!media) return <div />;

  return (
    <div className="api-apod-nasa container text-center mt-5">
      {media.media_type === "image" ? (
        <img src={media.url} alt={media.title} className="w-100" />
      ) : (
        <iframe
          style={{ height: 650 }}
          title="space-video"
          src={media.url}
          frameBorder="0"
          allow="encrypted-media"
          allowFullScreen
          className="w-100 border"
        />
      )}
      <div>
        <h2>{media.title}</h2>
        <p className="text-center">
          {moment(media.date).format("DD - MM - YYYY")}
        </p>
        <p className="text-justify">{media.explanation}</p>
      </div>
    </div>
  );
};

export default ApiApodNasa;
