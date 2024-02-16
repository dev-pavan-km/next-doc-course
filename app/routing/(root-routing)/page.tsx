import React from "react";

const page = () => {
  return (
    <main className="mx-10 mt-5">
      <div>
        <h1 className="text-xl mb-3">Routing Root Page</h1>
        <ul className="list-disc ml-5">
          <li>This is the leaf of the route subtree</li>
          <li>This page is publically accessable</li>
          <li>By default it is server component, but can be set to client component</li>
        </ul>
      </div>
    </main>
  );
};

export default page;
