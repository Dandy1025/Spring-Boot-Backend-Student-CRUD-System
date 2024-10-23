function clearFeilds() {
    document.getElementById('studentName').value = '';
    document.getElementById('studentAge').value = '';
    document.getElementById('studentContact').value = '';
    document.getElementById('guardianName').value = '';
    document.getElementById('guardianAddress').value = '';
    document.getElementById('guardianContact').value = '';
}

function saveDate() {
    var studentName = document.getElementById('studentName').value;
    var studentAge = document.getElementById('studentAge').value;
    var studentContact = document.getElementById('studentContact').value;
    var guardianName = document.getElementById('guardianName').value;
    var guardianAddress = document.getElementById('guardianAddress').value;
    var guardianContact = document.getElementById('guardianContact').value;

    let requestBody = {
        "stdName": studentName,
        "stdAge": studentAge,
        "stdContact": studentContact,
        "gudName": guardianName,
        "gudAddress": guardianAddress,
        "gudContact": guardianContact
    }

    fetch("http://localhost:9080/save-student",
        {
            method: 'post',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json'
            }
        }
    ).then(response => response.json())
        .then(data => {
            console.log(data);
            alert("Student saved successfully");
            clearFeilds();

        })
}