document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const formObject = {};
    formData.forEach((value, key) => (formObject[key] = value));
    console.log(formObject);
});

function downloadCertificate(filename) {
    const link = document.createElement("a");
    link.href = filename;
    link.download = filename.split("/").pop(); 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
