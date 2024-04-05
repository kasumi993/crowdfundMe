import Image from 'next/image';
import { getProjectDetails } from "../../../../actions/projects"
import { getUserById } from "../../../../actions/user"

const ProjectDetailPage = async (props) => {
    const projectId = parseInt(props.params.projectId);
    const projectDetails = await getProjectDetails(projectId);
    const OwnerDetails = await getUserById(projectDetails.createdBy.id);
    const progression = projectDetails.currentFunds / projectDetails.goal * 100;

    return (
        <div className="bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-lg overflow-hidden mb-8" style={{ height: '380px', }}>
                    <Image
                        src="/banner.jpg"  // Replace with your banner image URL
                        alt="Banner Image"
                        layout="responsive"
                        width={1420}
                        height={380}
                        className="h-full object-contain"
                    />
                </div>
                <div className="bg-white rounded-lg shadow-lg p-6">
                    <div className="flex flex-row">
                        <div className="flex-1 w-96">
                            <h1 className="text-3xl font-bold mb-4">${projectDetails.title}</h1>
                            <p className="text-lg text-gray-600 mb-6">${projectDetails.description}</p>

                            <div className="w-full mb-12 rounded-full h-2.5 bg-gray-700">
                                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${progression}%` }}></div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <p className="text-gray-700 mb-2">Goal: ${projectDetails.goal}</p>
                                    <p className="text-gray-700">Current Funds: ${projectDetails.currentFunds}</p>
                                    <p className="text-gray-700">Created by: {OwnerDetails.firstname}</p>
                                </div>
                            </div>
                        </div>

                        <div className="w-14 mt-auto">
                            <button className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                                Fund
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailPage;
