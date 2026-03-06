import { createGetLiveCollection } from 'astro/content/runtime';
import React from "react";

type Color = "purple" | "white" | "transparent";
type TextColor = "purple" | "white";

export interface ButtonProps {
	text: string;
	color: Color;
	action: string | (() => void);
	textColor: TextColor;
}

export const Button: React.FC<ButtonProps> = ({
	text,
	color,
	action,
	textColor,
}) => {

	const className = color === "purple" && textColor === 'white'  ? `button bg-purple px-8 h-12 rounded-lg border-2 border-purple text-white inline-flex items-center justify-center cursor-pointer font-lato text-[18px]` : `button bg-transparent  px-8 h-12 rounded-lg border-2 border-purple text-purple inline-flex items-center justify-center cursor-pointer font-lato text-[18px]`;

	if (typeof action === "string") {
		return (
			<a href={action} rel='noopener noreferrer' className={className}>
				{text}
			</a>
		);
	}

	return (
		<button onClick={action} className={className}>
			{text}
		</button>
	);
};
