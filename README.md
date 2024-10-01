# WebSocket React-Node.js Chat Application

This project demonstrates how to build a real-time chat application using **WebSockets** with **React** and **Node.js**. It's a simple yet powerful implementation of full-duplex communication, ideal for applications that require real-time features such as chat systems, live updates, and notifications.

## Features

- Real-time messaging between clients and the server.
- Uses WebSockets for continuous two-way communication.
- Built with **React (TypeScript)** and **Node.js (TypeScript)**.
- Lightweight and efficient.

## Getting Started

To run this project locally, follow the steps below:

### Prerequisites

- **Node.js** installed on your machine.
- **npm** or **yarn** for managing dependencies.
- **TypeScript** installed globally (optional but recommended).

### Folder Structure

```bash
websocket-react-nodejs/
│
├── client/      # React (TypeScript) client-side code
├── server/      # Node.js (TypeScript) server-side code
├── .gitignore
├── README.md
└── package.json
```

Installation
1. **Clone the Repository**
```bash
git clone https://github.com/fbatuhanr/websocket-react-nodejs.git
cd websocket-react-nodejs
```
2. **Install Dependencies**
```bash
For both the client and server, you need to install the necessary dependencies.
```


# Install server dependencies
```bash
cd server
npm install
```

# Install client dependencies
```bash
cd ../client
npm install
```
3. **Run the Server**
Start the Node.js WebSocket server by running:
```bash
cd server
npm run dev
```
4. **Run the Client**
Launch the React app by running:
```bash
cd ../client
npm run dev
```
The client app will be available at http://localhost:5173

### How It Works
 ***The project utilizes WebSockets to maintain an open connection between the client and server, enabling real-time, full-duplex communication. Once a connection is established, clients can send and receive messages instantly, without the need for repetitive HTTP requests.***

#### Client Side: A simple React interface that allows users to send and receive messages.
#### Server Side: A Node.js server that manages WebSocket connections and broadcasts messages to all connected clients.
#### Key Technologies
##### React (TypeScript): For the client-side UI.
##### Node.js (TypeScript): For handling WebSocket connections on the server side.
##### WebSockets: For enabling real-time communication between clients and the server.