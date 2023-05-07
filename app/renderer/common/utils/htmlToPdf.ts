import JsPdf from 'jspdf';
import html2canvas from 'html2canvas';
const A4Width = 592.28;
const A4Height = 841.89;

/**
 * @description 导出PDF文件，暂时支持单页
 * @param {string} resumeName 导出文件名
 */
export function toPrintPdf(resumeName?: string) {
  let name = resumeName || '未命名文件';
  const dom: HTMLElement | any = document.querySelector('#visPdf');
  if (dom) {
    html2canvas(dom, {
      allowTaint: true, // 允许渲染跨域图片
      scale: window.devicePixelRatio * 4, // 增加清晰度
    }).then((canvas) => {
      let contentWidth = canvas.width;
      let contentHeight = canvas.height;
      let pageHeight = (contentWidth / A4Width) * A4Height; // 一页pdf显示html页面生成的canvas高度,等比缩放;
      let leftHeight = contentHeight; // 未生成pdf的html页面高度
      let position = 0; // pdf页面偏移
      let imgWidth = A4Width;
      let imgHeight = (A4Width / contentWidth) * contentHeight;
      let pageData = canvas.toDataURL('image/jpeg', 1.0);
      let PDF = new JsPdf('portrait', 'pt', 'a4'); // 参数分别为：第一页的方向（portrait的意思是肖像，即上下）、指定坐标时使用的测量单位、第一页的格式
      // 有两个高度需要区分，一个是html页面的实际高度，和生成pdf的页面高度(841.89)
      // 当内容未超过pdf一页显示的范围，无需分页
      if (leftHeight < pageHeight) {
        PDF.addImage(pageData, 'JPEG', 0, 0, imgWidth, imgHeight);
      } else {
        while (leftHeight > 0) {
          PDF.addImage(pageData, 'JPEG', 0, position, imgWidth, imgHeight);
          leftHeight -= pageHeight;
          position -= A4Height;
          if (leftHeight > 0) {
            PDF.addPage(); // 避免添加空白页
          }
        }
      }
      PDF.save(name + '.pdf');
    });
  }
}
