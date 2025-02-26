import Image from 'next/image'

export default function AboutMe() {
    return (
        <div 
            id="about"
            className="w-full flex flex-col items-start justify-between overflow-hidden lg:flex-row py-[200px] space-y-6 lg:space-y-0 lg:space-x-16"
        >
            <div className="relative overflow-hidden flex items-center justify-center bg-white h-[500px] w-full lg:w-[80%] rounded-3xl shadow-lg hover:shadow-xl transition-shadow">                
                <Image
                    src='/leykun.jpg'
                    alt='Leykun'
                    layout='fill'
                    objectFit='cover'
                />
            </div>

            <div>
                Hey there! I'm a driven and competitive individual, I remain open and eager to explore new experiences. I am resilient, consistently striving to overcome difficulties and challenges with a positive outlook.
            </div>
        </div>
    )
}   