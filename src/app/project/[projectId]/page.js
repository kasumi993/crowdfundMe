import Image from 'next/image';
import { getProjectDetails } from "../../../../actions/projects"
import { getUserById } from "../../../../actions/user"

const ProjectDetailPage = async (props) => {
    const projectId = parseInt(props.params.projectId);
    console.log()
    // Assuming you have a function to fetch project details based on projectId
    const projectDetails = await getProjectDetails(projectId);
    const OwnerDetails = await getUserById(projectDetails.createdBy.id);

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Banner image */}
                <div className="relative rounded-lg overflow-hidden mb-8" style={{ height: '380px', }}
                >
                    <Image
                        src="/banner.jpg"  // Replace with your banner image URL
                        alt="Banner Image"
                        layout="responsive"
                        width={1420}
                        height={380}
                        className="h-full object-contain"
                    />
                </div>

                {/* Project details */}
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <h1 className="text-3xl font-bold mb-4">{projectDetails.title}</h1>
                    <p className="text-lg text-gray-600 mb-6">{projectDetails.description}</p>

                    {/* Other project details */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <p className="text-gray-700 mb-2">Goal: ${projectDetails.goal}</p>
                            <p className="text-gray-700">Current Funds: ${projectDetails.currentFunds}</p>
                            <p className="text-gray-700">Created by: {OwnerDetails.firstname}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
