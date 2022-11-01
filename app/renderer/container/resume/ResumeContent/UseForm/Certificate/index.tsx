/**
 * @description 荣誉证书Form
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

function Certificate({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const certificate: string = useSelector((state: any) => state.resumeModel.certificate);
  return (
    <MyModal.Dialog
      title="荣誉证书"
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
            <span className={styles.require}>*</span>证 书 ：
          </div>
          <div className={styles.right}>
            <MyInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook<string>('certificate', e.target.value);
              }}
              rows={5}
              value={certificate || ''}
              placeholder="互联网+大赛一等奖｜掘金大学骰王｜互联网喝酒大赛进步奖"
              allowClear={true}
            />
            <div className={styles.tips}> * 多个证书以 | 分割</div>
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Certificate;
