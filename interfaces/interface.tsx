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
