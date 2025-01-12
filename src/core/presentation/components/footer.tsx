import { Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="footer font-extrabold text-black flex flex-col justify-center md:flex-row md:justify-between items-center p-4 sticky top-[100vh] border-2 border-t">
      <aside className="grid-flow-col items-center">
        <img
          src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/People/Man%20Health%20Worker.png"
          alt="Man Health Worker"
          width="25"
          height="25"
        />
        <p>Copyright © {new Date().getFullYear()} - Todos os direitos reservados por Samuel Medeiros</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/samuelfsd/" target="_blank" rel="noreferrer">
          <Linkedin />
        </a>
        <a href="https://github.com/samuelfsd" target="_blank" rel="noreferrer">
          <Github />
        </a>
      </nav>
    </footer>
  );
}
