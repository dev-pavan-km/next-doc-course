import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-10 mt-5">
      <h1 className="text-xl">{"<Link>"} Component</h1>
      {"<Link>"} is a built-in component that extends the HTML {"<a>"} tag to provide prefetching and client-side
      navigation between routes.
      <h2 className="text-xl mt-5">{"<Link>"} href can also accept an object</h2>
      <Link
        href={{
          pathname: "/routing",
          query: { search: "123" },
        }}
        className="text-blue-500">
        Example link with object
      </Link>
      <h2 className="text-xl mt-5">
        {"<Link>"} with replace attr. Defaults to false. When true, next/link will replace the current history state
        instead of adding a new URL into the browser’s history stack.
      </h2>
      <Link href="/routing" replace className="text-blue-500">
        Example link with replace
      </Link>
      <h2 className="text-xl mt-5">
        {"<Link>"} with scroll attr. Defaults to true. The default behavior of {"<Link>"} is to scroll to the top of a
        new route or to maintain the scroll position for backwards and forwards navigation. When false, next/link will
        not scroll to the top of the page after a navigation.
      </h2>
      <Link href="/routing" scroll={false} className="text-blue-500">
        Example link with scroll false
      </Link>
      <h2 className="text-xl mt-5">
        {"<Link>"} with prefetch attr. Prefetching happens when a {"<Link />"} component enters the users viewport
        (initially or through scroll). Next.js prefetches and loads the linked route (denoted by the href) and its data
        in the background to improve the performance of client-side navigations. Prefetching is only enabled in
        production.
      </h2>
      <ul className="ml-5 list-disc">
        <li>
          null (default): Prefetch behavior depends on whether the route is static or dynamic. For static routes, the
          full route will be prefetched (including all its data). For dynamic routes, the partial route down to the
          nearest segment with a loading.js boundary will be prefetched.
        </li>
        <li>true: The full route will be prefetched for both static and dynamic routes.</li>
        <li>false: Prefetching will be disabled.</li>
      </ul>
      <Link href="/routing" prefetch={false} className="text-blue-500">
        example link with prefetch false
      </Link>
      <h2 className="text-xl mt-5">{"<Link>"} with as attr.</h2>
      <a
        href="https://nextjs.org/docs/app/api-reference/components/link#middleware"
        className="text-blue-500"
        target="_blank">
        Link with middleware to rewrite the user to different page
      </a>
      <h2 className="text-xl mt-5">Checking active {"<Link>"}</h2>
      <p>Using <b>usePathname</b> get the current pathname and highlight the link to indicate it is active</p>
    </div>
  );
};

export default page;
