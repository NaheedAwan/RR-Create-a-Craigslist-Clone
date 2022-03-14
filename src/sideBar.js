import React from 'react'  
import Help from './help.js'

const liStyle = {
    'display' : 'inline',
    'margin' : '2px',
    'padding' : '1px',
    'border' : '1px solid black'
}

function SideBar() {
    return(
        <div className="sidebar">
            <h3> Listings</h3>
            <div>
                <ul>
                    <li style={liStyle}>All</li>
                    <li style={liStyle}>Owner</li>
                    <li style={liStyle}>Dealer</li>
                </ul>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eu pretium erat. Maecenas in faucibus nibh, in ullamcorper sapien. Aenean ac tincidunt diam, ut rhoncus ex. Etiam ultricies tincidunt malesuada. Etiam et porta ipsum. Duis euismod ipsum lorem, et semper felis fermentum in. Nunc maximus cursus magna in semper. Nam posuere lacus rutrum semper dictum.</p>
            <Help/>
        </div>
      
       
    )
}
export default SideBar