import { Component } from '@angular/core';
import { RbacService } from './services/rbac.service';

import { HttpClient, HttpResponse ,HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rbac-mfe';
  token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImF0LTE2MjQ4Njg3MjkiLCJ0eXAiOiJKV1QifQ.eyJzdWIiOiIxZWZlYTViNy1iMjEyLTRjOGQtYmYzMy1iNzAzMjMzMWUzODUiLCJzdWJ0eXBlIjoiYXBwIiwidHR5IjoiYXQiLCJqdGkiOiI0YzczYmMwZi0yZDY2LTQ2ODEtYjZlZC01NDhhNGVjZTI5MzQiLCJhdWQiOiJkaXJiYWMiLCJzY29wZSI6WyJyZWFkIiwid3JpdGUiXSwiaWF0IjoxNjQyMTAxMTgxLCJuYmYiOjE2NDIxMDExODEsImV4cCI6MTY0MjEwMjk4MSwiaXNzIjoiaHR0cDovL3d3dy5kZWxsLmNvbS9pZGVudGl0eSJ9.S6u1rAJ92VoSAxnDFMNcDNnnwW2ru9ek-aeO6g8Xpl1qokop_VM8fvBfERTYxk9wiCloBTt5r3uVFlxlYfiXpfvGTWWkNTp2-9q5Si4WBAT4dP57kuuaq7Z_Q23LSYPvSsJVszQAQkYgEj8q92CO0ArCqPZff8WNE-31pZ79beAutlK3jyLGm_tHQjUjipxPcV5tbk-SNZdlTT2vmn2qTAJfPX3FmXwHr18RQQEXx4UCIBJ7EAQNrWa8IaUjSjAgeilNlXmXhTnHWSgnUS9U41p9Odt1BZmRjt6XoD4pmewChsK95lR31KUd0C6Q6Aj_5Nk1qosYrvunH0sbrtym5g';
  
  constructor(private rbacService: RbacService) {
  
  }

  ngOnInit() {
    debugger;
    // this.getInstance();
  }

  getInstance() {
    debugger;
    const instanceId = '55554e44-5e55-4444-5555-444455554444';
  
    this.rbacService.getInstance(instanceId, this.token).subscribe(
      res => {
        debugger;
        console.log(res);
      }
    );
  }
}
