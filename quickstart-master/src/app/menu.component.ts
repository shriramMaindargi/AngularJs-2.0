import {Component} from "@angular/core";
import{MenuService} from "./menu.service";
@Component({
            selector: "menu",
            templateUrl : 'app/menu.html',
            providers:[MenuService],
            styles:[
                        `
                        .menu{
                
                                position:fixed;
                                top:0px;
                                width:100%;
                                height:60px;
                                background:#008000;
                                margin-left: -50px;
                        },
                        .logo{
                                height:9px;
                                width:9px;
                        },
                        .heading{
                                color:orange;
                        }
                        
                        
                        `

            ]

})
export class MenuComponent {
        loginStatus :boolean = true;
        itemsList:string[];
        photoUrl :string = "http://vignette3.wikia.nocookie.net/halo/images/0/0d/Heretic_Elite.jpg/revision/latest?cb=20070119233413";
        constructor(menuService:MenuService){
                this.itemsList = menuService.getItems();
                this.loginStatus = menuService.isLoggedin;
        }
        
}