import { TPhoto } from "@/interfaces";
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
  photos: TPhoto[];
  styles?: ISliderAtributes;
  children?: ReactNode;
}
