import Link from "next/link";

export default function DynamicRoutesRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-10">
      <h1 className="text-xl my-3">
        Dynamic routes <b>optional catch all segments</b> root layout
      </h1>
      <p>
        Catch-all Segments can be made optional by including the parameter in double square brackets: [[...folderName]].
      </p>
      <p>
        For example, app/shop/[[...slug]]/page.js will also match /shop, in addition to /shop/clothes,
        /shop/clothes/tops, /shop/clothes/tops/t-shirts.
      </p>
      <p>
        The difference between catch-all and optional catch-all segments is that with optional, the route without the
        parameter is also matched (/shop in the example above).
      </p>
      <h2 className="text-xl">This route does not have page.tsx file</h2>
      <ul className="flex gap-2 text-blue-500">
        <li>
          <Link href="/routing/dynamic-routes/optional-catch-all-segments/slug1/slug2/slug3">Optional Catch all segments example</Link>
        </li>
      </ul>
      {children}
    </section>
  );
}
