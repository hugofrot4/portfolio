"use client"
import { Newspaper, Menu, X } from "lucide-react";
import Container from "./Container";
import MenuContent from "./MenuContent";
import { useState } from "react";

export default function Navbar() {
    const [menuMobileOpen, setMenuMobileOpen] = useState(false);

    const handleMenuMobile = () => {
        setMenuMobileOpen(!menuMobileOpen);
    }

    return (
        <>
            <nav className="border-b-2 border-foreground fixed top-0 left-0 right-0 bg-background/95 backdrop-blur-sm font-header z-20">
                <Container>
                    <div className="flex items-center w-full justify-between py-4">
                        <div className="flex items-center">
                            <div className="flex flex-col font-bold uppercase tracking-widest text-xs pr-2 md:pr-6 border-r border-foreground/20">
                                <span className="text-primary">Vol. 00</span>
                                <span>Janeiro, 2026</span>
                            </div>
                            <div className="flex items-center pl-2 md:pl-6 gap-2">
                                <Newspaper className="md:size-7"/>
                                <a href="#">
                                    <h1 className="uppercase font-bold font-display text-lg md:text-4xl md:pb-1">The Portfolio</h1>
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <MenuContent />
                        </div>
                        <div onClick={handleMenuMobile} className="p-2 border-2 border-foreground md:hidden">
                            {menuMobileOpen ? <X /> : <Menu />}
                        </div>
                    </div>
                </Container>
            </nav>
            <div className={`fixed top-0 left-0 right-0 bottom-0 bg-background pt-19 border-l-2 border-foreground z-10 duration-400 md:hidden ${menuMobileOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <MenuContent />
            </div>
        </>
    );
}