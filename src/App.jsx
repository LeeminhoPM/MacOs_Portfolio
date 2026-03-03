import { Dock, Navbar, Welcome } from "#components";
import React from "react";
import { Draggable } from "gsap/Draggable";
import gsap from "gsap";
import TerminalWindow from "#windows/Terminal";

gsap.registerPlugin(Draggable);

const App = () => {
    return (
        <main>
            <Navbar />
            <Welcome />
            <Dock />

            <TerminalWindow />
        </main>
    );
};

export default App;
