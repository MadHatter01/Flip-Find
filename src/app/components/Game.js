'use client';
import React, { useState, useEffect } from 'react';
import Card from './Card';


const generateCards = () =>{
    const emojis = ['🥰', '😃', '😄', '😁', '😆', '😅'];
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
            const [first, second] = flippedCards;
            if(first.content === second.content){
                console.log('win')
            }
    
        else{
            setTimeout(() => {
                console.log('Flipping cards');
                setCards((prevCards) =>
                  prevCards.map((card) => {
                    if (card.id === first.id || card.id === second.id){
                      return { ...card, isFlipped: false };
                    }
                    return card;
                  })
                );
                setFlippedCards([]); 
              }, 1000);
            }}
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