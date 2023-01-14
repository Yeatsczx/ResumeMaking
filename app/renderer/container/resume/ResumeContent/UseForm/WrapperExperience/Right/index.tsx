import React, { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import ReScrollBox from '@src/common/components/ReScrollBox';

interface IProps {
  children: React.ReactNode;
}
const Right: FC<IProps> = ({ children }) => {
  const getChild = () => {
    const menuElement = (children as any)[0];
    const formElement = (children as any)[1][0];

    return [
      React.cloneElement(menuElement, {
        ...(children as any)[0],
        key: 'menuElement',
      }),
      React.cloneElement(formElement, {
        ...(children as any)[0],
        key: 'formElement',
      }),
    ];
  };
  return (
    <>
      <div styleName="header">{getChild()[0]}</div>
      <div styleName="content">
        <ReScrollBox maxHeight={360}>{getChild()[1]}</ReScrollBox>
      </div>
    </>
  );
};

export default CSSModules(Right, styles, { allowMultiple: true });
