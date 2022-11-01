/**
 * @description 专门服务于经验弹窗左侧
 */
import React from 'react';
import styles from './index.scss';
import MyButton from '@common/components/MyButton';
import MyScrollBox from '@common/components/MyScrollBox';
import List, { IListProps } from './List';

interface IProps extends IListProps {
  onAdd: () => void;
}

function Left({ index, experienceList = [], onDelete, onAdd, onChange }: IProps) {
  return (
    <div className={styles['layout-left']}>
      {experienceList.length > 0 && (
        <>
          <MyScrollBox maxHeight={420}>
            <List index={index} experienceList={experienceList} onChange={onChange} onDelete={onDelete} />
          </MyScrollBox>
          <div className={styles['action']}>
            <MyButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </MyButton>
          </div>
        </>
      )}
      {experienceList.length === 0 && (
        <div className={styles['empty']}>
          <div className={styles['empty-tips']}>还没有内容，快添加一下吧～</div>
          <div className={styles['empty-action']}>
            <MyButton width={112} size="middle" onClick={onAdd}>
              添加条目
            </MyButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Left;
