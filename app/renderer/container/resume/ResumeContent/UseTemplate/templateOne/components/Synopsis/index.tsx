/**
 * @desc 简单介绍
 * @author Yeats
 */
import { FC } from 'react';
import { useSelector } from 'react-redux';
import './index.scss';

const Synopsis: FC = () => {
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);

  return (
    <div styleName="content">
      {base?.username && <p styleName="name">{base?.username}</p>}
      {work?.job && <p styleName="job">{work?.job}</p>}
      {evaluation && <p styleName="summary">{evaluation}</p>}
    </div>
  );
};

export default Synopsis;
