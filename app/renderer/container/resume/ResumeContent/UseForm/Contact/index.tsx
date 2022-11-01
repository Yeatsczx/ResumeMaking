/**
 * @description 联系方式Form
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
function Contact({ onClose }: IProps) {
  const updateResumeHook = useUpdateResumeHook();
  const contact: TSResume.Contact = useSelector((state: any) => state.resumeModel.contact);
  return (
    <MyModal.Dialog
      title="联系方式"
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
            <span className={styles.require}>*</span>电 话 ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/phone', e.target.value);
              }}
              value={contact?.phone || ''}
              placeholder="请输入电话号码"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require}>*</span>邮 箱 ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/email', e.target.value);
              }}
              value={contact?.email || ''}
              placeholder="请输入邮箱"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require} style={{ opacity: 0 }}>
              *
            </span>
            Github ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/github', e.target.value);
              }}
              value={contact?.github || ''}
              placeholder="Github 地址"
              allowClear={true}
            />
          </div>
        </div>
        <div className={styles.flex}>
          <div className={styles.left}>
            <span className={styles.require} style={{ opacity: 0 }}>
              *
            </span>
            Juejin ：
          </div>
          <div className={styles.right}>
            <MyInput
              onChange={(e) => {
                updateResumeHook<string>('contact/juejin', e.target.value);
              }}
              value={contact?.juejin || ''}
              placeholder="掘金地址"
              allowClear={true}
            />
          </div>
        </div>
      </div>
    </MyModal.Dialog>
  );
}

export default Contact;
