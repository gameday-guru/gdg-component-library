import { useMediaQuery } from "usehooks-ts";
import { SupportedMedialike } from "./size";

export const useSupportedMedia = () : SupportedMedialike =>{

    const isDesktop = useMediaQuery("(min-width : 1025px)");
    const isLaptop = useMediaQuery("(min-width : 769px)");
    const isTablet = useMediaQuery("(min-width : 481px)");
    const isMobile = useMediaQuery("(min-width : 320px)");

    if(isDesktop) return "desktop";

    if(isLaptop) return "laptop";

    if(isTablet) return "tablet";

    if(isMobile) return "mobile";

    return "desktop";

}