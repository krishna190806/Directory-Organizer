// File categorization function
function organizeFiles() {
    const fileInput = document.getElementById("file-input");
    const files = fileInput.files;

    // Categories
    const imagesList = document.getElementById("images-list");
    const documentsList = document.getElementById("documents-list");
    const videosList = document.getElementById("videos-list");

    // Clear previous lists
    imagesList.innerHTML = '';
    documentsList.innerHTML = '';
    videosList.innerHTML = '';

    // Define file type categories based on extensions
    const imageTypes = ['.jpg', '.jpeg', '.png', '.gif', '.bmp'];
    const documentTypes = ['.pdf', '.docx', '.txt', '.xls', '.pptx'];
    const videoTypes = ['.mp4', '.avi', '.mov', '.mkv'];

    // Process each file and categorize
    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const fileName = file.name.toLowerCase();

        if (imageTypes.some(ext => fileName.endsWith(ext))) {
            const li = document.createElement("li");
            li.textContent = file.name;
            imagesList.appendChild(li);
        } else if (documentTypes.some(ext => fileName.endsWith(ext))) {
            const li = document.createElement("li");
            li.textContent = file.name;
            documentsList.appendChild(li);
        } else if (videoTypes.some(ext => fileName.endsWith(ext))) {
            const li = document.createElement("li");
            li.textContent = file.name;
            videosList.appendChild(li);
        }
    }
}
