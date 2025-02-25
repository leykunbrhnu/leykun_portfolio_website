import Link from 'next/link'

import { Button } from "../ui/button";

export default function Footer() {
    return (
        <footer className="flex flex-col w-full justify-between py-12">
            <div className="flex items-start justify-between space-x-2">
                {/* left side */}
                <div className="flex-[3] flex flex-col justify-start items-start space-y-12 pr-24">
                    <p className="text-xl lg:text-2xl text-white/65">A driven and competitive individual, I remain open and eager to explore new experiences. I am resilient, consistently striving to overcome difficulties and challenges with a positive outlook.</p>
                    <Button variant="secondary" size='sm' className="rounded-full px-6 bg-white text-black hover:bg-white/90">
                        Contact Me
                    </Button>
                </div>


                {/* right side */}
                <div className="flex flex-col space-y-4 flex-[1]">
                    <p className="uppercase">Explore</p>
                    <nav className="flex flex-col space-y-2">
                        <Link href="#projects" className="font-medium text-white/70 transition-colors hover:text-white">
                            Projects
                        </Link>
                        <Link href="#internship" className="font-medium text-white/70 transition-colors hover:text-white">
                            Internship
                        </Link>
                        <Link href="#work" className="font-medium text-white/70 transition-colors hover:text-white">
                            Work
                        </Link>
                        <Link href="#about" className="font-medium text-white/70 transition-colors hover:text-white">
                            About Me
                        </Link>
                    </nav>
                </div>
            </div>



        </footer>
    )
}