import React, {Component} from 'react';
/** will handle submition of the form from the user search input **/
export default
class Search extends Component {
  state = {
    searchInput: ''
  }
  onSearching = event => {
    event.preventDefault();
    this.setState({searchInput: event.target.value});
  }
  onSubmition = event => {
    event.preventDefault();
    this.props.onSearch(this.state.searchInput);
    event.currentTarget.reset();
  }
/** will return the search form with onSubmition event onSubmit and onSearching onChange **/
  render(){
    return (
      <div>
        <form class='search-form' onSubmit={this.onSubmition}>
          <input type='search' onChange={this.onSearching} name='search' ref={(input) => this.userSearch = input} placeholder='search picture here' />
          <button type='submit'>Search Here</button>
        </form>
      </div>
    );
  }
}
