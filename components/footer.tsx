export function Footer() {
  return (
    <footer className="py-8 px-4 md:px-8 border-t bg-gradient-to-r from-background via-background to-background/80">
      <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
        <p className="animate-fade-in">© {new Date().getFullYear()} Rodwin Vicquerra. All rights reserved.</p>
        <p className="mt-2 animate-fade-in" style={{ animationDelay: "100ms" }}>
          Built with Next.js, Tailwind CSS, and deployed on Vercel
        </p>
      </div>
    </footer>
  )
}
