import React from 'react';
/** nav link **/
import {NavLink} from 'react-router-dom';
/** will return the main nav with links to preselects space,nba,mlb, nfl **/
const Nav = () => {
  return (
  <div>
    <nav class='main-nav'>
      <ul>
        <li><NavLink to ='/search'>Space Searches</NavLink></li>
        <li><NavLink to='/nba'>The Nba Pictures</NavLink></li>
        <li><NavLink to='/mlb'>The Mlb Pictures</NavLink></li>
        <li><NavLink to='/nfl'>The Nfl Pictures</NavLink></li>
      </ul>
    </nav>
  </div>
  )
};

export default Nav;
