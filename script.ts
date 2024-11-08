document.addEventListener('DOMContentLoaded', () => { 
    const form = document.getElementById('resumeForm');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            // Type assertion for form elements
            const profilePictureInput = document.getElementById('profilePicture') as HTMLInputElement;
            const nameElement = document.getElementById('name') as HTMLInputElement;
            const emailElement = document.getElementById('email') as HTMLInputElement;
            const phoneElement = document.getElementById('phone') as HTMLInputElement;
            const addressElement = document.getElementById('address') as HTMLInputElement;
            const educationElement = document.getElementById('education') as HTMLInputElement;
            const expertiseElement = document.getElementById('expertise') as HTMLInputElement;
            const experienceElement = document.getElementById('experience') as HTMLInputElement;
            const skillsElement = document.getElementById('skills') as HTMLInputElement;
            const computerskillsElement = document.getElementById('computerskills') as HTMLInputElement;

            // Check if all form elements exist
            if (profilePictureInput && nameElement && emailElement && addressElement && educationElement && expertiseElement && experienceElement && skillsElement && computerskillsElement) {
                console.log('All form elements are found.');

                // Collect input values
                const name = nameElement.value;
                const email = emailElement.value;
                const phone = phoneElement.value;
                const address = addressElement.value;
                const education = educationElement.value;
                const expertise = expertiseElement.value;
                const experience = experienceElement.value;
                const skills = skillsElement.value;
                const computerskills = computerskillsElement.value;

                // Handle Profile Picture
                const profilePictureFile = profilePictureInput.files?.[0];
                const profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

                // Create resume content with profile picture if available
                let resumeOutput = `
                    <h2>Resume</h2>
                    <p><strong>Name :</strong>${name}</P>
                    <p><strong>Email :</strong>${email}</P>
                    <p><strong>Phone Number :</strong>${phone}</P>
                    <p><strong>Address :</strong>${address}</P>
                    <h3>Education</h3>
                    <p>${education}</p>
                    <h3>Expertise</h3>
                    <p>${expertise}</p>
                    <h3>Experience</h3>
                    <p>${experience}</p>
                    <h3>Skills</h3>
                    <p>${skills}</p>
                    <h3>Computer Skills</h3>
                    <p>${computerskills}</p>
                `;

                // If a profile picture is selected, add it to the resume output
                if (profilePictureURL) {
                    resumeOutput = `
                        <img src="${profilePictureURL}" alt="Profile Picture" style="width:150px; height:auto; border-radius:50%; margin-bottom: 20px;">
                    ` + resumeOutput;
                }

                // Find the resume output element and update its content
                const resumeOutputElement = document.getElementById('resumeOutput');
                if (resumeOutputElement) {
                    console.log('Updating resume output element with generated content.');
                    resumeOutputElement.innerHTML = resumeOutput;
                } else {
                    console.error('The resume output element is missing.');
                }
            } else {
                console.error('One or more form elements are missing.');
            }
        });
    } else {
        console.error('Form element not found!');
    }
});
