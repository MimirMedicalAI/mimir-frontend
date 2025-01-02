import {BotMessageSquare, Home, MessagesSquareIcon, Users} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarSeparator,
} from "@/components/ui/sidebar";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar.tsx";
import {Link, useLocation} from "react-router";

const items = [
    {
        title: "Home",
        url: "/",
        icon: Home,
    },
    {
        title: "Patients",
        url: "/patients",
        icon: Users,
    },
    {
        title: "Med-AI Assistant",
        url: "/med-AI-Assistant",
        icon: BotMessageSquare,
    },
    {
        title: "Patient Communication",
        url: "/patient-communication",
        icon: MessagesSquareIcon,
    },
];

export function AppSidebar() {
    const location = useLocation()
    return (
        <Sidebar>
            <SidebarHeader className="mt-2 ml-2">
                <h3>Aeirmed</h3>
            </SidebarHeader>
            <SidebarSeparator/>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild
                                                       isActive={(location.pathname.includes(item.url) && item.title !== "Home") || (location.pathname === '/' && item.title === "Home")}>
                                        <Link
                                            to={item.url}
                                        >
                                            <item.icon className="text-gray-800"/>
                                            <span className="text-gray-800">{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="flex flex-row items-center mb-2 ml-2">
                <Avatar>
                    <AvatarImage src="https://ui.shadcn.com/avatars/02.png" alt="@shadcn"/>
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                    <p className="text-gray-800 text-sm font-semibold">Dr. Hans Stubbe</p>
                    <p className="text-gray-600 text-sm">Hausarzt</p>
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}