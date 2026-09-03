export const dashboardStats = [
    {
        title: "Candidates Trained",
        value: "12,450",
        change: "+8.4%",
        description: "vs. previous period",
        icon: "👥",
        positive: true,
    },
    {
        title: "Employment Rate",
        value: "68.4%",
        change: "+5.2%",
        description: "vs. previous period",
        icon: "💼",
        positive: true,
    },
    {
        title: "Job Relevance",
        value: "74.2%",
        change: "+3.8%",
        description: "vs. previous period",
        icon: "🎯",
        positive: true,
    },
    {
        title: "6M Retention",
        value: "61.7%",
        change: "-2.1%",
        description: "vs. previous period",
        icon: "📈",
        positive: false,
    },
];

export const impactScore = {
    score: 78,
    label: "Good",
    description:
        "Overall skilling programs are producing positive employment outcomes.",
};

export const outcomeTrend = [
    {
        month: "Jan",
        employment: 58,
        retention: 52,
    },
    {
        month: "Feb",
        employment: 61,
        retention: 55,
    },
    {
        month: "Mar",
        employment: 63,
        retention: 57,
    },
    {
        month: "Apr",
        employment: 65,
        retention: 59,
    },
    {
        month: "May",
        employment: 67,
        retention: 60,
    },
    {
        month: "Jun",
        employment: 68,
        retention: 62,
    },
];

export const aiInsights = [
    {
        type: "warning",
        title: "Retention needs attention",
        description:
            "6-month retention has dropped by 2.1% across the last reporting period.",
        action: "View affected programs",
    },
    {
        type: "success",
        title: "Data Analytics is performing well",
        description:
            "Data Analytics candidates show 86% job relevance and 79% retention.",
        action: "View course performance",
    },
];

export const topCourses = [
    {
        name: "Data Analytics",
        score: 87,
        employment: "82%",
    },
    {
        name: "Web Development",
        score: 83,
        employment: "76%",
    },
    {
        name: "Cloud Computing",
        score: 81,
        employment: "74%",
    },
    {
        name: "Digital Marketing",
        score: 69,
        employment: "63%",
    },
];

