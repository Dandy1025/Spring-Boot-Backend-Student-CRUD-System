function getAll() {
    fetch("http://localhost:8080/get-all")
        .then(response => response.json())
        .then(data => {
            let studentTable = document.getElementById('studentTableBody');
            studentTable.innerHTML = '';
            data.forEach(student => {
                let row = studentTable.insertRow();
                row.insertCell().innerHTML = student.stdId;
                row.insertCell().innerHTML = student.stdName;
                row.insertCell().innerHTML = student.stdAge;
                row.insertCell().innerHTML = student.stdContact;
                row.insertCell().innerHTML = student.gudName;
                row.insertCell().innerHTML = student.gudAddress;
                row.insertCell().innerHTML = student.gudContact;

                let updateButton = document.createElement('button');
                updateButton.innerHTML = 'Update';
                updateButton.className = 'btn btn-warning';
                updateButton.onclick = function () {
                    localStorage.setItem('studentDetails', JSON.stringify(student));
                    window.location.href = 'update.html';
                }

                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Delete';
                deleteButton.className = 'btn btn-danger';
                deleteButton.onclick = function () {
                    deleteStudent(student.stdId);
                    location.reload();

                }

                row.insertCell().appendChild(updateButton);
                row.insertCell().appendChild(deleteButton);
            });
        });
}

function deleteStudent(studentId) {
    if (confirm("Are you sure You want to delete ?")) {
        fetch(`http://localhost:8080/delete-student/${studentId}`,
            {
                method: 'DELETE'
            }
        )
            .then(response => response.json())
            .then(data => {
                alert('Student deleted successfully');
                getAll();
            });
    }

}

window.onload = function () {
    getAll();
}
