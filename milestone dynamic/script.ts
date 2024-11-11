// Button ko get karna uske ID se
const generateResumeButton: HTMLButtonElement = document.getElementById('generateResume') as HTMLButtonElement;

// Button par event listener lagana
generateResumeButton.addEventListener('click', () => {
    // Input values ko get karna aur type annotations ka istemal karna
    const name: string = (document.getElementById('name') as HTMLInputElement).value;
    const contactNumber: string = (document.getElementById('contactNumber') as HTMLInputElement).value;
    const email: string = (document.getElementById('email') as HTMLInputElement).value;
    const address: string = (document.getElementById('address') as HTMLInputElement).value;
    const education: string = (document.getElementById('education') as HTMLTextAreaElement).value;
    const experience: string = (document.getElementById('experience') as HTMLTextAreaElement).value;
    const skills: string[] = (document.getElementById('skills') as HTMLInputElement).value.split(',');

    // Profile picture upload ka handle karna
    const profilePicture: File | null = (document.getElementById('profilePicture') as HTMLInputElement).files?.[0] || null;
    const profilePicURL: string = profilePicture ? URL.createObjectURL(profilePicture) : '';


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
    const resumeOutput: HTMLElement = document.getElementById('resumeOutput') as HTMLElement;
    
    // Previous content ko clear karna
    resumeOutput.innerHTML = '';

    // Resume content ko dynamically create karna
    resumeOutput.innerHTML = `
        <header>
            <h1>${name}</h1>
            <p>Contact: ${contactNumber} </p>
            <p> Email: <a href="mailto:${email}">${email}</a></p>
            <p>Address: ${address}</p>
        </header>

        <section class="profile">
            ${profilePicURL ? `<img src="${profilePicURL}" alt="Profile Picture" class="profile-picture">` : ''}
        </section>

        

        <section class="education">
            <h2>Education</h2>
            <p>${education}</p>
        </section>

        <section class="experience">
            <h2>Experience</h2>
            <p>${experience}</p>
        </section>

        <section class="skills">
            <h2>Skills</h2>
            <ul>
                ${skills.map(skill => `<li>${skill.trim()}</li>`).join('')}
            </ul>
        </section>
    `;
});
