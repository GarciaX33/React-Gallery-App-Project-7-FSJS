import React, { Component } from 'react';
import './App.css';
import './index.css';
import apiKey from './config'; /** APIKey | Import config file **/
import axios from 'axios';
/** will import BR, Route, Switch from react router **/
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
/** will import components **/
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import Search from './components/Search';



var isMounted = false;
export default
class App extends Component {


  /** will initialize state **/
  constructor() {
    super();
    this.state = {
      pictures: [], /** pictures array **/
      nba: [],  /** nba array **/
      mlb: [], /** mlb array **/
      nfl: [],  /** nfl array **/
    }
  }
  /** will invoke immediately after a component is mounted **/
  componentDidMount() {
    this.spaceSearch();
    this.nbaSearch();
    this.mlbSearch();
    this.nflSearch();
    isMounted = true
  }

  // componentDidUpdate(){
  //
  // }


/** performSearch function, requesting data**/
/** will fetch with get method using axios **/
  spaceSearch = (query = 'space') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        /** will call this set state to flickr photos.search **/
        this.setState({
          pictures: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error'); /** will console log error **/
      });
  }
  nbaSearch = (query = 'nba') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        /** will call this set state **/
        this.setState({
          nba: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error');
      });
  }
  mlbSearch = (query = 'mlb') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        /** will call this set state **/
        this.setState({
          mlb: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error');
      });
  }
  nflSearch = (query = 'nfl') => {
    axios.get(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => {
        /** will call this set state**/
        this.setState({
          nfl: response.data.photos.photo
        });
      })
      .catch(error => {
        console.log('Error');
      });
  }
  /** reload function for OnClick using isMounted variable**/
  reload = ()=>{
    if(isMounted===true){
      window.location.reload();
    }
  }

  /** will render BrowserRouter and Switch to return container with set routes **/
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <header>
            <Route exact path="/" component={() => <Search onSearch={this.spaceSearch} />}/>
            <Route exact path="/nba" component={() => <Search onSearch={this.nbaSearch} />} />
            <Route exact path="/mlb" component={() => <Search onSearch={this.mlbSearch} />}/>
            <Route exact path="/nfl" component={() => <Search onSearch={this.nflSearch} />}/>
            <Route exact path="/search" component={() => <Search onSearch={this.spaceSearch} Redirect to= "/search" />}/>
          </header>
          <div onClick={this.reload}>
          <Nav
           space={this.state.pictures}
           mlb={this.state.mlb}
           nba={this.state.nba}
           nfl={this.state.nfl}
          />
          </div>
          <Switch>
              <Route exact path="/search" render={ () => <Gallery data={this.state.pictures} /> } />
              <Route exact path='/' render={() => <Gallery data={this.state.pictures} />} />
              <Route exact path= '/mlb' render={() => <Gallery data={this.state.mlb} />} />
              <Route exact path= '/nba' render={() => <Gallery data={this.state.nba} />} />
              <Route exact path= '/nfl' render={() => <Gallery data={this.state.nfl} />} />
          </Switch>
        </div>
      </BrowserRouter>

    );
  }

}
