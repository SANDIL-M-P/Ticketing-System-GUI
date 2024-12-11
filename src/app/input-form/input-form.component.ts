import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-input-form',
  standalone: true,
  imports: [FormsModule,HttpClientModule,CommonModule], // Required for [(ngModel)]
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css'],
})
export class InputFormComponent {
  @Output() formSubmitted = new EventEmitter<any>();

  formData = {
    maxTicketCapacity: '',
    totalTickets: '',
    ticketReleaseRate: '',
    customerRetrievalRate: '',
  };

  constructor(private Http: HttpClient) {}

  // Save configuration to the backend
  onSubmit() {
    this.Http.post<any>('http://localhost:5050/config/setup', this.formData, { responseType: 'json' })
      .subscribe(
        (response) => {
          console.log('Configuration setup successful:', response);
          this.formSubmitted.emit(this.formData); // Emit the form data if needed
        },
        (error) => {
          console.error('Error setting up configuration:', error);
          alert('An error occurred while saving the configuration: ' + error.message);
        }
      );
  }

  // Load configuration from the backend
  loadConfiguration() {
    this.Http.get<any>('http://localhost:5050/config/previous', { responseType: 'json' })
      .subscribe(
        (data) => {
          console.log('Loaded configuration:', JSON.stringify(data));

          // Ensure the response data has the correct keys and assign them to formData
          if (data && data.configuration) {
            this.formData.maxTicketCapacity = data.configuration.maxTicketCapacity;
            this.formData.totalTickets = data.configuration.totalTickets;
            this.formData.ticketReleaseRate = data.configuration.ticketReleaseRate;
            this.formData.customerRetrievalRate = data.configuration.customerRetrievalRate;

            // Optional: Add a confirmation alert
            alert('Configuration loaded successfully.');
          } else {
            alert('No configuration found or invalid response format.');
          }
        },
        (error) => {
          console.error('Error loading configuration:', error);
          alert('An error occurred while loading the configuration: ' + error.message);
        }
      );
  }
}
