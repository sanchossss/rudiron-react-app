import React from "react";
import Workspace from "./components/main/Workspace";
import PrButton from './components/UI/Buttons/Primary'
import { VariableProvider } from "./components/Blocks/Var/VariableContext";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const App: React.FC = () => {
    return (
        <PrButton label="Запустить"/>
    );
};

export default App;
