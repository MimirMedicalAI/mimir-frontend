import {Label} from "@/components/ui/label.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {AudioLines, Disc, Pause} from "lucide-react";
import {toast} from "@/hooks/use-toast.ts";
import React from "react";
import {ToastAction} from "@/components/ui/toast";
import {Checkbox} from "@/components/ui/checkbox";

const soapData = {
    subjective: `* Persistent cough for 3 weeks. The cough started as dry but has become productive in the last few days.
* Mild fatigue and fever (on and off).
* Shortness of breath with exertion (when climbing stairs).
* No significant weight loss or appetite changes.
* No chest pain, but the patient feels weaker than usual.`,

    objective: `* General: No acute distress
* Lungs:
   * Crackles present in bilateral lower lobes
   * No wheezing
   * No respiratory distress
* Cardiovascular: Regular heart rate, rhythm, and blood pressure`,

    assessment: `Primary Diagnosis: Suspected Acute Bronchitis
Differential Diagnoses to Rule Out: Early Pneumonia, Viral Upper Respiratory Infection, or Influenza`,

    plan: `1. Diagnostic Tests Ordered:
   * Chest X-ray
   * Sputum culture
2. Medications Prescribed:
   * Amoxicillin 500mg, three times daily for 7 days
   * Acetaminophen 500mg, as needed for fever
3. Patient Instructions:
   * Rest & hydration recommended
   * Monitor symptoms and return if worsening (high fever, difficulty breathing)
   * Follow-up visit in 5 days if no improvement
   * Rapid COVID test`
};

