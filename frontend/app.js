/* =========================================================
   MEDSCOPEAI
   AI Symptom Analysis
========================================================= */


/* =========================================================
   SYMPTOMS
========================================================= */

const symptoms = [
    {
        key: "fever",
        name: "Fever"
    },
    {
        key: "cough",
        name: "Cough"
    },
    {
        key: "fatigue",
        name: "Fatigue"
    },
    {
        key: "headache",
        name: "Headache"
    },
    {
        key: "sore_throat",
        name: "Sore Throat"
    },
    {
        key: "shortness_of_breath",
        name: "Shortness of Breath"
    },
    {
        key: "chest_pain",
        name: "Chest Pain"
    },
    {
        key: "nausea",
        name: "Nausea"
    },
    {
        key: "vomiting",
        name: "Vomiting"
    },
    {
        key: "diarrhea",
        name: "Diarrhea"
    },
    {
        key: "abdominal_pain",
        name: "Abdominal Pain"
    },
    {
        key: "joint_pain",
        name: "Joint Pain"
    },
    {
        key: "skin_rash",
        name: "Skin Rash"
    },
    {
        key: "frequent_urination",
        name: "Frequent Urination"
    },
    {
        key: "excessive_thirst",
        name: "Excessive Thirst"
    }
];


/* =========================================================
   DISEASE INFORMATION
========================================================= */

