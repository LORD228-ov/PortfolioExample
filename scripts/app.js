fetch("scripts/data.json")
    .then(response => response.json())
    .then(data => {
        document.getElementById("skills-title").textContent = data.skillsTitle;
        document.getElementById("projects-title").textContent = data.projectsTitle;

        // Soft Skills
        const softSkills = document.getElementById("soft-skills");
        data.skills.soft.forEach(skill => {
            softSkills.innerHTML += `<div class="skill-box">${skill}</div>`;
        });

        // Programming Skills
        const programmingSkills = document.getElementById("programming-skills");
        data.skills.programming.forEach(skill => {
            programmingSkills.innerHTML += `<div class="skill-box">${skill}</div>`;
        });

        // Projects
        const projectsContainer = document.getElementById("projects");
        data.projects.forEach(p => {
            projectsContainer.innerHTML += `
                <a href="${p.link}" target="_blank" class="work-card col-md-6 col-lg-4">
                    <img src="${p.image}" alt="${p.title}">
                    <h4>${p.title}</h4>
                    <p>${p.subtitle}</p>
                </a>
            `;
        });
    })
    .catch(err => console.error("Error loading JSON:", err));
