const searchBtn = document.getElementById("searchBtn");
const resultsContainer = document.getElementById("resultsContainer");
searchBtn.addEventListener("click", function () {
  const location = document.getElementById("location").value;
  const jobRole = document.getElementById("jobRole").value;
  resultsContainer.innerHTML = "";
  const candidates = [
    {
      name: "John Doe",
      location: "New York",
      jobRole: "Software Engineer",
      experience: "5 years",
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      name: "Jane Smith",
      location: "London",
      jobRole: "Product Manager",
      experience: "8 years",
      skills: ["Product Management", "Agile", "UX/UI"],
    },
  ];
  const filteredCandidates = candidates.filter((candidate) => {
    return candidate.location === location && candidate.jobRole === jobRole;
  });

  if (filteredCandidates.length > 0) {
    filteredCandidates.forEach((candidate) => {
      const candidateElement = document.createElement("div");
      candidateElement.classList.add("candidate");
      candidateElement.innerHTML = `
            <h3>${candidate.name}</h3>
            <p><strong>Location:</strong> ${candidate.location}</p>
            <p><strong>Job Role:</strong> ${candidate.jobRole}</p>
            <p><strong>Experience:</strong> ${candidate.experience}</p>
            <p><strong>Skills:</strong> ${candidate.skills.join(", ")}</p>
          `;
      resultsContainer.appendChild(candidateElement);
    });
  } else {
    const noResultsElement = document.createElement("p");
    noResultsElement.textContent =
      "No candidates found matching the selected criteria.";
    resultsContainer.appendChild(noResultsElement);
  }
});
