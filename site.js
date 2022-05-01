const seo =document.getElementById("Seo");
const skillsInfo =document.getElementById("skills_info");
const eno ="true"
seo.addEventListener("click", () => {
    const info =document.createElement("h3");
    info.style.color ="red";

    info.innerText = "hello world my name is";

    skillsInfo.append(info);

});






