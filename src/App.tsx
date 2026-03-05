import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DashboardLayout } from "@/components/DashboardLayout";
import LandingPage from "./pages/LandingPage";
import TeacherDashboard from "./pages/TeacherDashboard";
import UploadLecture from "./pages/UploadLecture";
import TeacherAssessments from "./pages/TeacherAssessments";
import StudentDashboard from "./pages/StudentDashboard";
import StudentAssessments from "./pages/StudentAssessments";
import StudentResults from "./pages/StudentResults";
import AnalyticsPage from "./pages/AnalyticsPage";
import DnsSettings from "./pages/DnsSettings";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <DashboardLayout>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/teacher" element={<TeacherDashboard />} />
            <Route path="/teacher/upload" element={<UploadLecture />} />
            <Route path="/teacher/assessments" element={<TeacherAssessments />} />
            <Route path="/student" element={<StudentDashboard />} />
            <Route path="/student/assessments" element={<StudentAssessments />} />
            <Route path="/student/results" element={<StudentResults />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/settings/dns" element={<DnsSettings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </DashboardLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
