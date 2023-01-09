import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import { LoginServiceService } from "../login-service.service";

@Injectable()
export class LoginGuardian implements CanActivate{
    
    constructor(private login:LoginServiceService, private router:Router){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.login.isLogged()){
            return true;
        }else{
            this.router.navigate(['/login']);
            return false;
        }
    }
    

    
}