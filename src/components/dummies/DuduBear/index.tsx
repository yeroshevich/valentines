import React from 'react';
import Dudu from "@/components/ui/Dudu";
import {useBearCatching} from "@/components/dummies/DuduBear/useBearCatching";
import styles from './index.module.scss'
import classNames from "classnames";

const DuduBear = () => {
  const { duduRef, stage, handleClick, messageRef } = useBearCatching(4);

  return (
    <div>
      <Dudu
        className={styles.duduImage}
        ref={duduRef}
        stage={stage}
        onClick={handleClick}
      />
      <div className={classNames(styles.duduImage, styles.duduMessage)} ref={messageRef}>
        Я правда тебя очень люблю
      </div>
    </div>
  );
};

export default DuduBear;
