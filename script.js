function createCard(container, diamonds, price){
    const card = document.createElement("div");
    card.className = "pack-card";

    card.innerHTML = `
      <img src="assets/diamond.png">
      <h3>${diamonds} 💎</h3>
      <div class="price">₹${price}</div>
    `;

    container.appendChild(card);
}

/* MINI PACKS */
function loadMini(){
    const data = [
        [5,10],[11,20],[14,25],[22,40],
        [28,50],[42,70],[55,80]
    ];
    const container = document.getElementById("miniContainer");
    data.forEach(item => createCard(container, item[0], item[1]));
}
