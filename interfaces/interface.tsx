import { Dispatch, SetStateAction } from "react";
export interface Children {
  children: JSX.Element;
}

export interface ContainerProps extends Children {
  customTitle?: string;
}

export interface ThemeController {
  mounted: boolean;
}

export interface LightBoxConstant {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<any>>;
  lightboxData: any;
}

export interface MenuSvgIconsConstants {
  svg: StaticImageData;
  head: string;
  text: string;
  aText: string;
  href: string;
  alt: string;
}

export interface TransitionUiElem {
  activeSlide: number;
  num: number;
  text: string;
}
