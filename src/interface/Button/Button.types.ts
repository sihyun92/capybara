import { ButtonHTMLAttributes } from "react";

// color
type ColorShades = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9";
type ColorSet =
  | "gray"
  | "red"
  | "pink"
  | "grape"
  | "violet"
  | "indigo"
  | "blue"
  | "cyan"
  | "teal"
  | "green"
  | "lime"
  | "yellow"
  | "orange";
type DefaultColor = "black" | "white";
type Color = `${ColorSet}-${ColorShades}`;
export type ButtonColor =
  | `#${string}`
  | `rgb(${string})`
  | `rgba(${string})`
  | string;

// button-size
type Size = "x-small" | "small" | "medium" | "large";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  background?: Color | DefaultColor;
  color?: Color | DefaultColor;
  size?: Size;
}
