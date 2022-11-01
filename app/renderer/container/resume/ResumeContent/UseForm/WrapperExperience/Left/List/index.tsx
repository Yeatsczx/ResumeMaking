import React from 'react';
import styles from './index.scss';
import { formatToString } from '@common/utils/time';
import DeleteIcon from '@assets/icon/delete.png';
import { AdapterExperienceType } from '../../adapter';

export interface IListProps {
  /**
   * @description 当前操作索引下标
   */
  index: number;
  /**
   * @description 条目列表
   */
  experienceList: AdapterExperienceType[];
  /**
   * @description 删除回调
   */
  onDelete: (index: number) => void;
  /**
   * @description 选择条目回调
   */
  onChange: (index: number) => void;
}

function List({ index, experienceList, onDelete, onChange }: IListProps) {
  return (
    <div className={styles['experience-list']}>
      {experienceList &&
        experienceList.length > 0 &&
        experienceList.map((item: AdapterExperienceType, i: number) => {
          return (
            <div
              className={styles[`experience-item ${i === index ? 'is-select' : ''} `]}
              key={i}
              onClick={() => {
                onChange(i);
              }}
            >
              <div className={styles['experience-item-box']}>
                <div className={styles['experience-item-title']}>{item.title}</div>
                <div className={styles['experience-item-date']}>{formatToString(item?.date)}</div>
              </div>
              <div className={styles['experience-item-action']}>
                <div
                  className={styles['experience-delete']}
                  onClick={(e: React.MouseEvent) => {
                    e.stopPropagation && e.stopPropagation();
                    onDelete(i);
                  }}
                >
                  <img src={DeleteIcon} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      {!experienceList ||
        (!experienceList.length && (
          <div className={styles.empty}>
            <div className={styles['empty-tips']}>你还没有条目内容，快添加一条吧～</div>
          </div>
        ))}
    </div>
  );
}

export default List;
