import React, {CSSProperties, FC} from 'react';
import Heart from "@/components/ui/Heart";
import {IBouncedHeartProps} from "@/components/ui/BouncedHeart/types";
import styles from './index.module.scss';

const BouncedHeart: FC<IBouncedHeartProps> = ({ from, to }) => {
  return (
    <Heart
      className={styles.bouncedHeart}
      style={{
        '--bounce-from': `${from}px`,
        '--bounce-to': `${to}px`,
      } as CSSProperties}
    />
  );
};

export default BouncedHeart;
