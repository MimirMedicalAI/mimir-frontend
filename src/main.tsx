import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from './pages/Home.tsx'
import {BrowserRouter, Route, Routes} from "react-router";
import Layout from "@/components/layout.tsx";
import Patients from "@/pages/Patients.tsx";
import MedAIAssistant from "@/pages/MedAIAssistant.tsx";
import PatientCommunication from "@/pages/PatientCommunication.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/patients" element={<Patients/>}/>
                    <Route path="/med-ai-assistant" element={<MedAIAssistant/>}/>
                    <Route path="/patient-communication" element={<PatientCommunication/>}/>
                </Routes>
            </Layout>
        </BrowserRouter>
    </StrictMode>,
)
