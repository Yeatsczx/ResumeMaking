/**
 * @description 为目标组件添加一层蒙层
 */
import React from 'react';
import styles from './index.less';
import classnames from 'classnames/bind';
export type Position = 'top' | 'bottom' | 'center';

const cx = classnames.bind(styles);

const MyMaskHoc = (WrappedComponent: React.ComponentType) => (hocProps: { position: Position }) => {
  return class extends React.Component {
    getProps = () => ({
      ...this.props,
    });
    render() {
      const position = hocProps ? hocProps?.position : 'center';
      return (
        <div className={styles['vis-mask']}>
          <div
            className={cx({
              top: position === 'top',
              center: position === 'center',
              bottom: position === 'bottom',
            })}
          >
            <WrappedComponent {...this.getProps()} />
          </div>
        </div>
      );
    }
  };
};

export default MyMaskHoc;
