# Invoice Management System

This project is a simple Invoice Management System built using React for the frontend and Express.js (or JSON Server) for the backend. 
The application allows users to manage invoices, including creating, reading, updating, and deleting invoices.

## Features

- User Authentication:
  - Login and Sign-Up pages for user authentication.
- Invoice Management:
  - Create, update, and delete invoices.
  - View a list of invoices.
- Responsive Design:
  - Mobile-friendly and visually appealing interface.
- Data Persistence:
  - Frontend uses localStorage to store invoice data.
  - Backend optionally connects to MongoDB for data persistence.

---


## Project Setup

### Setting up the Project Directory

1. Create a directory for the project:
   ```bash
   mkdir invoice-frontend
   cd invoice-frontend
   ```

2. Create folders for the frontend and backend:
   ```bash
   mkdir invoice-frontend & invoice-backend
   ```

---

## Backend Setup

1. **Initialize the backend:**
   ```bash
   cd invoice-backend
   npm init -y
   npm install express cors body-parser mongoose dotenv
   ```



2. **Develop API Endpoints:**
   - Implement CRUD operations for `/invoices`:
     - `POST /invoices`: Create a new invoice.
     - `GET /invoices`: Fetch all invoices.
     - `PUT /invoices/:id`: Update an invoice by ID.
     - `DELETE /invoices/:id`: Delete an invoice by ID.

3. **Run the backend server:**
   ```bash
   node server.js
   ```



## Frontend Setup

1. **Initialize the frontend:**
   ```bash
   cd ../frontend
   npx create-react-app invoice-frontend . 
   npm install axios react-router-dom bootstrap
   ```



2. **Implement Components:**
   - `Login`: Login form for user authentication.
   - `SignUp`: Sign-up form for new user registration.
   - `HomePage`: Displays a list of invoices.
   - `InvoiceForm`: A form to create or edit invoices.


5. **Run the frontend:**
   ```bash
   npm start
   ```



## Usage Instructions

1. **Start the Backend**
   ```bash
   cd invoice-backend
   node server.js
   ```
2. **Start the Frontend**
   ```bash
   cd invoice-frontend
   npm start
   ```
3. Access the application at `http://localhost:3000`.

---

Screenshots : 
1) Login : 

![Screenshot (54)](https://github.com/user-attachments/assets/de82a737-7d51-4225-b08e-dd92a502e061)

2) Signup :
 
![Screenshot (55)](https://github.com/user-attachments/assets/4b309830-39ae-4b9d-94a2-7ca76d0e6c5b)

3) HomePage :
   ![Screenshot (56)](https://github.com/user-attachments/assets/fd0766ae-d5b7-404d-9552-e02d1a8b1013)

    ![Screenshot (57)](https://github.com/user-attachments/assets/72a65cfa-9225-403c-bfdc-974cc1f22e57)

4) InvoiceForm :
 ![Screenshot (58)](https://github.com/user-attachments/assets/f7801f7f-03fe-492b-976c-1c610a9552d4)
![Screenshot (59)](https://github.com/user-attachments/assets/f68d8afe-d68f-4304-bc8d-30edd4d41b14)

![Screenshot (60)](https://github.com/user-attachments/assets/aa5f0b7c-41e1-41d3-aeab-5a8103bf6769)

   

  
