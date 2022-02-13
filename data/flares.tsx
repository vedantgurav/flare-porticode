import React from "react";

const width = "w-72 mx-auto";
const height = "h-72";
const color = "bg-gray-900";
const tColor = "fill-gray-900";

const Circle = (
    <div className={`${width} ${height} ${color} rounded-full`}></div>
);

const Square = <div className={`${width} ${height} ${color} rounded-lg`}></div>;

const Triangle = (
    <svg
        className={`${width} ${height} ${tColor} rounded-lg`}
        viewBox="0 0 164 143"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path d="M75.9378 3.5C78.6321 -1.16667 85.3679 -1.16667 88.0622 3.5L162.54 132.5C165.235 137.167 161.867 143 156.478 143H7.52181C2.13321 143 -1.23466 137.167 1.45964 132.5L75.9378 3.5Z" />
    </svg>
);

export const flareShapes = [Circle, Square, Triangle];

export const flareColors = [
    "bg-red-700",
    "bg-blue-600",
    "bg-green-600",
    "bg-yellow-300",
    "bg-pink-400",
    "bg-purple-700",
];

export const flareColorsHex = [
    "#B91C1C",
    "#2563EB",
    "#16A34A",
    "#FDE047",
    "#F472B6",
    "#7E22CE",
];
