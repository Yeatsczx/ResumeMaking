/**
 * @description 工作期望Form
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
function Work({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  return (
    <MyModal.Dialog
      title="工作期望"
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
            <span className={styles.require}>*</span>职 位 ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('work/job', e.target.value);
              }}
              value={work?.job || ''}
              placeholder="求职岗位"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>城 市 ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('work/city', e.target.value);
              }}
              value={work?.city || ''}
              placeholder="请输入意愿城市"
              allowClear={true}
            />
            <div className={styles.tips}> * 多个地点以｜分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Work;
