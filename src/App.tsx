import {useMemo, useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import Layout from "@/components/layout.tsx";

function getGreeting() {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        return "Good morning";
    } else if (currentHour < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

function App() {
    const [searchTerm, setSearchTerm] = useState("");

    const patients = [
        {name: "Erika Mustermann", gender: "Female", age: 74, time: "10:00"},
        {name: "Jackson Lee", gender: "Male", age: 32, time: "10:30"},
        {name: "Isabella Nguyen", gender: "Female", age: 25, time: "11:00"},
        {name: "William Kim", gender: "Male", age: 27, time: "11:30"},
        {name: "Sofia Davis", gender: "Female", age: 25, time: "13:00"},
    ];

    const filteredPatients = useMemo(() =>
            patients.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()))
        , [searchTerm]);

    const greeting = getGreeting();

    return (
        <Layout>
            <div className="flex flex-col items-center">
                {/* Header */}
                <header className="mb-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        {greeting}, Dr. Hans
                    </h1>
                </header>

                {/* Search Bar */}
                <div className="flex items-center space-x-2 mb-8 w-96">
                    <Input
                        type="text"
                        placeholder="Search patient..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="flex-1 text-gray-900 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <Button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600">
                        Search
                    </Button>
                </div>

                {/* Upcoming Patients */}
                <div className="p-6 rounded-lg shadow w-96">
                    <h2 className="text-lg font-bold text-gray-800 mb-1">Upcoming Patients</h2>
                    <p className="text-sm text-gray-600 mb-4">
                        You have {patients.length} upcoming patients today
                    </p>

                    {/* Patient List */}
                    <div className="space-y-8">
                        {filteredPatients.map((patient, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div
                                        className="h-10 w-10 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 font-bold"
                                    >
                                        {patient.name[0]}
                                    </div>
                                    <div>
                                        <p className="text-gray-800 font-medium">{patient.name}</p>
                                        <p className="text-sm text-gray-600">
                                            {`${patient.gender}, ${patient.age}`}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-600">{patient.time}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default App;
