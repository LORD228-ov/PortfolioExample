fetch("scripts/data.json")
    .then(res => res.json())
    .then(data => {

        // document.getElementById("skills-title").textContent = data.skillsTitle;

        // const softSkillsBox = document.getElementById("soft-skills");
        // const progSkillsBox = document.getElementById("programming-skills");

        // softSkillsBox.innerHTML = `<div><hr style="border-top: 5px solid rgb(255, 255, 255); width: 80%; margin: 10px auto;"></div>`;
        // progSkillsBox.innerHTML = `<div><hr style="border-top: 5px solid rgb(255, 255, 255); width: 80%; margin: 10px auto;"></div>`;

        // data.softSkills.forEach(skill => {
        //     const p = document.createElement("p");
        //     p.className = "fw-bold";
        //     p.textContent = skill;
        //     softSkillsBox.appendChild(p);
        // });

        // // Загружаем programming skills
        // data.programmingSkills.forEach(skill => {
        //     const p = document.createElement("p");
        //     p.className = "fw-bold";
        //     p.textContent = skill;
        //     progSkillsBox.appendChild(p);
        // });

        document.getElementById("projects-title").textContent = data.projectsTitle;
        const container = document.getElementById("projects-container");
        container.innerHTML = "";

        data.projects.forEach(project => {
            const col = document.createElement("div");
            col.className = "col-sm-6 col-lg";

            col.innerHTML = `
                <a href="${project.link}" target="_blank" class="text-decoration-none text-light">
                    <div class="border rounded p-3 text-center h-100">
                        <div class="project-img-wrapper mb-3">
                            <img src="${project.image}" alt="Project Image">
                        </div>
                        <p class="fw-bold">${project.title}</p>
                        <p class="fw-bold">${project.subtitle}</p>
                    </div>
                </a>
            `;

            container.appendChild(col);
        });
    });
