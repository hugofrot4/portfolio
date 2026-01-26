export default function MenuContent() {
    return (
        <div className="p-4 font-display font-bold uppercase text-base">
            <ul className="flex flex-col items-center gap-8">
                <li>
                    <a href="">Projetos</a>
                </li>
                <li>
                    <a href="">Skills</a>
                </li>
                <li>
                    <a href="">Sobre</a>
                </li>
                <li>
                    <a href="" className="p-4 rounded border-2 border-foreground flex items-center w-max font-display leading-1 ">Contato</a>
                </li>
            </ul>
        </div>
    );
}