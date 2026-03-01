import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { useLocation } from "react-router-dom";

export function DashboardLayout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const isLanding = location.pathname === "/";

  if (isLanding) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <AppSidebar />
        <div className="flex-1 flex flex-col min-w-0">
          <header className="h-14 flex items-center border-b bg-card px-4 gap-3">
            <SidebarTrigger />
            <span className="text-sm font-medium text-muted-foreground">
              {getPageTitle(location.pathname)}
            </span>
          </header>
          <main className="flex-1 p-6 overflow-auto">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}

function getPageTitle(path: string): string {
  const titles: Record<string, string> = {
    "/teacher": "Teacher Dashboard",
    "/teacher/upload": "Upload Lecture",
    "/teacher/assessments": "Generated Assessments",
    "/student": "Student Dashboard",
    "/student/assessments": "Attempt Assessment",
    "/student/results": "My Results",
    "/analytics": "Analytics",
  };
  return titles[path] || "Lecture Lens";
}
