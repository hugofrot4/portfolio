import { Newspaper } from "lucide-react";
import Container from "./Container";

export default function Footer() {
    return (
        <footer className="border-t-2 border-foreground bg-[#F1EFE9] text-foreground py-12">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Newspaper />
                            <span className="font-display text-2xl font-black uppercase">The Portfolio</span>
                        </div>
                        <p className="text-sm leading-relaxed max-w-sm text-foreground/70">
                            Desenhado e desenvolvido com precisão. Misturando a nostalgia das impressões com o poder da Web.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold uppercase tracking-widest text-xs mb-4 border-b border-foreground/20 pb-2">Conecte-se</h4>
                        <ul className="space-y-2 text-sm">
                            <li><a className="hover:text-primary hover:underline" href="#">Twitter / X</a></li>
                            <li><a className="hover:text-primary hover:underline" href="#">LinkedIn</a></li>
                            <li><a className="hover:text-primary hover:underline" href="#">GitHub</a></li>
                            <li><a className="hover:text-primary hover:underline" href="#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-foreground/10 text-xs text-foreground/50 uppercase tracking-widest font-bold">
                    <p>© 2026 Hugo Frota. Todos os direitos reservados.</p>
                </div>
            </Container>
        </footer>
    )
}