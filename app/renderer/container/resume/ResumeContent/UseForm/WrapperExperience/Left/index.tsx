/**
 * @description 专门服务于经验弹窗左侧
 */
import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import ReButton from '@common/components/ReButton';
import ReScrollBox from '@src/common/components/ReScrollBox';
import List, { IListProps } from './List';

interface IProps extends IListProps {
  onAdd: () => void;
}

const Left: FC<IProps> = ({ index, experienceList = [], onDelete, onAdd, onChange }) => {
  return (
    <div styleName="layout-left">
      {experienceList.length > 0 && (
        <>
          <ReScrollBox maxHeight={420}>
            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete} />
          </ReScrollBox>
          <div styleName="action">
            <ReButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </ReButton>
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div styleName="empty">
          <div styleName="empty-tips">还没有内容，快添加一下吧～</div>
          <div styleName="empty-action">
            <ReButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </ReButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSModules(Left, styles, { allowMultiple: true });
