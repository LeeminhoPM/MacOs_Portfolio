import { Dock, Navbar, Welcome } from "#components";
import React from "react";
import TerminalWindow from "#windows/Terminal";

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
