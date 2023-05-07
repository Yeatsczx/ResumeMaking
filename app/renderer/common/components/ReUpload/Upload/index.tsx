/**
 * @desc 上传控件，默认自带的input样式
 * @author {Yeats}
 */
import { FC } from 'react';
import FileEvent from '../fileEvent';

const Upload: FC<TSUpload.Input> = ({ style, accept, multiple = false, onAfterChange }) => {
  function onChange(e: any) {
    const fileList: any = e?.target?.files || [];
    if (e.target.value === '') {
      return;
    }
    let instance: TSUpload.File[] = [];
    // fileList 属于 [object FileList] 类型
    for (let file of fileList) {
      instance.push(new FileEvent(file));
    }
    onAfterChange?.(instance);
  }

  return <input type="file" style={style} accept={accept} multiple={multiple} onChange={onChange} />;
};

export default Upload;
