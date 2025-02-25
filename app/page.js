import NavMenu from "@/components/sections/nav-menu"
import Hero from '@/components/sections/hero'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items justify-center">
      <NavMenu />
      <Hero />
    </div>
  );
}
