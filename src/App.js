import React, { useState } from 'react';
import Search from './cloneMain/Search';
import URL from './cloneMain/api/URL';
import Video from './cloneMain/Video';
import ListVideos from './cloneMain/ListVideos';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css'

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideos, setSelectedVideos] = useState({ id: {}, snippet: {} });

  async function videoSubmit(searchTerm) {
    const {data: { items: videos } } = await URL.get("search", {
      params: {
        part: "snippet",
        maxResults: 5,
        key: "AIzaSyC4HtSwSzpwlqoHnERzQLnCX5oRrljl1Uk",
        q: searchTerm
      }
    });

    console.log(videos);
    setVideos(videos);
    setSelectedVideos(videos[0]);
  }

  return (
    <div className='container text-white'>
      <div className="row m-5 ">
        <Search onSubmit={videoSubmit} />
      </div>
      <div className="row">
        <div className="col-8">
          <Video video={selectedVideos} />
        </div>
        <div className="col-4">
          <ListVideos videos={videos} onVideoSelect={setSelectedVideos} />
        </div>
      </div>
    </div>
  );
};

export default App;