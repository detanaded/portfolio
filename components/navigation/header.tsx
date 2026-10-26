import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "../ui/button";
import { ToggleMode } from "./toggle-mode";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const navLinks = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blu">
      <div className="container h-16">
        <nav
          aria-label="Main"
          className="flex h-full items-center gap-8 justify-between mx-auto"
        >
          {" "}
          <Link href="/" className=" font-semibold flex gap-3 items-center">
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
              EH
            </span>
            Ernie Hernandez
          </Link>
          <ul className="hidden items-center gap-6 text-sm md:flex font-medium">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-muted-foreground transition-colors hover:text-foreground relative after:absolute pb-3 after:bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
                >
                  {label}
                </Link>
              </li>
            ))}
            <ToggleMode />
          </ul>
        </nav>
      </div>
    </header>
  );
}
