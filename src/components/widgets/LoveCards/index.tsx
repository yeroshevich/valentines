'use client';
import React, {useMemo} from 'react';
import {LOVE_CARDS} from "@/components/widgets/LoveCards/constants";
import CardView from "@/components/dummies/CardView";
import {appStore} from "@/stores/counterStore";
import BouncedHeart from "@/components/ui/BouncedHeart";

const LoveCards = () => {
  const [cardIndex, setCardIndex] = React.useState<number>(0);
  const app = appStore();

  const card = useMemo(() => {
    return LOVE_CARDS[cardIndex];
  }, [cardIndex]);

  const handleCardChange = () => {
   if(cardIndex < LOVE_CARDS.length - 1) {
     setCardIndex(p => p + 1);
     app.increaseState({ heartsSpeed: 15, heartsSize: 10, shakeLevel: 2 });
   }
  }

  if(cardIndex === LOVE_CARDS.length - 1) {
    return <BouncedHeart from={150} to={500} />
  }

  return (
    <CardView onCardClick={handleCardChange} card={card} />
  );
};

export default LoveCards;
