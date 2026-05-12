import { AdminAppLayout } from "@/components/layouts/AdminLayout";
//import { AppLayout } from "@/components/layouts/AppLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AdminAppLayout>{children}</AdminAppLayout>;
}
