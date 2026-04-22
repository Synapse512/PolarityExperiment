//4-22/26 this is gonna be a close one
const introScreen = document.getElementById("introScreen");
const testContainer = document.getElementById("testContainer");
const startButton = document.getElementById("beginTestButton");


let articles = [
    {
        id: 1,
        title: "Formulating Information Security Policies and Strategic Frameworks",
        text: "Well-developed and documented policies and strategies are the best practice form of controls in information security (IS) (Rhodes-Ousley, 2013, p. 58). Given the significance of IS for healthcare (Landi, 2015), the implementation of these practices appears to be a must for it.A strategy is a “complete plan for defense, detection, and deterrence” that includes all the relevant elements in it; policy is a description of “management intent for information protection” (Rhodes-Ousley, 2013, pp. 20, 58). There is no unified classification for the phenomena, but some general features allow researchers and practitioners to group IS policies and strategies into types. For instance, Ahmad, Maynard, and Park (2012) discuss the preventive strategy (PS) type that is primarily aimed at preventing any attack, disclosure, or breach. The authors point out that the use of PS is explained by the specifics of the organization: preventive measures are designed for particularly vulnerable industries.PS employs a variety of elements in its IS plan. For instance, the use of multiple technological safeguards, which are required by HIPAA (Murray, Calhoun, & Philipsen, 2011), is a form of technological PS measures. In particular, the employment of encryption is a viable strategy (Landi, 2015). Also, vulnerability checking, monitoring, and maintenance are important for PS (Ahmad et al., 2012). Finally, Ahmad et al. (2012) mention certain policies, especially the clean desk policy, that can promote PS. This policy implies that enforcement measures are also to be introduced into PS, including compliance-ensuring measures (both carrot and stick ones) and training (Chen, Ramamurthy, & Wen, 2012).Thus, PS can be aligned with current legislation as well as the company’s specifics and security-related objectives. Apart from that, PS does add value to stakeholders’ well-being. Here, the inclusion of extensive employee training in the strategy is illustrative because it is of benefit to employees as well as other stakeholders (Landi, 2015). Indeed, training makes sure that employees are capable of protecting the data, which improves security and also helps employees to avoid doing harm unintentionally.The key point of PS consists of directing multiple efforts at ensuring that security breaches do not occur, which applies to healthcare organizations due to their vulnerability and the simultaneous need for the protection of sensitive information. The mechanisms and elements of PS are multiple, but training, which is included in PS, is also a major vehicle which ensures that the policy and strategy are understood and assimilated.",
        testQuestions: [
        { 
            q: "What defines a Preventive Strategy?", 
            options: ["A focus on system recovery", "Ensuring security breaches do not occur", "A method for reducing operational costs"], 
            correct: 1 
        },
        { 
            q: "What is cited as a specific technological safeguard in healthcare IS?", 
            options: ["Data encryption", "Hardware firewalling", "Biometric access"], 
            correct: 0 
        },
        { 
            q: "What is the primary function of a 'Clean Desk Policy'?", 
            options: ["Improving office organization", "Promoting preventive strategy", "Maintaining physical device health"], 
            correct: 1 
        },
        { 
            q: "How does the article describe the benefit of employee training?", 
            options: ["It prevents unintentional data harm", "It increases daily productivity", "It simplifies complex software"], 
            correct: 0 
        },
        { 
            q: "Which specific standard or act requires these technological safeguards?", 
            options: ["ISO 27001", "HIPAA", "The Rhodes-Ousley Act"], 
            correct: 1 
        }
    ]

    },
    {
        id: 2,
        title: "Asthma: Causes and Treatment",
        text: "Asthma is a chronic disease that impacts more than 300 million people around the world. There is evident heterogeneity in the pathogenesis of asthma in the phenotypes of visible traits and endotypes of molecular mechanisms. Asthma is directly correlated with immune system activation as well as airway hyperresponsiveness (AHR), mucus overproduction, and epithelial cell activation. Innate and adaptive types of immunity are active in immunological responses to asthma. There are two major groups of asthma. Type 2 asthma is characterized by esosinophilia and compromises type 2 T helper cells, lymphoid cells, and IgE-secreting B cells. Meanwhile, non-type 2 asthma is characterized by heterogeneous endotypes and phenotypes such as exercise and obesity-induced asthma (Boonpiyathad et al., 2019).Asthma is seeing an increased prevalence, incidence, and subsequently mortality worldwide. Asthma not only has a genetic origin but can be the effect of various environmental and lifestyle-associated risk factors. There are approximately 180,000 asthma-related deaths each year. Meanwhile asthma healthcare costs vary internationally, being $1,900 in Europe and $3,100 in the U.S. However, many countries are not seeing asthma as healthcare priority due to its non-communicable nature, and its having a tremendous social and economic burden (Nunes et al., 2017).Interleukin‐5 (IL‐5) is the primary cytokine involved in activating the eosinophils, creating the inflammation which defines asthma. One of the primary developed treatments are monoclonal antibodies which target IL-5 and its receptor. The majority of studies of anti-IL5 treatments showed clinically significant reduced rates of asthma exacerbation in half of severe asthma patients. Even non-eosinophilic patients saw improvements and reduction in exacerbation rates when treated with benralizumab (Farne et al., 2017).Uncontrolled asthma is associated with aspects such as smoking, a lower educational level, use of reliever treatment, and acute healthcare visits. Poor adherence to asthma treatment is the primary reason to decrease asthma control and healthcare visits (Selberg et al., 2019). One nursing intervention that has shown to be moderately effective is the use of patient education to teach inhaler techniques. The majority of interventions of this type in a meta-analysis demonstrated a 95% improvement in inhaler technique use, which is likely to prevent exacerbations of asthma. However, notably this intervention may require follow ups, and is more effective in adults while in children, the knowledge of the technique may wane over time. However, on the short-term educational interventions are highly effective and clinically relevant while being cost-effective (Klijn et al., 2017).",
        testQuestions: [
        { 
            q: "Roughly how many individuals worldwide are affected by asthma?", 
            options: ["Approximately 180,000", "Over 300 million", "561 million"], 
            correct: 1 
        },
        { 
            q: "What is the leading cause of decreased asthma control?", 
            options: ["Poor adherence to treatment", "Epithelial cell activation", "Genetic and environmental risk factors"], 
            correct: 0 
        },
        { 
            q: "How do international healthcare costs for asthma in the U.S. compare to those in Europe?", 
            options: ["Costs in Europe are significantly higher", "U.S. costs are approximately $3,100", "Costs are around $1,900 for both the U.S. and Europe"], 
            correct: 1 
        },
        { 
            q: "Which intervention demonstrated a 95% improvement in correct inhaler technique?", 
            options: ["Monoclonal antibody therapy", "Patient education programs", "Reliever treatment adherence"], 
            correct: 1 
        },
        { 
            q: "In which demographic is the intervention most effective at improving inhaler technique?", 
            options: ["Adults", "Children", "Non-eosinophilic patients"], 
            correct: 0 
        }
    ]
    }
];

