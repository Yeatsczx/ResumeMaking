import React, { FC } from 'react';
import './index.scss';

interface IProps {
  /**
   * @description 子组件
   */
  children: React.ReactNode | any;
  /**
   * @description 最大高度，默认200
   */
  maxHeight?: number;
  /**
   * @description 根div样式
   */
  style?: React.CSSProperties;
  /**
   * @description 开启了滚动事件之后，回调得到滚动的top
   */
  onScrollTop?: (scrollTop: number) => void;
}
const ReScrollBox: FC<IProps> = ({ children, maxHeight = 200, style = {}, onScrollTop }) => {
  function onScroll(e: any) {
    const _event = e.target || e.currentTarget;
    onScrollTop?.(_event.scrollTop);
  }
  let _style = maxHeight ? { ...style, maxHeight: `${maxHeight}px` } : { ...style };
  return (
    <div className="scroll-box-hidden" style={_style} onScroll={onScroll}>
      {children}
    </div>
  );
};

export default ReScrollBox;
