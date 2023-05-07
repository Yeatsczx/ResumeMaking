/**
 * @desc 头像
 * @author Yeats
 */
import { FC } from 'react';
import './index.scss';
import AvatarImage from '@assets/avatar.jpg';

const Avatar: FC = () => {
  return (
    <div styleName="box">
      <div styleName="avatar">
        <img src={AvatarImage} />
      </div>
    </div>
  );
};

export default Avatar;
