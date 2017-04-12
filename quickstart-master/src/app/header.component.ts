import {Component} from '@angular/core';
 
@Component ({ 
    selector: "header",
    templateUrl :'app/header.html',
    styles:[`
            .header{
                position:fixed;
                top:0px;
                width:100%;
                height:60px;
                background:#008000;
            },
            .headerData{
                text-align:center;
                margin-top:20px;
            },
            .signup{
                margin-top:400px;
            }
    `]

})
export class HeaderComponent{

}