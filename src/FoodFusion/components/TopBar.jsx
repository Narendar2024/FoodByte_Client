// eslint-disable-next-line no-unused-vars
<<<<<<< HEAD
import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <section className="topBarSection">
      <div className="companyTitle">
        <Link to="/">
          <h2>Food Fusion</h2>
        </Link>
      </div>
      <div className="SearchBar">
        <input type="text" placeholder="search..." />
      </div>
      <div className="userAuth">Login / SignUp</div>
    </section>
  );
=======
import React from 'react';
import { Link } from 'react-router-dom';

const TopBar = () => {
    return (
        <section className='topBarSection'>
            <div className="companyTitle">
                <Link to='/'>
                    <h2>Food Fusion</h2>
                </Link>
            </div>
            <div className="SearchBar">
                <input type="text" placeholder='search...' />
            </div>
            <div className="userAuth">
                Login / SignUp
            </div>
        </section>
    );
>>>>>>> e1d15860f011f6d08b1f7edeb4b50e75bd979ad4
};

export default TopBar;
