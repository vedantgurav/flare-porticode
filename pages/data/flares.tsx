import React from "react";

const width = "w-10";
const height = "h-10";

const Circle: React.FC = () => {
    return <div className={`${width} ${height} rounded-full`}></div>;
};

const Square: React.FC = () => {
    return <div className={`${width} ${height} rounded-lg`}></div>;
};

export const shapes = [Circle, "square", "triangle"];

export const colours = [
    "bg-red-600",
    "bg-blue-600",
    "bg-green-600",
    "bg-yellow-600",
    "bg-pink-600",
];
