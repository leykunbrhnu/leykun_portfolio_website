const Hero = () => {
  return (
    <div className="flex items-end justify-between h-screen pb-12 lg:space-x-10">
      <div className="flex flex-col flex-[2] space-y-12">
        <p className="text-2xl">A driven and competitive individual, I remain open and eager to explore new experiences. I am resilient, consistently striving to overcome difficulties and challenges with a positive outlook.</p>
        <h1 className="tracking-tighter text-[160px] leading-[0.87em]">
          Architecture <br />
          Student
        </h1>
      </div>
      <div className="text-xl space-y-3 flex flex-col flex-[1]">
        <p>Leykunb368@gmail.com</p>
        <p className="opacity-75">Scroll to learn more</p>
      </div>
    </div>
  )
}

export default Hero
