document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const projectId = params.get('project');

    // Check if projectId is retrieved correctly
    console.log('Project ID:', projectId);

    // Example of how to use projectId to fetch project details (if needed)
    if (projectId) {
        // Replace with your API URL or logic to fetch project details
        console.log(`Fetching details for project ID: ${projectId}`);
    } else {
        console.error('No project ID found in URL.');
    }
});
