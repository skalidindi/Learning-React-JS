import React from 'react';
import Thumbnail from './thumbnail';

class ThumbnailList extends React.Component {
  render() {
    const list = this.props.thumbnailData.map(
      (thumbnailProps, i) => <Thumbnail key={i} {...thumbnailProps}/>
    );

    return <div>{list}</div>;
  }
}

ThumbnailList.propTypes = { thumbnailData: React.PropTypes.array };
export default ThumbnailList;
