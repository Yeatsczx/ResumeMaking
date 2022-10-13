import React, { useEffect, useState } from 'react';
import styles from './index.scss';
import MyScrollBox from '@common/components/MyScrollBox';
import RESUME_TOOLBAR_LIST from '@common/constants/resume';
import { onAddToolbar, onDeleteToolbar } from './utils';
import { useDispatch } from 'react-redux';

function ResumeToolbar() {
  const dispatch = useDispatch();
  const height = document.body.clientHeight;
  const [addToolbarList, setAddToolbarList] = useState<TSResume.SliderItem[]>([]);
  const [unAddToolbarList, setUnAddToolbarList] = useState<TSResume.SliderItem[]>([]);

  useEffect(() => {
    if (RESUME_TOOLBAR_LIST.length > 0) {
      let _addToolbarList: TSResume.SliderItem[] = [];
      let _unAddToolbarList: TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach((s: TSResume.SliderItem) => {
        if (s.require) _addToolbarList.push(s);
        if (!s.require) _unAddToolbarList.push(s);
      });
      setAddToolbarList(_addToolbarList);
      setUnAddToolbarList(_unAddToolbarList);
      changeResumeToolbarKeys(_addToolbarList.map((s) => s.key));
    }
  }, []);

  const changeResumeToolbarKeys = (moduleKeys: string[]) => {
    if (moduleKeys.length > 0) {
      dispatch({
        type: 'resumeToolbarKeys/changeKeys',
        payload: moduleKeys,
      });
    }
  };

  // 添加模块
  const onAddSliderAction = (moduleToolbar: TSResume.SliderItem) => {
    const nextAddSliderList = onAddToolbar(addToolbarList, moduleToolbar);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onDeleteToolbar(unAddToolbarList, moduleToolbar);
    setUnAddToolbarList(nextUnAddSliderList);
    changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
  };

  // 删除模块
  const onDeleteSliderAction = (moduleSlider: TSResume.SliderItem) => {
    const nextAddSliderList = onDeleteToolbar(addToolbarList, moduleSlider);
    setAddToolbarList(nextAddSliderList);
    const nextUnAddSliderList = onAddToolbar(unAddToolbarList, moduleSlider);
    setUnAddToolbarList(nextUnAddSliderList);
    changeResumeToolbarKeys(nextAddSliderList.map((s: TSResume.SliderItem) => s.key));
  };
  return (
    <div className={styles.slider}>
      <MyScrollBox maxHeight={height - 180}>
        {!!addToolbarList.length && (
          <div className={styles.module}>
            <div className={styles.title}>
              <span className={styles.line} />
              已添加模块
            </div>
            <div className={styles.content}>
              {addToolbarList.map((addSlider: TSResume.SliderItem) => {
                return (
                  <div
                    className={styles.box}
                    key={addSlider.key}
                  // onClick={() => {
                  //   Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                  //     form_name: addSlider.key,
                  //   });
                  // }}
                  >
                    <div className={styles.info}>
                      <i className={styles.icon} />
                      <div className={styles.text}>
                        <div className={styles.name}>{addSlider.name}</div>
                        <div className={styles.summary}>{addSlider.summary}</div>
                      </div>
                      {addSlider.require && <div className={styles.tips}>必选项</div>}
                      {!addSlider.require && (
                        <div className={styles.action}>
                          <i className={styles.edit} onClick={(e: React.MouseEvent) => { }} />
                          <i
                            className={styles.delete}
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation();
                              onDeleteSliderAction(addSlider);
                            }}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
        {!!unAddToolbarList.length && (
          <div className={styles.module}>
            <div className={styles.un_first}>
              <span className={styles.line} />
              未添加模块
            </div>
            <div className={styles.content}>
              {unAddToolbarList.map((unAddSlider: TSResume.SliderItem) => {
                return (
                  <div className={styles.box} key={unAddSlider.key} onClick={() => onAddSliderAction(unAddSlider)}>
                    <div className={styles.info}>
                      <i className={styles.icon} />
                      <div className={styles.text}>
                        <div className={styles.name}>{unAddSlider.name}</div>
                        <div className={styles.summary}>{unAddSlider.summary}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </MyScrollBox>
    </div>
  );
}

export default ResumeToolbar;
