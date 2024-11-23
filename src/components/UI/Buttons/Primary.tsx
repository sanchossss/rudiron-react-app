import React from "react";
//import Icon from "../Icon"; // Убедитесь, что путь к Icon правильный
import './button.module.css';
import Icons from '../Icons';

type PrButtonProps = {
  label: string; // Текст кнопки
  iconName?: string; // Имя иконки (например, 'home', 'settings')
  iconSize?: number | string; // Размер иконки (по умолчанию 24px)
  iconColor?: string; // Цвет иконки (по умолчанию 'currentColor')
  onClick?: () => void; // Обработчик клика
};

const PrButton: React.FC<PrButtonProps> = ({
    label,
    iconName,
    iconSize = 24,
    iconColor = "currentColor",
    onClick,
    }) => {
    return (
    <button
        onClick={onClick}
        style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 15px",
        border: "none",
        borderRadius: "5px",
        backgroundColor: "#007bff",
        color: "#fff",
        fontSize: "16px",
        cursor: "pointer",
        gap: "8px", // Расстояние между иконкой и текстом
        }}
    >
        {/* Рендерим иконку только если передано iconName */}

        {label}
        <Icons name='play' color='var(--primary)'/>
    </button>
    );
    };

export default PrButton;
