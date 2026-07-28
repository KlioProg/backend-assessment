<h1>🚀 Getting Started (Device Setup)</h1>

<p>Since the foundational infrastructure (Docker, PostgreSQL, Prisma, NestJS) is already established, follow these steps to spin up the development environment on a new machine.</p>

<h2>1. Clone and Install Dependencies</h2>
<p>First, pull down the repository and install all required Node packages:</p>
<pre><code>git clone https://github.com/KlioProg/backend-assessment.git
cd backend-assessment
npm install
</code></pre>

<h2>2. Environment Configuration</h2>
<p>Because <code>.env</code> files contain sensitive secrets, they are intentionally ignored by Git. You must recreate this file locally.</p>
<p>Create a file named <code>.env</code> in the root directory and add your database connection string:</p>
<pre><code>DATABASE_URL="postgresql://postgres:rootpassword@localhost:5432/rental_db?schema=public"
</code></pre>

<h2>3. Start the Engine (Database &amp; Prisma)</h2>
<p>We need to start the isolated PostgreSQL database using Docker, generate the Prisma client types, and sync our database schema. Run these commands one by one:</p>
<pre><code># Start the PostgreSQL database container in the background
docker-compose up -d

# Generate the TypeScript definitions for Prisma
npx prisma generate

# Apply the existing database migrations
npx prisma migrate deploy
</code></pre>

<h2>4. Run the Application</h2>
<p>With the database running and packages installed, start the NestJS development server:</p>
<pre><code>npm run start:dev
</code></pre>

<p><strong>Your server should now be running successfully!</strong></p>
