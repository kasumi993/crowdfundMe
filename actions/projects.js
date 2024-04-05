"use server"
import prisma from "../prisma/script";

// Get all projects
export const getAllProjects = async () => {
    return prisma.project.findMany({
        select: {
            id: true,
            title: true,
            description: true,
            goal: true,
            currentFunds: true,
            createdBy: true,
            userId: true,
            fundings: true,
        }
    });
};

// Fetch project details by projectId
export const getProjectDetails = async (projectId) => {
    return prisma.project.findUnique({
        where: {
            id: projectId,
        },
        select: {
            id: true,
            title: true,
            description: true,
            goal: true,
            currentFunds: true,
            createdBy: true,
            userId: true,
            fundings: true,
        },
    });
};

// Create a new project
export const createNewProject = async (project) => {
    return prisma.project.create({
        data: project,
    });
};
