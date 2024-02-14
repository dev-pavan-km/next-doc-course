export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-10 mt-5">
      <h1 className="text-xl">Routing Root Template</h1>
      <ul className="list-disc ml-5">
        <li>Templates is the second wrapper in component hierarchy</li>
        <li>Templates are similar to layouts in that they wrap each child layout or page</li>
        <li>
          Unlike layouts that persist across routes and maintain state, templates create a new instance for each of
          their children on navigation
        </li>
        <li>
          When a user navigates between routes that share a template, a new instance of the component is mounted, DOM
          elements are recreated, state is not preserved, and effects are re-synchronized.
        </li>
        <li>
          Suspense Boundaries inside layouts only show the fallback the first time the Layout is loaded and not when
          switching pages. For templates, the fallback is shown on each navigation.
        </li>
      </ul>
      {children}
    </div>
  );
}
