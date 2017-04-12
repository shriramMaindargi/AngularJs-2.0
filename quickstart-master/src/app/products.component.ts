import {Component} from '@angular/core';
import {MenuService} from './menu.service';
@Component({
    selector:'product',
    templateUrl: 'app/product.html',
    styles: [`
        .whole{
                        width:40%;
                        margin-top:90px;
                },
    `]
})
export class ProductComponent{
 constructor(){
 }
}