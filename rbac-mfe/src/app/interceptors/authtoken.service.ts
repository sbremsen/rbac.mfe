import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthtokenService implements HttpInterceptor {
  jwtToken = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImF0LTE2MjQ4Njg3MjkiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIxZWZlYTViNy1iMjEyLTRjOGQtYmYzMy1iNzAzMjMzMWUzODUiLCJzdWJ0eXBlIjoiYXBwIiwidHR5IjoiYXQiLCJqdGkiOiJmZGJiN2QzMy03NjI4LTQ4OTQtOTAyOC02MGY0NTk3OTJmMGUiLCJhdWQiOiJkaXJiYWMiLCJzY29wZSI6WyJ3cml0ZSIsImRpcmJhYy5kZWxldGUiLCJkaXJiYWMuY3JlYXRlIiwiZGlyYmFjLnVwZGF0ZSIsInJlYWQiLCJkaXJiYWMuaWRwZ3JwYWRtaW4iLCJkaXJiYWMucmVhZCIsImRpcmJhYy5hZG1pbiJdLCJpYXQiOjE2NDIxMDMxMzYsIm5iZiI6MTY0MjEwMzEzNiwiZXhwIjoxNjQyMTA0OTM2LCJpc3MiOiJodHRwOi8vd3d3LmRlbGwuY29tL2lkZW50aXR5In0.ocLTdNd98BbWkqM5R9uOt0ptHk_oIxE1XLaTgqCcsl9tgiRkiDOAaPqDLJzIpTc4M_iWMxXrjhOxpZU0W_erxz21UUKjibSfpXTr1xYn9qU8aUeLN70h-qLbYLrkCyWMvO7Lp8GSFB5LjZpOdIhDiI5n1YAmiJjdxg9SqhsoKSd2AkAp7TczPEiu-bTHJSexEUebc_rHXwp1epfFVG88LZSVmdL4uVLEfyVQ9KcQCmIRfrCn3uJ91aVedrPr1xBUmt-MfZoG-62hFN1Ybq2g8f2YjJ1zuxqriFWHUQ82PESTb1ANAoGqgs9NkVZ25zUE4RzGp7U-RUWNXU8v0AUSuw';

  constructor() { }

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
     debugger;
    const token = this.jwtToken; // you probably want to store it in localStorage or something

    if (!token) {
      return next.handle(req);
    }

    const req1 = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    return next.handle(req1);
  }
}
