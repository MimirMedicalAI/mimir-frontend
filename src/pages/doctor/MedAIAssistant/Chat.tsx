import * as React from "react"
import {Bot, Paperclip, Send, User} from "lucide-react"
import {cn} from "@/lib/utils.ts"
import {Button} from "@/components/ui/button.tsx"
import {Input} from "@/components/ui/input.tsx"

function Chat() {
    const [messages, setMessages] = React.useState([
        {
            role: "agent",
            content: "Hi, how can I help you today?",
        },
    ])
    const [input, setInput] = React.useState("")
    const messagesEndRef = React.useRef<HTMLDivElement>(null)
    const inputRef = React.useRef<HTMLInputElement>(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"})
    }

    React.useEffect(() => {
        scrollToBottom()
    }, [messages])

    React.useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }, [inputRef.current])

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1">
                {messages.map((message, index) => (
                    <div
                        key={index}
                        className={cn(
                            "px-4 py-6 rounded",
                            message.role === "user" ? "bg-white" : "bg-gray-50"
                        )}
                    >
                        <div className="flex gap-4 w-96 max-w-3xl mx-auto">
                            {message.role === "user" ? (
                                <User className="w-8 h-8 p-1 rounded-full bg-slate-900 text-white shrink-0"/>
                            ) : (
                                <Bot className="w-8 h-8 p-1 rounded-full bg-blue-600 text-white shrink-0"/>
                            )}
                            <div className="flex-1 min-w-0">
                                {message.content}
                            </div>
                        </div>
                    </div>
                ))}
                <div ref={messagesEndRef}/>
            </div>

            <div className="bg-white p-4">
                <div className="w-96 max-w-3xl mx-auto">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            const trimmedInput = input.trim()
                            if (!trimmedInput) return
                            setMessages([
                                ...messages,
                                {
                                    role: "user",
                                    content: trimmedInput,
                                },
                                {
                                    role: "agent",
                                    content: "I ain't reading all that. I'm happy for u tho. Or sorry that happened."
                                }
                            ])
                            setInput("")
                        }}
                        className="flex gap-2 items-center"
                    >
                        <Input
                            placeholder="Message..."
                            className="flex-1 border rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            autoComplete="off"
                            ref={inputRef}
                        />
                        <Button
                            type="submit"
                            size="icon"
                            disabled={!input.trim()}
                            className="bg-blue-600 hover:bg-blue-700 text-white"
                        >
                            <Send className="w-4 h-4"/>
                            <span className="sr-only">Send</span>
                        </Button>
                        <Button
                            type="button"
                            size="icon"
                            variant="outline"
                            className="border-gray-200 hover:bg-gray-50"
                        >
                            <Paperclip className="w-4 h-4"/>
                            <span className="sr-only">Attach file</span>
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Chat