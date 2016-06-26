import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = ({ videos, onVideoSelect }) => {
  const videoItems = videos.map(
    (video) =>
      <VideoListItem
        key={ video.id.videoId }
        onVideoSelect={ onVideoSelect }
        video={ video }
      />
  );

  return (
    <ul className="col-md-4 list-group">
      { videoItems }
    </ul>
  );
};

VideoList.propTypes = {
  videos: React.PropTypes.array,
  onVideoSelect: React.PropTypes.func,
};

export default VideoList;
