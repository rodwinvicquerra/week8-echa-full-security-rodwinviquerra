"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github } from "lucide-react"

const contactLinks = [
  {
    name: "Email",
    value: "rodwindizvicquerra@gmail.com",
    href: "mailto:rodwindizvicquerra@gmail.com",
    icon: Mail,
  },
  {
    name: "GitHub",
    value: "github.com/rudWin",
    href: "https://github.com/rudWin",
    icon: Github,
  },
]

export function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in", "fade-in", "slide-in-from-bottom-4")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-on-scroll")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-4 md:px-8 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 fade-on-scroll">Get In Touch</h2>
        <p className="text-lg text-muted-foreground mb-12 fade-on-scroll max-w-2xl mx-auto">
          I'm always open to discussing new projects, security consulting opportunities, or partnerships. Feel free to
          reach out through any of the channels below.
        </p>
        <div className="grid gap-6 md:grid-cols-2 mb-12">
          {contactLinks.map((link, idx) => (
            <Card
              key={link.name}
              className="p-6 fade-on-scroll transition-all duration-300 hover:shadow-lg hover:scale-105 group cursor-pointer"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <link.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">{link.name}</h3>
                  <p className="text-sm text-muted-foreground">{link.value}</p>
                </div>
              </a>
            </Card>
          ))}
        </div>
        <Button size="lg" className="fade-on-scroll group" asChild>
          <a href="mailto:rodwindizvicquerra@gmail.com">
            <Mail className="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
            Send Me an Email
          </a>
        </Button>
      </div>
    </section>
  )
}
