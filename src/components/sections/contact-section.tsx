export function ContactSection() {
  return (
    <section id="contact" className="space-y-4">
      <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
      <p className="text-muted-foreground">
        Want to work together or have a question? Reach out:
      </p>
      <div className="space-y-2 text-sm">
        <p>
          Email:{" "}
          <a
            href="mailto:youremail@example.com"
            className="underline underline-offset-4"
          >
            youremail@example.com
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a
            href="https://github.com/your-username"
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            @your-username
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/your-username"
            className="underline underline-offset-4"
            target="_blank"
            rel="noreferrer"
          >
            your-username
          </a>
        </p>
      </div>
    </section>
  )
}
