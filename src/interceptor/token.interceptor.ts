import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
@Injectable()
export class Tokeninterceptor implements HttpInterceptor
{
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
const token =localStorage.getItem('token');
        alert('intercep');
        const modifyReq=req.clone({
    headers:req.headers.set('Authorization','Bearer'+token)
        });
 /*   const modifyReq1=req.clone({
                setHeaders:{
                    Authorization :`Bearer ${token}`
                }});*/
     return next.handle(req);
    }








    
}