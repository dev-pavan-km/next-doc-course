export default function DynamicRoutesRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string[] };
}>) {
  return (
    <section className="mx-10">
      <h1 className="text-xl my-3">This is optional catch all segments layout</h1>

      {!params.slug ? (
        "the layout is displayed even if the dynamic paths is not present. /slug1/slug2/slug3 is not present in url"
      ) : (
        <>
          <b>{JSON.stringify(params.slug)}</b> {"the dynamic path is available in layout also"}
        </>
      )}
      {children}
    </section>
  );
}
