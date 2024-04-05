"use server"
import prisma from "../prisma/script"

export const updateUser = (user) => {
    return prisma.user.update({
        where: {
            id: user.id
        },
        data: {
            name: user.name
        }
    });
}

export const deleteUserById = (id) => {
    return prisma.user.delete({
        where: {
            id: id
        },
    });
}

export const getAllUsers = () => {
    return prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true
        }
    });
}

export const getUserById = (id) => {
    return prisma.user.findFirst({
        where: {
            id: id
        },
        select: {
            firstname: true,
            lastname: true,
            email: true
        }
    })
}

export const createNewUser = (firstname) => {
    return prisma.user.create({
        data: {
            name: 'Alice3',
            email: 'alice3@prisma.io',
        },
    })
}
