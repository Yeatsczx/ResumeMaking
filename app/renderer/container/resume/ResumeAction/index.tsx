import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import ReButton from '@common/components/ReButton';
import ReModal from '@common/components/ReModal';
import { compilePath } from '@common/utils/router';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import useClickAway from '@common/hook/useClickAway';
import './index.scss';

const ResumeAction: FC = () => {
  const Navigate = useNavigate();
  const routerParams = useParams<{ fromPath: string; templateId: string; templateIndex: string }>();
  const { ref, componentVisible, setComponentVisible } = useClickAway(false);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  const onBack = () => {
    if (routerParams?.fromPath === ROUTER_KEY.root) {
      Navigate(compilePath(ROUTER.root));
    } else if (routerParams?.fromPath === ROUTER_KEY.templateList) {
      Navigate(compilePath(ROUTER.templateList));
    }
  };
  const exportPdf = () => {
    toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
    setComponentVisible(false);
  };

  return (
    <div styleName="actions">
      <div styleName="back" onClick={onBack}>
        返回
      </div>
      <ReButton size="middle" className="export-btn" onClick={() => setComponentVisible(true)}>
        导出PDF
      </ReButton>
      {componentVisible && (
        <ReModal.Confirm
          title="确定要打印简历吗？"
          description="请确保信息的正确，目前仅支持单页打印哦～"
          eleRef={ref}
          config={{
            cancelBtn: {
              isShow: true,
              callback: () => setComponentVisible(false),
            },
            submitBtn: {
              isShow: true,
              callback: exportPdf,
            },
          }}
        />
      )}
    </div>
  );
};
export default ResumeAction;
