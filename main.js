const peopleContainer = document.getElementById("people");

const employees = [
  {
    id: 1,
    name: "Lucas",
    jobTitle: "Software Developer",
    skills: ["JavaScript", "React", "Vue"],
  },
  {
    id: 2,
    name: "Zion",
    jobTitle: "Software Developer",
    skills: ["JavaScript", "React", "Vue", "Python"],
  },
  {
    id: 3,
    name: "Kayla",
    jobTitle: "Software Developer",
    skills: ["CSS", "Bartender", "Scooby-Doo Enthusiast"],
  },
  {
    id: 4,
    name: "Ermias",
    jobTitle: "Software Developer",
    skills: ["JavaScript", "Flask", "HTML/CSS"],
  },
  {
    id: 5,
    name: "Austin",
    jobTitle: "Data Scientist",
    skills: ["SQL", "R", "Julia"],
  },
  {
    id: 6,
    name: "Ashmika",
    jobTitle: "Software Developer",
    skills: ["HTML/CSS", "Python", "Flask"],
  },
  {
    id: 7,
    name: "Connor",
    jobTitle: "Elephant Tamer",
    skills: ["HTML/CSS", "Python", "SalesForce"],
  },
  {
    id: 8,
    name: "Nehemiah",
    jobTitle: "Overall Awesome Guy",
    skills: ["Hammod B3 Organ", "Running with Scissors", "Levitation"],
  },
  {
    id: 9,
    name: "Noah",
    jobTitle: "Circus Clown",
    skills: ["Juggling", "unicycling"],
  },
  {
    id: 10,
    name: "Blane",
    jobTitle: " Software Developer",
    skills: ["Python", "JavaScript", "Flask", "Postgres", "Pygames"],
  },
  {
    id: 11,
    name: "Dylan",
    jobTitle: "Instructor",
    skills: ["Python", "Flask", "Algos", "Jiu-Jitsu"],
  },
  {
    id: 12,
    name: "Luam",
    jobTitle: "Software Developer",
    skills: ["SQL", "python", "HTML/CSS"],
  },
  {
    id: 13,
    name: "Martin",
    jobTitle: "Water Engineer",
    skills: ["watering trees", "watering flowers", "breaking stuff"],
  },
  {
    id: 14,
    name: "Abe",
    jobTitle: "Software Developer",
    skills: ["Python", "Flask", "HTML/CSS"],
  },
  {
    id: 15,
    name: "Arsema",
    jobTitle: "Student",
    skills: ["python", "Html/css", "Flask"],
  },
  {
    id: 16,
    name: "Chad",
    jobTitle: "Human",
    skills: ["Google Search Expert", "Eyelash Esthetician"],
  },
  {
    id: 17,
    name: "Michelle",
    jobTitle: "woodworker",
    skills: ["HTML", "CSS", "Python"],
  },
  {
    id: 18,
    name: "Joseph",
    jobTitle: "Emporer",
    skills: ["Leadership", "Communication"],
  },
];

for (const employee of employees) {
  peopleContainer.innerHTML += `
        <div class="card" id="${employee.id}">
            <h2>${employee.name}</h2>
            <p><b>Job Title:</b> ${employee.jobTitle}</p>
            <p><b>Skills:</b><br> ${employee.skills[0]},<br> ${employee.skills[1]},<br> ${employee.skills[2]}</p>
        </div>
    `;
}

for (const employee of employees) {
  const employeeEl = document.getElementById(employee.id);
  employeeEl.addEventListener("click", () => {
    // employeeEl.remove()
    if (employeeEl.style.backgroundColor === "gray") {
      employeeEl.style.backgroundColor = "transparent";
    } else {
      employeeEl.style.backgroundColor = "gray";
    }
  });
}
