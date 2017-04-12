import {Component} from '@angular/core';
 
@Component ({ 
    selector: "footer",
    templateUrl :'app/footer.html',
    styles:[`
            .footer{
                position:fixed;
                bottom:0px;
                width:100%;
                height:60px;
                background:#008000;
            },
            .footerData{
                text-align:center;
                margin-top:20px;
            }
    `]

})
export class FooterComponent{

}