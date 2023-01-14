/**
 * @desc 头像
 * @author pengdaokuan
 */
import { FC } from 'react';
import styles from './index.scss';
import CSSModules from 'react-css-modules';
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

export default CSSModules(Avatar, styles);
