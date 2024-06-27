function calculateAge() {
    // Get user input
    let day = document.getElementById("day").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    
    // Check if input is valid
    if (!day || !month || !year) {
        alert("Please enter a valid date of birth.");
        return;
    }

    // Create date of birth object
    let dob = new Date(year, month - 1, day);
    
    // Get current date
    let today = new Date();
    
    // Calculate age
    let age = today.getFullYear() - dob.getFullYear();
    let monthDiff = today.getMonth() - dob.getMonth();
    let dayDiff = today.getDate() - dob.getDate();
    
    // Adjust age if necessary
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }
    
    // Display the result
    document.getElementById("result").innerHTML = `You are ${age} years old.`;
}
