import {
  useRef,
  useState,
} from 'react';

const updateAxis = (axis: number, add = 150) => {
  return axis <= 0 ? axis + add : axis - add;
}

export const useBearCatching = (maxStage: number) => {
  const duduRef = useRef<HTMLImageElement | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);
  const [stage, setStage] = useState<number>(0);

  const handleClick = () => {
    if((stage + 1) === maxStage) return;
    setStage(p => p + 1);
    if(duduRef?.current){
      const top = updateAxis(Math.random() * (window.innerWidth - 300) + 150, 150);
      const left = updateAxis(Math.random() * (window.innerWidth - 300) + 150, 150);
      duduRef.current.style.top = top + 'px';
      duduRef.current.style.left = left + 'px';

      if(messageRef?.current && stage === (maxStage - 2)){
        messageRef.current.style.display = 'flex';
        messageRef.current.style.top = (top + 25) + 'px';
        messageRef.current.style.left = (left + 25) + 'px';
      }
    }
  }


  return {
    duduRef,
    stage,
    handleClick,
    messageRef
  }
}
