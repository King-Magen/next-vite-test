import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="min-h-[80vh] flex items-center justify-center"
    >
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-8">
        <p className="text-sm uppercase tracking-[0.25em] text-muted-foreground">
          PORTFOLIO
        </p>

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl">
          Hi, I&apos;m <span className="text-primary">Your Name</span>.
          <br />
          <span className="text-foreground/90">
            Frontend Developer &amp; UI Enthusiast.
          </span>
        </h1>

        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          I build modern, performant web applications using React, Vite,
          TailwindCSS, and shadcn/ui. I care about clean code, good UX, and
          accessible interfaces.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <Button asChild>
            <a href="#projects">View projects</a>
          </Button>
          <Button variant="outline" asChild>
            <a href="#contact">Get in touch</a>
          </Button>
        </div>

        <div className="w-full max-w-sm">
          <div className="aspect-square rounded-3xl border bg-muted flex items-center justify-center text-muted-foreground">
            Your photo / logo
          </div>
        </div>
      </div>
    </section>
  )
}
