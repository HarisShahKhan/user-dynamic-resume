document.addEventListener('DOMContentLoaded', function () {
    var _a, _b;
    var form = document.getElementById('resume-form');
    var resumeOutput = document.getElementById('resume-output');
    var resumeContent = document.getElementById('resume-content');
    var educationContainer = document.getElementById('education-container');
    var workExperienceContainer = document.getElementById('work-experience-container');
    (_a = document.getElementById('add-education')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
        var entry = document.createElement('div');
        entry.innerHTML = "\n        <label for=\"education-institution\">Institution:</label>\n        <input type=\"text\" id=\"education-institution\" name=\"education-institution\" required>\n        <label for=\"education-degree\">Degree:</label>\n        <input type=\"text\" id=\"education-degree\" name=\"education-degree\" required>\n        <label for=\"education-year\">Year:</label>\n        <input type=\"text\" id=\"education-year\" name=\"education-year\" required>\n        <hr>\n        ";
        educationContainer.appendChild(entry);
    });
    (_b = document.getElementById('add-work-experience')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
        var entry = document.createElement('div');
        entry.innerHTML = "\n        <label for=\"work-company\">Company:</label>\n        <input type=\"text\" id=\"work-company\" name=\"work-company\" required>\n        <label for=\"work-role\">Role:</label>\n        <input type=\"text\" id=\"work-role\" name=\"work-role\" required>\n        <label for=\"work-year\">Year:</label>\n        <input type=\"text\" id\"work-year\" name=\"work-year\" required>\n        <hr>\n      ";
        workExperienceContainer.appendChild(entry);
    });
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        console.log('form submitted');
        resumeContent.innerHTML = '';
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var profilePicture = document.getElementById('profile-picture').value;
        var skills = document.getElementById('skills').value;
        resumeContent.innerHTML += "<h1>".concat(name, "</h1>");
        resumeContent.innerHTML += "<p>Email: ".concat(email, "</p>");
        if (profilePicture) {
            resumeContent.innerHTML += "<img src=\"".concat(profilePicture, "\" alt=\"").concat(name, "\" style=\"width: 150px; height: auto\">");
        }
        resumeContent.innerHTML += "<h2>Skills</h2><p>".concat(skills, "</p>");
        var educationEntries = document.querySelectorAll('dicv > label[for="education-institution"]');
        resumeContent.innerHTML += '<h2>Education</h2>';
        educationEntries.forEach(function (entry) {
            var institution = entry.parentElement.quarySelector('input[name="education-institution"]').value;
            var degree = entry.parentElement.querySelctor('input[name="education-degree"]').value;
            var year = entry.parentElement.querySelector('input["name="education-year"]').value;
            resumeContent.innerHTML += "<p>".concat(institution, ", ").concat(degree, ", (").concat(year, ")</p>");
        });
        var workEntries = document.querySelectorAll('div > label[for="work-company"]');
        resumeContent.innerHTML += '<h2>Work Experience</h2>';
        workEntries.forEach(function (entry) {
            var company = entry.parentElement.querySelector('input[name="work-company"]').value;
            var role = entry.parentElement.querySelector('input[name="work-role"]').value;
            var year = entry.parentElement.querySelector('input[name="work-year"]').value;
            resumeContent.innerHTML += "<p>".concat(company, ", ").concat(role, " (").concat(year, ")</p>");
        });
        resumeOutput.style.display = "block";
    });
});
