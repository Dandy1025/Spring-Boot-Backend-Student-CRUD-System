function populateFormFromLocalStorage() {
    const student = JSON.parse(localStorage.getItem('studentDetails'));

    if (student) {
        document.getElementById('studentName').value = student.stdName;
        document.getElementById('studentAge').value = student.stdAge;
        document.getElementById('studentContact').value = student.stdContact;
        document.getElementById('guardianName').value = student.gudName;
        document.getElementById('guardianAddress').value = student.gudAddress;
        document.getElementById('guardianContact').value = student.gudContact;
    }
}

window.onload = function () {
    populateFormFromLocalStorage();
};

function updateStudent() {
    const studentObj = JSON.parse(localStorage.getItem('studentDetails'));
    const updatedStudent = {
        stdName: document.getElementById('studentName').value,
        stdAge: document.getElementById('studentAge').value,
        stdContact: document.getElementById('studentContact').value,
        gudName: document.getElementById('guardianName').value,
        gudAddress: document.getElementById('guardianAddress').value,
        gudContact: document.getElementById('guardianContact').value
    };

    fetch(`http://localhost:9080/update-student/${studentObj.stdId}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedStudent)
        }).then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Student details updated successfully');
        })
}

