/**
 * @desc 头像
 * @author pengdaokuan
 */
import { FC } from 'react';
import styles from './index.scss';
import CSSModules from 'react-css-modules';
import { useSelector } from 'react-redux';
import uploadIcon from '@assets/icon/upload.png';
import ReButton from '@common/components/ReButton';
import ImageUpload from '@common/components/ReUpload/ImageUpload';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

const Avatar: FC = () => {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const updateResumeHook = useUpdateResumeHook();

  const onUpdateUserAvatar = (avatarUrl: string) => {
    updateResumeHook<string>('base/avatar', avatarUrl);
  };

  return (
    <div styleName="box">
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
        <div styleName="avatar">
          <img src={base?.avatar} />
          <div styleName="mask">
            <ReButton size="small" className="btn-change" onClick={() => onUpdateUserAvatar('')}>
              更换
            </ReButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSSModules(Avatar, styles);
