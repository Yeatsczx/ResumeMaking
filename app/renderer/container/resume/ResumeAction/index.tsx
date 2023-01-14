import { FC } from 'react';
import { useNavigate, useParams } from 'react-router';
import { useSelector } from 'react-redux';
import CSSModules from 'react-css-modules';
import ReButton from '@common/components/ReButton';
import ReModal from '@common/components/ReModal';
import fileAction from '@common/utils/file';
import { createUID } from '@common/utils';
import { compilePath } from '@common/utils/router';
import ROUTER, { ROUTER_KEY } from '@common/constants/router';
import { intToDateString } from '@common/utils/time';
import { getAppPath } from '@common/utils/appPath';
import { useReadGlobalConfigFile, useUpdateGlobalConfigFile } from '@src/hooks/useGlobalConfigActionHooks';
import { toPrintPdf } from '@common/utils/htmlToPdf';
import useClickAway from '@common/hook/useClickAway';

import styles from './index.scss';

const ResumeAction: FC = () => {
  const Navigate = useNavigate();
  const routerParams = useParams<{ fromPath: string; templateId: string; templateIndex: string }>();
  const { ref, componentVisible, setComponentVisible } = useClickAway(false);
  const base: TSResume.Base = useSelector((state: any) => state.resumeModel.base);
  const work: TSResume.Work = useSelector((state: any) => state.resumeModel.work);

  const readAppConfigThemeFile = useReadGlobalConfigFile();
  const updateGlobalConfigFile = useUpdateGlobalConfigFile();

  const onBack = () => {
    if (routerParams?.fromPath === ROUTER_KEY.root) {
      Navigate(compilePath(ROUTER.root));
    } else if (routerParams?.fromPath === ROUTER_KEY.templateList) {
      Navigate(compilePath(ROUTER.templateList));
    }
  };
  // 简历数据这一块后面不要。
  const exportPdf = () => {
    toPrintPdf(`${base?.username}+${base?.school}+${work?.job}`);
    setComponentVisible(false);
    readAppConfigThemeFile().then((value: { [key: string]: any }) => {
      if (value?.resumeSavePath) {
        saveResumeJson(value?.resumeSavePath);
      } else {
        // 👇 2.2 不存在默认路径，则设置默认路径并更新文件内容
        getAppPath().then((appPath: string) => {
          updateGlobalConfigFile('resumeSavePath', `${appPath}resumeCache`);
          saveResumeJson(`${appPath}resumeCache`);
        });
      }
    });
  };

  const saveResumeJson = (resumeSavePath: string) => {
    const date = intToDateString(new Date().valueOf(), '_');
    const prefix = `${date}_${base?.username}_${base?.school}_${work?.job}_${createUID()}.json`;
    // 如果路径中不存在 resumeCache 文件夹，则默认创建此文件夹
    if (resumeSavePath && resumeSavePath.search('resumeCache') > -1) {
      // write是改写文件内容，而不是创建新文件，陷入理解误区了！！！
      fileAction?.write(`${resumeSavePath}/${prefix}`, JSON.stringify(resume), 'utf8'); // 注意需要使用JSON.stringify(resume)，因为这个参数不能为对象
    } else {
      fileAction
        ?.mkdirDir(`${resumeSavePath}/resumeCache`)
        .then((path) => {
          if (path) fileAction?.write(`${path}/${prefix}`, JSON.stringify(resume), 'utf8');
        })
        .catch(() => {
          console.log('创建文件夹失败');
        });
    }
  };

  const resume = useSelector((state: any) => state.resumeModel);
  return (
    <div styleName="actions">
      <div className={styles.back} onClick={onBack}>
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
export default CSSModules(ResumeAction, styles);
