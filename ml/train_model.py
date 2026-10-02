"""
=========================================================
MedScopeAI - Machine Learning Model Trainer
=========================================================

This script:

1. Creates a synthetic educational dataset.
2. Uses 15 binary symptoms.
3. Creates 10 disease classes.
4. Assigns one primary symptom to every disease.
5. Trains a Decision Tree classifier.
6. Evaluates the model.
7. Exports the decision tree into model.json.

IMPORTANT:
This is an educational project.

The generated accuracy is NOT clinical accuracy.
The dataset is synthetic and is not a substitute for
validated medical data or professional diagnosis.
"""

import json
import os
import random

from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score


# =====================================================
# CONFIGURATION
# =====================================================

SEED = 42

random.seed(SEED)


BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.abspath(__file__)
    )
)


MODEL_DIR = os.path.join(
    BASE_DIR,
    "ml"
)


MODEL_PATH = os.path.join(
    MODEL_DIR,
    "model.json"
)


METRICS_PATH = os.path.join(
    MODEL_DIR,
    "metrics.json"
)


# =====================================================
# SYMPTOMS
# =====================================================

SYMPTOMS = [

    {
        "key": "fever",
        "name": "Fever"
    },

    {
        "key": "cough",
        "name": "Cough"
    },

    {
        "key": "fatigue",
        "name": "Fatigue"
    },

    {
        "key": "headache",
        "name": "Headache"
    },

    {
        "key": "sore_throat",
        "name": "Sore throat"
    },

    {
        "key": "shortness_of_breath",
        "name": "Shortness of breath"
    },

    {
        "key": "chest_pain",
        "name": "Chest pain"
    },

    {
        "key": "nausea",
        "name": "Nausea"
    },

    {
        "key": "vomiting",
        "name": "Vomiting"
    },

    {
        "key": "diarrhea",
        "name": "Diarrhea"
    },

    {
        "key": "abdominal_pain",
        "name": "Abdominal pain"
    },

    {
        "key": "joint_pain",
        "name": "Joint pain"
    },

    {
        "key": "skin_rash",
        "name": "Skin rash"
    },

    {
        "key": "frequent_urination",
        "name": "Frequent urination"
    },

    {
        "key": "excessive_thirst",
        "name": "Excessive thirst"
    }

]


SYMPTOM_KEYS = [
    symptom["key"]
    for symptom in SYMPTOMS
]


# =====================================================
# DISEASE DEFINITIONS
# =====================================================

