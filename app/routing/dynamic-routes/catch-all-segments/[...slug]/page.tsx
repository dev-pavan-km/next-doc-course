import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div className="ml-10">
      <h1 className="text-xl">Catch all segments example page</h1>
      {JSON.stringify(params.slug)}
    </div>
  );
};

export default page;
