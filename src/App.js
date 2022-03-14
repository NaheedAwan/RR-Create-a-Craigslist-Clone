import React from 'react'
// Import data
import {postings} from "./postings.js"

// Import components
import './App.css';
import Gallery from './gallery.js'
import Directory from "./directory.js"

import SearchBar from "./searchBar.js"
import SideBar from './sideBar.js';

function App(){
  return (
    <div>
      <h1> <h1>Naheed List!!!</h1></h1>
      <div className="App">
       
        <SideBar/>
        <SearchBar/>
        <Directory/>
        <Gallery posting={postings}/>

        {/* Your content will go here! */}
      </div>
    </div>
  );
}

export default App;
