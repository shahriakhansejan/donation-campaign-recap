import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from 'react-router-dom';
import { getStoredApplication } from '../../utility/backEnd';

const Donation = () => {
    const cards = useLoaderData();

    const [donate, setDonate] = useState([]);

    useEffect( () =>{
        const donateCards = getStoredApplication();
        if(cards.length){
            const cardsDonate = [];
            for(const id of donateCards){
                const card = cards.find(card => card.id === id);
                if(card){
                    cardsDonate.push(card)
                }
            }
            setDonate(cardsDonate)
        }
    },[cards])
    return (
        <div>
            <h1>Donation page {donate.length
            }</h1>
        </div>
    );
};

Donation.propTypes = {
    
};

export default Donation;