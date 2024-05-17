import React, { useState, useEffect } from "react";
import { ICallback } from "../interfaces/IPage";

export default function TextCutter({ pageName }: { pageName: ICallback }) {
    const moduleName = "TextCutter";
    useEffect(() => { if (pageName) pageName(moduleName); }, [pageName]);

    const [text, setText] = useState("");
    const [cuttedText, setCuttedText] = useState("");

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
        const trimmedText = event.target.value.split('"')
            .map((element, index) =>
                index % 2 === 0  // If it's an even index, remove spaces
                    ? element.replace(/\s+/g, '')
                    : element     // If it's an odd index, return the element as is
            )
            .join('"');
        setCuttedText(trimmedText);
    };
    return (
        <div className="grid grid-cols-2 gap-4  w-full h-full p-4">
            <textarea
                className="w-full h-full p-2 resize-none rounded-md backdrop-blur-md bg-white/30 focus:outline-none focus:ring-0 focus:ring-offset-0"
                value={text}
                onChange={handleTextChange}
            />
            <textarea className="w-full resize-none h-full p-2 bg-white/30 focus:outline-none backdrop-blur-md rounded-md" value={cuttedText} />
        </div>
    );
}