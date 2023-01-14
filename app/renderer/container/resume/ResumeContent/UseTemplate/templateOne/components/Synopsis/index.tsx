/**
 * @desc 简单介绍
 * @author pengdaokuan
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import styles from './index.scss';
import CSSModules from 'react-css-modules';

const Synopsis: FC = () => {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);
  const evaluationList: string[] = useSelector((state: any) => state.resumeModel.evaluationList);

  return (
    <div styleName="content">
      {base?.username && <p styleName="name">{base?.username}</p>}
      {work?.job && <p styleName="job">{work?.job}</p>}
      {evaluation && <p styleName="summary">{evaluationList?.join('，')}</p>}
    </div>
  );
};

export default CSSModules(Synopsis, styles);
