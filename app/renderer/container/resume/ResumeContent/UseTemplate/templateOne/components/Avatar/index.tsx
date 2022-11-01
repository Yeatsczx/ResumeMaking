/**
 * @desc 头像
 * @author pengdaokuan
 */
import React from 'react';
import styles from './index.scss';
import { useSelector } from 'react-redux';
import uploadIcon from '@assets/icon/upload.png';
import MyButton from '@common/components/MyButton';
import ImageUpload from '@common/components/MyUpload/ImageUpload';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

function Avatar() {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const updateResumeHook = useUpdateResumeHook();

  const onUpdateUserAvatar = (avatarUrl: string) => {
    updateResumeHook<string>('base/avatar', avatarUrl);
  };

  return (
    <div className={styles.box}>
      {!base?.avatar && (
        <ImageUpload
          icon={uploadIcon}
          accept="image/*"
          multiple={false}
          onAfterChange={(files: TSUpload.File[]) => {
            onUpdateUserAvatar(files[0]?.base64URL);
          }}
        />
      )}
      {base?.avatar && (
        <div className={styles.avatar}>
          <img src={base?.avatar} />
          <div className={styles.mask}>
            <MyButton size="small" className="btn_change" onClick={() => onUpdateUserAvatar('')}>
              更换
            </MyButton>
          </div>
        </div>
      )}
    </div>
  );
}

export default Avatar;
