/**
 * @desc 工作经历
 * @author yeats
 */
import { FC } from 'react';
import './index.scss';

const Work: FC = () => {
  return (
    <div styleName="content">
      <p styleName="label">工作经历 Post</p>
      <ul styleName="list">
        <li styleName="flex">
          <div styleName="left">
            <p>2021.07-至今</p>
            <p>前端工程师</p>
          </div>
          <div styleName="right">
            <p>字节跳动</p>
            <p>就职于字节跳动，其他的没啥介绍了</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Work;
