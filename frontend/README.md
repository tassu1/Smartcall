# SmartCall - Video Conferencing Website

SmartCall is a web-based video conferencing application that enables users to connect and communicate seamlessly. Built with modern web technologies, SmartCall offers real-time video, audio, and chat features to enhance virtual meetings.

## 🚀 Features
- 🔹 Secure and high-quality video conferencing
- 🔹 Real-time chat during meetings
- 🔹 Screen sharing functionality
- 🔹 User authentication and authorization
- 🔹 Responsive UI for seamless experience on all devices

## 🛠 Tech Stack
- **Frontend:** React.js, MaterialUI CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **WebRTC:** For real-time communication

## 📦 Installation & Setup
### Prerequisites
Make sure you have the following installed:
- Node.js (>= 14)
- MongoDB
- Git

### Steps to Run the Project Locally
#### 1️⃣ Clone the Repository
```sh
git clone https://github.com/tassu1/SmartCall.git
cd SmartCall
```
#### 2️⃣ Install Dependencies
```sh
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```
#### 3️⃣ Setup Environment Variables
Create a `.env` file in the `backend` directory and add:
```
MONGO_USERNAME=your_mongo_username
MONGO_PASSWORD=your_mongo_password
MONGO_CLUSTER=your_mongo_cluster_url
MONGO_DB=your_database_name
PORT=your_port_number
```
#### 4️⃣ Start the Application
```sh
# Start backend
cd backend
node app.js

# Start frontend
cd frontend
npm run dev
```
