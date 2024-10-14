// eslint-disable-next-line no-unused-vars
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
};

export default TopBar;