DISEASES = {

    "Common Cold": {

        "primary_symptom":
            "sore_throat",

        "symptoms": [
            "sore_throat",
            "cough",
            "fatigue",
            "headache"
        ],

        "explanation":
            "The selected symptom pattern contains "
            "features commonly associated with a common "
            "cold in this educational model.",

        "guidance":
            "General supportive care may include rest, "
            "adequate fluids and monitoring symptoms. "
            "Consider professional medical advice if "
            "symptoms become severe or persistent.",

        "warning":
            "Seek medical attention for severe breathing "
            "difficulty, chest pain, confusion, dehydration "
            "or rapidly worsening symptoms."

    },


    "Influenza": {

        "primary_symptom":
            "fever",

        "symptoms": [
            "fever",
            "cough",
            "fatigue",
            "headache",
            "sore_throat"
        ],

        "explanation":
            "The model identified a pattern containing "
            "fever together with respiratory and systemic "
            "symptoms.",

        "guidance":
            "Rest, fluids and symptom monitoring are "
            "general supportive measures. A healthcare "
            "professional can determine whether testing "
            "or treatment is appropriate.",

        "warning":
            "Seek urgent medical attention for severe "
            "breathing problems, chest pain, confusion, "
            "severe dehydration or significant deterioration."

    },


    "Pneumonia": {

        "primary_symptom":
            "shortness_of_breath",

        "symptoms": [
            "shortness_of_breath",
            "cough",
            "fever",
            "chest_pain",
            "fatigue"
        ],

        "explanation":
            "The selected pattern contains respiratory "
            "features that the educational model associates "
            "with pneumonia.",

        "guidance":
            "Respiratory symptoms should be evaluated by "
            "a healthcare professional when pneumonia is "
            "suspected.",

        "warning":
            "Shortness of breath, chest pain, blue or grey "
            "lips, confusion or rapidly worsening symptoms "
            "require urgent medical attention."

    },


    "Migraine": {

        "primary_symptom":
            "headache",

        "symptoms": [
            "headache",
            "nausea",
            "fatigue"
        ],

        "explanation":
            "The model detected a headache-centred symptom "
            "pattern with associated nausea or fatigue.",

        "guidance":
            "Resting in a quiet environment, staying hydrated "
            "and tracking recurring headache patterns can be "
            "useful. Consult a healthcare professional for "
            "recurrent or severe headaches.",

        "warning":
            "Seek urgent medical attention for a sudden "
            "extremely severe headache, neurological changes, "
            "fainting or severe vomiting."

    },


    "Gastroenteritis": {

        "primary_symptom":
            "diarrhea",

        "symptoms": [
            "diarrhea",
            "nausea",
            "vomiting",
            "abdominal_pain",
            "fatigue"
        ],

        "explanation":
            "The selected symptoms form a digestive pattern "
            "that the educational model associates with "
            "gastroenteritis.",

        "guidance":
            "Maintaining hydration is important when vomiting "
            "or diarrhea occurs. Medical advice may be needed "
            "if symptoms are persistent or severe.",

        "warning":
            "Seek care for severe dehydration, blood in stool "
            "or vomit, persistent vomiting, severe abdominal "
            "pain or worsening symptoms."

    },


    "Food Poisoning": {

        "primary_symptom":
            "vomiting",

        "symptoms": [
            "vomiting",
            "nausea",
            "diarrhea",
            "abdominal_pain"
        ],

        "explanation":
            "The model identified a gastrointestinal symptom "
            "pattern containing vomiting and digestive symptoms.",

        "guidance":
            "Hydration and monitoring are important. "
            "A healthcare professional can assess persistent "
            "or severe gastrointestinal symptoms.",

        "warning":
            "Seek medical attention for severe dehydration, "
            "blood in vomit or stool, severe abdominal pain, "
            "confusion or persistent vomiting."

    },


    "Type 2 Diabetes": {

        "primary_symptom":
            "excessive_thirst",

        "symptoms": [
            "excessive_thirst",
            "frequent_urination",
            "fatigue"
        ],

        "explanation":
            "The model detected metabolic-related symptom "
            "signals including increased thirst and urination.",

        "guidance":
            "These symptoms can have multiple causes. "
            "A healthcare professional can perform appropriate "
            "testing such as blood glucose assessment.",

        "warning":
            "Seek prompt medical care for severe weakness, "
            "confusion, vomiting, difficulty breathing or "
            "significant deterioration."

    },


    "Urinary Tract Infection": {

        "primary_symptom":
            "frequent_urination",

        "symptoms": [
            "frequent_urination",
            "abdominal_pain",
            "fatigue"
        ],

        "explanation":
            "The model detected urinary and lower abdominal "
            "symptom signals associated with the educational "
            "UTI pattern.",

        "guidance":
            "A suspected urinary infection should be evaluated "
            "by a healthcare professional, particularly if "
            "symptoms persist or worsen.",

        "warning":
            "Seek medical attention for fever with urinary "
            "symptoms, back or side pain, vomiting or worsening "
            "condition."

    },


    "Chickenpox": {

        "primary_symptom":
            "skin_rash",

        "symptoms": [
            "skin_rash",
            "fever",
            "fatigue",
            "headache"
        ],

        "explanation":
            "The model identified a skin-rash pattern with "
            "associated systemic symptoms.",

        "guidance":
            "Skin rashes should be evaluated in context, "
            "especially when accompanied by fever or other "
            "systemic symptoms.",

        "warning":
            "Seek medical attention if the rash is rapidly "
            "worsening, associated with breathing problems, "
            "severe illness or neurological symptoms."

    },


    "Arthritis": {

        "primary_symptom":
            "joint_pain",

        "symptoms": [
            "joint_pain",
            "fatigue"
        ],

        "explanation":
            "The model identified a joint-pain centred pattern "
            "with possible associated fatigue.",

        "guidance":
            "Persistent or recurring joint pain should be "
            "evaluated by a healthcare professional to "
            "determine its underlying cause.",

        "warning":
            "Seek medical attention for severe swelling, "
            "sudden inability to use a joint, high fever or "
            "rapidly worsening symptoms."

    }

}


# =====================================================
# BASE SYMPTOM PROFILES
# =====================================================

PROFILE = {

    "Common Cold": [
        "sore_throat",
        "cough",
        "fatigue",
        "headache"
    ],

    "Influenza": [
        "fever",
        "cough",
        "fatigue",
        "headache",
        "sore_throat"
    ],

    "Pneumonia": [
        "shortness_of_breath",
        "cough",
        "fever",
        "chest_pain",
        "fatigue"
    ],

    "Migraine": [
        "headache",
        "nausea",
        "fatigue"
    ],

    "Gastroenteritis": [
        "diarrhea",
        "nausea",
        "vomiting",
        "abdominal_pain",
        "fatigue"
    ],

    "Food Poisoning": [
        "vomiting",
        "nausea",
        "diarrhea",
        "abdominal_pain"
    ],

    "Type 2 Diabetes": [
        "excessive_thirst",
        "frequent_urination",
        "fatigue"
    ],

    "Urinary Tract Infection": [
        "frequent_urination",
        "abdominal_pain",
        "fatigue"
    ],

    "Chickenpox": [
        "skin_rash",
        "fever",
        "fatigue",
        "headache"
    ],

    "Arthritis": [
        "joint_pain",
        "fatigue"
    ]

}


