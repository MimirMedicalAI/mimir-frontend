import {useParams} from "react-router";
import {useState} from "react";
import TodaysVisit from "@/pages/Patients/PatientDetails/TodaysVisit.tsx";
import PatientHistory from "@/pages/Patients/PatientDetails/PatientHistory.tsx";
import PatientBasicInfo from "@/pages/Patients/PatientDetails/PatientBasicInfo.tsx";

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
                    <TodaysVisit/>
                )}
                {currentTab.valueOf() === PatientTab.History && (
                    <PatientHistory/>
                )}
                {currentTab.valueOf() === PatientTab.BasicInfo && (
                    <PatientBasicInfo/>
                )}
            </div>
        </div>
    )
}

export default PatientDetails;