import { Directive, input, effect } from '@angular/core';
import { Permission } from './auth.model';
import { AuthService } from './auth.service';

@Directive({
  selector: '[appAuth]',
  standalone: true
})
export class AuthDirective {

  userType = input.required<Permission>({alias: 'appAuth'});


  constructor(private authService: AuthService){ 
    effect(()=>{
      if(this.authService.activePermission() === this.userType()){
        console.log('You have access to this content')
      } else {
        console.log('You do not have access to this content')
      }
    })

    console.log(this.userType)

    
   }
   
  }


