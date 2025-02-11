import {ComponentProps} from "react";
import Image from "next/image";

export interface IDuduProps extends Partial<ComponentProps<typeof Image>>{
  stage?: number;
}