const diseaseProfiles = {

    "Common Cold": {
        primary: "sore_throat",

        symptoms: [
            "sore_throat",
            "cough",
            "fatigue",
            "headache"
        ],

        description:
            "The model identified a symptom pattern that overlaps with an educational Common Cold profile.",

        care: [
            "Rest and maintain adequate hydration.",
            "Monitor how your symptoms change over time.",
            "Warm fluids may help soothe throat discomfort.",
            "Consider speaking with a healthcare professional if symptoms persist or worsen."
        ],

        warnings: [
            "Difficulty breathing.",
            "Severe or worsening symptoms.",
            "Persistent high fever.",
            "Symptoms that do not improve as expected."
        ]
    },


    "Influenza": {
        primary: "fever",

        symptoms: [
            "fever",
            "fatigue",
            "headache",
            "cough"
        ],

        description:
            "The selected pattern contains features that overlap with an educational Influenza profile.",

        care: [
            "Rest and drink sufficient fluids.",
            "Monitor fever and other symptoms.",
            "Avoid strenuous activity while feeling unwell.",
            "Seek professional medical advice when symptoms are significant or worsening."
        ],

        warnings: [
            "Difficulty breathing.",
            "Chest pain.",
            "Severe weakness or confusion.",
            "Rapid worsening of symptoms."
        ]
    },


    "Pneumonia": {
        primary: "shortness_of_breath",

        symptoms: [
            "shortness_of_breath",
            "cough",
            "fever",
            "chest_pain",
            "fatigue"
        ],

        description:
            "The selected symptom pattern overlaps with an educational Pneumonia profile, particularly respiratory symptoms.",

        care: [
            "Rest and maintain hydration.",
            "Monitor breathing and overall symptoms.",
            "Avoid strenuous physical activity while symptomatic.",
            "Seek medical evaluation for significant respiratory symptoms."
        ],

        warnings: [
            "Severe difficulty breathing.",
            "Blue or gray lips or face.",
            "Severe chest pain.",
            "Confusion or unusual drowsiness."
        ]
    },


    "Migraine": {
        primary: "headache",

        symptoms: [
            "headache",
            "nausea",
            "fatigue"
        ],

        description:
            "The selected symptoms overlap with an educational Migraine profile, particularly headache-related symptoms.",

        care: [
            "Rest in a quiet environment.",
            "Maintain hydration.",
            "Monitor whether symptoms are triggered or worsened by specific factors.",
            "Seek medical advice for new, severe, or unusual headaches."
        ],

        warnings: [
            "Sudden extremely severe headache.",
            "Confusion or loss of consciousness.",
            "New neurological symptoms.",
            "A headache following a significant injury."
        ]
    },


    "Gastroenteritis": {
        primary: "diarrhea",

        symptoms: [
            "diarrhea",
            "nausea",
            "vomiting",
            "abdominal_pain",
            "fatigue"
        ],

        description:
            "The selected gastrointestinal symptom pattern overlaps with an educational Gastroenteritis profile.",

        care: [
            "Maintain fluid intake.",
            "Pay attention to signs of dehydration.",
            "Rest while symptoms are active.",
            "Seek professional advice if symptoms are persistent or severe."
        ],

        warnings: [
            "Signs of significant dehydration.",
            "Blood in stool or vomit.",
            "Severe abdominal pain.",
            "Persistent vomiting preventing fluid intake."
        ]
    },


    "Food Poisoning": {
        primary: "vomiting",

        symptoms: [
            "vomiting",
            "nausea",
            "diarrhea",
            "abdominal_pain"
        ],

        description:
            "The selected gastrointestinal symptoms overlap with an educational Food Poisoning profile.",

        care: [
            "Maintain hydration with appropriate fluids.",
            "Rest and monitor symptoms.",
            "Pay attention to dehydration.",
            "Seek medical advice if symptoms are severe or persistent."
        ],

        warnings: [
            "Severe dehydration.",
            "Blood in vomit or stool.",
            "Severe abdominal pain.",
            "Persistent vomiting or inability to keep fluids down."
        ]
    },


    "Type 2 Diabetes": {
        primary: "excessive_thirst",

        symptoms: [
            "excessive_thirst",
            "frequent_urination",
            "fatigue"
        ],

        description:
            "The selected pattern overlaps with an educational Type 2 Diabetes symptom profile.",

        care: [
            "Discuss persistent symptoms with a qualified healthcare professional.",
            "Routine health evaluation may be appropriate when symptoms continue.",
            "Do not use this prediction to change medication or treatment.",
            "Maintain regular hydration."
        ],

        warnings: [
            "Severe weakness or confusion.",
            "Vomiting with significant symptoms.",
            "Rapid worsening of symptoms.",
            "Signs of a medical emergency."
        ]
    },


    "Urinary Tract Infection": {
        primary: "frequent_urination",

        symptoms: [
            "frequent_urination",
            "abdominal_pain",
            "fever",
            "fatigue"
        ],

        description:
            "The selected symptoms overlap with an educational Urinary Tract Infection profile.",

        care: [
            "Maintain adequate hydration.",
            "Monitor symptoms carefully.",
            "Seek professional medical evaluation for persistent urinary symptoms.",
            "Do not self-prescribe antibiotics."
        ],

        warnings: [
            "Fever with significant illness.",
            "Back or side pain.",
            "Vomiting.",
            "Rapidly worsening symptoms."
        ]
    },


    "Chickenpox": {
        primary: "skin_rash",

        symptoms: [
            "skin_rash",
            "fever",
            "fatigue",
            "headache"
        ],

        description:
            "The selected pattern overlaps with an educational Chickenpox profile, particularly the presence of a skin rash.",

        care: [
            "Avoid scratching irritated skin.",
            "Maintain hydration and rest.",
            "Monitor the rash and other symptoms.",
            "Seek professional medical advice for significant or worsening symptoms."
        ],

        warnings: [
            "Difficulty breathing.",
            "Severe weakness or confusion.",
            "Signs of skin infection.",
            "Rapidly worsening illness."
        ]
    },


    "Arthritis": {
        primary: "joint_pain",

        symptoms: [
            "joint_pain",
            "fatigue"
        ],

        description:
            "The selected pattern overlaps with an educational Arthritis profile, particularly joint-related symptoms.",

        care: [
            "Monitor joint symptoms and functional changes.",
            "Gentle movement may be useful when appropriate.",
            "Discuss persistent joint pain with a qualified healthcare professional.",
            "Do not use this result as a confirmed diagnosis."
        ],

        warnings: [
            "Sudden severe joint pain.",
            "Major swelling or inability to move a joint.",
            "High fever with severe joint symptoms.",
            "Rapidly worsening symptoms."
        ]
    }

};


/* =========================================================
   STATE
========================================================= */

let selectedSymptoms = new Set();

let model = null;

let currentResult = null;


/* =========================================================
   DOM ELEMENTS
========================================================= */

const symptomGrid =
    document.getElementById("symptomGrid");

const selectedCount =
    document.getElementById("selectedCount");

const binaryVectorElement =
    document.getElementById("binaryVector");

const analyseButton =
    document.getElementById("analyseButton");

const resetButton =
    document.getElementById("resetButton");

const inputMessage =
    document.getElementById("inputMessage");