export const candidates = [
    {
        id: "CND-1001",
        name: "Rahul Sharma",
        initials: "RS",
        course: "Web Development",
        centre: "ABC Skill Centre",
        trainingDate: "Jan 2026",
        status: "Employed",
        employmentDate: "Feb 2026",
        jobRole: "Junior Web Developer",
        salary: "₹18,000",
        jobRelevance: 82,
        retention: 74,
        incomeGrowth: 8,
        impactScore: 69,
        risk: "Medium",

        aiReasons: [
            "Candidate secured employment shortly after completing training.",
            "Job relevance is strong, indicating good alignment between training and current role.",
            "Moderate retention and income growth suggest opportunities for further career development.",
        ],

        aiRecommendation:
            "Support the candidate with advanced technical training and career progression opportunities to improve long-term retention and income growth.",
    },

    {
        id: "CND-1002",
        name: "Priya Singh",
        initials: "PS",
        course: "Data Analytics",
        centre: "XYZ Training Institute",
        trainingDate: "Dec 2025",
        status: "Employed",
        employmentDate: "Jan 2026",
        jobRole: "Data Analyst",
        salary: "₹26,000",
        jobRelevance: 91,
        retention: 88,
        incomeGrowth: 24,
        impactScore: 89,
        risk: "Low",

        aiReasons: [
            "Candidate transitioned into employment shortly after completing training.",
            "High job relevance indicates strong alignment between the training and current role.",
            "Strong retention and income growth indicate a positive employment outcome.",
        ],

        aiRecommendation:
            "Continue monitoring the candidate's career progression and consider advanced upskilling to support further salary growth.",
    },

    {
        id: "CND-1003",
        name: "Aman Kumar",
        initials: "AK",
        course: "Digital Marketing",
        centre: "SkillPro Centre",
        trainingDate: "Nov 2025",
        status: "Seeking Job",
        employmentDate: null,
        jobRole: null,
        salary: null,
        jobRelevance: 0,
        retention: 0,
        incomeGrowth: 0,
        impactScore: 42,
        risk: "High",

        aiReasons: [
            "Candidate is still seeking employment after completing training.",
            "No employment outcome has been recorded since training completion.",
            "Low impact score indicates that the training has not yet translated into a positive career outcome.",
        ],

        aiRecommendation:
            "Provide targeted placement support, interview preparation, resume assistance and connect the candidate with relevant digital marketing opportunities.",
    },

    {
        id: "CND-1004",
        name: "Neha Verma",
        initials: "NV",
        course: "Cloud Computing",
        centre: "ABC Skill Centre",
        trainingDate: "Oct 2025",
        status: "Employed",
        employmentDate: "Dec 2025",
        jobRole: "Cloud Support Associate",
        salary: "₹24,000",
        jobRelevance: 86,
        retention: 81,
        incomeGrowth: 19,
        impactScore: 84,
        risk: "Low",

        aiReasons: [
            "Candidate secured employment within two months of completing training.",
            "High job relevance suggests that the candidate is working in a role aligned with cloud computing skills.",
            "Strong retention and income growth indicate a stable and positive training outcome.",
        ],

        aiRecommendation:
            "Encourage advanced cloud certifications and specialized training to help the candidate progress toward higher-level cloud engineering roles.",
    },

    {
        id: "CND-1005",
        name: "Arjun Mehta",
        initials: "AM",
        course: "Web Development",
        centre: "SkillPro Centre",
        trainingDate: "Sep 2025",
        status: "Job Mismatch",
        employmentDate: "Nov 2025",
        jobRole: "Technical Support",
        salary: "₹16,000",
        jobRelevance: 38,
        retention: 52,
        incomeGrowth: 4,
        impactScore: 51,
        risk: "High",

        aiReasons: [
            "Candidate is employed, but the current role has low alignment with the Web Development training.",
            "Low job relevance may limit the candidate's ability to apply acquired technical skills.",
            "Low retention and income growth indicate a risk of weak long-term employment outcomes.",
        ],

        aiRecommendation:
            "Improve job matching by connecting the candidate with entry-level web development roles and provide technical interview preparation to support a career transition.",
    },

    {
        id: "CND-1006",
        name: "Sneha Patel",
        initials: "SP",
        course: "Data Analytics",
        centre: "XYZ Training Institute",
        trainingDate: "Aug 2025",
        status: "Employed",
        employmentDate: "Sep 2025",
        jobRole: "Business Analyst",
        salary: "₹29,000",
        jobRelevance: 94,
        retention: 91,
        incomeGrowth: 31,
        impactScore: 93,
        risk: "Low",

        aiReasons: [
            "Candidate secured employment shortly after completing training.",
            "Very high job relevance indicates excellent alignment between acquired skills and the current role.",
            "Strong retention and significant income growth indicate a highly successful training outcome.",
        ],

        aiRecommendation:
            "Consider the candidate a strong training success case and support continued upskilling in advanced analytics and business intelligence.",
    },

    {
        id: "CND-1007",
        name: "Vikash Yadav",
        initials: "VY",
        course: "Digital Marketing",
        centre: "ABC Skill Centre",
        trainingDate: "Jul 2025",
        status: "Employed",
        employmentDate: "Aug 2025",
        jobRole: "Marketing Executive",
        salary: "₹20,000",
        jobRelevance: 72,
        retention: 67,
        incomeGrowth: 12,
        impactScore: 70,
        risk: "Medium",

        aiReasons: [
            "Candidate secured employment shortly after completing training.",
            "Current role has reasonable alignment with the Digital Marketing course.",
            "Moderate retention and income growth suggest the candidate may benefit from additional skill development.",
        ],

        aiRecommendation:
            "Provide advanced digital marketing training in areas such as performance marketing, SEO and analytics to improve career growth and income potential.",
    },
];

