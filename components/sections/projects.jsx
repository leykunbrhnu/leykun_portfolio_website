import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: 'Project One',
        description: 'Description for project one',
        link: '/projects/1'
    },
    {
        id: 2,
        title: 'Project Two',
        description: 'Description for project two',
        link: '/projects/2'
    },
    {
        id: 3,
        title: 'Project Three',
        description: 'Description for project three',
        link: '/projects/3'
    },
    {
        id: 4,
        title: 'Project Four',
        description: 'Description for project four',
        link: '/projects/4'
    }
];

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
                {projects.map(project => (
                    <Link key={project.id} href={project.link}>
                        <div className="bg-white h-[450px] p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            
                        </div>

                        <h2 className="text-xl font-bold pt-2">{project.title}</h2>
                        <p className="text-gray-100">{project.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}