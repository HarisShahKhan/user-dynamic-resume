document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('resume-form') as HTMLFormElement;
    const resumeOutput = document.getElementById('resume-output') as HTMLElement;
    const resumeContent = document.getElementById('resume-content') as HTMLElement;

    const educationContainer = document.getElementById('education-container') as HTMLDivElement;
    const workExperienceContainer = document.getElementById('work-experience-container') as HTMLDivElement;

    document.getElementById('add-education')?.addEventListener('click', () => {
        const entry = document.createElement('div');
        entry.innerHTML = `
        <label for="education-institution">Institution:</label>
        <input type="text" id="education-institution" name="education-institution" required>
        <label for="education-degree">Degree:</label>
        <input type="text" id="education-degree" name="education-degree" required>
        <label for="education-year">Year:</label>
        <input type="text" id="education-year" name="education-year" required>
        <hr>
        `;
        educationContainer.appendChild(entry);
    });


    document.getElementById('add-work-experience')?.addEventListener('click', () => {
        const entry = document.createElement('div');
        entry.innerHTML = `
        <label for="work-company">Company:</label>
        <input type="text" id="work-company" name="work-company" required>
        <label for="work-role">Role:</label>
        <input type="text" id="work-role" name="work-role" required>
        <label for="work-year">Year:</label>
        <input type="text" id"work-year" name="work-year" required>
        <hr>
      `;
      workExperienceContainer.appendChild(entry);
    });


    form.addEventListener('submit', (event) => {
      event.preventDefault();
      console.log('form submitted');

      resumeContent.innerHTML = '';

      const name = (document.getElementById('name') as HTMLInputElement).value;
      const email = (document.getElementById('email') as HTMLInputElement).value;
      const profilePicture = (document.getElementById('profile-picture') as HTMLInputElement).value;
      const skills = (document.getElementById('skills') as HTMLInputElement).value;

      resumeContent.innerHTML += `<h1>${name}</h1>`;
      resumeContent.innerHTML += `<p>Email: ${email}</p>`;
      if (profilePicture) {
        resumeContent.innerHTML += `<img src="${profilePicture}" alt="${name}" style="width: 150px; height: auto">`;
      }


      resumeContent.innerHTML += `<h2>Skills</h2><p>${skills}</p>`;

      const educationEntries = document.querySelectorAll('dicv > label[for="education-institution"]');
      resumeContent.innerHTML += '<h2>Education</h2>';
      educationEntries.forEach((entry: any) => {
        const institution = entry.parentElement.quarySelector('input[name="education-institution"]').value;
        const degree = entry.parentElement.querySelctor('input[name="education-degree"]').value;
        const year = entry.parentElement.querySelector('input["name="education-year"]').value;
        resumeContent.innerHTML += `<p>${institution}, ${degree}, (${year})</p>`;
      });


      const workEntries = document.querySelectorAll('div > label[for="work-company"]');
      resumeContent.innerHTML += '<h2>Work Experience</h2>';
      workEntries.forEach((entry: any) => {
        const company = entry.parentElement.querySelector('input[name="work-company"]').value;
        const role = entry.parentElement.querySelector('input[name="work-role"]').value;
        const year = entry.parentElement.querySelector('input[name="work-year"]').value;
        resumeContent.innerHTML += `<p>${company}, ${role} (${year})</p>`;
      });

      resumeOutput.style.display = "block";
    });
});