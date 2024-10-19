const createFileWithExtensions = (file, extension) => {
    const newName = file.replace(/\//g, "");  // Removes all "/"
    const fileName = (file && newName) ? `${newName}.${extension}` : "";
    return fileName;
}

//1. Split File Name and Extension
function splitFileName(fileName) {
    const lastDotIndex = fileName.lastIndexOf('.');
    if (lastDotIndex === -1) {
        return {name: fileName, extension: ''}; // No extension
    }
    return {
        name: fileName.slice(0, lastDotIndex),
        extension: fileName.slice(lastDotIndex + 1)
    };
}

// Example usage:
// console.log(splitFileName("document.pdf"));  // Output: { name: "document", extension: "pdf" }
// console.log(splitFileName("fileWithoutExtension"));  // Output: { name: "fileWithoutExtension", extension: "" }

//2. Change or Update File Extension
function changeFileExtension(fileName, newExtension) {
    const {name} = splitFileName(fileName);
    return `${name}.${newExtension}`;
}

// Example usage:
// console.log(changeFileExtension("image.jpeg", "png"));  // Output: "image.png"
// console.log(changeFileExtension("document.txt", "docx"));  // Output: "document.docx"

//3. Sanitize File Name
function sanitizeFileName(fileName) {
    return fileName.replace(/[<>:"/\\|?*]+/g, '_');  // Replaces invalid characters with '_'
}

// Example usage:
// console.log(sanitizeFileName("my*invalid:file?name.txt"));  // Output: "my_invalid_file_name.txt"

//4. Generate Unique File Name
function generateUniqueFileName(originalFileName) {
    const {name, extension} = splitFileName(originalFileName);
    const timestamp = Date.now();  // You could also use a random string here
    return `${name}_${timestamp}.${extension}`;
}

// Example usage:
// console.log(generateUniqueFileName("photo.jpg"));  // Output: "photo_1632774577923.jpg"
// console.log(generateUniqueFileName("document.pdf"));  // Output: "document_1632774577923.pdf"

export {createFileWithExtensions, changeFileExtension, generateUniqueFileName, sanitizeFileName, splitFileName};