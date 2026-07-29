# Property Rental Management System - Backend API

A centralized backend API built with NestJS to help property owners manage rental properties, units, tenants, agreements, payments, and maintenance concerns. 

## Instructions for Running the Application
1. Clone the repository: `git clone [your-repo-link]`
2. Install dependencies: `npm install`
3. Set up your environment variables (see Database Setup).
4. Start the development server: `npm run start:dev`

## Database Setup Instructions
1. Ensure you have PostgreSQL installed and running.
2. Create a `.env` file in the root directory and add your database connection string and JWT secret:
   `DATABASE_URL="postgresql://[USER]:[PASSWORD]@localhost:5432/[DATABASE_NAME]?schema=public"`
   `JWT_SECRET="your_super_secret_key"`
3. Run the Prisma migrations to build the tables:
   `npx prisma migrate dev --name init`
4. Generate the Prisma client:
   `npx prisma generate`

## Architecture Explanation
This application follows a standard modular, layered architecture using NestJS:
* **Controllers:** Handle incoming HTTP requests, route them, and return responses. Protected by `JwtAuthGuard` and `RolesGuard`.
* **Services:** Contain the core business logic and interact directly with the database.
* **Prisma (ORM):** Manages the database schema and queries in a type-safe manner.
* **Modules:** The app is broken down into feature-specific modules (Users, Properties, Units, Agreements, Payments, Concerns, Auth) to keep the codebase clean and maintainable.

## Available API Endpoints
* **Auth:** `POST /auth/login`
* **Users:** `POST /users`, `GET /users`, `GET /users/:id`, `PATCH /users/:id`, `DELETE /users/:id`
* **Properties:** `POST /properties`, `GET /properties`, `GET /properties/:id`, `PATCH /properties/:id`, `DELETE /properties/:id`
* **Units:** `POST /units`, `GET /units` ...
* **Agreements:** `POST /agreements`, `GET /agreements` ...
* **Payments:** `POST /payments`, `GET /payments` ...
* **Concerns:** `POST /concerns`, `GET /concerns` ...

## Known Limitations
* Currently, there is no file upload for lease agreements or Passwords cannot be reset via email yet.

## Improvements With More Time
* I would add comprehensive Jest Unit Tests for all services", I would add Swagger for interactive API documentation and I would also create a global exception filter to catch specific Prisma database errors.
* Containerization: With more time, I would Dockerize the application by writing a Dockerfile for the NestJS API and a docker-compose.yml file to spin up both the API and the PostgreSQL database together in isolated containers for easier deployment.

## AI Usage
* **AI Tools Used:** Google Gemini
* **How AI Assisted:** Gemini acted as a pair-programmer, helping to generate boilerplate NestJS code, write Prisma schemas, and debug compilation errors.
* **2 Rejected/Modified Suggestions:**
  1. *Suggestion:* The AI initially suggested using standard integer IDs for the database.
     *Modification:* I modified this to use UUIDs for better security and scalability.  
  3. *Suggestion:* The AI generated the Units module using a singular name (`UnitModule`).
  4. *Modification:* I had to modify the imports in `app.module.ts` to plural (`UnitsModule`) to fix a compilation error and keep naming conventions consistent.
* **Verification:** I reviewed all generated code, tested every endpoint using Thunder Client, and verified database entries directly using Prisma Studio to ensure correctness.
