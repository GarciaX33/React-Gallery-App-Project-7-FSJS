import React from 'react';

const GalleryItem = props => {
  /** will return the photo-container with Gallery Item through props.url **/
  return (
    <div>
      <li className='photo-container ul li'>
        <img className='photo-container ul img' src={props.url} alt='pics' />
      </li>
    </div>
  );
};

export default GalleryItem;
