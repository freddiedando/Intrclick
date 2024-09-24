// Get the form and job list elements
const form = document.getElementById('moveForm');
const jobList = document.getElementById('jobList');

// Event listener for form submission
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const moveDate = document.getElementById('moveDate').value;
    const addressFrom = document.getElementById('addressFrom').value;
    const addressTo = document.getElementById('addressTo').value;

    // Create job object
    const job = {
        name,
        email,
        phone,
        moveDate,
        addressFrom,
        addressTo
    };

    // Add job to the list
    addJobToList(job);

    // Reset the form
    form.reset();
});

// Function to add a job to the job list
function addJobToList(job) {
    const li = document.createElement('li');
    li.textContent = `${job.name} - Move on ${job.moveDate} from ${job.addressFrom} to ${job.addressTo}. Contact: ${job.phone}`;
    jobList.appendChild(li);
}
