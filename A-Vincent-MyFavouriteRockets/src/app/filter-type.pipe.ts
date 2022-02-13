import { Pipe, PipeTransform } from '@angular/core';
import { Content} from './helper-files/content-interface';

@Pipe({
  name: 'filterType'
})
export class FilterTypePipe implements PipeTransform {

  transform(contentList: Content[], type: string): Content[] {
    if (typeof type !== 'undefined'){
      return contentList.filter(i => i.type == type);
    }
    else{
      return contentList.filter(i => i.type == '');
    }
  }

}
