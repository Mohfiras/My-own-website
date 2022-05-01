const seo =document.getElementById("Seo");
const skillsInfo =document.getElementById("skills_info");
const eno ="true"
seo.addEventListener("click", () => {
    const info =document.createElement("h3");
    info.style.color ="red";

    info.innerText = "hello world my name is";

    skillsInfo.append(info);

});


const webD =document.getElementById("webd");
const skillsInfo =document.getElementById("skills_info");
webD.addEventListener("click", () => {
    const info =document.createElement("h3");
    info.style.color ="red";

    info.innerText = "my name is mohammed";

    skillsInfo.append(info);

});






