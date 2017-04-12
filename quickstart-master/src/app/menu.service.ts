import {Injectable} from "@angular/core";
@Injectable()
export class MenuService{
        itemsList:string[] = ["welcome","product", "photo","contactUs", "AboutUs"]; 

        getItems():string[]{
                return this.itemsList;
        }
}