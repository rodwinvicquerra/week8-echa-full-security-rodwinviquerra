"use client"

import { useEffect, useRef } from "react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
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
    <section id="about" ref={sectionRef} className="py-20 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 fade-on-scroll">About Me</h2>
        <Card className="p-8 fade-on-scroll transition-all duration-300 hover:shadow-lg">
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              I'm Rodwin Vicquerra, a 3rd year IT student majoring in Web Development. I'm passionate about creating
              modern, responsive, and user-friendly web applications that solve real-world problems.
            </p>
            <p>
              Throughout my academic journey, I've been developing my skills in front-end and back-end technologies,
              focusing on building clean, efficient, and scalable web solutions. I enjoy learning new frameworks and
              staying up-to-date with the latest web development trends.
            </p>
            <p>
              I'm eager to apply my knowledge in real-world projects and continue growing as a developer. I'm always
              open to new opportunities, collaborations, and learning experiences that will help me become a better
              developer.
            </p>
          </div>
        </Card>
      </div>
    </section>
  )
}
