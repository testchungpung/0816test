document.getElementById("mbti-form").addEventListener("submit", function(event) {
    event.preventDefault(); // 폼 제출 방지

    const score = { "E": 0, "I": 0, "S": 0, "N": 0, "T": 0, "F": 0, "J": 0, "P": 0 };
    const answers = new FormData(event.target);

    for (let [key, value] of answers.entries()) {
        const questionIndex = parseInt(key.split('_')[1]);
        if (value === 'A') {
            if (questionIndex === 0) score["E"]++;
            else if (questionIndex === 1) score["S"]++;
            else if (questionIndex === 2) score["T"]++;
            else if (questionIndex === 3) score["J"]++;
        } else if (value === 'B') {
            if (questionIndex === 0) score["I"]++;
            else if (questionIndex === 1) score["N"]++;
            else if (questionIndex === 2) score["F"]++;
            else if (questionIndex === 3) score["P"]++;
        }
    }

    let personality = "";
    personality += score["E"] > score["I"] ? "E" : "I";
    personality += score["S"] > score["N"] ? "S" : "N";
    personality += score["T"] > score["F"] ? "T" : "F";
    personality += score["J"] > score["P"] ? "J" : "P";

    document.getElementById("result").innerText = `당신의 MBTI 유형은: ${personality}`;
});
