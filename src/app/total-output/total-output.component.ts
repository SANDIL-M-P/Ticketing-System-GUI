import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';

@Component({
  selector: 'app-total-output',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './total-output.component.html',
  styleUrl: './total-output.component.css'
})
export class TotalOutputComponent implements OnInit, OnDestroy {
  private socketClient: Stomp.Client | null = null;
  public ticketMessages: string[] = [];
  public availableTickets: number = 0;

  ngOnInit(): void {
    this.connectWebSocket();
  }

  ngOnDestroy(): void {
    if (this.socketClient) {
      this.socketClient.disconnect(() => {
        console.log('WebSocket connection closed');
      });
    }
  }

  connectWebSocket() {
    const ws = new SockJS('http://localhost:5050/chat');
    this.socketClient = Stomp.over(ws);

    this.socketClient.connect({}, () => {
      console.log('WebSocket connected');

      // Subscribe to ticket pool messages
      this.socketClient?.subscribe('/topic/ticketPool', (message) => {
        const messageText = message.body;
        this.ticketMessages.push(messageText);
        console.log('Ticket pool update:', messageText);
      });

      // Subscribe to available tickets count
      this.socketClient?.subscribe('/topic/tickets', (message) => {
        this.availableTickets = parseInt(message.body);
        console.log('Available tickets:', this.availableTickets);
      });
    });
  }
}
