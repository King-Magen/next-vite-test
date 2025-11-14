import { Badge } from "@/components/ui/badge"
import { skills } from "@/data/skills"

export function SkillsSection() {
  return (
    <section id="skills" className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge key={skill} variant="outline">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}
