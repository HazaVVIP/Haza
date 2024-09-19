const roles = [
    { name: "Warrior", image: "img/warrior.png" },
    { name: "Mage", image: "img/mage.png" },
    { name: "Rogue", image: "img/rogue.png" },
    { name: "Healer", image: "img/healer.png" },
    { name: "Archer", image: "img/archer.png" }
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
