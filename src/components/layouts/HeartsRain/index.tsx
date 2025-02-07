'use client';
import React, {FC, PropsWithChildren} from 'react';
import Heart from "@/components/ui/Heart";
import styles from './index.module.scss';
import {useHearts} from "@/components/layouts/HeartsRain/useHearts";
import withShake from "@/components/wrapper/Shaker";

const HeartsRainLayout: FC<PropsWithChildren> = withShake(({ children }) => {
  const { hearts, heartSize } = useHearts()


  return (
    <div className={styles.layout}>
      <div>
        {hearts.map((heart, index) => (
          <div
            key={`header-${index}`}
            className={styles.heart}
            style={{
              top: heart.top,
              left: heart.left,
            }}
          >
            <Heart width={heartSize} height={heartSize} />
          </div>
        ))}
      </div>
      {children}
    </div>
  );
});

export default HeartsRainLayout;
