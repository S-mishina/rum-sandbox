"use client"; // クライアントサイドでのレンダリングを指定

import { useEffect } from 'react';
import { getFaroInstance } from '../lib/initializeFaro';

export default function HomePage() {
  useEffect(() => {
    async function sendErrorLog() {
      const faro = await getFaroInstance(); // Faro初期化を待機
      if (faro) {
        faro.api.pushError(new Error("Test error for Faro"));
      } else {
        console.error("Faro instance not initialized");
      }
    }

    sendErrorLog();
  }, []);

  return (
    <div>
      <h1>Welcome to the Frontend App</h1>
      <p>This is a sample page for testing Faro and Tempo integration.</p>
    </div>
  );
}
