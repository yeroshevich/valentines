import React, {FC} from 'react';
import {ICardViewProps} from "@/components/dummies/CardView/types";
import styles from './index.module.scss';
import Button from "@/components/ui/Button";

const CardView: FC<ICardViewProps> = ({ onCardClick, card }) => {
  return (
    <div className={styles.card} onClick={onCardClick}>
      <header className={styles.card__title}>{card?.title}</header>
      <div className={styles.card__description}>
        {card?.description}
      </div>

      <Button>
        Тыкай сюда
      </Button>
    </div>
  );
};

export default CardView;
