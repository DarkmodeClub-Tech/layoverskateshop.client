import { ReactNode } from "react";

export interface ISliderAtributes {
  width?: string;
  height?: string;
  x?: string;
  addContainerWidth?: string;
  addContainerHeight?: string;
  children?: ReactNode;
}

export interface ISliderProps {
  imageURLsList?: string[];
  styles?: ISliderAtributes;
  children?: ReactNode;
}
