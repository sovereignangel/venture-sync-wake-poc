'use client';
import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center w-full flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-primary mb-4">
          WakeSync
        </h1>
        <p className="text-lg text-gray-700 mb-8">
          Never miss a morning meeting again.
        </p>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Features</h2>
          <ul className="list-disc list-inside text-left max-w-md mx-auto">
            <li>Connect Google Calendar</li>
            <li>Define meeting rules (keywords, attendee count)</li>
            <li>Set alert time before meeting</li>
            <li>Receive phone call/SMS alerts</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Pricing</h2>
          <p className="text-lg text-gray-700">
            $9/month per pair.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Demo</h2>
          <p className="text-lg text-gray-700 mb-4">
            Enter your email to simulate an alert:
          </p>
          <input
            type="email"
            placeholder="your@email.com"
            className="border rounded px-4 py-2 w-64 text-black"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="bg-primary text-white px-6 py-3 rounded ml-2"
            onClick={() => alert(`Simulating alert to ${email}`)}
          >
            Simulate Alert
          </button>
        </section>

        <div className="flex items-center justify-around max-w-4xl mt-6 w-full">
          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=template&utm_campaign=create-next-app"
            className="p-6 rounded-xl hover:shadow-md transition-shadow duration-200 ease-in-out"
          >
            <h2 className="text-2xl font-bold">Deploy &rarr;</h2>
            <p className="text-left mt-4 text-gray-700">
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}