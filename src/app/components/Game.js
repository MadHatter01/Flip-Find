'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';


const generateCards = () =>{
    const emojis = ['😀', '😃', '😄', '😁', '😆', '😅'];
    const cards = emojis.concat(emojis).map((
        emoji, index)=>({
            id: index, content: emoji, isFlipped: false, isMatched:false
        })).sort(()=>Math.random()-0.5)
    
    return cards

}


const Game = ()=>{
  
    const [cards, setCards] = useState(generateCards());
    const [flippedCards, setFlippedCards] = useState([]);


    useEffect(()=>{
        if (flippedCards.length == 2){
            console.log('matching logic')
        }
    }, [flippedCards])

        const handleFlip = (clickedCard)=>{
            if (!clickedCard.isFlipped & flippedCards.length < 2){
                setCards((prevCards)=>
                prevCards.map((card)=>{
                    return card.id===clickedCard.id ? {...card, isFlipped:true}: card
                }))
                setFlippedCards((prevFlipped)=>[...prevFlipped, clickedCard])

            }
        }
    return(
        <div  className="grid grid-cols-4 gap-8">
            {cards.map((card)=>{
                return(
                <Card key = {card.id} card={card} handleFlip={()=>handleFlip(card)}/>

           ) })}

        </div>
    )
}


export default Game