"use client";

import { motion } from "framer-motion";
import {
  Twitter,
  Instagram,
  GitlabIcon as GitHub,
  Mail,
} from "lucide-react";

import { Link } from "react-router-dom";
import { Button } from "../components/ui/button";

export default function HomePage() {

  const posts = [
    {
      id: 1,
      title: "Understanding JavaScript Promises",
      excerpt:
           "Learn the basics of JavaScript and UnderStand What is Promises.",
      url: "https://dev.to/just_ritik/understanding-javascript-promises-2eib",
    },
    {
      id: 2,
      title: "JavaScript Event Loop: A Deep Dive",
      excerpt:
        "Discover powerful CSS techniques to create stunning layouts and animations.",
      url: "https://dev.to/just_ritik/javascript-event-loop-a-deep-dive-4g00",
    },
    {
      id: 3,
      title: "50 basic Linux commands",
      excerpt:
        "Started Linux ? So here is the 50 Commands that every Linux user should know.",
      url: "https://dev.to/just_ritik/50-basic-linux-commands-3af6",
    },
    {
      id: 4,
      title: "How To Learn React JS Easy Way",
      excerpt:
        "Explore upcoming trends and technologies shaping the future of web development.",
      url: "https://medium.com/@er.ritikpal/how-to-learn-react-js-easy-way-7970ceeb6905",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <motion.header
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-4 py-6 flex justify-between items-center"
      >
        <Link
          to="/"
          className="text-3xl font-bold text-gray-800 hover:text-gray-600 transition-colors"
        >
          Blogy
        </Link>
        <nav>
        {/* <Button asChild variant="outline">
            <Link to="/techblog">Explore Tech Blogs</Link>
          </Button> */}
          <Button asChild variant="outline">
            <Link to="/signin">Login</Link>
          </Button>
        </nav>
      </motion.header>

      <main className="container mx-auto px-4 py-12">
        <motion.section
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
            Welcome to Blogy
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Discover insightful articles, engage in meaningful discussions, and
            stay updated with the latest in tech and beyond.
          </p>
          <Button asChild size="lg">
            <Link to="/blog">Explore Posts</Link>
          </Button>
        </motion.section>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: post.id * 0.1 }}
              whileHover={{ y: -5 }}
    
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {post.title}
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <motion.div
                  initial={{ opacity: 1 }}
               
                  transition={{ duration: 0.2 }}
                >
                  <Button asChild variant="link">
                    <a href={post.url} target="_blank">
                      Read More
                    </a>
                  </Button>
                </motion.div>
              </div>
            </motion.article>
          ))}
        </section>
      </main>

      <footer className="bg-gray-100 text-gray-600 py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center space-x-6 mb-4"
          >
            <a href="https://x.com/ritikpaltech" className="hover:text-gray-800 transition-colors">
              <Twitter size={24} />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://www.instagram.com/ritikpal_45/" className="hover:text-gray-800 transition-colors">
              <Instagram size={24} />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://github.com/ritikpal1122" className="hover:text-gray-800 transition-colors">
              <GitHub size={24} />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="mailto:er.ritikpal@gmail.com" className="hover:text-gray-800 transition-colors">
              <Mail size={24} />
              <span className="sr-only">Email</span>
            </a>
          </motion.div>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4"
          >
            &copy; {new Date().getFullYear()} Blogy. All rights reserved.
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm text-gray-500"
          >
            Powered by{" "}
            <a
              href="https://tailwindcss.com"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Tailwind
            </a>
            ,{" "}
            <a
              href="https://www.framer.com/motion/"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Framer Motion
            </a>
            , and{" "}
            <a
              href="https://ui.shadcn.com"
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              shadcn/ui
            </a>
          </motion.p>
        </div>
      </footer>
    </div>
  );
}
