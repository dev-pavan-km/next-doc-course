import { redirect } from "next/navigation";
import React, { useEffect, useState } from "react";

const Page = () => {
  redirect("/routing");

  return (
    <div>
      <h1 className="text-xl">Redirecting</h1>
    </div>
  );
};

export default Page;
