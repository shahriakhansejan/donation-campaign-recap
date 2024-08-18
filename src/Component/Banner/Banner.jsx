import React, { useState } from 'react';
import PropTypes from 'prop-types';
import bannerImg from '../../assets/campaign.png';
import './banner.css'

const Banner = ({handleSearch}) => {
    const [searchValue, setSearchValue] = useState('');

    const handleInputChange = (event) =>{
        setSearchValue(event.target.value);
    };
    const onSearchClick = () =>{
        handleSearch(searchValue);
    }
    

    return (
        <div className='bg-white/90 py-60 bg-cover bg-center bg-blend-overlay bgImg'>
            <div className='container mx-auto flex flex-col items-center'>
            <h1 className='text-5xl font-bold text-center text-[#0B0B0B]'>I Grow By Helping People In Need</h1>
            <div  className="join mt-10">

                <input id='input-search'
                className="input input-bordered join-item" placeholder="Search Here..." 
                value={searchValue}
                onChange={handleInputChange}
                />
                

                <button 
                onClick={onSearchClick}
                 className="btn join-item rounded-r-lg bg-red-500 text-white">Search</button>

            </div>
        </div>
        </div>
    );
};

Banner.propTypes = {

};

export default Banner;