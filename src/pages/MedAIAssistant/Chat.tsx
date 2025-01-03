"use client"

import * as React from "react"
import {Bot, Paperclip, Send} from "lucide-react"

import {cn} from "@/lib/utils"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader,} from "@/components/ui/card"
import {Input} from "@/components/ui/input"

function Chat() {
    const [messages, setMessages] = React.useState([
        {
            role: "agent",
            content: "Hi, how can I help you today?",
        },
    ])
    const [input, setInput] = React.useState("")
    const inputLength = input.trim().length

    return (
        <>
            <Card className="border-none shadow-none min-w-[50%]">
                <CardHeader className="flex flex-row items-center">
                    <Bot className="text-blue-600"/>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {messages.map((message, index) => (
                            <div
                                key={index}
                                className={cn(
                                    "flex w-max max-w-[75%] flex-col gap-2 rounded-lg px-3 py-2 text-sm",
                                    message.role === "user"
                                        ? "ml-auto bg-slate-900 text-slate-100"
                                        : "bg-slate-100 text-slate-900"
                                )}
                            >
                                {message.content}
                            </div>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="sticky">
                    <form
                        onSubmit={(event) => {
                            event.preventDefault()
                            if (inputLength === 0) return
                            setMessages([
                                ...messages,
                                {
                                    role: "user",
                                    content: input,
                                },
                                {
                                    role: "agent",
                                    content: "I ain't reading all that. I'm happy for u tho. Or sorry that happened."
                                }
                            ])
                            setInput("")
                        }}
                        className="flex w-full items-center space-x-2"
                    >
                        <Input
                            id="message"
                            placeholder="Type your message..."
                            className="flex-1"
                            autoComplete="off"
                            value={input}
                            onChange={(event) => setInput(event.target.value)}
                        />
                        <Button type="submit" size="icon" disabled={inputLength === 0}>
                            <Send/>
                            <span className="sr-only">Send</span>
                        </Button>
                        <Button type="button" size="icon" variant="outline">
                            <Paperclip/>
                            <span className="sr-only">Attach Files</span>
                        </Button>
                    </form>
                </CardFooter>
            </Card>
        </>
    );

}

export default Chat