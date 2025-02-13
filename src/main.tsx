import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import DoctorHome from '@/pages/doctor/DoctorHome/DoctorHome.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import DoctorLayout from "@/components/DoctorLayout.tsx";
import Patients from "@/pages/doctor/Patients/Patients.tsx";
import MedAIAssistant from "@/pages/doctor/MedAIAssistant/MedAIAssistant.tsx";
import PatientCommunication from "@/pages/doctor/PatientCommunication/PatientCommunication.tsx";
import PatientDetails from "@/pages/doctor/Patients/PatientDetails/PatientDetails.tsx";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";
import PatientHome from "@/pages/patient/PatientHome/PatientHome.tsx";
import PatientLayout from "@/components/PatientLayout.tsx";
import VisitDetails from "@/components/VisitDetails.tsx";
import {Login} from "@/pages/doctor/Login/Login.tsx";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient} from "@/config/queryClient.ts";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <TooltipProvider>
                    <Routes>
                        {/* Unauthenticated */}
                        <Route path="/login" element={<Login/>}/>
                        {/* Doctor pages */}
                        <Route element={<DoctorLayout/>}>
                            <Route path="/" element={<DoctorHome/>}/>
                            <Route path="/patients" element={<Patients/>}/>
                            <Route path="/patients/:patientId" element={<PatientDetails/>}/>
                            <Route path="/med-ai-assistant" element={<MedAIAssistant/>}/>
                            <Route path="/patient-communication" element={<PatientCommunication/>}/>
                        </Route>

                        {/* Patient pages */}
                        <Route element={<PatientLayout/>}>
                            <Route path="/patient" element={<PatientHome/>}/>
                            <Route path="/patient/visits/:visitId" element={<VisitDetails/>}/>
                        </Route>
                    </Routes>
                </TooltipProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </StrictMode>,
)
