import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tripleSlide'
})
export class TripleSlidePipe implements PipeTransform {

  transform(arr: any[]): any[] {

    const tripleSlide = arr.reduce((result, value, index, array) => {

      if (index % 3 === 0) {
        result.push(array.slice(index, index + 3));
      }
      return result;
    }, []);

    return tripleSlide;
  }

}
