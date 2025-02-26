import Link from 'next/link';

import { PROJECTS } from '@/constants/data';

export default function Projects() {
    return (
        <div
            id="projects"
            className='flex flex-col items-center justify-center py-[200px]'
        >
            <h1 className="text-5xl">Projects</h1>
            <p className="text-gray-100 pt-3 pb-12">Here are some of my projects</p>

            <div 
                className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-screen p-4 gap-4"
            >   
                {PROJECTS.map(project => (
                    <Link key={project.id} href={project.link}>
                        <div className="bg-white h-[450px] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            
                        </div>

                        <div className='flex flex-col py-2'>
                            <h2 className="text-xl font-bold pt-2 uppercase">{project.title}</h2>
                            <p className="text-gray-100">{project.description}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}