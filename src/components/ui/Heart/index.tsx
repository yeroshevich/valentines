import React, {ComponentProps, FC} from 'react';
import HeaderSrc from '@/assets/images/heart_old.png'
import Image from "next/image";

const Heart: FC<Partial<ComponentProps<typeof Image>>> = (props) => {
    return (<Image {...props} src={HeaderSrc} alt={'heart'} />);
};

export default Heart;
