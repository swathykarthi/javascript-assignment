
function display() {
    let name = document.querySelector("#inp1").value;
    let city = document.querySelector("#inp2").value;
    if (name !== "" && city !== "") { document.querySelector(".box").innerHTML = `<h2>Name:${name}</h2> <h2>City:${city}</h2>`; }
    else {
        { document.querySelector(".box").innerHTML = `<p>please enter the value</p>`; }
    }

}