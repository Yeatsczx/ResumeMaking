/**
 * @description 个人评价Form
 */
import { FC } from 'react';
import CSSModules from 'react-css-modules';
import styles from './index.scss';
import ReModal from '@common/components/ReModal';
import ReInput from '@common/components/ReInput';
import { useSelector } from 'react-redux';
import useUpdateResumeHook from '@src/container/resume/ResumeContent/useUpdateResumeHook';

interface IProps {
  onClose: () => void;
}

const Evaluation: FC<IProps> = ({ onClose }) => {
  const updateResumeHook = useUpdateResumeHook();
  const evaluation: string = useSelector((state: any) => state.resumeModel.evaluation);

  return (
    <ReModal.Dialog
      title="个人评价"
      showFooter={false}
      config={{
        cancelBtn: {
          callback: onClose,
        },
      }}
    >
      <div styleName="form">
        <div styleName="flex">
          <div styleName="left">
            <span styleName="require">*</span>评 价 ：
          </div>
          <div styleName="right">
            <ReInput
              type="textarea"
              onChange={(e) => {
                updateResumeHook<string>('evaluation', e.target.value);
              }}
              rows={5}
              value={evaluation || ''}
              placeholder="夸一夸自己有什么亮点"
              allowClear={true}
            />
            <div styleName="tips"> * 可通过 | 分割</div>
          </div>
        </div>
      </div>
    </ReModal.Dialog>
  );
};

export default CSSModules(Evaluation, styles, { allowMultiple: true });
