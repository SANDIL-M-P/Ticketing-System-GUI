# Ticket Management System

## Overview

This is a distributed ticket management system designed to handle ticket allocation, release, and retrieval with real-time updates and configuration options.

## System Components

The system consists of several key Angular components:
- Input Configuration Form
- Start/Stop Controls
- Ticket Status Tracker

## Prerequisites

- Node.js (v16+ recommended)
- Angular CLI
- Java (for backend)
- Maven or Gradle

## Backend Setup

### Backend Repository
- Ensure you have the corresponding backend repository cloned
- Backend should be running on `localhost:5050`

### Required Backend Endpoints
The backend must support the following REST and WebSocket endpoints:

#### REST Endpoints
- `POST /config/setup`: Configure system parameters
- `GET /config/previous`: Retrieve previous configuration
- `POST /config/start`: Start the ticket management system
- `POST /config/stop`: Stop the ticket management system

#### WebSocket Endpoints
- `/chat`: WebSocket connection for real-time updates
- `/topic/ticketPool`: Receive ticket pool messages
- `/topic/tickets`: Receive available ticket count

## Frontend Setup

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd ticket-management-frontend
```

2. Install dependencies
```bash
npm install
```

3. Install required packages
```bash
npm install @angular/core @angular/forms sockjs-client stompjs
```

### Configuration Parameters

The system allows configuration of:
- Max Ticket Capacity
- Total Ticket Capacity
- Ticket Release Rate
- Customer Retrieval Rate

## Running the Application

1. Start the backend service
2. Run Angular application
```bash
ng serve
```
3. Access the application at `http://localhost:4200`

## Usage Guide

### Configuration
1. Open the Configuration Settings form
2. Enter parameters for:
   - Max Ticket Capacity
   - Total Ticket Capacity
   - Ticket Release Rate
   - Customer Retrieval Rate
3. Click "Submit" to save configuration
4. Use "Load Configuration" to retrieve previous settings

### System Controls
- Click "Start" to begin ticket management
- Click "Stop" to halt the system

### Monitoring
The Ticket Status section provides:
- Current number of Available Tickets
- Real-time message updates about ticket pool

## Troubleshooting

### Common Issues
- Ensure backend is running on `localhost:5050`
- Check browser console for WebSocket and HTTP errors
- Verify network connectivity

### Logging
- Backend logs: Check server console
- Frontend logs: Browser developer tools console

## Technology Stack
- Frontend: Angular
- Backend: Java (Spring Boot)
- Communication: REST, WebSocket
- Libraries: SockJS, StompJS

## Contributing
1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create pull request

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.

## Author
Sandil Peiris

## Support
For support, please open an issue in the GitHub repository.
