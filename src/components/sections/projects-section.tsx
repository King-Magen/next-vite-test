import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

export function ProjectsSection() {
  return (
    <section id="projects" className="space-y-6">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="text-muted-foreground text-sm">
          A selection of things I&apos;ve worked on recently.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <Card key={project.title} className="flex flex-col">
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <Badge key={t} variant="secondary">
                    {t}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              {project.link && project.link !== "#" && (
                <Button asChild size="sm" variant="outline">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View project
                  </a>
                </Button>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}
