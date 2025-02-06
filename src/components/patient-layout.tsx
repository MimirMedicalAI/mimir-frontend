import {Outlet} from "react-router";
import {Home, MessageSquare, Pill, User} from "lucide-react";

function PatientLayout() {
    return <>
        <Outlet/>
        <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around items-center py-3">
            <a href="/" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <Home size={24}/>
                <span className="text-xs mt-1">Home</span>
            </a>
            <a href="/ask" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <MessageSquare size={24}/>
                <span className="text-xs mt-1">Ask</span>
            </a>
            <a href="/medications" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <Pill size={24}/>
                <span className="text-xs mt-1">Medications</span>
            </a>
            <a href="/profile" className="flex flex-col items-center text-gray-600 hover:text-blue-500">
                <User size={24}/>
                <span className="text-xs mt-1">Profile</span>
            </a>
        </nav>
    </>
}

export default PatientLayout;