import React from 'react';
import Thumbnail from './thumbnail';

class ThumbnailList extends React.Component {
    render() {
      var list = this.props.thumbnailData.map(function(thumbnailProps, i) {
          return <Thumbnail key={i} {...thumbnailProps} />
      });

      return <div>
          {list}
      </div>;
    }
}

export default ThumbnailList;
