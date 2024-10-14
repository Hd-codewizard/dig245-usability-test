/* javascript */
let form = document.querySelector("#susForm");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let a1 = this.q1.value;
    let a2 = this.q2.value;
    let a3 = this.q3.value;
    let a4 = this.q4.value;
    let a5 = this.q5.value;
    let a6 = this.q6.value;
    let a7 = this.q7.value;
    let a8 = this.q8.value;
    let a9 = this.q9.value;
    let a10 = this.q10.value;
    // For odd:
    a1 -= 1;
    a3 -= 1;
    a5 -= 1;
    a7 -= 1;
    a9 -= 1;
    // For Even
    a2 = 5 - a2;
    a4 = 5 - a4;
    a6 = 5 - a6;
    a8 = 5 - a8;
    a10 = 5 - a10;

    let susScore = (a1 + a2 + a3 + a4 + a5 + a6 + a7 + a8 + a9 + a10)*2.5;
    this.averageSus.value = susScore;
});