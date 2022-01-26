import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message, User } from '@lupe-time/api-interfaces';

@Component({
  selector: 'lupe-time-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  hello$ = this.http.get<Message>('/api/hello');

  constructor(private http: HttpClient) {
    this.hello$.subscribe((res) => {
      console.log('res', res);
    });

    this.http.post<User>('api/users/user', { firstName: 'Sam', lastName: 'Falcon', email: 'samfalc@gmail.com', phoneNumber: 8283327835 }).subscribe((user) => {
      console.log('user', user);
    })
  }
}
