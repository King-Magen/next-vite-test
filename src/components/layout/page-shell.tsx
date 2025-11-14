import type { ReactNode } from "react"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"


export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-svh flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8 space-y-24 items-center">
          {children}
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}