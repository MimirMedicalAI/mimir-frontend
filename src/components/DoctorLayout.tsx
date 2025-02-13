import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/Sidebar.tsx";
import {Outlet} from "react-router";
import {Toaster} from "@/components/ui/toaster.tsx";

export default function DoctorLayout() {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar/>
            <main className="w-full h-full py-28 px-14">
                <Outlet/>
            </main>
            <Toaster/>
        </SidebarProvider>
    );
}