# =====================================================
# DATA GENERATION
# =====================================================

def create_dataset(
    samples_per_disease=500
):

    X = []

    y = []


    diseases = list(
        PROFILE.keys()
    )


    for disease in diseases:

        main_symptoms = set(
            PROFILE[disease]
        )


        for _ in range(
            samples_per_disease
        ):

            row = []


            for symptom in SYMPTOM_KEYS:

                if symptom in main_symptoms:

                    probability = 0.85

                else:

                    probability = 0.08


                value = (
                    1
                    if random.random()
                    < probability
                    else 0
                )


                row.append(value)


            X.append(row)

            y.append(disease)


    return X, y


# =====================================================
# TREE EXPORT
# =====================================================

def export_tree(
    classifier
):

    tree = classifier.tree_


    def build_node(node_id):

        left_child = tree.children_left[
            node_id
        ]

        right_child = tree.children_right[
            node_id
        ]


        # Leaf node
        if left_child == right_child:

            values = tree.value[
                node_id
            ][0]

            class_index = int(
                values.argmax()
            )

            return {
                "leaf_class":
                    class_index
            }


        return {

            "feature_index":
                int(
                    tree.feature[
                        node_id
                    ]
                ),

            "threshold":
                float(
                    tree.threshold[
                        node_id
                    ]
                ),

            "left":
                build_node(
                    left_child
                ),

            "right":
                build_node(
                    right_child
                )

        }


    return build_node(0)


# =====================================================
# TRAIN MODEL
# =====================================================

def train():

    print(
        "\n=========================================="
    )

    print(
        "MedScopeAI Machine Learning Training"
    )

    print(
        "==========================================\n"
    )


    X, y = create_dataset()


    X_train, X_test, y_train, y_test = (
        train_test_split(
            X,
            y,
            test_size=0.20,
            random_state=SEED,
            stratify=y
        )
    )


    classifier = DecisionTreeClassifier(

        max_depth=10,

        min_samples_leaf=8,

        random_state=SEED

    )


    classifier.fit(
        X_train,
        y_train
    )


    train_predictions = classifier.predict(X_train)


    test_predictions = classifier.predict(X_test)


    train_accuracy = accuracy_score(
        y_train,
        train_predictions
    )


    test_accuracy = accuracy_score(
        y_test,
        test_predictions
    )


    print(
        f"Training accuracy: "
        f"{train_accuracy * 100:.2f}%"
    )


    print(
        f"Testing accuracy: "
        f"{test_accuracy * 100:.2f}%"
    )


    classes = [
        str(value)
        for value in classifier.classes_
    ]


    disease_export = {}


    for disease_name, info in DISEASES.items():

        disease_export[
            str(
                classes.index(
                    disease_name
                )
            )
        ] = {

            "name":
                disease_name,

            "primary_symptom":
                info["primary_symptom"],

            "symptoms":
                info["symptoms"],

            "explanation":
                info["explanation"],

            "guidance":
                info["guidance"],

            "warning":
                info["warning"]

        }


    model_export = {

        "project":
            "MedScopeAI",

        "model":
            "DecisionTreeClassifier",

        "version":
            "1.0",

        "educational_only":
            True,

        "clinical_accuracy":
            False,

        "symptoms":
            SYMPTOMS,

        "classes":
            classes,

        "diseases":
            disease_export,

        "tree":
            export_tree(
                classifier
            )

    }


    metrics = {

        "model":
            "DecisionTreeClassifier",

        "training_samples":
            len(X_train),

        "testing_samples":
            len(X_test),

        "classes":
            len(classes),

        "symptoms":
            len(SYMPTOMS),

        "train_accuracy":
            round(
                train_accuracy,
                4
            ),

        "test_accuracy":
            round(
                test_accuracy,
                4
            ),

        "test_accuracy_percent":
            round(
                test_accuracy * 100,
                2
            ),

        "dataset":
            "Synthetic educational dataset",

        "clinical_validation":
            False

    }


    os.makedirs(
        MODEL_DIR,
        exist_ok=True
    )


    with open(
        MODEL_PATH,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            model_export,
            file,
            indent=2
        )


    with open(
        METRICS_PATH,
        "w",
        encoding="utf-8"
    ) as file:

        json.dump(
            metrics,
            file,
            indent=2
        )


    print(
        "\nModel saved to:"
    )

    print(
        MODEL_PATH
    )


    print(
        "\nMetrics saved to:"
    )

    print(
        METRICS_PATH
    )


    print(
        "\nTraining complete."
    )


# =====================================================
# MAIN
# =====================================================

if __name__ == "__main__":

    train()