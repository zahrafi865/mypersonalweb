let projectData = [];
function addProject(e) {
    e.preventDefault();

    let projectName = document.getElementById("project-name").value;
    let startDate = new Date(document.getElementById("start-date").value);
    let endDate = new Date(document.getElementById("end-date").value);
    let description = document.getElementById("description").value;
    let nodeJS = document.getElementById("node-js");
    let nextJS = document.getElementById("next-js");
    let reactJS = document.getElementById("react-js");
    let typeScript = document.getElementById("typescript");
    let image = document.getElementById("upload").files;

    // validation
    if (projectName === "" || startDate === "" || endDate === "" || description === "" || image === null)
        return alert("Forms must be filled!");

    // if (nodeJS)
    if (!nodeJS.checked && !nextJS.checked && !reactJS.checked && !typeScript.checked)
        return alert("Choose one!");

    // show image
    image = URL.createObjectURL(image[0]);

    // show duration
    let diff = endDate - startDate;
    let days = diff / (1000 * 3600 * 24);
    let weeks = days / 7;
    let months = days / 30;

    let durationTotal;

    if (days <= 7)
        durationTotal = `${days} hari`;
    else if (days > 7 && days <= 30)
        durationTotal = `${Math.floor(weeks)} minggu`;
    else if (days > 30)
        durationTotal = `${Math.floor(months)} bulan`


    // show icon
    let nodeJSIcon;
    let nextJSIcon;
    let reactJSIcon;
    let typescriptJSIcon;

    if (nodeJS.checked)
        nodeJSIcon = `<img src="/assets/nodejs.png" alt="nodejs">`;
    else
        nodeJSIcon = "";

    if (nextJS.checked)
        nextJSIcon = `<img src="/assets/nextjs.png" alt="nextjs">`;
    else
        nextJSIcon = "";

    if (reactJS.checked)
        reactJSIcon = `<img src="/assets/reactjs.png" alt="reactjs">`;
    else
        reactJSIcon = "";

    if (typeScript.checked)
        typescriptJSIcon = `<img src="/assets/typescript.png" alt="typescript">`;
    else
        typescriptJSIcon = "";

   // get current time
    let now = new Date();

    // time format
    let hours = now.getHours().toString().padStart(2,'0');
    let minutes = now.getMinutes().toString().padStart(2,'0');
    let time = `${hours}.${minutes}`;

    // date format
    let day = now.getDate();
    let monthsArray = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "Mei",
        "Jun",
        "Jul",
        "Aug",
        "Sept",
        "Oct",
        "Nov",
        "Dec"
    ]
    let month = monthsArray[now.getMonth()];
    let year = now.getFullYear();
    let date = `${day} ${month} ${year}`;

    let postTime = `${time} WIB | ${date}`;


    let project = {
        projectName,
        durationTotal,
        nodeJSIcon,
        nextJSIcon,
        reactJSIcon,
        typescriptJSIcon,
        description,
        postTime,
        image
    }

    projectData.push(project);
    console.log(projectData);

    renderMyProject();
}


function renderMyProject() {
    document.getElementById("container").innerHTML = ``;

    for (let i = 0; i < projectData.length; i++) {
        console.log(projectData[i]);

        document.getElementById("container").innerHTML +=  
            `
                <div class="project-content" >
                    <img src="${projectData[i].image}" alt="">
                    <h3>${projectData[i].projectName}</h3>
                    <h4>Duration: ${projectData[i].durationTotal}</h4>
                    <p>
                        ${projectData[i].description}
                    </p>
                    <div class="icon" id="icon-tech">
                        ${projectData[i].nodeJSIcon}
                        ${projectData[i].nextJSIcon}
                        ${projectData[i].typescriptJSIcon}
                        ${projectData[i].reactJSIcon}
                    </div>
                    <div class="time">
                        <p>${projectData[i].postTime}</p>
                    </div>
                    <div class="buttons">
                        <button>edit</button>
                        <button>delete</button>
                    </div>
                </div>`
    }
}