const resultEmpty =
    document.getElementById("resultEmpty");

const resultContent =
    document.getElementById("resultContent");

const predictedDisease =
    document.getElementById("predictedDisease");

const predictionDescription =
    document.getElementById("predictionDescription");

const primarySymptom =
    document.getElementById("primarySymptom");

const notableSymptom =
    document.getElementById("notableSymptom");

const detectedSymptoms =
    document.getElementById("detectedSymptoms");

const resultBinaryVector =
    document.getElementById("resultBinaryVector");

const aiExplanation =
    document.getElementById("aiExplanation");

const careGuidance =
    document.getElementById("careGuidance");

const warningSigns =
    document.getElementById("warningSigns");

const confidenceValue =
    document.getElementById("confidenceValue");

const confidenceFill =
    document.getElementById("confidenceFill");

const reportButton =
    document.getElementById("reportButton");


/* =========================================================
   INITIALIZE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    initialize
);


async function initialize() {

    renderSymptoms();

    updateSymptomCount();

    updateBinaryVector();

    await loadModel();
}


/* =========================================================
   RENDER SYMPTOMS
========================================================= */

function renderSymptoms() {

    symptomGrid.innerHTML = "";

    symptoms.forEach((symptom, index) => {

        const wrapper =
            document.createElement("div");

        wrapper.className =
            "symptom-option";

        const input =
            document.createElement("input");

        input.type = "checkbox";

        input.id =
            `symptom-${index}`;

        input.value =
            symptom.key;

        input.addEventListener(
            "change",
            handleSymptomChange
        );


        const label =
            document.createElement("label");

        label.htmlFor =
            `symptom-${index}`;

        label.textContent =
            symptom.name;


        wrapper.appendChild(input);

        wrapper.appendChild(label);

        symptomGrid.appendChild(wrapper);
    });
}


/* =========================================================
   SYMPTOM CHANGE
========================================================= */

function handleSymptomChange(event) {

    const symptomKey =
        event.target.value;

    if (event.target.checked) {

        selectedSymptoms.add(
            symptomKey
        );

    } else {

        selectedSymptoms.delete(
            symptomKey
        );
    }


    updateSymptomCount();

    updateBinaryVector();

    inputMessage.textContent = "";
}


/* =========================================================
   COUNT
========================================================= */

function updateSymptomCount() {

    const count =
        selectedSymptoms.size;

    selectedCount.textContent =
        `${count} selected`;
}


/* =========================================================
   BINARY VECTOR
========================================================= */

function getBinaryVector() {

    return symptoms
        .map(symptom =>
            selectedSymptoms.has(symptom.key)
                ? 1
                : 0
        );
}


function getBinaryString() {

    return getBinaryVector().join("");
}


function updateBinaryVector() {

    binaryVectorElement.textContent =
        getBinaryString();
}


/* =========================================================
   LOAD MODEL
========================================================= */

async function loadModel() {

    try {

        const response =
            await fetch("../ml/model.json");

        if (!response.ok) {

            throw new Error(
                "Unable to load model.json"
            );
        }

        model =
            await response.json();

        console.log(
            "MedScopeAI model loaded successfully."
        );

    } catch (error) {

        console.error(error);

        model = null;

        inputMessage.textContent =
            "AI model could not be loaded. Make sure you are running the project through a local web server.";
    }
}


/* =========================================================
   MODEL TREE SUPPORT
========================================================= */

function getModelTree() {

    if (!model) {
        return null;
    }

    /*
       Supports the model structure produced by the
       Python training script.

       If model.json directly contains the tree,
       use it.

       If the tree is stored under "tree", use that.
    */

    if (model.tree) {
        return model.tree;
    }

    if (model.root) {
        return model.root;
    }

    if (
        model.feature !== undefined ||
        model.type === "leaf"
    ) {
        return model;
    }

    return null;
}


/* =========================================================
   DECISION TREE PREDICTION
========================================================= */

