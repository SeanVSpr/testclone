import { PipeTransform } from '@angular/core';
import { ListItem } from './multiselect.model';
export declare class ListFilterPipe implements PipeTransform {
    transform(items: ListItem[], filter: any): ListItem[];
    applyFilter(item: any, filter: any): boolean;
}