let currentArticleIndex = 0;
let startTestTime;
let readingTime;
let testScore = 0;
let testData = [];
let polarity = [];

// init program to go from home page to test
startButton.addEventListener("click", function() {
    introScreen.classList.add("hiddenScreen");
    testContainer.classList.remove("hiddenScreen");
    const randomPolarity = Math.random() < 0.5;
    polarity = randomPolarity ? ["lightMode", "darkMode"] : ["darkMode", "lightMode"];
    loadArticle();
})

// start article init based on index
function loadArticle() {
    const article = articles[currentArticleIndex];
    const mode = polarity[currentArticleIndex];
    // add light mode as class to body 
    document.body.className = "mainBody " + mode;

    testContainer.innerHTML = `
        <div class="experimentScreen">
            <div class="article">
                <h2>${article.title}</h2>
                <p>${article.text}</p>
            </div>
            <button class="finishButton" onclick="loadQuestionSidebar()">Finish Reading</button>
        </div>
    `;
    startTestTime = Date.now();
}

function loadQuestionSidebar() {
    readingTime = (Date.now() - startTestTime) / 1000; 
    const article = articles[currentArticleIndex];

    testContainer.innerHTML = `
        <div class="testContainer">
            <div class="articleSection">
                <h2>${article.title}</h2>
                <p>${article.text}</p>
            </div>
            <div class="questionSidebar">
                <h3>Article Test: </h3>
                ${article.testQuestions.map((q, i) => `
                    <div style="margin-bottom: 20px;">
                        <p><strong>${i+1}. ${q.q}</strong></p>
                        ${q.options.map((opt, optIdx) => `
                            <label class="questionChoice">
                                <input type="radio" name="q${i}" value="${optIdx}"> ${opt}
                            </label>
                        `).join('')}
                    </div>
                `).join('')}
                <button class="submitButton" onclick="finishTest()">Submit Test</button>
            </div>
        </div>
    `;
}

