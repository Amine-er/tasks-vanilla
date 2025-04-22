const API = {
    baseUrl: 'http://localhost:5173',
    getAllTasks: async () => {
        const response = await fetch('../public/data/data.json')
        if (!response.ok) {
            throw new Error('Failed to fetch tasks');
        }
        return await response.json();
    }
}
export default API;