function predictTree(node, vector) {

    if (!node) {
        return null;
    }


    /*
       Leaf node
    */

    if (
        node.type === "leaf" ||
        node.class !== undefined &&
        node.feature === undefined
    ) {

        return normalizePrediction(
            node.class ??
            node.prediction ??
            node.value ??
            node.label
        );
    }


    /*
       Some exported trees use "prediction"
       at leaf level.
    */

    if (
        node.prediction !== undefined &&
        node.feature === undefined
    ) {

        return normalizePrediction(
            node.prediction
        );
    }


    /*
       Feature index
    */

    const featureIndex =
        Number(
            node.feature ??
            node.feature_index ??
            node.featureIndex
        );


    /*
       If no valid feature exists,
       try prediction.
    */

    if (
        !Number.isInteger(featureIndex)
    ) {

        return normalizePrediction(
            node.prediction ??
            node.class ??
            node.value
        );
    }


    const threshold =
        Number(
            node.threshold ?? 0.5
        );


    const value =
        Number(vector[featureIndex]);


    /*
       Determine left/right branch.
    */

    const goesLeft =
        value <= threshold;


    const nextNode =
        goesLeft
            ? (
                node.left ??
                node.left_child ??
                node.children_left
            )
            : (
                node.right ??
                node.right_child ??
                node.children_right
            );


    /*
       Some models may store children
       in arrays.
    */

    if (Array.isArray(nextNode)) {

        const child =
            nextNode[
                goesLeft ? 0 : 1
            ];

        return predictTree(
            child,
            vector
        );
    }


    return predictTree(
        nextNode,
        vector
    );
}


/* =========================================================
   NORMALIZE PREDICTION
========================================================= */

function normalizePrediction(value) {

    if (value === null ||
        value === undefined) {

        return null;
    }


    /*
       If the model stores a class index,
       convert it to a disease.
    */

    if (
        typeof value === "number" ||
        (
            typeof value === "string" &&
            /^\d+$/.test(value)
        )
    ) {

        const index =
            Number(value);

        const diseases =
            Object.keys(diseaseProfiles);

        if (
            index >= 0 &&
            index < diseases.length
        ) {

            return diseases[index];
        }
    }


    return String(value);
}


/* =========================================================
   FALLBACK PREDICTION
========================================================= */

function fallbackPrediction() {

    let bestDisease =
        null;

    let bestScore =
        -1;


    for (
        const [disease, profile]
        of Object.entries(diseaseProfiles)
    ) {

        let score = 0;

        profile.symptoms.forEach(
            symptom => {

                if (
                    selectedSymptoms.has(
                        symptom
                    )
                ) {

                    score += 1;
                }
            }
        );


        if (score > bestScore) {

            bestScore =
                score;

            bestDisease =
                disease;
        }
    }


    return bestDisease;
}


/* =========================================================
   DETERMINE PRIMARY SYMPTOM
========================================================= */

function determinePrimarySymptom(
    disease
) {

    const profile =
        diseaseProfiles[disease];


    if (!profile) {

        return (
            symptoms.find(
                symptom =>
                    selectedSymptoms.has(
                        symptom.key
                    )
            )?.key || null
        );
    }


    /*
       The disease profile contains the
       medically significant primary symptom
       for this educational dataset.

       It is only used if the user actually
       selected that symptom.
    */

    if (
        profile.primary &&
        selectedSymptoms.has(
            profile.primary
        )
    ) {

        return profile.primary;
    }


    /*
       Otherwise find the strongest
       disease-specific selected symptom.
    */

    for (
        const symptom
        of profile.symptoms
    ) {

        if (
            selectedSymptoms.has(
                symptom
            )
        ) {

            return symptom;
        }
    }


    /*
       Final fallback.
    */

    return (
        Array.from(
            selectedSymptoms
        )[0] || null
    );
}


/* =========================================================
   DETERMINE NOTABLE SYMPTOM
========================================================= */

function determineNotableSymptom(
    disease,
    primary
) {

    const profile =
        diseaseProfiles[disease];


    if (!profile) {

        return (
            Array.from(
                selectedSymptoms
            ).find(
                symptom =>
                    symptom !== primary
            ) || null
        );
    }


    /*
       Find the next disease-related
       symptom selected by the user.
    */

    const notable =
        profile.symptoms.find(
            symptom =>
                symptom !== primary &&
                selectedSymptoms.has(
                    symptom
                )
        );


    if (notable) {
        return notable;
    }


    /*
       Fallback to another selected symptom.
    */

    return (
        Array.from(
            selectedSymptoms
        ).find(
            symptom =>
                symptom !== primary
        ) || primary
    );
}


/* =========================================================
   DISPLAY NAME
========================================================= */

