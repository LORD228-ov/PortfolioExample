fetch("scripts/data.json")
    .then(res => res.json())
    .then(data => {
        document.getElementById("projects-title").textContent = data.projectsTitle;
        const container = document.getElementById("projects-container");
        container.innerHTML = "";

        data.projects.forEach(project => {
            const col = document.createElement("div");
            col.className = "col-12 col-md-6";

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
