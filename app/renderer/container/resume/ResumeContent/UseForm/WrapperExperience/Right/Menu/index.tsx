import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import { AdapterExperienceType } from '../../adapter';

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
const Menu: FC<IProps> = ({ currentItem, isEdit, onCancelEditValue, onSaveEditValue, onChangeEditStatus }) => {
  return (
    <div styleName="menu">
      <div styleName="left">
        <div styleName="title">{currentItem?.title}</div>
      </div>
      <div styleName="right">
        {isEdit && (
          <>
            <div styleName="btn cancel" onClick={onCancelEditValue}>
              取消
            </div>
            <div styleName="btn save" onClick={onSaveEditValue}>
              保存
            </div>
          </>
        )}
        {!isEdit && (
          <div styleName="btn cancel" onClick={onChangeEditStatus}>
            编辑
          </div>
        )}
      </div>
    </div>
  );
};

export default CSSModules(Menu, styles, { allowMultiple: true });
