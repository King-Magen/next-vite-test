import { Button } from "@/components/ui/button"

export function SiteHeader() {
  return (
    <header className="border-b sticky top-0 z-20 bg-background/80 backdrop-blur">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="font-semibold tracking-tight">
          {/* Replace with your name or logo */}
          Your Name
        </div>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#projects" className="hover:underline">
            Projects
          </a>
          <a href="#skills" className="hover:underline">
            Skills
          </a>
          <a href="#contact" className="hover:underline">
            Contact
          </a>
          <Button asChild size="sm">
            <a href="#contact">Hire me</a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
