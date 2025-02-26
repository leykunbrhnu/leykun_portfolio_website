import { Button } from "../ui/button";

import { SKILLS } from "@/constants/data"

export default function Skills() {
    return (
        <div
            id="skills"
            className="flex items-center justify-center gap-2 flex-wrap w-full py-24"
        >
            {
                SKILLS.map((skill, index) => (
                    <Button variant="secondary" size='lg' className="rounded-full px-4 bg-white text-2xl tracking-tighter uppercase py-8 text-black hover:bg-yellow-500/90 lg:text-4xl lg:px-8 lg:py-12" key={index}>
                        {skill}
                    </Button>
                ))
            }
        </div>
    )
}