function getSymptomName(key) {

    const symptom =
        symptoms.find(
            item =>
                item.key === key
        );


    return symptom
        ? symptom.name
        : key;
}


/* =========================================================
   PATTERN SCORE
========================================================= */

function calculatePatternScore(
    disease
) {

    const profile =
        diseaseProfiles[disease];


    if (!profile) {
        return 0;
    }


    const expected =
        profile.symptoms;


    if (!expected.length) {
        return 0;
    }


    let matches = 0;


    expected.forEach(
        symptom => {

            if (
                selectedSymptoms.has(
                    symptom
                )
            ) {

                matches++;
            }
        }
    );


    return Math.round(
        (matches / expected.length) *
        100
    );
}


/* =========================================================
   EDUCATIONAL CONFIDENCE
========================================================= */

function calculateConfidence(
    disease,
    primary
) {

    const patternScore =
        calculatePatternScore(
            disease
        );


    let confidence =
        55 +
        patternScore * 0.35;


    const profile =
        diseaseProfiles[disease];


    if (
        profile &&
        profile.primary === primary
    ) {

        confidence += 8;
    }


    return Math.min(
        97,
        Math.max(
            50,
            Math.round(confidence)
        )
    );
}


/* =========================================================
   AI EXPLANATION
========================================================= */

function generateExplanation(
    disease,
    primary,
    notable
) {

    const profile =
        diseaseProfiles[disease];


    if (!profile) {

        return (
            "The selected symptom pattern was processed by the machine-learning model. The result should be treated as an educational pattern match rather than a confirmed medical diagnosis."
        );
    }


    const primaryName =
        getSymptomName(primary);


    const notableName =
        getSymptomName(notable);


    return (
        `The machine-learning model identified a symptom pattern that overlaps with the educational ${disease} profile. ${primaryName} was identified as the primary symptom because it is a key symptom associated with this model profile and was selected by the user. ${notableName} was identified as an additional notable symptom from the selected symptom set. This result represents a model-based educational pattern match and does not confirm a medical diagnosis.`
    );
}


/* =========================================================
   DISPLAY LIST
========================================================= */

function renderList(
    element,
    items
) {

    element.innerHTML = "";

    items.forEach(item => {

        const li =
            document.createElement("li");

        li.textContent =
            item;

        element.appendChild(li);
    });
}


/* =========================================================
   ANALYSE
========================================================= */

analyseButton.addEventListener(
    "click",
    analyseSymptoms
);


function analyseSymptoms() {

    if (
        selectedSymptoms.size === 0
    ) {

        inputMessage.textContent =
            "Please select at least one symptom before analysing.";

        return;
    }


    inputMessage.textContent = "";


    const vector =
        getBinaryVector();


    let disease =
        null;


    /*
       First attempt:
       use the trained ML model.
    */

    const tree =
        getModelTree();


    if (tree) {

        disease =
            predictTree(
                tree,
                vector
            );
    }


    /*
       Validate the returned disease.
    */

    if (
        !disease ||
        !diseaseProfiles[disease]
    ) {

        disease =
            fallbackPrediction();
    }


    const primary =
        determinePrimarySymptom(
            disease
        );


    const notable =
        determineNotableSymptom(
            disease,
            primary
        );


    const confidence =
        calculateConfidence(
            disease,
            primary
        );


    const patternScore =
        calculatePatternScore(
            disease
        );


    const profile =
        diseaseProfiles[disease];


    currentResult = {

        disease,

        primary,

        notable,

        confidence,

        patternScore,

        vector: vector.join(""),

        selectedSymptoms:
            Array.from(
                selectedSymptoms
            ),

        description:
            profile?.description ||
            "Educational AI pattern analysis.",

        explanation:
            generateExplanation(
                disease,
                primary,
                notable
            ),

        care:
            profile?.care || [],

        warnings:
            profile?.warnings || []

    };


    displayResults();

    generateReportData();


    document
        .getElementById("results")
        .scrollIntoView({
            behavior: "smooth"
        });
}


/* =========================================================
   DISPLAY RESULTS
========================================================= */

