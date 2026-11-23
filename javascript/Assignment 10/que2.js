const container = document.getElementById("employees");
const error = document.getElementById("error");

function loadEmployees() {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3002/employees");

    xhr.onload = function () {
        if (xhr.status === 200) {
            const employees = JSON.parse(xhr.responseText);
            container.innerHTML = "";

            employees.forEach(function (employee) {
                container.innerHTML += `
                    <article>
                        <h3>${employee.name}</h3>
                        <p>Status: <span id="status-${employee.id}">${employee.status}</span></p>
                        <button onclick="toggleStatus('${employee.id}', '${employee.status}')">
                            Toggle Status
                        </button>
                    </article>
                `;
            });
        }
    };
    xhr.send();
}

function toggleStatus(id, oldStatus) {
    let newStatus = oldStatus === "active" ? "inactive" : "active";
    const statusElement = document.getElementById("status-" + id);
    statusElement.innerText = newStatus;

    const xhr = new XMLHttpRequest();
    xhr.open("PATCH", "http://localhost:3002/employees/" + id);
    xhr.setRequestHeader("Content-Type", "application/json");

    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 300) {
            loadEmployees();
        } else {
            statusElement.innerText = oldStatus;
            error.innerText = "Status update failed";
        }
    };

    xhr.onerror = function () {
        statusElement.innerText = oldStatus;
        error.innerText = "Status update failed";
    };

    xhr.send(JSON.stringify({ status: newStatus }));
}

loadEmployees();