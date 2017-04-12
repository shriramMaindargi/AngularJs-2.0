import { Component, OnInit } from '@angular/core';
import {User} from './User';
@Component({
    selector:'userform',
    templateUrl: 'app/signupform.component.html',
    
})
export class SignUpFormComponent  {
    user:User = {
            name : 'James',             
            phone:"1234",
            address:'India'
        
    }
 
}