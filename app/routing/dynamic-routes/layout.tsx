import Link from "next/link";

export default function DynamicRoutesRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-10">
      <h1 className="text-xl my-3">Dynamic routes root layout</h1>
      <ul className="flex gap-2 text-blue-500">
        <li>
          <Link href="/routing/dynamic-routes/some-random-slug">Single segment example</Link>
        </li>
        <li>
          <Link href="/routing/dynamic-routes/catch-all-segments">Catch all segments</Link>
        </li>
        <li>
          <Link href="/routing/dynamic-routes/optional-catch-all-segments">Optional Catch all segments</Link>
        </li>
      </ul>
      {children}
    </section>
  );
}
