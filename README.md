# LancerMedia: Booking Room Studio Web

LancerMedia is a web application for booking studio rooms, developed using **Next.js** and deployed on **Vercel**. The application uses **NextAuth** for user authentication.

---

## Features

- Modern booking system for studio rooms.
- User authentication using **NextAuth**.
- Optimized for deployment on **Vercel**.
- Built with the latest features of **Next.js**.

---

## Getting Started

### Prerequisites

Before running the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- A [Vercel](https://vercel.com/) account for deployment.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/lancermedia.git
   cd lancermedia
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up environment variables:
   - Create a `.env.local` file in the root directory.
   - Add the following environment variables:
     ```env
     NEXTAUTH_URL=http://localhost:3000
     NEXTAUTH_SECRET=your_secret_key
     DATABASE_URL=your_database_connection_string
     ```

### Running Locally

To run the application in development mode:

```bash
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

---

## Deployment

### Deploy on Vercel

1. Install the Vercel CLI if not already installed:
   ```bash
   npm install -g vercel
   ```

2. Log in to Vercel:
   ```bash
   vercel login
   ```

3. Deploy the project:
   ```bash
   vercel
   ```

4. Set environment variables in Vercel:
   - Go to your project dashboard on Vercel.
   - Add the same environment variables (`NEXTAUTH_URL`, `NEXTAUTH_SECRET`, `DATABASE_URL`) under the **Environment Variables** section.

5. Your application will be live at the Vercel-provided URL.

---

## Authentication Setup

This project uses **NextAuth** for authentication.

### Providers

Add the required authentication providers in your `[...nextauth].js` configuration. Example:

```javascript
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
```

### Adding a Provider

To add a new provider:
1. Register your app with the provider (e.g., Google, Facebook).
2. Obtain the client ID and secret.
3. Update your `.env.local` and `[...nextauth].js` accordingly.

---

## Project Structure

```
├── components/        # Reusable components
├── pages/             # Application routes
├── public/            # Static assets
├── styles/            # Global and component-level styles
├── .env.local         # Environment variables
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies
```

---

## Useful Scripts

- `npm run dev`: Run the development server.
- `npm run build`: Build the application for production.
- `npm start`: Start the application in production mode.

---

## Contributing

Contributions are welcome! Please fork the repository and create a pull request for any improvements or bug fixes.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
