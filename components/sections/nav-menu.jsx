"use client"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function NavMenu() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/25 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <div className="container max-w-screen-lg mx-auto flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-semibold text-white">Leykun Birhanu</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="#work" className="font-medium text-white/70 transition-colors hover:text-white">
            Work
          </Link>
          <Link href="#projects" className="font-medium text-white/70 transition-colors hover:text-white">
            Projects
          </Link>
          <Link href="#internship" className="font-medium text-white/70 transition-colors hover:text-white">
            Internship
          </Link>
          <Link href="#about" className="font-medium text-white/70 transition-colors hover:text-white">
            About Me
          </Link>
          <Button variant="secondary" size='sm' className="rounded-full px-6 bg-white text-black hover:bg-white/90">
            Contact Me
          </Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60"
          >
            <nav className="flex flex-col space-y-6 mt-10">
              <Link href="/work" className="text-lg font-medium text-white/70 transition-colors hover:text-white">
                Work
              </Link>
              <Link href="/studio" className="text-lg font-medium text-white/70 transition-colors hover:text-white">
                Studio
              </Link>
              <Link href="/contact" className="text-lg font-medium text-white/70 transition-colors hover:text-white">
                Contact
              </Link>
              <Button
                variant="secondary"
                size="default"
                className="rounded-full px-6 bg-white text-black hover:bg-white/90 w-fit"
              >
                Remix
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

