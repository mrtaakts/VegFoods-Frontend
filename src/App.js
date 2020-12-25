import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    categories: []
  }
  componentDidMount() {
    axios.get('https://localhost:44357/api/categories').then((response)=> {
      this.setState({
        categories: response.data
      })
    })
    
    
  }
  render() {
      return (
    <div className="App">
      <header className="App-header">
        <h3>List of Categories</h3>
        <ul>
          {this.state.categories.map((category) => (
            <li key="{category.id}" >{ category.name } </li>
            
          ))}
        </ul>
      </header>
    </div>
  );
  }
}
export default App;