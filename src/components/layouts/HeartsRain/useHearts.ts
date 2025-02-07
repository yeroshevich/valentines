import {useEffect, useState} from "react";
import {IHeart} from "@/components/layouts/HeartsRain/types";
import {HEART_LAYOUT_CONFIG} from "@/components/layouts/HeartsRain/constants";
import {appStore} from "@/stores/counterStore";

export const useHearts = () => {
  const [hearts, setHearts] = useState<IHeart[]>([]);
  const app = appStore();


  useEffect(() => {
    setHearts((new Array(HEART_LAYOUT_CONFIG.hearts_count).fill(0)).map(() => ({
      left: (Math.random() * window.outerWidth) - 25,
      top: Math.random() * window.outerHeight,
    })));
  }, [])

  useEffect(() => {
    let animationFrameId: number;

    const updateHearts = () => {
      setHearts((prevHearts) =>
        prevHearts.map((heart) => ({
          ...heart,
          top:
            heart.top > window.innerHeight
              ? -100 * Math.random()
              : heart.top + app.heartsSpeed + Math.random(),
        }))
      );

      animationFrameId = requestAnimationFrame(updateHearts);
    };

    animationFrameId = requestAnimationFrame(updateHearts);

    return () => cancelAnimationFrame(animationFrameId);
  }, [app.heartsSpeed]);

  return {
    hearts,
    heartSize: app.heartsSize
  }
}
