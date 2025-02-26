"use client"
import Link from "next/link"
import { Menu } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { NAV_LINKS } from "@/constants/data"

export default function NavMenu() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-8 px-3">
      <div className="flex items-center p-4 px-2 justify-between md:px-6 container max-w-screen-xl mx-auto bg-white text-black rounded-full">
        <Link href="/" className="flex items-center justify-center space-x-2 flex-1">
          <span className="text-2xl font-semibold text-black tracking-[-2px]">Leykun Birhanu</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {
            NAV_LINKS.map((link, index) => (
              <Link href={link.href} key={index} className="text-lg font-medium text-black/70 transition-colors hover:text-black">
                {link.name}
              </Link>
            ))
          }
          
          <Link href={'mailto:Leykunb368@gmail.com'}>
            <Button variant="secondary" size='sm' className="rounded-full px-6 bg-[#ffc914] text-black hover:bg-black/90 hover:text-white">
              Contact me
            </Button>
          </Link>
        </nav>

        {/* Mobile Navigation */}
        {/* <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] bg-white/35 backdrop-blur supports-[backdrop-filter]:bg-black/60"
          >
            <nav className="flex flex-col space-y-6 mt-10">
              <Link href="#work" className="text-lg font-medium text-white/70 transition-colors hover:text-white">
                Work
              </Link>
              <Link href="#projects" className="text-lg font-medium text-white/70 transition-colors hover:text-white">
                Projects
              </Link>
              <Link href="#internship" className="text-lg font-medium text-white/70 transition-colors hover:text-white">
                Internship
              </Link>
              <Link href="#about_me" className="text-lg font-medium text-white/70 transition-colors hover:text-white">
                About me
              </Link>
              <Link href={'mailto:Leykunb368@gmail.com'}>
                <Button
                  variant="secondary"
                  size="sm"
                  className="rounded-full px-6 bg-white text-black hover:bg-white/90 w-fit"
                >
                  Contact me
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet> */}
      </div>
    </header>
  )
}

