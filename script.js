let selectedAmount = 0;
let selectedPack = "";

function createCard(container, title, price){
    const card = document.createElement("div");
    card.className = "pack-card";

    card.innerHTML = `
      <img src="assets/diamond.png">
      <h3>${title}</h3>
      <div class="price">₹${price}</div>
    `;

    card.onclick = function(){
        selectedAmount = price;
        selectedPack = title;
        openPopup();
    }

    container.appendChild(card);
}

/* MINI */
function loadMini(){
    const data = [
        ["5💎",10],["11💎",20],["14💎",25],
        ["22💎",40],["28💎",50],
        ["42💎",70],["55💎",80]
    ];
    const container = document.getElementById("packContainer");
    data.forEach(item => createCard(container, item[0], item[1]));
}

/* MEDIUM */
function loadMedium(){
    const data = [
        ["86💎",115],["110💎",160],["165💎",215],
        ["172💎",230],["257💎",340],["275💎",365],
        ["343💎",460],["429💎",575],["514💎",680],
        ["565💎",740],["706💎",920],["963💎",1260]
    ];
    const container = document.getElementById("packContainer");
    data.forEach(item => createCard(container, item[0], item[1]));
}

/* LARGE */
function loadLarge(){
    const data = [
        ["1049💎",1370],["1136💎",1375],
        ["1220💎",1460],["1412💎",1705],
        ["2195💎",2470],["3688💎",4220],
        ["5532💎",6120],["9288💎",10220]
    ];
    const container = document.getElementById("packContainer");
    data.forEach(item => createCard(container, item[0], item[1]));
}

/* PASSES */
function loadPasses(){
    const data = [
        ["Twilight Pass",710],
        ["Weekly Pass",140]
    ];
    const container = document.getElementById("packContainer");
    data.forEach(item => createCard(container, item[0], item[1]));
}

function openPopup(){
    const upiID = "yourupi@upi";  // CHANGE
    const name = "MLBBStore";

    const upiLink = `upi://pay?pa=${upiID}&pn=${name}&am=${selectedAmount}`;
    const qrURL = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(upiLink)}`;

    document.getElementById("qrImage").src = qrURL;
    document.getElementById("payAmount").innerText = `Pay ₹${selectedAmount}`;
    document.getElementById("paymentPopup").style.display = "flex";
}

function closePopup(){
    document.getElementById("paymentPopup").style.display = "none";
}

function sendWhatsApp(){
    const playerID = document.getElementById("playerID").value;
    const serverID = document.getElementById("serverID").value;

    const message = `MLBB Order\nPack: ${selectedPack}\nAmount: ₹${selectedAmount}\nPlayer ID: ${playerID}\nServer ID: ${serverID}`;

    const phone = "91XXXXXXXXXX"; // CHANGE

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`);
}
