'use client';
import React, {ComponentType, FC, useEffect, useState} from 'react';
import {appStore} from "@/stores/counterStore";
import styles from './index.module.scss'
import classNames from "classnames";

const withShake =<P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  const Shaker: FC<P> = (props) => {
    const app = appStore();
    const [isShaking, setIsShaking] = useState(false);


    useEffect(() => {
      if (isShaking) {
        const timer = setTimeout(() => {
          setIsShaking(false);
          app.increaseState({ shakeLevel: -app.shakeLevel })
        }, 1000);

        return () => clearTimeout(timer);
      }
    }, [isShaking]);

    useEffect(() => {
      if(app.shakeLevel > 0){
        setIsShaking(true);
      }
    }, [app.shakeLevel]);

    return (
      <div
        className={classNames(styles.screen, {
          [styles.shake]: isShaking
        })}
        style={{"--shake-intensity": app.shakeLevel}  as React.CSSProperties }
      >
        <WrappedComponent {...(props as P)} />
      </div>
    );
  }

  return Shaker;
};

export default withShake;
