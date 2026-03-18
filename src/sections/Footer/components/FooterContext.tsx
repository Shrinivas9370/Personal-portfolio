import { FooterBrand } from "./FooterBrand";
import { FooterLinks } from "./FooterLinks";
import { FooterContact } from "./FooterContact";
export const FooterContent = () => {
    return (<div className="box-border caret-transparent max-w-screen-xl mx-auto px-4 py-12 md:px-8">
        <div className="box-border caret-transparent gap-x-8 grid grid-cols-none gap-y-8 md:grid-cols-[repeat(3,minmax(0px,1fr))]">         <FooterBrand />
            <FooterLinks />
            <FooterContact />
        </div>

        <div className="items-center box-border caret-transparent flex flex-col justify-between border-slate-800 mt-8 pt-8 border-t border-solid md:flex-row">
            <p className="text-slate-400 text-sm items-center box-border caret-transparent flex leading-5 min-h-[auto] min-w-[auto]">           Made by Medewar Shrinivas ❤️         </p>
            <div className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] mt-4 md:mt-0">
                <button className="text-sm font-medium items-center bg-transparent caret-transparent gap-x-2 flex h-9 justify-center leading-5 min-h-[auto] min-w-[auto] gap-y-2 text-center text-nowrap px-3 py-0 rounded-full hover:text-neutral-900 hover:bg-purple-400">
                    <img src="https://c.animaapp.com/mmq5nl3br7cuRw/assets/icon-31.svg" alt="Icon" className="box-border caret-transparent shrink-0 h-4 pointer-events-none text-nowrap w-4" />
                </button>
            </div>
        </div>
    </div>
    );
};