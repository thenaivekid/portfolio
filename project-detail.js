function renderProjectDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    const project = projectsData[projectId];

    if (!project) {
        document.getElementById('project-detail').innerHTML = '<p class="text-2xl font-bold">Project not found</p>';
        return;
    }

    const detailHTML = `
        <h1 class="text-4xl font-bold mb-4">${project.name}</h1>
        <p class="text-xl mb-4 text-gray-400">${project.category}</p>
        <img src="${project.image}" alt="${project.name}" class="w-full max-w-2xl mb-8 rounded-lg shadow-lg">
        <div class="bg-[rgb(26,27,27)] p-6 rounded-lg shadow-lg mb-8">
            <h2 class="text-2xl font-semibold mb-4">Description</h2>
            <p class="mb-4">${project.description}</p>
        </div>
        ${project.colaborators ? `
        <div class="bg-[rgb(26,27,27)] p-6 rounded-lg shadow-lg mb-8">
            <h2 class="text-2xl font-semibold mb-4">Collaborators</h2>
            <p>${project.colaborators}</p>
        </div>
        ` : ''}
        <div class="flex flex-wrap gap-4">
            ${project.hosted_link ? `
            <a href="${project.hosted_link}" target="_blank" class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                View Hosted Project
            </a>
            ` : ''}
            ${project.code_link ? `
            <a href="${project.code_link}" target="_blank" class="bg-gray-700 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded">
                View Code
            </a>
            ` : ''}
            ${project.video_demo_link ? `
            <a href="${project.video_demo_link}" target="_blank" class="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                Watch Demo Video
            </a>
            ` : ''}
        </div>
    `;

    document.getElementById('project-detail').innerHTML = detailHTML;
    document.title = `${project.name} - Project Detail`;
}

document.addEventListener('DOMContentLoaded', renderProjectDetail);