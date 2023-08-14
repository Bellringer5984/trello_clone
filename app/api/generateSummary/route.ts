import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    const { todos } = await request.json();
    console.log(todos);

    // communicate with gpt
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        temperature: 0.8,
        n:1, 
        stream: false,
        messages: [
            {
                role: "system",
                content: 'When responding, welcome the user always as Mr. Bellmyer and say welcome to Your Todo list! Limit the response to 200 characters',
            },
            {
                role: "user",
                content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and don, the tell the user to have a productive day! Here's the data ${JSON.stringify(todos)}`
            }
        ]
    })

    const { data } = response;

    return NextResponse.json(data.choices[0].message)
}