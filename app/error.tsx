"use client";
import { useEffect } from "react";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="text-center mt-64">
        <h1 className="mb-4 text-6xl font-semibold text-red-500">Error</h1>
        <p className="mb-4 text-lg text-gray-600">
        Something went wrong!
        </p>
        <div className="animate-bounce">
          <svg
            className="mx-auto h-16 w-16 text-red-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            ></path>
          </svg>
        </div>
        <p className="mt-4 text-gray-600">
          Let &apos; s get you back{" "}
          <a href="/" className="text-blue-500">
          {" "} home
          </a>
          {" "}  or {" "} 
          <button onClick={() => reset()} className="text-blue-500">Try again {" "}</button>
          .
        </p>
      </div>
    </>
  );
}
