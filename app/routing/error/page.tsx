"use client"

import React from "react";

const page = () => {
  return (
    <div className="ml-10 mt-5">
      <button
        onClick={() => {
          throw new Error("Custom error");
        }} className="bg-indigo-500 text-white p-1">
        Create custom error
      </button>

      <ul className="ml-5 list-disc">
        <li>
          error.js automatically creates a React Error Boundary that wraps a nested child segment or page.js component.
        </li>
        <li>The React component exported from the error.js file is used as the fallback component.</li>
        <li>
          If an error is thrown within the error boundary, the error is contained, and the fallback component is
          rendered.
        </li>
        <li>
          When the fallback error component is active, layouts above the error boundary maintain their state and remain
          interactive, and the error component can display functionality to recover from the error.
        </li>
      </ul>
    </div>
  );
};

export default page;
