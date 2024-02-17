import React from "react";

const page = ({ params }: { params: { slug: string[] } }) => {
  return (
    <div className="ml-10">
      <h1 className="text-xl">Optional Catch all segments example page</h1>
      {!params.slug ? (
        "the page is displayed even if the dynamic paths is not present. /slug1/slug2/slug3 is not present in url"
      ) : (
        <>
          <b>{JSON.stringify(params.slug)}</b>
        </>
      )}
    </div>
  );
};

export default page;
