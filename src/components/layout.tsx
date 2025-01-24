import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/sidebar";
import {Outlet} from "react-router";

export default function Layout() {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar/>
            <main className="w-full h-full py-28 px-14">
                <Outlet/>
            </main>
        </SidebarProvider>
    );
}