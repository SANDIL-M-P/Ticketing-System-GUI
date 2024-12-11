import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface ResponseMessage {
  message: string;
}

@Component({
  selector: 'app-start-stop',
  standalone: true,
  imports: [],
  templateUrl: './start-stop.component.html',
  styleUrls: ['./start-stop.component.css']
})
export class StartStopComponent {

  private baseUrl = 'http://localhost:5050/config'; // Adjust to match your backend port

  constructor(private http: HttpClient) {}

  onStart() {
    this.http.post<ResponseMessage>(`${this.baseUrl}/start`, {})
      .subscribe({
        next: (response) => {
          console.log(response.message);
          alert('System started successfully!');
        },
        error: (err) => {
          console.error('Failed to start system', err);
          alert('Failed to start system');
        }
      });
  }

  onStop() {
    this.http.post<ResponseMessage>(`${this.baseUrl}/stop`, {})
      .subscribe({
        next: (response) => {
          console.log(response.message);
          alert('System stopped successfully!');
        },
        error: (err) => {
          console.error('Failed to stop system', err);
          alert('Failed to stop system');
        }
      });
  }
}
