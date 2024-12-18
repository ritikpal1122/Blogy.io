# Blogy.io

Blogy.io is a modern, full-stack blog application built to provide a seamless experience for creating, managing, and reading blogs. It leverages cutting-edge technologies and modern development practices to ensure performance, scalability, and ease of use.

## Features

- **User-friendly Blog Interface**: Create, edit, and read blogs with a clean and intuitive UI.
- **Authentication and Authorization**: Secure login and access controls.
- **Responsive Design**: Optimized for both desktop and mobile devices using Tailwind CSS.
- **High Performance**: Built with a scalable backend and efficient database queries.
- **Cloudflare Deployment**: Fast, reliable, and globally distributed hosting.

---

## Tech Stack

### Frontend

- **React with TypeScript**: Provides a robust and type-safe user interface.
- **Tailwind CSS**: For styling and ensuring a responsive design.

### Backend

- **Node.js with Hono**: Lightweight and high-performance backend framework.
- **Prisma**: Modern ORM for working with PostgreSQL.
- **PostgreSQL**: Reliable and powerful relational database.
- **Cloudflare Workers**: Deployed on the edge for reduced latency.

---

## Getting Started

Follow these steps to run the project locally:

### Prerequisites

1. **Node.js**: Ensure you have Node.js installed.
2. **PostgreSQL**: Set up a PostgreSQL database.
3. **Cloudflare Account**: Optional for deploying.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/blogy.io.git
   cd blogy.io
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add the following variables:

   ```env
   DATABASE_URL=postgresql://user:password@localhost:5432/blogy
   SESSION_SECRET=your_secret_key
   CLOUDFARE_API_TOKEN=your_token
   ```

4. Migrate the database:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

### Deployment

1. Build the project:

   ```bash
   npm run build
   ```

2. Deploy to Cloudflare:
   Follow Cloudflare's worker deployment guide.

---

## Folder Structure

```
blogy.io/
├── src/
│   ├── components/      # React components
│   ├── pages/           # Application pages
│   ├── styles/          # Tailwind configurations and global styles
│   ├── utils/           # Helper functions
├── prisma/
│   ├── schema.prisma    # Prisma schema definition
├── public/              # Static assets
├── .env                 # Environment variables
├── package.json         # Node dependencies and scripts
```

---

## Contributing

We welcome contributions to Blogy.io! Here's how you can get involved:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Submit a pull request with a clear description of your changes.

---

## License

Blogy.io is open-source software licensed under the MIT License. See the LICENSE file for more details.

---

## Acknowledgments

- **React**: For providing a robust frontend library.
- **Tailwind CSS**: For enabling responsive designs effortlessly.
- **Prisma**: For simplifying database interactions.
- **Cloudflare**: For fast and secure deployment.
