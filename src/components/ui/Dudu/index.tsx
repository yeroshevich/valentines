import React, {FC} from 'react';
import Image from "next/image";
import DuduSrc from '@/assets/video/dudu.gif';
import DuduSrc2 from '@/assets/video/dudu2.gif';
import DuduSrc3 from '@/assets/video/dudu3.gif';
import DuduSrc4 from '@/assets/video/dudu4.gif';
import {IDuduProps} from "@/components/ui/Dudu/types";

const Dudu: FC<IDuduProps> = ({ stage = 0, ...props}) => {
  return (<Image
    {...props}
    src={{0: DuduSrc, 1: DuduSrc2, 2: DuduSrc3, 3: DuduSrc4}[stage] as unknown as string}
    alt={'dudu'}
  />);
};

export default Dudu;
