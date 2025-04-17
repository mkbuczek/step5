const btns = document.querySelectorAll(".btn");
const item = document.getElementById("item");
const itemContainer = document.getElementById("itemContainer");
const colors =
    ["#ffffff","#ff0000","#ffa500","#ffff00","#a2fa00","#008800","#1cd1e9",
    "#0063d4","#181692","#3b006b","#a70167","#5e3c0a","#464646"];

const salvation =
    ["#5e3c0a","#ffa500","#a2fa00","#3b006b","#181692",
    "#ffff00","#1cd1e9","#0063d4","#a70167","#008800"];

var united = [];

const colorIndex = Array(btns.length).fill(0);

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {

        colorIndex[i] = (colorIndex[i] + 1) % colors.length;
        const currentColor = colors[colorIndex[i]];
        btn.style.backgroundColor = currentColor;

        const currentCombo = colorIndex.map(index => colors[index])
        
        let isCorrect = true;
        for (let j = 0; j < salvation.length; j++){
            if (currentCombo[j] !== salvation[j]) {
                isCorrect = false;
                break;
            }
        }

        if (isCorrect) {
            console.log("/solution.html");
            item.style.display = "flex";
            itemContainer.style.display = "flex";
            item.textContent = "comfort (someone) at a time of grief or disappointment";
            btns.forEach((btn, i) => {
                btn.style.display = "none";
            });
        }
    });
});

