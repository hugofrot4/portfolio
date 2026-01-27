export default function MenuContent() {
    return (
        <div className="p-4 font-header font-bold uppercase text-sm">
            <ul className="flex flex-col items-center gap-8 md:flex-row">
                <li>
                    <a href="#" className="hover:text-primary hover:underline decoration-2 transition-all duration-400">Projetos</a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary hover:underline decoration-2 transition-all duration-400">Skills</a>
                </li>
                <li>
                    <a href="#" className="hover:text-primary hover:underline decoration-2 transition-all duration-400">Sobre</a>
                </li>
                <li>
                    <a href="#" className="px-4 py-2 rounded border-2 border-foreground flex items-center w-max font-header text-xs hover:bg-primary hover:border-primary hover:text-background transition-all duration-400">Contato</a>
                </li>
            </ul>
        </div>
    );
}