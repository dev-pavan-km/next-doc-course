import RoutingNav from "../../components/routing-nav";

export default function RoutingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-10">
      <h1 className="text-xl my-3">Nested Routing Root Layout in router groups</h1>
      <RoutingNav />
      {children}
    </section>
  );
}
