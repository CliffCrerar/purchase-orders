import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'processRawHeadings'
})
export class RemapHeadingsPipe implements PipeTransform {

  transform(headingsRaw: string[], list: string): string[] {
    console.log('list: ', list);
    console.log('value: ', headingsRaw);
    console.log();

    switch (list) {
      case 'prices': return this.processPriceHeader(headingsRaw);
      default: return headingsRaw;
    }
  }

  // Headings when list is Price List
  processPriceHeader(p_headingsRaw: string[]): string[] {
    const removeStart = p_headingsRaw.length - 2;
    p_headingsRaw.splice(removeStart, 2);
    return ['No', ...p_headingsRaw].map(heading => {
      switch (heading) {
        case 'No': return 'No';
        case 'price': return 'Price';
        case 'dateCreated': return 'Date Created';
        case 'priceDescription': return 'Memo';
        default: return ' *NF*' + heading + '*NF* ';
      }
    });
  }
}
