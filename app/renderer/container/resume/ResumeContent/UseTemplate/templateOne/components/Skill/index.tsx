/**
 * @desc 技能
 * @author yeats
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './index.scss';
import CSSModules from 'react-css-modules';

const Skill: FC = () => {
  const skill: string = useSelector((state: any) => state.resumeModel.skill);
  const skillList: string[] = useSelector((state: any) => state.resumeModel.skillList);

  return (
    <div styleName="content">
      <p styleName="label">技能证书 Skill</p>
      <ul styleName="skill">
        {skill &&
          skillList?.length > 0 &&
          skillList?.map((skill: string, index: number) => {
            return (
              <li styleName="item" key={index}>
                {skill}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default CSSModules(Skill, styles);
