class FormBuilder {
    constructor(fields) {
        this.fields = fields;
    }

    createForm() {
        let formHTML = '<form id="dynamicForm">';

        this.fields.forEach(field => {
            formHTML += `
                <label>${field.label}</label>
                <input type="${field.type}" name="${field.label}">
                <br><br>
            `;
        });

        formHTML += '<button type="submit">Submit</button></form>';

        document.getElementById("formContainer").innerHTML = formHTML;

        document.getElementById("dynamicForm")
            .addEventListener("submit", (event) => {
                event.preventDefault();
                console.log(this.getFormData());
            });
    }

    getFormData() {
        const data = {};
        const inputs = document.querySelectorAll("#dynamicForm input");

        inputs.forEach(input => {
            data[input.name] = input.value;
        });

        return data;
    }
}

const fields = [
    { type: "text", label: "Username" },
    { type: "email", label: "Email" },
    { type: "password", label: "Password" }
];

const formBuilder = new FormBuilder(fields);
formBuilder.createForm();