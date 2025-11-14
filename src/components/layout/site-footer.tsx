export function SiteFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground flex justify-between items-center">
        <span>© {new Date().getFullYear()} Your Name. All rights reserved.</span>
        <span>Built with React, Vite, Tailwind, shadcn/ui.</span>
      </div>
    </footer>
  )
}
