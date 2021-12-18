import React from 'react'
import "../styling/search_box.css"

const Search_box= () => {
    window.onload = function() {
      const searchBtn = document.querySelector(".search-btn");
      const cancelBtn = document.querySelector(".cancel-btn");
      const searchBox = document.querySelector(".search-box");
      
      searchBtn.onclick = () => {
        searchBox.classList.add("active");
      }
      
      cancelBtn.onclick = () => {
        searchBox.classList.remove("active");
      }
    
    }

    return (
      <div className="search-box">
      <input type="text" placeholder="Type to search..."></input>
        <div className="search-btn">
          <i className="fas fa-search"></i>
        </div>
        
        <div className="cancel-btn">
          <i className="fas fa-times"></i>
        </div>
      </div>
    )
};

export default Search_box
