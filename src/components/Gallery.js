import React from 'react';
import GalleryItem from './Gallery-Item';

/** will return the pictures to display in the container **/
const Gallery = props => {

  //props.onRefreshing();
  const outcome = props.data;
  let pictures;
  if (outcome.length > 0) {
    pictures = outcome.map(picture =>
      <GalleryItem url={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} key={picture.id} />)
  } else {
    console.log('Error');
  }
/** will return search outcome with photo-container containing the pictures object **/
  return (
    <div className='photo-container'>
      <h2> Your Search Outcome</h2>
      <ul className='photo-container ul'>
        {pictures}
      </ul>
    </div>
  )
};

export default Gallery;
