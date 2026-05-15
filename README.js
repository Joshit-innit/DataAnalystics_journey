export default function DataAnalyticsShowcase() {
  const skills = [
    "Python",
    "Machine Learning",
    "Data Analytics",
    "Pandas",
    "NumPy",
    "Matplotlib",
    "SQL",
    "Data Visualization",
    "EDA",
    "Predictive Modeling"
  ];

  const projects = [
    {
      title: "IPL 2024 Data Analysis",
      description:
        "Performed exploratory data analysis to uncover team performance, toss impact, player dominance, and match-winning patterns.",
      tech: "Python • Pandas • Matplotlib • Seaborn",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "Car Price Prediction",
      description:
        "Built a machine learning model to predict car prices using regression techniques and feature engineering.",
      tech: "Regression • Feature Engineering • ML",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey/",
    },
    {
      title: "Medical Insurance Cost Prediction",
      description:
        "Developed a predictive healthcare analytics system using multiple machine learning algorithms.",
      tech: "Healthcare Analytics • ML • Prediction",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "Credit Card Fraud Detection",
      description:
        "Built fraud detection models with classification techniques and handled imbalanced datasets.",
      tech: "Classification • Logistic Regression • EDA",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "BigMart Sales Prediction",
      description:
        "Analyzed retail data and predicted product outlet sales using machine learning models.",
      tech: "XGBoost • Analytics • Data Cleaning",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "BMI Prediction System",
      description:
        "Created a BMI analytics and prediction model using health-related user attributes.",
      tech: "Python • ML • Health Data",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "Customer Segmentation Analysis",
      description:
        "Performed customer segmentation using clustering algorithms to identify behavioral groups.",
      tech: "K-Means • Data Visualization • Clustering",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "Loan Status Prediction",
      description:
        "Predicted loan approvals using supervised machine learning and preprocessing techniques.",
      tech: "Classification • Pandas • Scikit-Learn",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "Diabetes Prediction System",
      description:
        "Built a predictive healthcare model for identifying diabetes risk from patient records.",
      tech: "Prediction • Healthcare • ML",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "House Price Prediction",
      description:
        "Implemented regression models to estimate housing prices based on real estate features.",
      tech: "Regression • Feature Engineering • Python",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
    {
      title: "Data Cleaning & EDA Projects",
      description:
        "Worked on multiple exploratory data analysis and preprocessing tasks to extract meaningful insights.",
      tech: "EDA • Pandas • Visualization",
      github: "https://github.com/Joshit-innit/DataAnalystics_journey",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 shadow-2xl border border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Data Analytics Journey
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Passionate about transforming raw data into meaningful insights using
                Python, Machine Learning, and Data Visualization techniques.
              </p>

              <div className="flex flex-wrap gap-3 mt-6">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Logos */}
            <div className="flex gap-6 items-center">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
                alt="Python Logo"
                className="w-28 h-28 drop-shadow-2xl hover:scale-110 transition-transform duration-300"
              />

              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                alt="Machine Learning Logo"
                className="w-28 h-28 drop-shadow-2xl hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/10 hover:scale-105 transition-transform duration-300 shadow-xl"
            >
              <h2 className="text-2xl font-bold text-cyan-400 mb-3">
                {project.title}
              </h2>

              <p className="text-slate-300 leading-relaxed mb-4">
                {project.description}
              </p>

              <div className="mb-4">
                <span className="text-cyan-300 text-sm font-semibold">
                  {project.tech}
                </span>
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/20 border border-cyan-400/30 hover:bg-cyan-500/30 transition-all duration-300 text-cyan-300 font-medium"
              >
                View Project ↗
              </a>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-14 text-center">
          <p className="text-slate-400 text-lg">
            Building the future with Data, Analytics, and Machine Learning 🚀
          </p>
        </div>
      </div>
    </div>
  );
}
