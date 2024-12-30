import {SidebarProvider} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/sidebar";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <SidebarProvider defaultOpen={true}>
            <AppSidebar/>
            <main className="w-full h-screen py-28 px-14 mr-[255px]">
                {children}
            </main>
        </SidebarProvider>
    );
}