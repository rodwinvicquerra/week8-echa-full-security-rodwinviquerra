"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Clerk Authentication App",
    description: "A modern web application featuring secure user authentication with Clerk. Deployed on Vercel with clean architecture and responsive design for seamless user experience.",
    technologies: ["React", "Node.js", "Clerk Auth", "Vercel"],
    github: "#",
    demo: "https://clerk-rodwin-nov10updated.vercel.app/",
    category: "Full Stack"
  },
  {
    title: "Barangay Portal System",
    description: "Full-featured barangay management system built with traditional web technologies. Implements WAMP stack for robust data management and community services.",
    technologies: ["PHP", "MySQL", "HTML", "CSS", "WAMP"],
    github: "#",
    demo: "http://codebyceto.site/brgyportal_2/",
    category: "Web Application"
  },
  {
    title: "Digital Portfolio v1",
    description: "My first portfolio draft website showcasing web development skills. A foundation project that demonstrates clean design principles and modern web practices.",
    technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
    github: "https://github.com/rodwinvicquerra/v0-digital-portfolio-website-mm",
    demo: "#",
    category: "Portfolio"
  },
  {
    title: "Digital Portfolio v2",
    description: "Advanced portfolio version featuring Prisma database integration for authentication, React frontend, and deployed on Vercel. Demonstrates full-stack capabilities and modern deployment practices.",
    technologies: ["React", "Prisma", "PostgreSQL", "Vercel"],
    github: "#",
    demo: "https://v0-digital-portfolio-website-nu.vercel.app/",
    category: "Full Stack"
  }
]

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Featured Projects</h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
          <p className="mt-4 text-lg text-muted-foreground">
            A selection of recent work demonstrating full-stack development capabilities
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-l-4 border-l-primary">
              <div className="mb-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                  <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-xs font-medium text-primary mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIdx) => (
                    <span 
                      key={techIdx}
                      className="px-2 py-1 bg-muted text-xs font-medium text-foreground rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex gap-3 pt-4 border-t border-border">
                {project.github !== "#" && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1" 
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.demo !== "#" && (
                  <Button 
                    size="sm" 
                    className="flex-1 bg-primary hover:bg-primary/90" 
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">View more projects on my GitHub profile</p>
          <Button variant="outline" size="lg" asChild>
            <a href="https://github.com/rodwinvicquerra" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5 mr-2" />
              Visit GitHub Profile
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}