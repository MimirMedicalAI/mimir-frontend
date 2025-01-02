import {useParams} from "react-router";
import {useState} from "react";
import {Textarea} from "@/components/ui/textarea.tsx";

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
            <div>
                {currentTab.valueOf() === PatientTab.TodaysVisit && (
                    <>
                        <h3 className="text-xl font-medium mb-4">Notes</h3>
                        <h4 className="text-sm text-gray-800 mb-1">
                            Subjective (patient's symptoms, concerns, and history)
                        </h4>
                        <Textarea/>
                        <h4 className="text-sm text-gray-800 mt-6 mb-1">
                            Objective (physical exam findings, test result, etc)
                        </h4>
                        <Textarea/>
                        <h4 className="text-sm text-gray-800 mt-6 mb-1">
                            Assessment (doctor's diagnosis and clinical reasoning)
                        </h4>
                        <Textarea/>
                        <h4 className="text-sm text-gray-800 mt-6 mb-1">
                            Treatment Plan (treatment plan, medications, and follow-up instructions)
                        </h4>
                        <Textarea/>
                    </>
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