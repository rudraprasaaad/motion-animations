import { Dashboard } from "@/components/dashboard";
import { Sidebar } from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Dashboard />
    </div>
  );
}