export const trainingCentres = [
    {
        id: "TC-001",
        name: "ABC Skill Centre",
        location: "Gurugram, Haryana",
        candidates: 4200,
        employment: 72,
        relevance: 78,
        retention: 68,
        impactScore: 82,
        status: "High Performing",
    },
    {
        id: "TC-002",
        name: "XYZ Training Institute",
        location: "Delhi, Delhi",
        candidates: 3650,
        employment: 76,
        relevance: 84,
        retention: 73,
        impactScore: 88,
        status: "High Performing",
    },
    {
        id: "TC-003",
        name: "SkillPro Centre",
        location: "Jaipur, Rajasthan",
        candidates: 2800,
        employment: 61,
        relevance: 66,
        retention: 54,
        impactScore: 64,
        status: "Needs Attention",
    },
    {
        id: "TC-004",
        name: "FutureSkills Academy",
        location: "Lucknow, Uttar Pradesh",
        candidates: 1800,
        employment: 58,
        relevance: 62,
        retention: 51,
        impactScore: 59,
        status: "Needs Attention",
    },
];

export const centreCourses = {
    "TC-001": [
        {
            name: "Web Development",
            trained: 1200,
            employment: 76,
            relevance: 82,
            retention: 71,
            impactScore: 84,
        },
        {
            name: "Cloud Computing",
            trained: 950,
            employment: 74,
            relevance: 86,
            retention: 78,
            impactScore: 87,
        },
        {
            name: "Digital Marketing",
            trained: 1100,
            employment: 64,
            relevance: 69,
            retention: 57,
            impactScore: 65,
        },
        {
            name: "Data Analytics",
            trained: 950,
            employment: 81,
            relevance: 88,
            retention: 79,
            impactScore: 89,
        },
    ],

    "TC-002": [
        {
            name: "Data Analytics",
            trained: 1100,
            employment: 84,
            relevance: 91,
            retention: 86,
            impactScore: 92,
        },
        {
            name: "Web Development",
            trained: 900,
            employment: 78,
            relevance: 84,
            retention: 76,
            impactScore: 86,
        },
        {
            name: "Cloud Computing",
            trained: 850,
            employment: 75,
            relevance: 81,
            retention: 72,
            impactScore: 82,
        },
        {
            name: "Digital Marketing",
            trained: 800,
            employment: 68,
            relevance: 72,
            retention: 61,
            impactScore: 69,
        },
    ],

    "TC-003": [
        {
            name: "Web Development",
            trained: 900,
            employment: 63,
            relevance: 67,
            retention: 55,
            impactScore: 65,
        },
        {
            name: "Digital Marketing",
            trained: 800,
            employment: 59,
            relevance: 64,
            retention: 52,
            impactScore: 61,
        },
        {
            name: "Data Analytics",
            trained: 600,
            employment: 68,
            relevance: 72,
            retention: 57,
            impactScore: 69,
        },
        {
            name: "Cloud Computing",
            trained: 500,
            employment: 56,
            relevance: 61,
            retention: 49,
            impactScore: 58,
        },
    ],

    "TC-004": [
        {
            name: "Web Development",
            trained: 600,
            employment: 61,
            relevance: 65,
            retention: 52,
            impactScore: 62,
        },
        {
            name: "Data Analytics",
            trained: 450,
            employment: 64,
            relevance: 69,
            retention: 55,
            impactScore: 66,
        },
        {
            name: "Digital Marketing",
            trained: 450,
            employment: 51,
            relevance: 57,
            retention: 46,
            impactScore: 53,
        },
        {
            name: "Cloud Computing",
            trained: 300,
            employment: 55,
            relevance: 60,
            retention: 48,
            impactScore: 57,
        },
    ],
};


export const analyticsTrend = [
    { month: "Jan", employment: 58, relevance: 64, retention: 52 },
    { month: "Feb", employment: 61, relevance: 66, retention: 55 },
    { month: "Mar", employment: 63, relevance: 68, retention: 57 },
    { month: "Apr", employment: 65, relevance: 71, retention: 59 },
    { month: "May", employment: 67, relevance: 72, retention: 60 },
    { month: "Jun", employment: 68, relevance: 74, retention: 62 },
];

export const analyticsCourses = [
    { name: "Data Analytics", employment: 82, relevance: 86, retention: 79 },
    { name: "Cloud Computing", employment: 74, relevance: 84, retention: 76 },
    { name: "Web Development", employment: 76, relevance: 82, retention: 71 },
    { name: "Digital Marketing", employment: 64, relevance: 69, retention: 57 },
];