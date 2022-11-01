import React from 'react';
import styles from './index.scss';
import { AdapterExperienceType } from '../../adapter';
import classnames from 'classnames/bind';

let cx = classnames.bind(styles);

interface IProps {
  /**
   * @description 当前是否处于编辑状态
   */
  isEdit: boolean;
  /**
   * @description 当前的条目
   */
  currentItem: AdapterExperienceType;
  /**
   * @description 点击取消
   */
  onCancelEditValue: () => void;
  /**
   * @description 点击保存
   */
  onSaveEditValue: () => void;
  /**
   * @description 点击编辑
   */
  onChangeEditStatus: () => void;
}
function Menu({ currentItem, isEdit, onCancelEditValue, onSaveEditValue, onChangeEditStatus }: IProps) {
  return (
    <div className={styles.menu}>
      <div className={styles.left}>
        <div className={styles.title}>{currentItem?.title}</div>
      </div>
      <div className={styles.right}>
        {isEdit && (
          <>
            <div className={cx('btn', 'cancel')} onClick={onCancelEditValue}>
              取消
            </div>
            <div className={cx('btn', 'save')} onClick={onSaveEditValue}>
              保存
            </div>
          </>
        )}
        {!isEdit && (
          <div className={cx('btn', 'cancel')} onClick={onChangeEditStatus}>
            编辑
          </div>
        )}
      </div>
    </div>
  );
}

export default Menu;
