'use client';
import Image from "next/image";
import Card from './components/Card'
import { useState } from "react";
export default function Home() {
  const [card, setCard] = useState( [
    { id: 0, content: '😄', isFlipped: false, isMatched: false }])
    const handleFlip = ()=>{
      console.log(card)
      setCard((prevCard) => ({ ...prevCard, isFlipped: !prevCard.isFlipped }));
    }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
 
      <Card card={card} handleFlip={()=>handleFlip()}/>
    
    </main>
  );
}
