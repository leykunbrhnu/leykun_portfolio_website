import { EXPERIENCES } from "@/constants/data"

export default function Experiences() {
    return (
        <div
            id="experiances"
            className="flex flex-col w-full justify-between py-[250px] space-y-2"
        >
            {
                EXPERIENCES.map((experience, index) => (
                    <div key={index} className="flex flex-col space-y-4 py-8 border-b-[0.2px]">
                        <div className="w-full flex items-start justify-between pb-8 flex-col lg:flex-row space-y-3 lg:space-y-0">
                            <p className="text-4xl font-medium uppercase lg:text-6xl">{experience.role}</p>
                            <p className="text-white/70">{experience.period} <span className="text-yellow-300">{`(${experience.duration})`}</span></p>
                        </div>
                        <p className="text-xl text-white/70">{experience.description}</p>
                    </div>
                ))
            }
        </div>
    )
}