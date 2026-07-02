import Link from "next/link";
import { PawPrint, ListChecks, ClipboardList } from "lucide-react";

export default function DashboardLayout({ children }) {
  return (
    <section className="flex min-h-screen w-full p-4">
      {/* Sidebar */}
      <aside className="w-72 rounded-2xl border border-default-200 bg-default-50 p-6">
        <h2 className="mb-8 text-3xl font-bold">Dashboard</h2>

        <nav className="flex flex-col gap-3">
          <Link
            href="/dashboard/my-request"
            className="rounded-xl px-4 py-3 transition hover:bg-accent hover:text-white"
          >
            My Requests
          </Link>

          <Link
            href="/add-pet"
            className="rounded-xl px-4 py-3 transition hover:bg-accent hover:text-white"
          >
            Add Pet
          </Link>

          <Link
            href="/dashboard/my-listings"
            className="rounded-xl px-4 py-3 transition hover:bg-accent hover:text-white"
          >
            My Listings
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="ml-4 flex-1 rounded-2xl border border-default-200 bg-white p-4 w-auto h-auto">
        {children}
      </main>
    </section>
  );
}
