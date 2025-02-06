import {Label} from "@/components/ui/label.tsx";
import {Textarea} from "@/components/ui/textarea.tsx";
import {Button} from "@/components/ui/button.tsx";
import {Disc, FilePlus2, WandSparkles} from "lucide-react";
import {toast} from "@/hooks/use-toast.ts";

function TodaysVisit() {
    return (
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
            <div className="flex flex-row justify-end">
                <Button
                    onClick={() => {
                        toast({
                            title: "SOAP created successfully",
                            description: "View it in the patient's detail page.",
                        })
                    }}
                >
                    <FilePlus2/>
                    Generate SOAP
                </Button>
            </div>
        </div>
    )
}

export default TodaysVisit