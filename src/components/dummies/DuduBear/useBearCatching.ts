import {useRef, useState} from "react";


export const useBearCatching = (maxStage: number) => {
  const duduRef = useRef<HTMLImageElement | null>(null);
  const messageRef = useRef<HTMLDivElement | null>(null);
  const [stage, setStage] = useState<number>(0);

  const handleClick = () => {
    if((stage + 1) === maxStage) return;
    setStage(p => p + 1);
    if(duduRef?.current){
      const top = Math.random() * (window.innerHeight - 150);
      const left = Math.random() * (window.innerWidth - 150);
      duduRef.current.style.top = top + 'px';
      duduRef.current.style.left = left + 'px';
      console.log(stage);
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
