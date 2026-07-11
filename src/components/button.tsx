import React from "react";

type Color = "purple" | "white" | "transparent";
type TextColor = "purple" | "white";

export interface ButtonProps {
	text: string;
	color: Color;
	action: string | (() => void);
	textColor: TextColor;
	className?: string;
	isModal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
	text,
	color,
	action,
	textColor,
	className: extraClassName = "",
	isModal = false,
}) => {
	const className = `
		${extraClassName}
		${
			color === "purple" && textColor === "white"
				? "bg-purple px-8 h-12 rounded-lg border-2 border-purple text-white"
				: "bg-transparent px-8 h-12 rounded-lg border-2 border-purple text-purple"
		}
		inline-flex items-center justify-center cursor-pointer font-lato text-[18px]
	`;

	if (typeof action === "string") {
		return (
			<a
				href={action}
				data-modal={isModal ? "" : undefined}
				className={className}>
				{text}
			</a>
		);
	}

	return (
		<button type='button' onClick={action} className={className}>
			{text}
		</button>
	);
};
