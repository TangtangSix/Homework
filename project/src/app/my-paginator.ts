import { MatPaginatorIntl } from '@angular/material/paginator';


const dutchRangeLabel = (page: number, pageSize: number, length: number) => {
  if (length === 0 || pageSize === 0) { return `0 到 ${length}`; }
  length = Math.max(length, 0);
  const startIndex = page * pageSize;
  const endIndex = startIndex < length ?
    Math.min(startIndex + pageSize, length) :
    startIndex + pageSize;
  return `第${startIndex + 1} - ${endIndex} 共 ${length}条`;

}

export function myPaginator() {

  const paginatorIntl = new MatPaginatorIntl();

  paginatorIntl.itemsPerPageLabel = '最大显示:';

  paginatorIntl.nextPageLabel = '下一页:';

  paginatorIntl.previousPageLabel = '上一页:';

  paginatorIntl.lastPageLabel = '尾页';

  paginatorIntl.firstPageLabel = '首页';

  paginatorIntl.getRangeLabel =  (page: number, pageSize: number, length: number) => {
    if (length === 0 || pageSize === 0) {
      return '0 od' + length;
    }
 
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    const endIndex = startIndex < length
                      ? Math.min(startIndex + pageSize, length)
                      : startIndex + pageSize;
    return `第${startIndex + 1}-${endIndex}条, 总共${length}条`;
  }
;
  return paginatorIntl;
}