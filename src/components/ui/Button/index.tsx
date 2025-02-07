import React, {FC, HTMLAttributes} from 'react';
import styles from './index.module.scss'
import classNames from "classnames";

const Button: FC<HTMLAttributes<HTMLButtonElement>> = ({ className, ...props}) => {
  return (<button {...props} className={classNames(styles.button, className)}/>);
};

export default Button;
