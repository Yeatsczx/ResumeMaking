/*
 * @Description:缺省空组件
 * @Author: pengdaokuan
 * @LastEditors: pengdaokuan
 * @Date: 2021-06-25 11:23:24
 * @LastEditTime: 2021-06-25 11:32:22
 */
import React from 'react';
import styles from './index.scss';
export type SizeType = 'small' | 'big';

interface IEmptyProps {
  imgSrc: string;
  size?: SizeType;
  label?: string;
  style?: React.CSSProperties;
}

function Empty({ imgSrc, size = 'small', style, label }: IEmptyProps) {
  return (
    <div className={styles.empty}>
      <img src={imgSrc} style={style} className={styles[`img-${size}`]} />
      {label && <p className={styles.label}>{label}</p>}
    </div>
  );
}

export default Empty;