function finishTest() {
    const article = articles[currentArticleIndex];
    let correctAnswerCount = 0;

    article.testQuestions.forEach(function (q, i) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected && parseInt(selected.value) === q.correct) {
            correctAnswerCount++;
        }
    });
    
    testScore = correctAnswerCount;
    loadSurvey();
}

function loadSurvey() {
    document.body.className = "mainBody";
    startTestTime = Date.now();

    testContainer.innerHTML = `
        <div class="testScreen">
            <h1>Post-Task Evaluation</h1>
            <p>Please rate your experience during the previous section:</p>
            
            <div class="question">
                <p>1. How much <strong>mental effort</strong> was required to maintain focus? (1 = Low Effort, 5 = High Effort)</p>
                <input type="range" min="1" max="5" id="q1" value="3">
            </div>

            <div class="question">
                <p>2. How <strong>alert or awake</strong> did you feel while reading? (1 = Drowsy, 5 = Fully Alert)</p>
                <input type="range" min="1" max="5" id="q2" value="3">
            </div>

            <div class="question">
                <p>3. To what extent did you experience <strong>eye strain or discomfort</strong>? (1 = None, 5 = Severe)</p>
                <input type="range" min="1" max="5" id="q3" value="3">
            </div>

            <div class="question">
                <p>4. How <strong>confident</strong> are you in your testQuestions answers? (1 = Not Confident, 5 = Very Confident)</p>
                <input type="range" min="1" max="5" id="q4" value="3">
            </div>

            <button class="submitButton" onclick="saveData()">Submit Feedback</button>
        </div>
    `;
}

function saveData() {
    const surveyTime = (Date.now() - startTestTime) / 1000;

    testData.push({
        mode: polarity[currentArticleIndex],
        readingTime: readingTime.toFixed(2),
        score: testScore,
        survey: {
            focus: document.getElementById("q1").value,
            alertness: document.getElementById("q2").value,
            fatigue: document.getElementById("q3").value
        }
    });

    currentArticleIndex++;
    if (currentArticleIndex < articles.length) {
        loadArticle();
    } else {
        printResults();
    }
}

function printResults() {
    let resultString = "";
    testData.forEach((data, index) => {
        resultString += `\nArticle ${index + 1} (${data.mode}):\n`;
        resultString += `- Reading Time: ${data.readingTime}s\n`;
        resultString += `- Quiz Score: ${data.score}/5\n`;
        resultString += `- Focus: ${data.survey.focus}/5\n`;
        resultString += `- Alert: ${data.survey.alertness}/5\n`;
        resultString += `- Fatigue: ${data.survey.fatigue}/5\n`;
    });

    testContainer.innerHTML = `
        <div class="testScreen">
            <h2>Test Complete</h2>
            <p>Copy the data below, and paste into the Google Form:</p>
            <textarea id="resultsText" readonly style="width:100%; height:200px;">${resultString}</textarea>
            <button class="copyButton" id="copyButton" onclick="copyResults()">Copy Data</button>
        </div>
    `;
}

function copyResults() {
    const copyText = document.getElementById("resultsText");
    const copyBtn = document.getElementById("copyButton");
    copyText.select();
    document.execCommand("copy");
    copyBtn.innerText = "Copied!";
}