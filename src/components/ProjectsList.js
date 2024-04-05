import { getAllProjects } from "../../actions/projects"
import Link from 'next/link';

const ProjectsList = async () => {

    const allProjects = await getAllProjects()

    return (
        <section className="bg-gray-900 text-white py-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">Crowdfunding Projects</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {allProjects.map((project) => (
                        <Link key={project.id} href={`/project/${project.id}`} className="bg-gray-800 shadow-md rounded-lg p-6">
                            <div key={project.id} >
                                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                                <p className="text-gray-300 mb-4">{project.description}</p>
                                <div className="flex justify-between">
                                    <p className="text-sm text-gray-400">Goal: ${project.goal}</p>
                                </div>
                                <div className="flex justify-between mt-4">
                                    <p className="text-sm text-gray-400">Current Funds: ${project.currentFunds}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default ProjectsList
