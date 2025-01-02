import {useParams} from "react-router";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Label} from "@/components/ui/label";
import {Button} from "@/components/ui/button.tsx";
import {Disc, WandSparkles} from "lucide-react";

enum PatientTab {
    TodaysVisit = "Today's Visit",
    History = "Patient History",
    BasicInfo = "Basic Information"
}


function PatientDetails() {

    const [currentTab, setCurrentTab] = useState<PatientTab>(PatientTab.TodaysVisit);
    const {patientId} = useParams()
    return (
        <div className="flex flex-col items-start text-gray-800">
            <h2 className="text-2xl font-semibold mb-8">{patientId}</h2>

            {/*TAB NAVIGATION*/}
            <div className="flex flex-row items-start space-x-2 mb-8">
                {Object.values(PatientTab).map(tab => (
                    <p className={`${tab === currentTab ? 'bg-gray-200' : 'text-gray-400 hover:text-gray-800'} text-sm font-medium px-4 py-1 rounded-xl hover:cursor-pointer`}
                       onClick={() => setCurrentTab(tab)}>{tab}</p>
                ))}
            </div>

            {/*TABS*/}
            <div className="w-full">
                {currentTab.valueOf() === PatientTab.TodaysVisit && (
                    <div className="w-full">
                        <div className="flex flex-col space-y-10 w-full">
                            <div className="grid w-full gap-2">
                                <Label htmlFor="message">Subjective (patient's symptoms, concerns, and history)</Label>
                                <Textarea className="h-32" id="message"/>
                                <div className="flex flex-row space-x-1">
                                    <Button>
                                        <Disc/>Record
                                    </Button>
                                    <Button>
                                        <WandSparkles/>Keywords
                                    </Button>
                                </div>
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message">Objective (physical exam findings, test result, etc)</Label>
                                <Textarea className="h-32" id="message"/>
                                <div className="flex flex-row space-x-1">
                                    <Button>
                                        <Disc/>Record
                                    </Button>
                                    <Button>
                                        <WandSparkles/>Keywords
                                    </Button>
                                </div>
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message">Assessment (doctor's diagnosis and clinical reasoning)</Label>
                                <Textarea className="h-32" id="message"/>
                                <div className="flex flex-row space-x-1">
                                    <Button>
                                        <Disc/>Record
                                    </Button>
                                    <Button>
                                        <WandSparkles/>Keywords
                                    </Button>
                                </div>
                            </div>
                            <div className="grid w-full gap-1.5">
                                <Label htmlFor="message">Treatment Plan (treatment plan, medications, and follow-up
                                    instructions)</Label>
                                <Textarea className="h-32" id="message"/>
                                <div className="flex flex-row space-x-1">
                                    <Button>
                                        <Disc/>Record
                                    </Button>
                                    <Button>
                                        <WandSparkles/>Keywords
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {currentTab.valueOf() === PatientTab.History && (
                    <div>Hii</div>
                )}
                {currentTab.valueOf() === PatientTab.BasicInfo && (
                    <div>Hiii</div>
                )}
            </div>
        </div>
    )
}

export default PatientDetails;