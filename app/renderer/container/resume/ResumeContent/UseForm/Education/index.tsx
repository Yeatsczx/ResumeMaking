/**
 * @description 教育信息Form
 */
import React from 'react';
import styles from './index.scss';
import MyModal from '@common/components/MyModal';
import MyInput from '@common/components/MyInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}
function Education({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  return (
    <MyModal.Dialog
      title="教育信息"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div className={styles.form}>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>学 校 ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook('base/school', e.target?.value || '');
              }}
              value={base?.school || ''}
              placeholder="请输入贵校"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>专 业 ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook('base/major', e.target?.value || '');
              }}
              value={base?.major || ''}
              placeholder="请输入专业"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>学 位 ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook('base/degree', e.target?.value || '');
              }}
              value={base?.degree || ''}
              placeholder="学士？硕士？博士？"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>学 年 ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                const nextTime = {
                  beginTime: e.target.value,
                };
                updateResumeHook<object>('base/onSchoolTime', nextTime);
              }}
              value={base?.onSchoolTime?.beginTime || ''}
              placeholder="2015.09.01"
              allowClear={true}
              style={{ width: 300 }}
            />
            <span className={styles.line}>-</span>
            <MyInput
              onChange={(e) => {
                const nextTime = {
                  endTime: e.target.value,
                };
                updateResumeHook<object>('base/onSchoolTime', nextTime);
              }}
              value={base?.onSchoolTime?.endTime || ''}
              placeholder="2015.06.30"
              style={{ width: 300 }}
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Education;
