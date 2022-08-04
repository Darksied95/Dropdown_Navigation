const closeButton = document.getElementById("close-menu")
const openButton = document.getElementById("open-menu")
const features = document.getElementById("features")
const featuresList = document.getElementById("features-list")
const company = document.getElementById("company")
const companyList = document.getElementById("company-list")
closeButton.addEventListener("click", () => {
    document.getElementById("navigation").style.right = "-100vh"
})

openButton.addEventListener("click", () => {
    document.getElementById("navigation").style.right = 0;
})
features.addEventListener("click", () => {

    if (featuresList.style.display === "" || featuresList.style.display === "none") {
        featuresList.style.display = "block"
    } else {
        featuresList.style.display = "none"
    }
})
company.addEventListener("click", () => {

    if (companyList.style.display === "" || companyList.style.display === "none") {
        companyList.style.display = "block"
    } else {
        companyList.style.display = "none"
    }
})