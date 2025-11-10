"use client"

import { Card } from "@/components/ui/card"
import { Briefcase, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2023 - Present",
    description: "Developing custom web applications for clients using modern technologies. Focus on responsive design, clean code, and client satisfaction.",
    responsibilities: [
      "Build full-stack web applications using React and Node.js",
      "Implement RESTful APIs and database solutions",
      "Collaborate with clients to understand requirements",
      "Maintain and optimize existing applications"
    ]
  },
  {
    title: "Web Development Intern",
    company: "Various Projects",
    period: "2022 - 2023",
    description: "Contributed to multiple web development projects as part of academic requirements and personal development.",
    responsibilities: [
      "Developed frontend interfaces using React and Tailwind CSS",
      "Assisted in backend development with Laravel and PHP",
      "Participated in code reviews and team collaborations",
      "Learned industry best practices and workflows"
    ]
  }
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">Professional Experience</h2>
          <div className="h-1 w-20 bg-accent rounded-full" />
        </div>
        
        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <Card key={idx} className="p-8 border-l-4 border-l-primary hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="h-5 w-5 text-primary" />
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                  </div>
                  <p className="text-lg font-medium text-muted-foreground">{exp.company}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2 md:mt-0">
                  <Calendar className="h-4 w-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-foreground/80 mb-4">{exp.description}</p>
              
              <div className="space-y-2">
                <h4 className="font-medium text-sm text-primary">Key Responsibilities:</h4>
                <ul className="space-y-1">
                  {exp.responsibilities.map((resp, respIdx) => (
                    <li key={respIdx} className="text-sm text-muted-foreground flex items-start">
                      <span className="mr-2"></span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}