export default function RoutingRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="mx-10">
      <h1 className="text-xl my-3">Nested Routing Root Layout</h1>
      <ul className="list-disc ml-5">
        <li>layout is the first wrapper in the component hierarchy</li>
        <li>
          Only the root layout can contain {"<html>"} and {"<body>"} tags.
        </li>
        <li>When a layout.js and page.js file are defined in the same folder. The layout will wrap the page.</li>
        <li>By default server can be changed to client component</li>
        <li>Can fetch the data</li>
        <li>
          Passing data between a parent layout and its children is not possible. However, you can fetch the same data in
          a route more than once, and React will automatically dedupe the requests without affecting performance.
        </li>
        <li>
          Layouts do not have access to the route segments below itself. To access all route segments, you can use
          useSelectedLayoutSegment or useSelectedLayoutSegments in a Client Component.
        </li>
        <li>You can use Route Groups to opt specific route segments in and out of shared layouts.</li>
        <li>You can use Route Groups to create multiple root layouts.</li>
        <li>On navigation, layouts preserve state, remain interactive, and do not re-render. </li>
        <li>
          You can define a layout by default exporting a React component from a layout.js file. The component should
          accept a children prop that will be populated with a child layout (if it exists) or a page during rendering.
        </li>
      </ul>
      {children}
    </section>
  );
}
