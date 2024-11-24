import React, { useState, useEffect } from "react";
import { useVariableContext } from "./VariableContext";
import Block from "../BlockTemplate";
import './style.css';

interface VariableBlockProps {
    id: string;
    position: { x: number; y: number };
    onMove: (id: string, position: { x: number; y: number }) => void;
    code: string; // Initial code prop
}

const VariableBlock: React.FC<VariableBlockProps> = ({ id, position, onMove, code}) => {
    const typeMapping = {
        int: "Целое число",
        float: "Число с плавающей точкой",
        double: "Двойная точность",
        char: "Символ",
        string: "Строка",
        bool: "Логический тип",
    };

    const [variableType, setVariableType] = useState("int"); // Default type
    const [variableName, setVariableName] = useState(`var${id}`); // Default name
    const [currentCode, setCode] = useState(`int var${id}`);
    const [isDraggingEnabled, setIsDraggingEnabled] = useState(true);
    const { variables, updateVariable } = useVariableContext();

    // Update the variable in context whenever the name changes
    useEffect(() => {
        updateVariable(id, variableName);
    }, [variableName, id, updateVariable]);

    // Generate the code dynamically
    const generateCode = (): string => {
        return `${code};`;
    };

    // Handlers for type and name changes
    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setVariableType(event.target.value);
    };



    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setVariableName(event.target.value);
        code = `${variableType} ${event.target.value}`;
        setCode(`${variableType} ${event.target.value};`)
        console.log(code); 
    };

    // Handlers to enable/disable dragging during interactions
    const disableDragging = () => setIsDraggingEnabled(false);
    const enableDragging = () => setIsDraggingEnabled(true);

    const noop = () => {}; // No operation function

    return (
        <Block
            id={id}
            type="variable"
            position={position}
            code={generateCode()} // Pass the dynamically generated code
            onMove={isDraggingEnabled ? onMove : noop}
        >
            <div className="variable-block">
                <div className="variable-row">
                    {/* Dropdown for selecting variable type */}
                    <label className="variable-type">Тип данных</label>
                    <select
                        value={variableType}
                        onChange={handleTypeChange}
                        onFocus={disableDragging}
                        onBlur={enableDragging}
                        className="variable-dropdown"
                    >
                        {Object.entries(typeMapping).map(([key, value]) => (
                            <option key={key} value={key}>
                                {value}
                            </option>
                        ))}
                    </select>

                    {/* Input for variable name */}
                    <label className="variable-label">Наименование</label>
                    <input
                        type="text"
                        value={variableName}
                        onChange={handleNameChange}
                        onFocus={disableDragging}
                        onBlur={enableDragging}
                        className="variable-input"
                        placeholder="Введите имя переменной"
                    />
                </div>
            </div>
        </Block>
    );
};

export default VariableBlock;
