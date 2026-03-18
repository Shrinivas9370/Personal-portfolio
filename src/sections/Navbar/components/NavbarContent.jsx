import { NavbarLogo } from "../components/NavbarLogo";
import { DesktopMenu } from "./DesktopMenu";
import { MobileMenuButton } from "./MobileMenuContent";
export const NavbarContent = () => {
    return (<div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="items-center box-border caret-transparent flex h-16 justify-between">
            <NavbarLogo />
            <DesktopMenu />
            <MobileMenuButton />
        </div>
    </div>);
};