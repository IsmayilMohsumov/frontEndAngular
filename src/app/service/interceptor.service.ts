import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    const username: string = 'dea';
    const password: string = '1234';
    const basicAuthHeaderString: string = 'Basic ' + window.btoa(username + ':' + password);
    console.log(basicAuthHeaderString);
    req = req.clone(
      {
        setHeaders: {
          Authorization: basicAuthHeaderString
        }
      }
    );
    return next.handle(req);
  }
}
