const Hero = () => {
  return (
    <div 
      id="#hero"
      className="flex items-end justify-between h-screen pb-12 lg:space-x-10 flex-col lg:flex-row">
      <div className="flex flex-col flex-[8] space-y-12 lg:flex-[2] justify-end pb-24 lg:pb-0">
        <p className="text-xl opacity-75 lg:text-2xl">A driven and competitive individual, I remain open and eager to explore new experiences. I am resilient, consistently striving to overcome difficulties and challenges with a positive outlook.</p>
        <h1 className="tracking-tighter text-[60px] leading-[0.8em] lg:text-[160px] lg:leading-[0.87em]">
          Architecture <br />
          Student
        </h1>
      </div>
      <div className="text-xl space-y-3 flex flex-col flex-[1]">
        <p className="underline text-[#ffc914]">Leykunb368@gmail.com</p>
        <p className="opacity-75">Scroll to learn more</p>
      </div>
    </div>
  )
}

export default Hero
