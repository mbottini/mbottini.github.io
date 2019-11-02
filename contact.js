const elems = ["name-input", "email-input", "longform-input"].map(
    id => document.getElementById(id)
)

function submitButtonClick() {
    let [name, email, comments] = elems.map(elem => elem.value);
    console.log(
        {
            "name" : name,
            "email" : email,
            "comments" : comments
        }
    );
    resetButtonClick();
}

function resetButtonClick() {
    elems.forEach(elem => elem.value = "");
}
