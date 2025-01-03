import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './pages/Home/Home.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "@/components/layout.tsx";
import Patients from "@/pages/Patients/Patients.tsx";
import MedAIAssistant from "@/pages/MedAIAssistant/MedAIAssistant.tsx";
import PatientCommunication from "@/pages/PatientCommunication/PatientCommunication.tsx";
import PatientDetails from "@/pages/Patients/PatientDetails/PatientDetails.tsx";
import {TooltipProvider} from "@/components/ui/tooltip.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <TooltipProvider>
                <Layout>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/patients" element={<Patients/>}/>
                        <Route path="/patients/:patientId" element={<PatientDetails/>}/>
                        <Route path="/med-ai-assistant" element={<MedAIAssistant/>}/>
                        <Route path="/patient-communication" element={<PatientCommunication/>}/>
                    </Routes>
                </Layout>
            </TooltipProvider>
        </BrowserRouter>
    </StrictMode>,
)
