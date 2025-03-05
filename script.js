
// ---------------- STUDENT MANAGEMENT FUNCTIONALITY ---------------- //
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("studentForm")?.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // Get form values
        const rollno = document.getElementById('rollno').value.trim();
        const name = document.getElementById('name').value.trim();
        const gender = document.getElementById('gender').value;
        const age = document.getElementById('age').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const email = document.getElementById('studentEmail').value.trim();
        const father = document.getElementById('father').value.trim();
        const mother = document.getElementById('mother').value.trim();
        const program = document.getElementById('program').value;
        const course = document.getElementById('course').value;
        const year = document.getElementById('year').value;
        const semester = document.getElementById('semester').value;

        // Validate required fields
        if (!rollno || !name || !age || !phone || !email || !father || !mother) {
            alert("All fields are required!");
            return;
        }

        // Check if editing an existing row
        const existingRow = document.querySelector(".editing");
        if (existingRow) {
            existingRow.cells[0].textContent = rollno;
            existingRow.cells[1].textContent = name;
            existingRow.cells[2].textContent = gender;
            existingRow.cells[3].textContent = age;
            existingRow.cells[4].textContent = phone;
            existingRow.cells[5].textContent = email;
            existingRow.cells[6].textContent = father;
            existingRow.cells[7].textContent = mother;
            existingRow.cells[8].textContent = program;
            existingRow.cells[9].textContent = course;
            existingRow.cells[10].textContent = year;
            existingRow.cells[11].textContent = semester;

            existingRow.classList.remove("editing"); // Remove editing state
            document.getElementById('studentForm').reset(); // Reset form
            return;
        }

        // Get table body
        const table = document.getElementById('student-list');
        const newRow = table.insertRow(table.rows.length);

        // Insert cells and fill with form data
        newRow.insertCell(0).textContent = rollno;
        newRow.insertCell(1).textContent = name;
        newRow.insertCell(2).textContent = gender;
        newRow.insertCell(3).textContent = age;
        newRow.insertCell(4).textContent = phone;
        newRow.insertCell(5).textContent = email;
        newRow.insertCell(6).textContent = father;
        newRow.insertCell(7).textContent = mother;
        newRow.insertCell(8).textContent = program;
        newRow.insertCell(9).textContent = course;
        newRow.insertCell(10).textContent = year;
        newRow.insertCell(11).textContent = semester;

        // Action cell (Edit & Delete buttons)
        const actionCell = newRow.insertCell(12);

        // Create Edit button
        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.classList.add('edit-btn');
        editButton.onclick = function () {
            editStudent(newRow);
        };
        actionCell.appendChild(editButton);

        // Create Delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.classList.add('delete-btn');
        deleteButton.onclick = function () {
            newRow.remove();
        };
        actionCell.appendChild(deleteButton);

        // Reset form fields after submission
        document.getElementById('studentForm').reset();
    });
});

// ---------------- FUNCTION TO EDIT STUDENT DATA ---------------- //
function editStudent(row) {
    document.getElementById('rollno').value = row.cells[0].textContent;
    document.getElementById('name').value = row.cells[1].textContent;
    document.getElementById('gender').value = row.cells[2].textContent;
    document.getElementById('age').value = row.cells[3].textContent;
    document.getElementById('phone').value = row.cells[4].textContent;
    document.getElementById('studentEmail').value = row.cells[5].textContent;
    document.getElementById('father').value = row.cells[6].textContent;
    document.getElementById('mother').value = row.cells[7].textContent;
    document.getElementById('program').value = row.cells[8].textContent;
    document.getElementById('course').value = row.cells[9].textContent;
    document.getElementById('year').value = row.cells[10].textContent;
    document.getElementById('semester').value = row.cells[11].textContent;

    // Mark the row as being edited
    row.classList.add("editing");
}
// ---------------- SEARCH FUNCTION  ---------------- //
function search() {
    var input, filter, table, tr, td, td1, td2, td3, td4, i, txtValue, txtValue1, txtValue2, txtValue3, txtValue4;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    table = document.getElementById("student-list");
    tr = table.getElementsByTagName("tr");

    for (i = 1; i < tr.length; i++) { // Skipping header row
        td = tr[i].getElementsByTagName("td")[1]; // Name
        td1 = tr[i].getElementsByTagName("td")[2]; // Gender
        td2 = tr[i].getElementsByTagName("td")[5]; // Email
        td3 = tr[i].getElementsByTagName("td")[8]; // Program
        td4 = tr[i].getElementsByTagName("td")[9]; // Course

        if (td || td1 || td2 || td3 || td4) {
            txtValue = td ? td.textContent || td.innerText : "";
            txtValue1 = td1 ? td1.textContent || td1.innerText : "";
            txtValue2 = td2 ? td2.textContent || td2.innerText : "";
            txtValue3 = td3 ? td3.textContent || td3.innerText : "";
            txtValue4 = td4 ? td4.textContent || td4.innerText : "";

            if (
                txtValue.toUpperCase().indexOf(filter) > -1 || 
                txtValue1.toUpperCase().indexOf(filter) > -1 || 
                txtValue2.toUpperCase().indexOf(filter) > -1 || 
                txtValue3.toUpperCase().indexOf(filter) > -1 || 
                txtValue4.toUpperCase().indexOf(filter) > -1
            ) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

// ---------------- LOGOUT FUNCTION ---------------- //
function logout() {
    alert("Logged out successfully!");
    window.location.href = "login.html"; // Redirect to login page
}