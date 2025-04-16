const btns = document.querySelectorAll(".btn");
const item = document.getElementById("item");
const salvation = [1,2,3,4];
var united = [];

btns.forEach((btn) => {
    btn.addEventListener("click", () => {
        const id = Number(btn.dataset.id);
        united.push(id);

        if(united.length === 1 && id !== salvation[0]){
            united = [];
            console.log("reset");
            return;
        }

        if (united.length === 4){
            if (salvation.join("") == united.join("")){
                console.log("/solution");
                item.style.display = "flex";
                item.textContent = "test";

                btns.forEach((btn) => {
                    btn.style.display = "none";
                });
            }
            else {
                united = [];
                console.log("reset");
            }
        }
    });
});

