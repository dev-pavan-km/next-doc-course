import Link from "next/link";

export default function DynamicRoutesRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-10">
      <h1 className="text-xl my-3">
        Dynamic routes <b>catch all segments</b> root layout
      </h1>
      <p>
        Dynamic Segments can be extended to catch-all subsequent segments by adding an ellipsis inside the brackets
        [...folderName].
      </p>
      <p>
        For example, app/shop/[...slug]/page.js will match /shop/clothes, but also /shop/clothes/tops,
        /shop/clothes/tops/t-shirts, and so on.
      </p>
      <ul className="flex gap-2 text-blue-500">
        <li>
          <Link href="/routing/dynamic-routes/catch-all-segments/slug1/slug2/slug3">Catch all segments example</Link>
        </li>
      </ul>
      {children}
    </section>
  );
}
