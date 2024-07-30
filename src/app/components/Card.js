'use client';
import React from 'react';

const Card = ({ card, handleFlip }) => {
    return (
        <div onClick={() => handleFlip(card)} className={`card ${card.isFlipped ? 'flipped' : ''}`}>
     {card.isFlipped ? card.content : '?'}
        </div>
    )
}

export default Card;