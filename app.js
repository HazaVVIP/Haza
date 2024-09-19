const roles = [
    { name: "cabul", image: "img/cabul.png" },
    { name: "kang kepo", image: "img/kepo.png" },
    { name: "ahli strategi", image: "img/strategi.png" },
    { name: "faker", image: "img/faker.png" },
    { name: "cengeng", image: "img/cengeng.png" }
];

function generateRole() {
    const name = document.getElementById("nameInput").value;
    if (!name) {
        alert("Please enter your name");
        return;
    }
    
    const randomIndex = Math.floor(Math.random() * roles.length);
    const selectedRole = roles[randomIndex];

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>${name}, you are a ${selectedRole.name}!</h2>
        <img src="${selectedRole.image}" alt="${selectedRole.name}">
    `;
}