function TodaysVisit() {
    const [isRecording, setIsRecording] = React.useState(false);
    const [isRecordingDisabled, setIsRecordingDisabled] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);
    const [showAdditionalSections, setShowAdditionalSections] = React.useState(false);
    const [selectedDiagnoses, setSelectedDiagnoses] = React.useState<string[]>([]);
    const [soapInputs, setSoapInputs] = React.useState({
        subjective: '',
        objective: '',
        assessment: '',
        plan: ''
    });

    const handleRecordingStop = () => {
        toast({
            title: "Recording paused",
            description: "Click the paused button to continue recording.",
            action: (
                <ToastAction altText="Generate" onClick={() => {
                    setIsRecordingDisabled(true);
                    setIsRecording(false);
                    setIsPaused(false);
                    handleGenerateSOAP();
                }}>
                    Generate SOAP
                </ToastAction>
            ),
            duration: 60000,
        });
        setIsPaused(true);
    };

    const handleGenerateSOAP = () => {
        toast({
            title: "Generating SOAP Note",
            description: "Your SOAP note is being created...",
        });

        setTimeout(() => {
            setSoapInputs(soapData);
            setShowAdditionalSections(true);
            toast({
                title: "SOAP created successfully",
                description: "Make any adjustments manually if desired.",
            });
            setTimeout(() => {
                window.scrollTo({
                    top: document.documentElement.scrollHeight / 3,
                    behavior: 'smooth'
                });
            }, 100);
        }, 3000);
    };

    const handleRecordingButton = () => {
        if (!isRecording) {
            setIsRecording(true);
            setIsPaused(false);
            toast({
                title: "Recording started",
                description: "Press 'Recording' again to pause.",
            });
        } else if (isRecording && !isPaused) {
            handleRecordingStop();
        } else if (isPaused) {
            setIsPaused(false);
            toast({
                title: "Recording resumed",
                description: "Press 'Recording' again to pause.",
            });
        }
    };

    return (
        <div className="w-full">
            {/* Record button */}
            {!isRecordingDisabled &&
                <div className="flex justify-end">
                    <Button
                        variant={isRecording ? 'outline' : 'default'}
                        className={isRecording && !isPaused ? 'animate-pulse' : ''}
                        onClick={handleRecordingButton}
                    >
                        <div className="flex flex-row items-center space-x-2">
                            {isRecording && !isPaused ? <AudioLines/> : isPaused ? <Pause/> : <Disc/>}
                            <p>{isRecording ? (isPaused ? 'Paused' : 'Recording') : 'Record'}</p>
                        </div>
                    </Button>
                </div>}

            {/* SOAP inputs */}
            <div className="flex flex-col space-y-10 w-full mt-4">
                <div className="grid w-full gap-2">
                    <Label htmlFor="subjective">Subjective (patient's symptoms, concerns, and history)</Label>
                    <Textarea
                        className="h-32"
                        id="subjective"
                        value={soapInputs.subjective}
                        onChange={(e) => setSoapInputs(prev => ({...prev, subjective: e.target.value}))}
                    />
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="objective">Objective (physical exam findings, test result, etc)</Label>
                    <Textarea
                        className="h-32"
                        id="objective"
                        value={soapInputs.objective}
                        onChange={(e) => setSoapInputs(prev => ({...prev, objective: e.target.value}))}
                    />
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="assessment">Assessment (doctor's diagnosis and clinical reasoning)</Label>
                    <Textarea
                        className="h-32"
                        id="assessment"
                        value={soapInputs.assessment}
                        onChange={(e) => setSoapInputs(prev => ({...prev, assessment: e.target.value}))}
                    />
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="plan">Treatment Plan (treatment plan, medications, and follow-up
                        instructions)</Label>
                    <Textarea
                        className="h-32"
                        id="plan"
                        value={soapInputs.plan}
                        onChange={(e) => setSoapInputs(prev => ({...prev, plan: e.target.value}))}
                    />
                </div>
            </div>

            {showAdditionalSections && (
                <>
                    {/* ICD Code Section */}
                    <div className="mt-10">
                        <h3 className="text-xl font-semibold mb-4">ICD Code</h3>
                        <div className="bg-shade-200 rounded-lg p-6">
                            <h4 className="font-medium mb-4">Primary Diagnosis:</h4>
                            <div className="flex items-start gap-2 mb-2">
                                <Checkbox
                                    id="J20.9"
                                    checked={selectedDiagnoses.includes('J20.9')}
                                    onCheckedChange={(checked) => {
                                        setSelectedDiagnoses(prev =>
                                            checked
                                                ? [...prev, 'J20.9']
                                                : prev.filter(id => id !== 'J20.9')
                                        );
                                    }}
                                />
                                <div className="grid gap-1.5">
                                    <label
                                        htmlFor="J20.9"
                                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    >
                                        J20.9 – Acute bronchitis, unspecified
                                    </label>
                                    <p className="text-shade-600 text-sm">
                                        Since the exact pathogen is not determined yet, this is a general code for acute
                                        bronchitis.
                                    </p>
                                </div>
                            </div>

                            <h4 className="font-medium mb-4 mt-6">Differential Diagnoses to Rule Out:</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-2">
                                    <Checkbox
                                        id="J18.9"
                                        checked={selectedDiagnoses.includes('J18.9')}
                                        onCheckedChange={(checked) => {
                                            setSelectedDiagnoses(prev =>
                                                checked
                                                    ? [...prev, 'J18.9']
                                                    : prev.filter(id => id !== 'J18.9')
                                            );
                                        }}
                                    />
                                    <div className="grid gap-1.5">
                                        <label
                                            htmlFor="J18.9"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            J18.9 – Pneumonia, unspecified organism
                                        </label>
                                        <p className="text-shade-600 text-sm">
                                            If the chest X-ray confirms pneumonia, this would be the appropriate code.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <Checkbox
                                        id="J06.9"
                                        checked={selectedDiagnoses.includes('J06.9')}
                                        onCheckedChange={(checked) => {
                                            setSelectedDiagnoses(prev =>
                                                checked
                                                    ? [...prev, 'J06.9']
                                                    : prev.filter(id => id !== 'J06.9')
                                            );
                                        }}
                                    />
                                    <div className="grid gap-1.5">
                                        <label
                                            htmlFor="J06.9"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            J06.9 – Acute upper respiratory infection, unspecified
                                        </label>
                                        <p className="text-shade-600 text-sm">
                                            If symptoms indicate a viral respiratory infection instead of bacterial
                                            bronchitis.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-2">
                                    <Checkbox
                                        id="U07.1"
                                        checked={selectedDiagnoses.includes('U07.1')}
                                        onCheckedChange={(checked) => {
                                            setSelectedDiagnoses(prev =>
                                                checked
                                                    ? [...prev, 'U07.1']
                                                    : prev.filter(id => id !== 'U07.1')
                                            );
                                        }}
                                    />
                                    <div className="grid gap-1.5">
                                        <label
                                            htmlFor="U07.1"
                                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        >
                                            U07.1 – COVID-19, virus identified
                                        </label>
                                        <p className="text-shade-600 text-sm">
                                            If the COVID-19 test comes back positive.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Action Items Section */}
                    <div className="mt-10">
                        <h3 className="text-xl font-semibold mb-4">Action Items</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-shade-200 rounded-lg">
                                <div>
                                    <h4 className="font-medium">Create referral letter</h4>
                                    <p className="text-shade-600 text-sm">Automatically create a referral letter with
                                        minimal
                                        effort.</p>
                                </div>
                                <Button variant="default" size="sm">Create</Button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-shade-200 rounded-lg">
                                <div>
                                    <h4 className="font-medium">Send carenote to patient</h4>
                                    <p className="text-shade-600 text-sm">Erika needs the notes in simple language and
                                        more
                                        explainable. Send it to her.</p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm">Preview</Button>
                                    <Button variant="default" size="sm">Send</Button>
                                </div>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-shade-200 rounded-lg">
                                <div>
                                    <h4 className="font-medium">Order blood tests</h4>
                                    <p className="text-shade-600 text-sm">Choose a lab test and schedule it for the
                                        patient.</p>
                                </div>
                                <Button variant="default" size="sm">Order</Button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-shade-200 rounded-lg">
                                <div>
                                    <h4 className="font-medium">Order chest x-ray</h4>
                                    <p className="text-shade-600 text-sm">Create an order for X-ray at the nearest
                                        department.</p>
                                </div>
                                <Button variant="default" size="sm">Order</Button>
                            </div>

                            <div className="flex items-center justify-between p-4 bg-shade-200 rounded-lg">
                                <div>
                                    <h4 className="font-medium">Schedule follow-up appointment</h4>
                                    <p className="text-shade-600 text-sm">Book the next appointment for Erika.</p>
                                </div>
                                <Button variant="default" size="sm">Schedule</Button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default TodaysVisit;