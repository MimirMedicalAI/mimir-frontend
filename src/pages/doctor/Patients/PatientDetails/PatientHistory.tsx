import AISummary from "@/components/AISummary.tsx";
import {useState} from "react";
import {Input} from "@/components/ui/input.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table.tsx";
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {Checkbox} from "@/components/ui/checkbox";
import {MoreHorizontal} from "lucide-react";

function PatientHistory() {
    const [searchTerm, setSearchTerm] = useState("");

    const visits = [
        {
            date: "23.10.2024",
            reason: "Annual gynecological examination with PAP smear and breast ex...",
            specialty: "Gynäkologie",
            facility: "Frauenärztliche Gemeinschaftspr"
        },
        {
            date: "15.09.2024",
            reason: "Chronic migraine follow-up and medication optimization consult...",
            specialty: "Neurologie",
            facility: "MVZ München Zentrum"
        },
        {
            date: "01.08.2024",
            reason: "Thyroid function evaluation and hormone level monitoring...",
            specialty: "Endokrinologie",
            facility: "Internistische Praxis Dr. Weber &"
        },
        {
            date: "23.06.2024",
            reason: "Lower back pain assessment and therapy planning session...",
            specialty: "Orthopädie",
            facility: "Orthopädiezentrum München Ost"
        },
        {
            date: "15.05.2024",
            reason: "Comprehensive vision assessment and digital eye strain evaluati...",
            specialty: "Augenheilkunde",
            facility: "Augenärztliche Praxis Dr. Müller"
        }
    ];

    return (
        <div className="w-full">
            <div className="flex justify-between">
                {/* Important short facts */}
                <div className="flex items-center space-x-3">
                    <div className="px-3 py-1 bg-green-100/50 text-green-700 rounded-full text-xs">
                        Female, 74 years old
                    </div>
                    <div className="px-3 py-1 bg-blue-100/50 text-blue-700 rounded-full text-xs">
                        8 active prescriptions
                    </div>
                    <div className="px-3 py-1 bg-purple-100/50 text-purple-700 rounded-full text-xs">
                        25 facility visits
                    </div>
                </div>
                <AISummary/>
            </div>

            {/* Search and Filters */}
            <div className="flex items-center justify-between mt-8 mb-4">
                <Input
                    type="text"
                    placeholder="Search facilities or doctors..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-96"
                />
                <div className="flex space-x-2">
                    <Select defaultValue="3months">
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="Time period"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="3months">Last 3 months</SelectItem>
                            <SelectItem value="6months">Last 6 months</SelectItem>
                            <SelectItem value="1year">Last year</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue="all">
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="Specialty"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">All Specialties</SelectItem>
                            <SelectItem value="gyn">Gynäkologie</SelectItem>
                            <SelectItem value="neuro">Neurologie</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>

            {/* Table */}
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="w-[40px]">
                            <Checkbox/>
                        </TableHead>
                        <TableHead className="w-[100px]">Date</TableHead>
                        <TableHead className="w-[400px]">Reason for Visit</TableHead>
                        <TableHead className="w-[150px]">Specialty</TableHead>
                        <TableHead className="w-[300px]">Facility</TableHead>
                        <TableHead className="w-[40px]"></TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {visits.map((visit, index) => (
                        <TableRow key={index}>
                            <TableCell>
                                <Checkbox/>
                            </TableCell>
                            <TableCell>{visit.date}</TableCell>
                            <TableCell>{visit.reason}</TableCell>
                            <TableCell>{visit.specialty}</TableCell>
                            <TableCell>{visit.facility}</TableCell>
                            <TableCell>
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4"/>
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default PatientHistory;