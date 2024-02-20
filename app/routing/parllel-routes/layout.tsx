import Link from "next/link";

export default function Layout({
  children,
  slot,
  slot1,
  auth
}: {
  children: React.ReactNode;
  slot: React.ReactNode;
  slot1: React.ReactNode;
  auth: React.ReactNode;
}) {
  return (
    <>
      <ul className="list-disc ml-10">
        <li>
          Parallel Routes allows you to simultaneously or conditionally render one or more pages within the same layout.
          They are useful for highly dynamic sections of an app, such as dashboards and feeds on social sites. For
          example, considering a dashboard, you can use parallel routes to simultaneously render the slot and slot1
          pages:
        </li>
        <li>
          Parallel routes are created using named slots. Slots are defined with the @folder convention. For example, the
          following file structure defines two slots: @slot and @slot1:
        </li>
        <li>
          Slots are passed as props to the shared parent layout. For the example above, the component in
          app/routing/parllel-routes/layout.js now accepts the @slot and @slot1 slots props, and can render them in
          parallel alongside the children prop:
        </li>
        <li>
          However, slots are not route segments and do not affect the URL structure. For example, for
          app/routing/parllel-routes/@slot/views, the URL will be app/routing/parllel-routes/slot/views since @analytics
          is a slot.
        </li>
        <li>
          <b>
            The children prop is an implicit slot that does not need to be mapped to a folder. This means app/page.js is
            equivalent to /app/routing/parllel-routes/@children/page.js.
          </b>
        </li>
        <li>
          By default, Next.js keeps track of the active state (or subpage) for each slot. However, the content rendered
          within a slot will depend on the type of navigation:
          <ul className="list-disc ml-10">
            <li>
              During client-side navigation, Next.js will perform a partial render, changing the subpage within the
              slot, while maintaining the other slot&apos;s active subpages, even if they don&apos;t match the current
              URL.
            </li>
            <li>
              After a full-page load (browser refresh), Next.js cannot determine the active state for the slots that
              don&apos;t match the current URL. Instead, it will render a default.js file for the unmatched slots, or
              404 if default.js doesn&apos;t exist.
            </li>
            <li>
              When navigating to /routing/parllel-routes/slot-internal, the @slot slot will render the /slot-internal
              page while maintaining the currently active page for the @slot1 slot.
              <Link href="/routing/parllel-routes/slot-internal" className="text-blue-500 font-bold">
                /app/routing/parllel-routes/slot-internal
              </Link>{" "}
              On refresh, Next.js will render a default.js for @slot1. If default.js doesn&apos;t exist, a 404 is
              rendered instead.
            </li>
            <li>The parllel slots can be conditionally rendered</li>
            <li>
              Parallel Routes can be used together with Intercepting Routes to create modals. This allows you to solve
              common challenges when building modals, such as:
              <ul className="list-disc ml-10">
                <li>Making the modal content shareable through a URL.</li>
                <li>Preserving context when the page is refreshed, instead of closing the modal.</li>
                <li>Closing the modal on backwards navigation rather than going to the previous route.</li>
                <li>Reopening the modal on forwards navigation.</li>
              </ul>
              <nav>
                <Link href="/routing/parllel-routes/login" className="text-blue-500">Open modal</Link> <span className="text-red-500">Pending implementation</span>
              </nav>
            </li>
          </ul>
        </li>
      </ul>
      {children}
      {auth}
      <div className="flex justify-evenly">
        {slot}
        {slot1}
      </div>
    </>
  );
}
