import {ChevronLeft, MessageCircle, NotebookPen, PillBottle, Stethoscope, Syringe} from "lucide-react";

function VisitDetails() {
    return (
        <div className="bg-white min-h-screen">
            <header className="flex items-center justify-between p-4 border-b">
                <div className="flex items-center gap-2">
                    <ChevronLeft className="w-6 h-6"/>
                    <h1 className="text-lg font-semibold">Visit at Dr.Hans (Oct.25)</h1>
                </div>
                <button className="text-blue-600">Ask doctor</button>
            </header>

            <div className="p-4 space-y-6">
                <div className="bg-white rounded-lg p-4 flex items-center gap-3 border">
                    <NotebookPen className="w-6 h-6"/>
                    <span className="font-medium">My Notes</span>
                </div>

                <section>
                    <h2 className="text-lg font-semibold mb-4">Doctor notes</h2>
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 flex items-center gap-3 border">
                            <Stethoscope className="w-6 h-6"/>
                            <span className="font-medium">Doctor assessment</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 flex items-center gap-3 border">
                            <Syringe className="w-6 h-6"/>
                            <span className="font-medium">Medication & recommendation</span>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-lg font-semibold mb-4">Lab reports</h2>
                    <div className="space-y-4">
                        <div className="bg-white rounded-lg p-4 flex items-center gap-3 border">
                            <PillBottle className="w-6 h-6"/>
                            <span className="font-medium">Blood test</span>
                        </div>
                        <div className="bg-white rounded-lg p-4 flex items-center gap-3 border">
                            <PillBottle className="w-6 h-6"/>
                            <span className="font-medium">Stool test</span>
                        </div>
                    </div>
                </section>
            </div>

            <div className="fixed bottom-20 right-4">
                <button className="bg-blue-600 text-white rounded-full px-6 py-3 flex items-center gap-2">
                    <MessageCircle className="w-5 h-5"/>
                    Ask anything
                </button>
            </div>
        </div>
    );
}

export default VisitDetails;