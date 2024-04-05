const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function seedDatabase() {
    try {
        // Create initial users
        const user2 = await prisma.user.create({
            data: {
                email: 'new3@example.com',
                password: 'password1',
                firstname: 'Ndeye',
                lastname: 'Marie',
            },
        });
        //
        // const user2 = await prisma.user.create({
        //     data: {
        //         email: 'new2@example.com',
        //         password: 'password2',
        //         firstname: 'Marie',
        //         lastname: 'Monroe',
        //     },
        // });
        //
        // // Create initial projects
        // const project1 = await prisma.project.create({
        //     data: {
        //         title: 'Test de bonbons',
        //         description: 'Notre projet consite à tester des bonbons toute la journée donc on demande votre aide parce qu\'on veut pas bosser',
        //         goal: 1000.00,
        //         currentFunds: 0.00,
        //         createdBy: {
        //             connect: {
        //                 id: user1.id,
        //             },
        //         },
        //     },
        // });

        const project2 = await prisma.project.create({
            data: {
                title: 'Almost fully funded project',
                description: 'this is a funded project description that says nothing important',
                goal: 1500.00,
                currentFunds: 1000.00,
                createdBy: {
                    connect: {
                        id: user2.id,
                    },
                },
            },
        });

        console.log('Initial data inserted successfully');
    } catch (error) {
        console.error('Error seeding database:', error);
    } finally {
        await prisma.$disconnect();
    }
}

// Call the function to seed the database
seedDatabase();
