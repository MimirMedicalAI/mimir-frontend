import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {useMemo, useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {useNavigate} from "react-router";

function Patients() {
    const navigate = useNavigate();
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

    return (
        <div className="flex flex-col items-start text-gray-800">
            <h2 className="text-gray-800 text-2xl font-semibold mb-8">Patients</h2>
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
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[150px]">First Name</TableHead>
                        <TableHead className="w-[150px]">Last Name</TableHead>
                        <TableHead className="w-[150px]">Birthday</TableHead>
                        <TableHead>Gender</TableHead>
                        <TableHead className="w-[100px]">Next Visit</TableHead>
                        <TableHead>Last Visit</TableHead>
                        <TableHead className="text-right"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredPatients.map((patient, index) => (
                        <TableRow key={index} className="hover:cursor-pointer"
                                  onClick={() => navigate(`/patients/${encodeURIComponent(patient.name)}`)}>
                            <TableCell className="font-medium">{patient.name.split(" ")[0]}</TableCell>
                            <TableCell>{patient.name.split(" ")[1]}</TableCell>
                            <TableCell>01.01.1970</TableCell>
                            <TableCell>{patient.gender}</TableCell>
                            <TableCell>01.01.2025</TableCell>
                            <TableCell>31.12.2024</TableCell>
                            <TableCell className="text-right">...</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default Patients;