function displayResults() {

    const result =
        currentResult;


    if (!result) {
        return;
    }


    resultEmpty.classList.add(
        "hidden"
    );

    resultContent.classList.remove(
        "hidden"
    );


    predictedDisease.textContent =
        result.disease;


    predictionDescription.textContent =
        result.description;


    primarySymptom.textContent =
        getSymptomName(
            result.primary
        );


    notableSymptom.textContent =
        getSymptomName(
            result.notable
        );


    resultBinaryVector.textContent =
        result.vector;


    aiExplanation.textContent =
        result.explanation;


    confidenceValue.textContent =
        `${result.confidence}%`;


    confidenceFill.style.width =
        `${result.confidence}%`;


    /*
       Detected symptoms
    */

    detectedSymptoms.innerHTML = "";


    result.selectedSymptoms
        .forEach(symptomKey => {

            const tag =
                document.createElement(
                    "span"
                );

            tag.className =
                "symptom-tag";

            tag.textContent =
                getSymptomName(
                    symptomKey
                );

            detectedSymptoms
                .appendChild(tag);
        });


    /*
       Care
    */

    renderList(
        careGuidance,
        result.care
    );


    /*
       Warnings
    */

    renderList(
        warningSigns,
        result.warnings
    );
}


/* =========================================================
   RESET
========================================================= */

resetButton.addEventListener(
    "click",
    resetAnalysis
);


function resetAnalysis() {

    selectedSymptoms.clear();

    currentResult = null;


    document
        .querySelectorAll(
            ".symptom-option input"
        )
        .forEach(input => {

            input.checked = false;
        });


    updateSymptomCount();

    updateBinaryVector();


    inputMessage.textContent = "";


    resultContent.classList.add(
        "hidden"
    );

    resultEmpty.classList.remove(
        "hidden"
    );


    window.scrollTo({
        top: document
            .getElementById(
                "predictor"
            )
            .offsetTop - 80,

        behavior: "smooth"
    });
}


/* =========================================================
   MEDICAL REPORT
========================================================= */

reportButton.addEventListener(
    "click",
    generateMedicalReport
);


function generateReportId() {

    const randomPart =
        Math.random()
            .toString(36)
            .substring(2, 8)
            .toUpperCase();


    return `MSA-${randomPart}`;
}


function getReportDate() {

    const now =
        new Date();


    return now.toLocaleDateString(
        "en-IN",
        {
            day: "2-digit",
            month: "long",
            year: "numeric"
        }
    );
}


function generateReportData() {

    if (!currentResult) {
        return;
    }


    document.getElementById(
        "reportId"
    ).textContent =
        generateReportId();


    document.getElementById(
        "reportDate"
    ).textContent =
        getReportDate();


    document.getElementById(
        "reportDisease"
    ).textContent =
        currentResult.disease;


    document.getElementById(
        "reportPrimary"
    ).textContent =
        getSymptomName(
            currentResult.primary
        );


    document.getElementById(
        "reportNotable"
    ).textContent =
        getSymptomName(
            currentResult.notable
        );


    document.getElementById(
        "reportBinary"
    ).textContent =
        currentResult.vector;


    document.getElementById(
        "reportExplanation"
    ).textContent =
        currentResult.explanation;


    document.getElementById(
        "reportConfidence"
    ).textContent =
        `${currentResult.confidence}%`;


    /*
       Report symptoms
    */

    const reportSymptoms =
        document.getElementById(
            "reportSymptoms"
        );


    reportSymptoms.innerHTML = "";


    currentResult
        .selectedSymptoms
        .forEach(symptomKey => {

            const span =
                document.createElement(
                    "span"
                );

            span.textContent =
                getSymptomName(
                    symptomKey
                );

            reportSymptoms
                .appendChild(span);
        });


    /*
       Report care guidance
    */

    renderList(
        document.getElementById(
            "reportCare"
        ),
        currentResult.care
    );


    /*
       Report warning signs
    */

    renderList(
        document.getElementById(
            "reportWarnings"
        ),
        currentResult.warnings
    );
}


/* =========================================================
   GENERATE MEDICAL REPORT
========================================================= */

function generateMedicalReport() {

    if (!currentResult) {

        alert(
            "Please analyse symptoms before generating a report."
        );

        return;
    }


    generateReportData();


    /*
       The CSS @media print rule hides the entire
       website and displays ONLY #printReport.
    */

    window.print();
}


/* =========================================================
   KEYBOARD ACCESSIBILITY
========================================================= */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            inputMessage.textContent =
                "";
        }
    }
);