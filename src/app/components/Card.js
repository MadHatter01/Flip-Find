'use client';
import React from 'react';

const Card = ({ card, handleFlip }) => {
    return (
        <div onClick={() => handleFlip(card)} className={`card ${card.isFlipped ? 'flipped' : ''}`}>
            <div className='card-front'>
                {card.isFlipped ? card.content : ''}
            </div>

            <div className='card-back'></div>
        </div>
    )
}

export default Card;