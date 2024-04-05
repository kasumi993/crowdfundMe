import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const NewProjectPage = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [goal, setGoal] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Create new project using Prisma
            await createProject({ title, description, goal });
            // Redirect to project details page or dashboard
            router.push('/');
        } catch (error) {
            console.error('Error creating project:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto mt-8">
            <h1 className="text-2xl font-semibold mb-4">Create a New Project</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="title" className="block text-sm font-medium mb-2">Title</label>
                    <input type="text" id="title" className="border border-gray-300 rounded px-3 py-2 w-full" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-sm font-medium mb-2">Description</label>
                    <textarea id="description" className="border border-gray-300 rounded px-3 py-2 w-full" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                </div>
                <div className="mb-4">
                    <label htmlFor="goal" className="block text-sm font-medium mb-2">Funding Goal</label>
                    <input type="number" id="goal" className="border border-gray-300 rounded px-3 py-2 w-full" value={goal} onChange={(e) => setGoal(parseFloat(e.target.value))} />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Project</button>
            </form>
        </div>
    );
};

export default NewProjectPage;
