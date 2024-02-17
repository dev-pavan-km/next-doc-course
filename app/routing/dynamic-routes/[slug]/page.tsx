import React from "react";

const page = ({ params }: { params: { slug: string } }) => {
  return (
    <div className="ml-10">
      <h1 className="text-xl">Single segment example page</h1>
      {params.slug}
    </div>
  );
};

export default page;
