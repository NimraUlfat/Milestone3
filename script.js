document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('resumeForm');
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault();

            // Type assertion for form elements
            var profilePictureInput = document.getElementById('profilePicture');
            var nameElement = document.getElementById('name');
            var emailElement = document.getElementById('email');
            var phoneElement = document.getElementById('phone');
            var addressElement = document.getElementById('address');
            var educationElement = document.getElementById('education');
            var expertiseElement = document.getElementById('expertise');
            var experienceElement = document.getElementById('experience');
            var skillsElement = document.getElementById('skills');
            var computerskillsElement = document.getElementById('computer-skills'); // Corrected ID

            // Check if all form elements exist
            if (profilePictureInput && nameElement && emailElement && addressElement && educationElement && expertiseElement && experienceElement && skillsElement && computerskillsElement) {
                console.log('All form elements are found.');

                // Collect input values
                var name_1 = nameElement.value;
                var email = emailElement.value;
                var phone = phoneElement.value;
                var address = addressElement.value;
                var education = educationElement.value;
                var expertise = expertiseElement.value;
                var experience = experienceElement.value;
                var skills = skillsElement.value;
                var computerskills = computerskillsElement.value;

                // Handle Profile Picture
                var profilePictureFile = profilePictureInput.files ? profilePictureInput.files[0] : null;
                var profilePictureURL = profilePictureFile ? URL.createObjectURL(profilePictureFile) : '';

                // Create resume content with profile picture if available
                var resumeOutput = `
                    <h2>Resume</h2>
                    <p><strong>Name :</strong>${name_1}</p>
                    <p><strong>Email :</strong>${email}</p>
                    <p><strong>Phone Number :</strong>${phone}</p>
                    <p><strong>Address :</strong>${address}</p>
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
                var resumeOutputElement = document.getElementById('resumeOutput');
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
