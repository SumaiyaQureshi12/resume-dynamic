// Button ko get karna uske ID se
var generateResumeButton = document.getElementById('generateResume');
// Button par event listener lagana
generateResumeButton.addEventListener('click', function () {
    var _a;
    // Input values ko get karna aur type annotations ka istemal karna
    var name = document.getElementById('name').value;
    var contactNumber = document.getElementById('contactNumber').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var education = document.getElementById('education').value;
    var experience = document.getElementById('experience').value;
    var skills = document.getElementById('skills').value.split(',');
    // Profile picture upload ka handle karna
    var profilePicture = ((_a = document.getElementById('profilePicture').files) === null || _a === void 0 ? void 0 : _a[0]) || null;
    var profilePicURL = profilePicture ? URL.createObjectURL(profilePicture) : '';
    // Required fields validation
    if (!name.trim()) {
        alert('Apna naam darj karein');
        return;
    }
    if (!contactNumber.trim()) {
        alert('Apna contact number darj karein');
        return;
    }
    if (!email.trim()) {
        alert('Apna email darj karein');
        return;
    }
    // Resume output ke div ko get karna
    var resumeOutput = document.getElementById('resumeOutput');
    // Previous content ko clear karna
    resumeOutput.innerHTML = '';
    // Resume content ko dynamically create karna
    resumeOutput.innerHTML = "\n        <header>\n            <h1>".concat(name, "</h1>\n            <p>Contact: ").concat(contactNumber, " </p>\n            <p> Email: <a href=\"mailto:").concat(email, "\">").concat(email, "</a></p>\n            <p>Address: ").concat(address, "</p>\n        </header>\n\n        <section class=\"profile\">\n            ").concat(profilePicURL ? "<img src=\"".concat(profilePicURL, "\" alt=\"Profile Picture\" class=\"profile-picture\">") : '', "\n        </section>\n\n        \n\n        <section class=\"education\">\n            <h2>Education</h2>\n            <p>").concat(education, "</p>\n        </section>\n\n        <section class=\"experience\">\n            <h2>Experience</h2>\n            <p>").concat(experience, "</p>\n        </section>\n\n        <section class=\"skills\">\n            <h2>Skills</h2>\n            <ul>\n                ").concat(skills.map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join(''), "\n            </ul>\n        </section>\n    ");
});
