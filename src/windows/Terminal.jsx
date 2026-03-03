import { WindowControls } from "#components";
import { techStack } from "#constants";
import WindowWrapper from "#hoc/WindowWrapper";
import { Check, Flag } from "lucide-react";
import React from "react";

const Terminal = () => {
    // compute stats dynamically instead of hard‑coding values
    const totalStacks = techStack.length;
    // for now treat all stacks as loaded; replace with real state when available
    const loadedCount = totalStacks;
    const percent = Math.round((loadedCount / totalStacks) * 100);

    return (
        <>
            <div id="window-header">
                <WindowControls target="terminal" />
                <h2>Tech Stack</h2>
            </div>

            <div className="techstack">
                <p>
                    <span className="font-bold">@Khanh % </span>
                    show tech stack
                </p>

                <div className="label">
                    <p className="w-32">Category</p>
                    <p>Technologies</p>
                </div>

                <ul className="content">
                    {techStack.map(({ category, items }) => (
                        <li key={category} className="flex items-center">
                            <Check className="check" size={20} />
                            <h3>{category}</h3>
                            <ul>
                                {items.map((item, index) => (
                                    <li key={index}>
                                        {item}
                                        {index < items.length - 1 ? "," : ""}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>

                <div className="footnote">
                    <p>
                        <Check size={20} />
                        {loadedCount} of {totalStacks} stacks loaded
                        successfully ({percent}%)
                    </p>

                    <p className="text-black">
                        <Flag size={15} fill="black" />
                        Render time: 6ms
                    </p>
                </div>
            </div>
        </>
    );
};

const TerminalWindow = WindowWrapper(Terminal, "terminal");

export default TerminalWindow;
