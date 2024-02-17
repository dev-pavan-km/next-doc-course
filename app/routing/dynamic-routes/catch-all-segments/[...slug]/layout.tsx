export default function DynamicRoutesRootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { slug: string[] };
}>) {
  return (
    <section className="mx-10">
      <h1 className="text-xl my-3">
        This is catch all segments layout
      </h1>
      <b>{JSON.stringify(params.slug)}</b> the dynamic path is available in layout also
      {children}
    </section>
  );
}
