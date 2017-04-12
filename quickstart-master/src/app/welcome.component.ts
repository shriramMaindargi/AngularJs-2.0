import{Component} from '@angular/core';
import{MenuService} from './menu.service';
import{Router} from "@angular/router";
@Component({
        selector:"welcome",
        templateUrl :'app/welcome.html',
        styles:[`
                .whole{
                        width:40%;
                        margin-top:90px;
                },
                .panelh{
                        background:#008000;
                }
        `],
        providers:[MenuService]

})
export class WelcomeComponent{

        heading:string  = "Welcome to Elites";
        messageval: string;
        router:Router;
        constructor( router:Router){
                this.router = router;
        }
        greet():void{
            alert("Welcome to Elites");
        }
        login():void{
                alert("Login Successful !");
                this.router.navigate(["/menu"]);
        }
        
        
        validate(val:string){
            this.messageval = val;
        }
}