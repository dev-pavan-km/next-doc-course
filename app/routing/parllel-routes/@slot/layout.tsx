import Link from "next/link";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      @slot layout as <b>tab-groups</b>
      <nav className="text-blue-500 space-x-5">
        <Link href="/routing/parllel-routes/slot-internal">Slot Internal</Link>
        <Link href="/routing/parllel-routes/slot-internal1">Slot Internal1</Link>
      </nav>
      {children}
    </div>
  );
}
