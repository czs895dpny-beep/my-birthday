// التحقق من تاريخ الميلاد في صفحة البداية
function checkLogin() {
    const day = document.getElementById("day").value;
    const month = document.getElementById("month").value;
    const year = document.getElementById("year").value;
    const errorMsg = document.getElementById("login-error");

    if (day === "13" && month === "3" && year === "2010") {
        document.getElementById("page1").classList.remove("active");
        document.getElementById("page2").classList.add("active");
        loadQuizQuestion();
    } else {
        errorMsg.textContent = "تاريخ غير صحيح! حاولي تاني يا فندم 😂 متأكدة إنك ناسيه تاريخك؟";
    }
}

// الصفحة الثانية: الأسئلة الخفيفة
const quizData = [
    {
        q: "إيه أكتر لقب ميدو بيندهلك بيه؟",
        options: ["الجوهرة", "القمر", "الأميرة", "الملكة"],
        correct: 1
    },
    {
        q: "لو شفتي ميدو دلوقتي هتعملي إيه؟",
        options: ["هحضنه", "هفتح دماغه", "هطنشه", "هجري وراه"],
        correct: 1
    },
    {
        q: "إيه أكتر كلمة ميدو بيقولهالك؟",
        options: ["حبوبتي", "خلي بالك من نفسك", "كانزايتي", "يا ست روحي"],
        correct: 1
    },
    {
        q: "لو إنتِ دخلتِ مسابقة تتوقعي هتبقى مسابقة إيه؟",
        options: ["أكتر واحدة بتنام", "أكتر واحدة بتبلع براشيم", "أكتر واحدة بتشتكي", "جميع ما سبق"],
        correct: 3
    },
    {
        q: "لو رجع بيكي الزمن هتبقي عايزه ميدو يدخل حياتك؟",
        options: ["خليه يتنيل", "لا أكيد", "مش عارفه", "طز"],
        correct: 0
    }
];

let currentQuizIndex = 0;

function loadQuizQuestion() {
    const qObj = quizData[currentQuizIndex];
    document.getElementById("q-title").textContent = `السؤال ${currentQuizIndex + 1} من 5`;
    document.getElementById("q-text").textContent = qObj.q;
    document.getElementById("q-feedback").textContent = "";
    document.getElementById("next-q-btn").style.display = "none";

    const optionsContainer = document.getElementById("q-options");
    optionsContainer.innerHTML = "";

    qObj.options.forEach((opt, index) => {
        const btn = document.createElement("button");
        btn.className = "answer-btn";
        btn.textContent = opt;
        btn.onclick = () => checkQuizAnswer(index, btn);
        optionsContainer.appendChild(btn);
    });
}

function checkQuizAnswer(selectedIndex, btn) {
    const qObj = quizData[currentQuizIndex];
    const allBtns = document.querySelectorAll("#q-options .answer-btn");
    
    allBtns.forEach(b => b.disabled = true);

    if (selectedIndex === qObj.correct) {
        btn.style.background = "#08785e";
        document.getElementById("q-feedback").textContent = "إجابة صحيحة ومظبوطة 100/100 👏❤️";
    } else {
        btn.style.background = "#8b2635";
        allBtns[qObj.correct].style.background = "#08785e";
        document.getElementById("q-feedback").textContent = "ههههه غلط بس تمشي معاكي برضه 😄";
    }

    document.getElementById("next-q-btn").style.display = "inline-block";
}

function nextQuizQuestion() {
    currentQuizIndex++;
    if (currentQuizIndex < quizData.length) {
        loadQuizQuestion();
    } else {
        document.getElementById("page2").classList.remove("active");
        document.getElementById("page3").classList.add("active");
        loadWhoQuestion();
    }
}

// الصفحة الثالثة: لعبة مين أكتر؟
const whoData = [
    { q: "مين أكتر شخص شكاء؟", answerIsMido: false },
    { q: "مين أكتر شخص ممكن يتعصب من نفسه؟", answerIsMido: true },
    { q: "مين أكتر واحد ممكن ينسى هو كل إيه النهارده؟", answerIsMido: true },
    { q: "مين أكتر حد بيحب التاني؟", answerIsMido: true },
    { q: "مين أكتر شخص ممكن يزعل من أي حاجة؟", answerIsMido: true }
];

let currentWhoIndex = 0;

function loadWhoQuestion() {
    const wObj = whoData[currentWhoIndex];
    document.getElementById("who-question").textContent = `${currentWhoIndex + 1}. ${wObj.q}`;
    document.getElementById("who-feedback").textContent = "";
    document.getElementById("next-who-btn").style.display = "none";
}

function answerWho(isMidoSelected) {
    const wObj = whoData[currentWhoIndex];
    const feedback = document.getElementById("who-feedback");

    if (isMidoSelected === wObj.answerIsMido) {
        feedback.textContent = "إجابة دقيقة وصحيحة جداً يا فنانة ✨";
    } else {
        feedback.textContent = "امممم مش متأكد بس اشمعنا؟ 😂";
    }

    document.getElementById("next-who-btn").style.display = "inline-block";
}

function nextWhoQuestion() {
    currentWhoIndex++;
    if (currentWhoIndex < whoData.length) {
        loadWhoQuestion();
    } else {
        document.getElementById("page3").classList.remove("active");
        document.getElementById("page4").classList.add("active");
    }
}

// الصفحة الرابعة: مقارنة الصور
function selectInspiration(isHaboba) {
    const feedback = document.getElementById("inspiration-feedback");
    if (isHaboba) {
        feedback.textContent = "برافو عليكِ! أكيد إنتِ الإلهام الحقيقي والوحيد لميدو ❤️";
        document.getElementById("to-letter-btn").style.display = "inline-block";
    } else {
        feedback.textContent = "لا خالص! هما أصلاً ييجوا حاجة جنبك؟ اختاري حبيبة أكيد! 😄";
    }
}

function goToLetter() {
    document.getElementById("page4").classList.remove("active");
    document.getElementById("page5").classList.add("active");
}

// الصفحة الخامسة إلى السادسة: الاحتفال
function goToCelebration() {
    document.getElementById("page5").classList.remove("active");
    document.getElementById("page6").classList.add("active");
    launchFireworks();
}

// تأثير الألعاب النارية
function launchFireworks() {
    const canvas = document.getElementById("fireworksCanvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let particles = [];
    const colors = ["#db2777", "#f472b6", "#fbbf24", "#38bdf8", "#ffffff", "#ec4899"];

    function createFirework() {
        const x = Math.random() * canvas.width;
        const y = Math.random() * (canvas.height * 0.6);
        const color = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < 50; i++) {
            const angle = (Math.PI * 2 * i) / 50;
            const speed = Math.random() * 6 + 2;
            particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                alpha: 1,
                color: color
            });
        }
    }

    setInterval(createFirework, 650);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach((p, index) => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.04;
            p.alpha -= 0.012;

            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();

            if (p.alpha <= 0) particles.splice(index, 1);
        });
        requestAnimationFrame(animate);
    }
    animate();
}