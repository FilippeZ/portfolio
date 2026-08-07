export const projects = [
    {
        id: "zenithdx",
        title: "ZenithDx: High-Performance Agentic Clinical Co-Pilot",
        category: "AI Architecture & HealthTech Systems",
        brief: "ZenithDx is a production-ready Multimodal Clinical Decision Support System (CDSS) prototype that bridges deep learning diagnostics with human clinical reasoning through a state-machine Autonomous Agent. Trained on NVIDIA DGX infrastructure and optimized for secure, resource-efficient edge inference, the platform processes heterogeneous data—including chest radiographs, unstructured text, and longitudinal EHRs—in strict alignment with EU AI Act and GDPR 'Compliance-by-Design' mandates. The system harmonizes a LangGraph-powered Llama 3.2 ReAct agent with a precise S²A-UNet + ResNet-50 computer vision pipeline, a Heterogeneous Graph Transformer (HGT) for longitudinal patient histories, and an advanced SciBERT + ColBERT hybrid RAG pipeline for real-time medical literature retrieval. Comprehensive XAI layers—PyTorch Captum for text feature ablation and Grad-CAM for pulmonary anomaly heatmaps—ensure deterministic clinical reasoning and absolute diagnostic trust.",
        date: "2024 – 2025",
        tools: ["LangGraph", "Llama 3.2 (LoRA)", "Hybrid RAG", "PyTorch", "Ollama", "SciBERT", "FAISS", "ColBERT", "ResNet-50", "S²A-UNet", "Grad-CAM", "Captum", "FastAPI", "PostgreSQL", "React 18", "Vite", "HL7/FHIR & DICOM", "EU AI Act & GDPR", "NVIDIA DGX", "Docker"],
        link: "https://github.com/FilippeZ/zenithdx-petient-centric-agentic-decision-support-platform",
        gallery: ["/resources/img/portfolios/zenith/z1.jpg", "/resources/img/portfolios/zenith/z2.jpg", "/resources/img/portfolios/zenith/z3.jpg", "/resources/img/portfolios/logo/1.jpg"],
        image: "/resources/img/portfolios/logo/1.jpg"
    },
{
        id: "deafnav",
        title: "DeafNav: EU Legislative Policy Integration & Accessible IoT",
        category: "AI Governance, Policy & Quality Engineering",
        brief: "Led product analysis and technical strategy for DeafNav, a state-of-the-art European public transit accessibility platform designed to empower Deaf, Hard-of-Hearing, and mobility-impaired passengers across EU transit networks. Operating at the intersection of public policy and engineering, I served as the bridge between complex IoT sensor networks and the 'Public Officer' persona. The project went beyond building technology; it required translating stringent European accessibility directives (EAA 2025) and EU AI Act (Article 50) transparency mandates into a concrete technical roadmap. By integrating real-time transit telematics, smart haptic wearables, and an autonomous Open-Source FAISS Vector RAG Chatbot backed by continuous Human-in-the-Loop oversight, I ensured the solution met cross-border technical standards to facilitate institutional adoption across five EU member states.",
        date: "2024",
        client: "EU Erasmus+",
        tools: ["EU AI Act (Art. 50)", "EAA 2025", "WCAG 2.1 AAA", "EN 301 549", "Smart Haptic Wearables", "MQTT", "FAISS Vector DB", "RAGAS", "Node.js", "Next.js", "Prisma SQLite", "Agile"],
        link: "https://github.com/FilippeZ/deafnav-europeancommision",
        gallery: ["/resources/img/portfolios/app/1.jpg", "/resources/img/portfolios/prod/pr1.jpg", "/resources/img/portfolios/prod/pr2.jpg"],
        image: "/resources/img/portfolios/app/1.jpg"
    },
    {
        id: "dermagnosis-fl",
        title: "DermaGnosis: Privacy-Preserving Multimodal AI & Federated MLOps Engine",
        category: "AI Architecture & HealthTech Systems",
        brief: "Architected a production-ready, privacy-preserving Federated Learning platform for early melanoma detection that operationalizes Compliance-by-Design to satisfy GDPR, HIPAA, EU MDR, and EU AI Act mandates. Using a multi-cloud edge architecture protected by ε-Laplace Differential Privacy, PHI remains localized on hospital servers while only securely masked model weights reach central aggregators. The multimodal diagnostic engine fuses unstructured EHR clinical notes (NLP) with deterministic Computer Vision radiomics (GLCM, LoG, DoG) for 360-degree patient assessments. Opaque deep networks are replaced with mathematically auditable Bayesian Networks and MAP evidence synthesis that compute exact confidence bounds and autonomously trigger HITL escalations. The MLOps pipeline follows CRISP-ML(Q) with FastAPI endpoints, thread-safe FIFO queue concurrency, and immutable MLflow lineage tracking—visualized through a React 18 command center featuring a live Three.js 3D WebGL globe for federated convergence and Intel SGX HSM key management.",
        date: "2025",
        client: "Cancer Research Consortium",
        tools: ["PyTorch Federated", "Bayesian Inference", "Differential Privacy (ε-Laplace)", "NLP", "Radiomics (GLCM/LoG)", "MLflow", "CRISP-ML(Q)", "Intel SGX", "FastAPI", "SQLite WAL", "Docker", "Nginx", "React 18", "Vite", "Three.js (WebGL)", "Recharts", "GDPR", "EU AI Act", "EU MDR SaMD", "HIPAA"],
        link: "https://github.com/FilippeZ/dermagnosis-federated-learning",
        gallery: ["/resources/img/portfolios/logo/2.jpg", "/resources/img/portfolios/fl/fl1.jpg", "/resources/img/portfolios/fl/fl2.jpg"],
        image: "/resources/img/portfolios/logo/2.jpg"
    },
    {
        id: "travel-db",
        title: "Relational Data Integrity Layer for High-Stakes Operations",
        category: "Data Engineering & Bioinformatics",
        brief: "I architected a robust relational database management system where the focus was 'Data Integrity as a Service'. Beyond modeling, I engineered a logic layer using MySQL Stored Procedures and Triggers to enforce rigid integrity constraints and business rules directly at the source. This architecture ensures that all operational data is verifiable and audit-ready, providing a foundational toolset for high-stakes reservation systems where data failure is not an option.",
        date: "2024",
        tools: ["MySQL", "Java Swing", "JDBC", "Stored Procedures", "Triggers", "ERD", "Normalization", "ETL", "Data Integrity", "Constraints"],
        link: "https://github.com/FilippeZ/digital-blueprint-travel-agency-rdbms",
        gallery: ["/resources/img/portfolios/web/5.jpg"],
        image: "/resources/img/portfolios/web/5.jpg"
    },
    {
        id: "etl-covid",
        title: "Trade Analytics: End-to-End ETL Pipeline for Macroeconomic Intelligence",
        category: "Data Engineering & Bioinformatics",
        brief: "Architected a high-integrity Data Engineering and ETL (Extract, Transform, Load) platform to validate commercial impacts on global transport strategies, specifically analyzing the unprecedented supply chain shocks of COVID-19 on New Zealand's international trade (2015–2021). Driven by the core philosophy that 'every AI project needs a robust ETL pipeline,' I engineered an automated solution that extracted over 111,000 raw customs records via HTTP endpoints, 'scrubbed' and transformed the data using Python (Pandas), and loaded it via parameterized batch insertions into a relational MySQL data warehouse. This clean data foundation fueled a comprehensive Exploratory Data Analysis (EDA) and a PySimpleGUI Business Intelligence application, providing policymakers and stakeholders with validated, empirical evidence of V-shaped recovery rhythms, modal logistics splits (Sea vs. Air freight), and sectorial commodity dependencies.",
        date: "2023",
        tools: ["Python 3.8+", "Pandas", "NumPy", "Automated HTTP Extraction", "MySQL", "Parameterized SQL (executemany)", "Matplotlib", "Jupyter Notebooks", "Statistical Aggregation", "PySimpleGUI", "Macroeconomics", "Supply Chain Logistics", "Trade Analytics"],
        link: "https://github.com/FilippeZ/trade-analytics",
        gallery: ["/resources/img/portfolios/web/3.jpeg"],
        image: "/resources/img/portfolios/web/3.jpeg"
    },
    {
        id: "genomic",
        title: "BioHelix: AI-Powered Computational Drug Discovery Pipeline",
        category: "Data Engineering & Bioinformatics",
        brief: "Engineered BioHelix, a fully interactive, browser-based computational drug discovery platform that replicates rigorous pharmaceutical research workflows—from raw DNA sequence analysis to final lead drug candidate ranking. Built with React 18 and a WebGL NGL viewer, this state-driven pipeline guides users through five locked stages of advanced bioinformatics: Suffix Tree motif matching and Needleman-Wunsch dynamic programming for genomic target validation, Meta AI's ESMFold v1 Transformer for ab initio 3D protein structure prediction, interactive Lipinski's Rule of 5 pharmacokinetic screens over 1,000+ compounds, and a Random Forest QSAR regression model with 2048-bit ECFP4 Morgan Fingerprints to rank top drug candidates by predicted binding affinity and free energy (pIC₅₀, Ki, ΔG).",
        date: "2024",
        tools: ["Random Forest (QSAR)", "Meta AI ESMFold v1", "Needleman-Wunsch (DP)", "Suffix Trees", "Lipinski Rule of 5", "ECFP4 Fingerprints", "React 18", "TypeScript", "Vite", "Tailwind CSS", "NGL Viewer (WebGL)", "React Context API", "Playwright", "Node.js"],
        link: "https://github.com/FilippeZ/bioinformatics",
        gallery: ["/resources/img/portfolios/web/2.jpg"],
        image: "/resources/img/portfolios/web/2.jpg"
    },
    {
        id: "indexing-poc",
        title: "Multidimensional Hybrid Search: Healthcare Analytics",
        category: "Data Engineering & Bioinformatics",
        brief: "Architected and deployed a high-performance hybrid search engine capable of sub-millisecond retrieval across massive, heterogeneous clinical datasets. Addressing the latency bottlenecks inherent in modern Healthcare AI and Retrieval-Augmented Generation (RAG) pipelines, I engineered a two-phase architecture to query 18,324 patient satisfaction records (CMS HCAHPS). By designing and benchmarking advanced multidimensional spatial indices (Octrees, Range Trees, K-D Trees, R-Trees) alongside Locality-Sensitive Hashing (LSH), the system efficiently prunes multi-axis spatial bounds (ZIP Code, Year, Score) before executing sub-linear textual similarity searches. The resulting pipeline achieves a 28% reduction in query latency (yielding a peak query time of just 1.496s for complex hybrid criteria) while guaranteeing a strict zero-loss retrieval accuracy (Recall@5 = 1.0) required for clinical decision support systems.",
        date: "2024",
        tools: ["Locality-Sensitive Hashing (LSH)", "MinHash", "Jaccard Similarity", "Octrees", "K-D Trees", "Range Trees", "R-Trees", "Python", "NumPy", "Pandas", "Jupyter Notebooks", "Time/Memory Profiling", "Matplotlib", "Seaborn", "CMS HCAHPS Data", "RAG Pipelines"],
        link: "https://github.com/FilippeZ/multidimensional-spatial-indexing-lsh",
        gallery: ["/resources/img/portfolios/web/6.jpg"],
        image: "/resources/img/portfolios/web/6.jpg"
    },
    {
        id: "wgan-telco",
        title: "Synthesis Hub: Dual-Domain WGAN-GP Synthetic Data Platform",
        category: "AI Architecture & HealthTech Systems",
        brief: "Architected a dual-domain Wasserstein GAN with Gradient Penalty (WGAN-GP) platform in TensorFlow 2.x for privacy-preserving synthetic data generation across 5G Healthcare IoT networks and medical imaging. On the telecom front, the system synthesizes high-fidelity tabular telemetry while repurposing the WGAN-GP Critic as a real-time anomaly detector—instantly isolating DDoS attacks by flagging Wasserstein score divergence. Simultaneously, the platform's vision engine generates photorealistic, 100% privacy-compliant Brain Tumor MRI scans (93.6% structural similarity) to augment class-imbalanced diagnostic datasets. The full dual-capability engine is deployed via a responsive Flask web application with live interactive inference, synthetic dataset exports, and multi-metric evaluation dashboards.",
        date: "2024",
        tools: ["TensorFlow 2.x", "Keras", "WGAN-GP", "Scikit-learn", "SciPy", "NumPy", "Pandas", "Flask", "REST API", "HTML5", "Tailwind CSS", "Chart.js", "Gradient Penalty", "Critic Anomaly Detection", "Synthetic Data", "Privacy", "5G"],
        link: "https://github.com/FilippeZ/synthetic-data-generation-with-gans",
        gallery: ["/resources/img/portfolios/logo/3.png"],
        image: "/resources/img/portfolios/logo/3.png"
    },

    {
        id: "azure-ai-studio",
        title: "OmniHealth AI: Multi-Agent Clinical Document Synthesis & Patient Literacy Engine",
        category: "AI Architecture & HealthTech Systems",
        brief: "OmniHealth AI is a multi-agent clinical platform built on the Microsoft Agent Framework and Azure AI Foundry. It automates the extraction and indexing of unstructured, handwritten, and scanned legacy hospital records using specialized agents: DeepSeek-V3.2 for orchestration and RAG queries, Mistral OCR 4.0 for multi-column PDF parsing, Clinical NLP for UMLS and ICD-10 entity mapping, and FLUX.2-pro for generating patient-friendly anatomical diagrams. The entire system operates under an Azure Safety Control Bridge enforcing EU AI Act Article 14 Human-in-the-Loop oversight and GDPR Article 9 compliance.",
        date: "2025",
        tools: ["Microsoft Agent Framework", "Azure AI Foundry", "DeepSeek-V3.2", "Mistral OCR 4.0", "FLUX.2-pro", "UMLS", "ICD-10", "FastAPI", "React", "EU AI Act"],
        link: "https://github.com/FilippeZ/OmniHealth-Azure-AI",
        gallery: ["/resources/img/portfolios/card/2.png"],
        image: "/resources/img/portfolios/card/2.png"
    },
    {
        id: "azure-security",
        title: "Architectural Risk Analysis & Zero-Trust Cloud Security Design",
        category: "HPC Systems & Scalable Infrastructure",
        brief: "Performed deep architectural reviews of security vulnerabilities for mission-critical healthcare systems. I aligned the platform with the Azure Well-Architected Framework's Security pillar, designing IAM, FIDO2, and Threat Modeling components to ensure that clinical data is protected by the highest institutional security standards.",
        date: "2024",
        tools: ["Entra ID", "Zero Trust", "Threat Modeling", "FIDO2", "Security Pillar"],
        link: "https://azure-sec.health",
        gallery: ["/resources/img/portfolios/card/3.png"],
        image: "/resources/img/portfolios/card/3.png"
    },
    {
        id: "xai-gov",
        title: "XAIGO: XAI Governance Framework for Auditable, High-Risk Systems",
        category: "AI Governance, Policy & Quality Engineering",
        brief: "Designed and operationalized XAIGO, an enterprise-grade AI Governance Middleware framework that mitigates 'black box' risks in high-stakes environments like clinical software and credit scoring. Grounded in academic thesis research on Explainable AI and human causability, the platform operates as a strict regulatory gatekeeper between complex machine learning models and human operators. By implementing a multi-layer pipeline featuring SHAP, LIME, Grad-CAM, and counterfactual recourse, XAIGO translates raw predictive outputs into human-understandable, legally compliant explanations. Crucially, the system introduces a 'Simulatability Engine' to actively prevent the cognitive \"Illusion of Understanding,\" ensuring that all AI-driven decisions are fully auditable, causally sound, and satisfy strict GDPR (Art. 22) and EU AI Act (Arts. 9, 13, 14, 17) mandates.",
        date: "2025",
        tools: ["SHAP (Shapley Values)", "LIME", "Grad-CAM", "Counterfactual Generation", "Scikit-Learn", "PyTorch (CNN)", "GDPR (Art. 22)", "EU AI Act", "FastAPI", "React", "Vite", "Plotly"],
        link: "https://github.com/FilippeZ/xai",
        gallery: ["/resources/img/portfolios/icon/11.jpg"],
        image: "/resources/img/portfolios/icon/11.jpg"
    },
    {
        id: "knn-parallel",
        title: "Hybrid Parallel k-NN: HPC Infrastructure for Machine Learning",
        category: "HPC Systems & Scalable Infrastructure",
        brief: "Architected a comprehensive HPC framework in C to solve the O(N×D) scalability bottlenecks of brute-force k-NN regression, scaling a sequential baseline across shared-memory processors via OpenMP explicit tasking and distributed-memory clusters via MPI scatter/gather. To bridge these low-level optimizations with modern ML workflows, the engine was integrated into a high-performance Python API using Cython and Numba LLVM—mapping contiguous 2D NumPy arrays to flat C-pointers, leveraging BLAS GEMM for distance calculations, and bypassing the GIL for true linear multi-core scaling. The zero-copy extension achieved a 6.48x speedup over Scikit-Learn in industrial-scale benchmarks, while rigorous algorithmic stress testing (MSE/APE) ensured that aggressive distributed parallelization never compromised the mathematical integrity of the final Inverse Distance Weighting (IDW) predictions.",
        date: "2024",
        tools: ["C", "OpenMP", "MPI (OpenMPI/MPICH)", "Cython", "Numba LLVM", "CPython C-API", "BLAS GEMM", "k-NN", "IDW", "NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Algorithmic Profiling"],
        link: "https://github.com/FilippeZ/paraknn-openmp-mpi",
        gallery: ["/resources/img/portfolios/logo/4.jpg"],
        image: "/resources/img/portfolios/logo/4.jpg"
    },
    {
        id: "mpi",
        title: "High-Performance MPI Parallel Matrix Multiplication: Accelerating Deep Learning Workloads",
        category: "HPC Systems & Scalable Infrastructure",
        brief: "Engineered a robust, distributed-memory parallel matrix multiplication framework in C using MPI to optimize foundational deep learning workloads (BLAS Level 3) and overcome single-node memory-bandwidth limitations. Implemented a 1D Periodic Ring topology—the foundation of modern Ring-AllReduce gradient synchronization—and a highly scalable 2D Cartesian Grid topology mirroring 2D Tensor Parallelism for optimal O(N²/P) memory scalability. Core MPI primitives (MPI_Scatter, MPI_Bcast, MPI_Gather) alongside dynamic load balancing orchestrate synchronized block exchanges, manage uneven data partitions, and eliminate race conditions. The project reframes parallel HPC optimization as a strict reliability challenge, establishing an auditable architecture that guarantees large-scale multi-node ML computations remain mathematically accurate and logically sound under high-concurrency stress.",
        date: "2024",
        tools: ["C", "MPI", "MPICH", "OpenMPI", "1D Periodic Ring Topology", "2D Cartesian Grid", "MPI_Cart", "MPI_Scatter/Gather", "BLAS Level 3", "OpenMP", "GCC / mpicc", "Linux", "Makefile"],
        link: "https://github.com/FilippeZ/mpi-based-parallel-matrix-multiplication",
        gallery: ["/resources/img/portfolios/logo/8.jpg"],
        image: "/resources/img/portfolios/logo/8.jpg"
    },
    {
        id: "hybrid-network",
        title: "IaaS/PaaS Core Infrastructure: Connectivity Validation",
        category: "HPC Systems & Scalable Infrastructure",
        brief: "Designed and simulated complex hybrid networking architectures to validate connectivity for enterprise-scale migrations. I leveraged OSPF, eBGP, and ExpressRoute to ensure that institutional data flows remain secure and persistent, providing a verified blueprint for sovereign cloud networking.",
        date: "2024",
        tools: ["GNS3", "OSPF", "eBGP", "ExpressRoute", "IaaS/PaaS", "Core Infrastructure"],
        link: "https://github.com/FilippeZ/sovereign-core-bridge",
        gallery: ["/resources/img/portfolios/card/4.jpg"],
        image: "/resources/img/portfolios/card/4.jpg"
    },
    {
        id: "4g-simulation",
        title: "Distributed Systems Modeling: Intelligent 4G Handover Simulation",
        category: "HPC Systems & Scalable Infrastructure",
        brief: "Modeled and optimized architectural trade-offs for distributed 4G LTE systems by replacing static, drop-reactive algorithms (e.g., RSSI thresholding) with a predictive, machine-learning-driven handover architecture. Focused specifically on high-stakes institutional operations—such as continuous patient telemetry monitoring (Healthcare IoT)—I analyzed User Equipment (UE) mobility and handover costs through a strict 'Reliability' lens. By deploying a Bidirectional LSTM time-series forecasting model, the system successfully anticipates signal drop trajectories to execute handovers proactively, reducing critical data loss (CDP) to just 2.45%. Furthermore, I integrated an Explainable AI (SHAP) transparency layer to ensure every automated handover decision provides auditable, human-readable performance metrics, validating network stability and zero packet loss during critical medical alerts.",
        date: "2024",
        tools: ["TensorFlow (BiLSTM)", "Scikit-Learn (Random Forest)", "DQN RL", "SHAP (XAI)", "Python 3.12", "Flask", "React 18", "Vite 5", "NumPy", "Pandas", "Jupyter Notebooks"],
        link: "https://github.com/FilippeZ/cellular-networks-architecture",
        gallery: ["/resources/img/portfolios/card/5.jpeg"],
        image: "/resources/img/portfolios/card/5.jpeg"
    },
    {
        id: "linux-devops",
        title: "Linux Compute & DevOps: POSIX Core Systems Architecture",
        category: "HPC Systems & Scalable Infrastructure",
        brief: "Developed a comprehensive POSIX-compliant systems engineering framework designed to operationalize fundamental Operating System primitives, laying the groundwork for high-availability DevOps environments. The project tackles three core systems challenges: high-throughput log data mining via low-overhead GNU stream processors, theoretical modeling of CPU scheduling algorithms (e.g., FCFS, SRTF, Round Robin), and the deployment of a highly resilient, parallel numerical integration pipeline. By leveraging low-level fork() process replication and System V Message Queues for strictly synchronized data transmission, I established a robust, mathematically auditable foundation for executing and aggregating mission-critical background tasks across isolated memory address spaces without risk of deadlocks or race conditions.",
        date: "2024",
        tools: ["C (C11)", "POSIX APIs", "fork() / wait()", "System V Message Queues", "GNU Bash", "awk", "sed", "GCC / Clang", "Linux (Ubuntu/WSL2)"],
        link: "https://github.com/FilippeZ/os-orchestrator-multitasking",
        gallery: ["/resources/img/portfolios/card/1.jpg"],
        image: "/resources/img/portfolios/card/1.jpg"
    },
    {
        id: "ux-klm",
        title: "Product Quality Validation: Quantitative Usability Auditing",
        category: "AI Governance, Policy & Quality Engineering",
        brief: "Applied KLM and Fitts' Law to quantitatively validate user interface efficiency for high-stakes workflows. I reframed UX as a 'Safety' metric, ensuring that clinical operators can execute critical tasks within defined completion-time baselines to minimize human error.",
        date: "2024",
        tools: ["KLM", "Fitts' Law", "Quantitative UX", "Product Validation"],
        link: "https://ux-klm.com",
        gallery: ["/resources/img/portfolios/app/4.jpg"],
        image: "/resources/img/portfolios/app/4.jpg"
    },
    {
        id: "whiteboxer",
        title: "Technical Test Strategy: Logic Auditing & Risk Management",
        category: "AI Governance, Policy & Quality Engineering",
        brief: "Managed white-box testing strategies for validating complex product logic. I applied cyclomatic complexity and basis path analysis to 'audit' software paths, ensuring that all logical branches are verified and development risks are mitigated through evidence-based QA.",
        date: "2024",
        tools: ["White-Box Testing", "Path Analysis", "Risk Management", "QA Strategy"],
        link: "https://whiteboxer.qa",
        gallery: ["/resources/img/portfolios/app/3.jpg"],
        image: "/resources/img/portfolios/app/3.jpg"
    },
    {
        id: "edge-ai",
        title: "Aria: Multimodal Edge AI & Sovereign Agentic Assistant",
        category: "AI Architecture & HealthTech Systems",
        brief: "Engineered an autonomous, real-time multimodal AI assistant natively deployed on an edge supercomputer (NVIDIA Jetson Orin Nano). The objective was to solve complex human-computer interaction challenges on Linux desktops through a privacy-first, dual-core execution environment. By optimizing Small Language Models (SLMs) for strict hardware boundaries, Aria ensures zero-egress processing for continuous perception and personal data, paired with on-demand cloud routing for complex reasoning. This architecture guarantees ultra-low latency, persistent offline reliability, and data sovereignty—foundational requirements for deploying AI in high-stakes or privacy-critical environments.",
        date: "2025 – Present",
        tools: ["NVIDIA Jetson Orin Nano", "Edge AI", "SLMs (Cosmos-Reason2)", "INT4/INT8 Quantization", "llama.cpp", "faster-whisper", "ChromaDB (Local RAG)", "OpenClaw Gateway", "PCIe Gen4 NVMe", "CUDA/Linux GenAIOps"],
        link: "https://github.com/FilippeZ/aria-ai-assistant",
        gallery: ["/resources/img/portfolios/logo/5.png"],
        image: "/resources/img/portfolios/logo/5.png"
    },
    {
        id: "ebusiness",
        title: "Algorithmic Foundations of AI: Data Structures & ML Time-Series Pipeline",
        category: "Data Engineering & Bioinformatics",
        brief: "Engineered a rigorous academic implementation of core data structures and search algorithms in C, subsequently expanding the architecture into a production-grade Python Machine Learning pipeline for oceanographic time-series forecasting. The project bridges the gap between low-level memory management and high-level AI architectures, demonstrating that classical structures—such as AVL Trees and Hash Tables—are not merely theoretical exercises, but the foundational mechanics driving modern Machine Learning splits (Random Forests) and Large Language Model (LLM) embedding lookups. By executing complex operations over a real-world dataset of 1,400+ ocean temperature records, the system achieved a peak R² score of 0.71 via Gradient Boosting, validating the architectural transition from C-based structural logic to predictive AI modeling.",
        date: "2024",
        tools: ["C99", "Memory Management", "Pointers & Structs", "AVL Trees", "Hash Tables", "Max-Heaps", "Quick Sort", "Heap Sort", "scikit-learn", "Random Forest", "Gradient Boosting (XGBoost)", "Python 3", "Pandas", "NumPy", "Time-Series Forecasting"],
        link: "https://github.com/FilippeZ/data-structures",
        gallery: ["/data_structures.png"],
        image: "/data_structures.png"
    },
    {
        id: "newgov",
        title: "AIDC Energy Simulator: Data Center Grid Flexibility Platform",
        category: "AI Governance, Policy & Quality Engineering",
        brief: "Architected and deployed an interactive, production-grade technical simulator to evaluate the transformation of Artificial Intelligence Data Centers (AIDC) into active power grid assets. Built to substantiate the quantitative models presented in ICSGSC 2026 Paper SC5111, the platform features a custom Python FastAPI linear programming optimization engine connected to a React/TypeScript frontend. It empowers data center operators to simulate 24-hour temporal load shifting (Automated Demand Response) directly against real-world EPEX SPOT Day-Ahead prices and ENTSO-E carbon intensity benchmarks. By integrating robust techno-economic Frequency Containment Reserve (FCR) valuation models with electro-chemical battery degradation mechanics, the system provides a validated, data-driven framework for decarbonizing high-density AI compute clusters in the German Electricity Market.",
        date: "2024",
        tools: ["Python", "FastAPI", "Linear Programming", "RESTful APIs", "TypeScript", "React", "Tailwind CSS", "Recharts", "3D GIS Mapping", "EPEX SPOT", "ENTSO-E SMARD", "AI Infrastructure", "Energy Informatics", "Grid Ancillary Markets (FCR)"],
        link: "https://github.com/FilippeZ/germany-data-center-energy-flexibility",
        gallery: ["/ai_datacenter.png"],
        image: "/ai_datacenter.png"
    }
];


export const testimonials = [
    {
        name: "Amit Kumar",
        role: "SDE Intern @ MoveInSync",
        content: "It was a pleasure working with you on the Hippocrates Health AI project. Your strategic leadership and clear direction kept the team focused and aligned, even under tight deadlines and complex technical challenges. I really appreciated how you balanced vision with execution.",
        image: "/testim/Amit Kumar.jpeg",
        rating: 5
    },
    {
        name: "Berat Cakir",
        role: "Microsoft AI Architect, NTT DATA",
        content: "Filippos has shown an exceptional level of strategic thinking for someone at the beginning of their AI career. His curiosity, especially around AI Architecture, Governance, and Compliance, demonstrates a maturity and focus that I rarely see even in experienced professionals. I am confident he will grow into a highly capable AI role.",
        image: "/testim/Berat Cakir.jpeg",
        rating: 5
    },
    {
        name: "Hugo Silva",
        role: "Aluno na ISEP - Instituto Superior de Engenharia do Porto",
        content: "Filippos was an amazing coworker who showed a great sense of responsability and was always very devoted to our work. 100% a very important piece of our project.",
        image: "/testim/Hugo Silva.jpeg",
        rating: 5
    },
    {
        name: "Ioanna Marlafeka",
        role: "Resident Physician in Internal Medicine, MSc, PhD(c)",
        content: "Working with Filippos on the clinical validation of ZenithDx was an exceptional experience. He has engineered a tool that is not only medically precise but remarkably intuitive for frontline physicians. The system's ability to provide clear diagnostic guidance—paired with Filippos's deep commitment to explainable AI transparency—makes ZenithDx a vital partner in modern clinical practice. His technical leadership ensures that our decisions are backed by both data and clarity.",
        image: "/testim/Ioanna Marlafeka.jpeg",
        rating: 5
    },
    {
        name: "Alberto Peixoto Pinto",
        role: "HRM Specialist and Lecturer",
        content: "Filippos demonstrates exceptional technical expertise in both design and computer programming, consistently delivering innovative and efficient solutions. Beyond his technical abilities, Filippos is a natural leader who inspires confidence and enthusiasm within his team. He fostered a collaborative and ethical environment during his participation on the D-PBL Program Erasmus+ which i had the honor of co-coordinate.",
        image: "/testim/Alberto Peixoto Pinto.jpeg",
        rating: 5
    },
    {
        name: "Katerina Podara",
        role: "Resident Physician in General Medicine",
        content: "ZenithDx stands out as a truly human-centered breakthrough, thanks to Filippos's profound understanding of high-pressure clinical workflows. In the emergency department, his system provides the immediate, auditable insights we need to make critical decisions with absolute confidence. Filippos hasn't just built software; he's architected a regulatory-compliant safety layer that supports the physician exactly when it matters most.",
        image: "/testim/Katerina Podara.jpeg",
        rating: 5
    },
    {
        name: "Ayushri Bhuyan",
        role: "Master's Student, University of Galway",
        content: "Conducting a session with Filippos was great. The way he explained the uses and technicalities of Azure services was insightful. His management skills are excellent. It was a highly valuable experience working with him.",
        image: "/resources/img/people/1741256863369.jpeg",
        rating: 5
    },
    {
        name: "Christos Makris",
        role: "Associate Professor, University of Patras",
        content: "Mr. Zygouris impressed me with his professionalism, discipline, and innovative algorithmic thinking. He delivered efficient and original solutions in end-to-end architecture (AI, Cloud, Data) and implemented a human-centered AI co-pilot. His integration of Explainable AI (XAI) frameworks significantly enhanced transparency and user trust. His contribution was pivotal, and I recommend him unreservedly.",
        image: "/resources/img/people/makris_1000.jpg",
        rating: 5
    },
    {
        name: "Miodrag Zivanovic",
        role: "Software Developer at SAP",
        content: "I had the opportunity to work with Filippos on the D-PBL Erasmus+ international project. Our collaboration and communication were excellent, despite the fact that English is not the native language for either of us. Filippos contributed valuable ideas, successfully handled challenging tasks, and was one of the key members of the team.",
        image: "/resources/img/people/mio.jpeg",
        rating: 5
    },
    {
        name: "Michalis Xenos",
        role: "Professor, University of Patras",
        content: "Filippos is an exceptional engineer who, during his studies, demonstrated a high level of scientific curiosity, a strong aptitude for practical problem-solving, and consistently exhibited exemplary ethics.",
        image: "/resources/img/people/xenos.jpg",
        rating: 5
    },
    {
        name: "Thomas Ntoupis",
        role: "Digital Policy and Artificial Intelligence Advisor",
        content: "Collaborating with Filippos on the UNBOUND PROMETHEUS Data Science program was a genuine pleasure. From the outset, Filippos demonstrated a powerful combination of deep technical knowledge and sharp analytical insight. He possesses a standout talent for navigating complex datasets, identifying key patterns, and engineering them into practical, high-impact solutions. Beyond his technical skills, he is a dedicated and highly collaborative teammate, consistently elevating the group's work. I have no doubt that Filippos will be an invaluable asset to any organization looking to lead in the AI and Data Science field.",
        image: "/resources/img/people/thomas.jpeg",
        rating: 5
    },
    {
        name: "José Paulo Marques dos Santos",
        role: "Associate Professor, University of Maia",
        content: "Filippos-Paraskevas demonstrated exceptional leadership throughout the D-PBL program, skillfully coordinating a multinational team across five countries (Greece, Lithuania, Portugal, Serbia, and Spain), and across multiple fields (Design, Engineering, and Management & Marketing), while serving as Product Manager for the DeafNav project. His ability to analyze complex accessibility requirements, guide technical discussions, and maintain an effective Scrum workflow was instrumental to the project's success, and his professionalism and collaborative approach made him a standout participant in the program.",
        image: "/resources/img/people/jose.jpeg",
        rating: 5
    },
    {
        name: "Elena Zaglaridou",
        role: "EMEA regional partnerships, Microsoft Elevate",
        content: "I would like to express my appreciation for the exceptional contribution of Filippos within the framework of our collaboration in the Microsoft Learn Student Ambassadors program. His efforts were decisively focused on applying the technical aspects of Azure AI & Cloud to real-world scenarios, with a particular emphasis on the HealthTech sector. Filippos achieved significant results by organizing high-level events. He also played an active role in mentoring new Ambassadors and supporting peers by speaking at their events. The dedication, technical expertise, and collaborative spirit Filippos demonstrated are exemplary and make him a valuable member of the MLSA community.",
        image: "/resources/img/people/zagla.jpeg",
        rating: 5
    },
    {
        name: "Rouitanko Madi Betsaleel",
        role: "Site Reliability Engineer",
        content: "As a fellow Microsoft Learn Student Ambassador, I’ve been impressed by Filippos’s dedication to Cloud Architecture and AI compliance. He’s a very smart and kind person who works on projects that create real impact, and I truly admire his passion for HealthTech. His enthusiasm and thought leadership make him a valuable voice in our global tech community.",
        image: "/resources/img/people/roui.jpeg",
        rating: 5
    },
    {
        name: "Arpit Singh Gautam",
        role: "Data Scientist, Dell CSG CTO Lab",
        content: "I had the opportunity to collaborate with Filippos on a research-driven project that aimed to bridge AI and healthcare innovation. From the very beginning, he demonstrated remarkable clarity of vision and a strong ability to translate complex research goals into a structured, actionable roadmap. His entrepreneurial initiative in assembling and guiding a high-impact team reflected both leadership and foresight. Filippos showcased deep technical expertise in areas such as Agentic AI, Explainable AI, and Medical Imaging, integrating these domains seamlessly to advance clinically meaningful innovation. He combines technical depth with an impressive ability to align research direction toward tangible real-world outcomes, making him an inspiring and forward-thinking collaborator.",
        image: "/resources/img/people/gaut.jpeg",
        rating: 5
    },
    {
        name: "Georgina Barquin Rotchford",
        role: "Global Leadership Consultant & Mentor, European Commission D-PBL Erasmus+ Initiative",
        content: "I had the pleasure of mentoring Filippos-Paraskevas Zygouris during the D-PBL Erasmus+ program, a flagship European Commission-supported initiative developed by seven universities. Filippos showed strong leadership as Technical Product Manager and Analysis Team Lead for the “DeafNav” project, successfully guiding a diverse international team throughout the process. His work focused on improving mobility for deaf people in Lisbon’s underground, combining rigorous technical analysis with a practical vision for inclusive design and accessibility that aligns with EU directives. The final result was very well received and warmly applauded by the evaluation panel.",
        image: "/testim/georgina.jpeg",
        rating: 5
    }
];

export const skills = [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", category: "Languages" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg", category: "Languages" },
    { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg", category: "Languages" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", category: "Languages" },
    { name: "Bash/Shell", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg", category: "Languages" },
    { name: "Microsoft Azure", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg", category: "Cloud & DevOps" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", category: "Cloud & DevOps" },
    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg", category: "Cloud & DevOps" },
    { name: "Terraform", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg", category: "Cloud & DevOps" },
    { name: "CI/CD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg", category: "Cloud & DevOps" },
    { name: "PyTorch", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg", category: "AI & Data" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg", category: "AI & Data" },
    { name: "Scikit-learn", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/scikitlearn/scikitlearn-original.svg", category: "AI & Data" },
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", category: "AI & Data" },
    { name: "OpenCV", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg", category: "AI & Data" },
    { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", category: "Architecture" },
    { name: "NVIDIA DGX", icon: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg", category: "Architecture" },
    { name: "High Performance Computing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg", category: "Architecture" },
    { name: "Networking", icon: "https://cdn-icons-png.flaticon.com/512/2942/2942544.png", category: "Network" },
    { name: "Mathematics", icon: "https://cdn-icons-png.flaticon.com/512/4023/4023094.png", category: "Science" },
];

export const softSkills = [
    { name: "Leadership", icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png" },
    { name: "Problem Solving", icon: "https://cdn-icons-png.flaticon.com/512/3079/3079165.png" },
    { name: "Entrepreneurship", icon: "https://cdn-icons-png.flaticon.com/512/1006/1006517.png" },
    { name: "Strategic Thinking", icon: "https://cdn-icons-png.flaticon.com/512/1535/1535019.png" },
    { name: "Project Coordination", icon: "https://cdn-icons-png.flaticon.com/512/3233/3233503.png" },
    { name: "Stakeholder Mgmt", icon: "https://cdn-icons-png.flaticon.com/512/1534/1534938.png" },
    { name: "Cross-functional", icon: "https://cdn-icons-png.flaticon.com/512/1256/1256650.png" },
    { name: "Agile & Scrum", icon: "https://cdn-icons-png.flaticon.com/512/1063/1063196.png" },
    { name: "Product Management", icon: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png" },
    { name: "Technical Comm", icon: "https://cdn-icons-png.flaticon.com/512/2620/2620686.png" },
    { name: "Adaptability", icon: "https://cdn-icons-png.flaticon.com/512/2822/2822521.png" },
    { name: "Work Ethic", icon: "https://cdn-icons-png.flaticon.com/512/1584/1584892.png" },
    { name: "Time Management", icon: "https://cdn-icons-png.flaticon.com/512/2278/2278049.png" },
    { name: "Innovation", icon: "https://cdn-icons-png.flaticon.com/512/2921/2921226.png" },
    { name: "Public Speaking", icon: "https://cdn-icons-png.flaticon.com/512/1968/1968666.png" },
];

export const experience = [
    {
        title: "Microsoft Certified: Azure AI Engineer Associate",
        org: "Microsoft",
        date: "In Progress",
        desc: "In Progress (Exam AI-103: Developing AI Apps and Agents on Azure). Advanced preparation covering Microsoft Foundry AI & Agentic solutions, LLM/SLM deployment, Multimodal RAG pipelines, Computer Vision, Text Analysis, and Enterprise Information Extraction with responsible AI guardrails.",
        image: "/fotogra/Azure%20AI%20Engineer%20Associate.png",
        type: "Certification (In Progress)"
    },
    {
        title: "Microsoft Certified: AI Product Manager",
        org: "Microsoft",
        date: "Jan 2026",
        desc: "Bridging advanced AI engineering with product strategy. Managing AI products through the CRISP-ML(Q) lifecycle, ensuring technical innovation translates into scalable, safe, and impactful product features.",
        image: "/fotogra/AI%20Product%20Manager.jpg",
        type: "Certification"
    },
    {
        title: "Microsoft European Digital Commitment Day",
        org: "Microsoft (Vienna, Austria)",
        date: "Nov 2025",
        desc: "Strategic Delegate analyzing EU Sovereign Innovation and Data Residency frameworks. Gained insights into architecting 'Digital Resilience' compliant with complex geopolitical data regulations.",
        image: "/fotogra/microsoft_european_digital_commitment_day.jpeg",
        type: "Event"
    },
    {
        title: "Research Ethics & Compliance (Human Research - Data Privacy)",
        org: "MIT Affiliates",
        date: "Sep 2024",
        desc: "Certified in the ethical conduct of research involving human subjects. Aligning data governance with GDPR standards to ensure patient confidentiality and trustworthy ML model training.",
        image: "/fotogra/citi.jpg",
        type: "Certification"
    },
    {
        title: "AI for Good & Ethical Innovation (8th CSR Competition)",
        org: "CSR HELLAS & European Parliament Office",
        date: "Feb 2023 – Feb 2024",
        desc: "Applied an 'AI for Good' approach to develop AI-driven Corporate Social Responsibility strategies. Aligned technological capabilities with the UN Sustainable Development Goals (SDGs), focusing on ethical innovation and SDG#17.",
        image: "/resources/img/elements/csr.jpg",
        type: "Competition"
    },
    {
        title: "Advanced AI Risk & Security Training",
        org: "PwC \"Break AI\" Workshop",
        date: "Nov 2023",
        desc: "Selected for specialized, hands-on training in AI Risk Management, Distributed AI architectures, and OWASP machine learning security protocols for enterprise-grade deployments.",
        image: "/resources/img/elements/pwc.jpeg",
        type: "Workshop"
    },
    {
        title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
        org: "Microsoft",
        date: "Apr 2023",
        desc: "Foundational mastery of Azure Machine Learning, Computer Vision, and Cloud AI infrastructure services, establishing early platform proficiency.",
        image: "https://media.licdn.com/dms/image/v2/D5610AQHuo6Pb0vttaQ/image-shrink_1280/B56ZXlAfBHGUAM-/0/1743303865722?e=2147483647&v=beta&t=zg6146CQNJUbkbCacu5snlYK71UP4Rpi3zlDkkwpb2A",
        type: "Certification"
    },
    {
        title: "Academic AI Foundation (5 ECTS)",
        org: "University of Helsinki & MinnaLearn",
        date: "Apr 2023",
        desc: "Elements of AI (5 ECTS). Rigorous academic validation of core artificial intelligence principles, search algorithms, and machine learning foundations.",
        image: "/resources/img/elements/university-of-helsinki-dark-logo.jpg",
        type: "Academic"
    },
    {
        title: "Computer Networking & Infrastructure Basics",
        org: "Cisco Networking Academy",
        date: "Apr 2023",
        desc: "Validated baseline knowledge in IP routing and network protocols, establishing a solid foundation for understanding distributed cloud architectures and backend MLOps deployments.",
        image: "/resources/img/elements/cisco.png",
        type: "Credential"
    },
    {
        title: "NVIDIA GTC: Accelerated Computing & AI",
        org: "NVIDIA",
        date: "Mar 2023",
        desc: "Explored the latest advancements in Generative AI architectures, hardware-level inference optimization, and AI accelerators (GPUs/DGX systems) from industry leaders.",
        image: "/resources/img/elements/nvidia.jpg",
        type: "Conference"
    },
    {
        title: "Microsoft Envision Greece: Strategic Catalyst",
        org: "Microsoft",
        date: "Jun 2022",
        desc: "The catalyst event that initiated my journey into the Azure ecosystem. Explored Microsoft’s strategic data center investments in Greece and the broader impact of sovereign cloud infrastructure on regional digital transformation.",
        image: "/fotogra/Microsoft%20Envision%20Greece.jpg",
        type: "Event"
    }
];

export const education = [
    // A. Academic Background & Excellence
    {
        title: "Secondary Education – 2nd General High School of Lamia",
        org: "Lamia, Greece",
        date: "2017 – 2020",
        desc: "With a graduation grade of 19.8/20, my journey began with an unwavering commitment to excellence, ranking me among the top students in the country. My distinction as a PISA Champion served as the first official recognition of my aptitude for complex problem-solving and critical thinking, laying the groundwork for my subsequent pursuit of Computer Science and Engineering.",
        image: "https://newsroom.ocde.us/wp-content/uploads/2025/09/PANA3047-2560x1707.jpeg",
        type: "High School"
    },
    {
        title: "Integrated Master in Computer Engineering & Informatics (CEID)",
        org: "University of Patras, Greece",
        date: "Oct 2020 – Oct 2025",
        desc: "I completed my studies in the Top 5% of my class with a GPA of 8.05/10. I demonstrated absolute mastery (10/10) in a wide range of critical fields, including Software Quality Assurance, Artificial Intelligence, Multidimensional Data, and Bioinformatics. My Master’s Thesis (ZenithDx), which received a perfect 10/10, was the pinnacle of my academic career. I developed an Agentic AI medical system (CDSS) with 96.28% accuracy, integrating rigorous industrial standards (ISO 14971, IEC 62304) and setting the stage for my specialization in regulatory compliance.",
        image: "/fotogra/Integrated%20Master%20in%20Computer%20Engineering%20%26%20Informatics%20%28CEID%29.jpeg",
        type: "Master's Degree"
    },
    // B. Professional Evolution
    {
        title: "Data & ML Engineering Intern (UNBOUND PROMETHEUS Scholar)",
        org: "F.H.L. I. KIRIAKIDIS Group | Kavala, Greece (On-site)",
        date: "Jul 2022 – Aug 2022",
        desc: "Awarded the prestigious UNBOUND PROMETHEUS Data Science Scholarship—administered in New York featuring Ivy League faculty under the auspices of Archbishop Elpidophoros of America—to apply advanced statistical algorithms and Dataset Engineering principles to high-stakes industrial operations. Managed and preprocessed massive logistics datasets representing over 330,000 tons of structural materials. Engineered end-to-end Knowledge Discovery in Databases (KDD) pipelines and robust Interquartile Range (IQR) statistical anomaly detection models to monitor data streams, identify latency patterns, and successfully resolve three critical production and supply-chain bottlenecks. This immersive experience in continuous process validation and industrial AI observability served as the primary catalyst for my career-long specialization in Data Quality, systematic risk mitigation, and robust production-grade infrastructure.",
        image: "/resources/img/4.jpeg",
        type: "Internship"
    },
    {
        title: "Azure AI Solutions Developer (Beta Microsoft Learn Student Ambassador)",
        org: "Microsoft (Beta Student Ambassador) | Global (Hybrid)",
        date: "Jul 2023 – Jan 2026",
        desc: "As a Microsoft Certified Azure AI Engineer Associate and Beta Student Ambassador, I have trained over 125 specialists in Azure AI orchestration and Responsible AI, bridging the gap between raw technological power and regulatory ethics. I specialize in designing architectures that prioritize Sovereign Data Residency, ensuring cloud solutions align with GDPR and the EU AI Act through systematic algorithmic bias mitigation and rigorous risk management. By translating academic theory into industrial application, I guide peers through the implementation of end-to-end intelligent systems, utilizing tools like Azure AI Search and Text Analytics for Health, while mentoring fellow Ambassadors toward their Alpha Milestone to foster a global community dedicated to secure, scalable, and ethically sound AI.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1200px-Microsoft_logo.svg.png",
        type: "Ambassador"
    },
    {
        title: "Technical Product Manager (Erasmus+ D-PBL)",
        org: "European Commission | Lisbon, Portugal (Remote)",
        date: "Mar 2024 – May 2024",
        desc: "Led a cross-functional multinational engineering team of 10+ specialists across five European countries (Greece, Lithuania, Portugal, Serbia, and Spain) to architect 'DeafNav'—an EU-compliant public transit IoT accessibility platform. Served as the primary technical translator bridging complex EU legislation—including the European Accessibility Act (EAA 2025), EU AI Act (Art. 50), WCAG 2.1 AAA, and EN 301 549—with production engineering requirements. Implemented an Evaluation-Driven Development lifecycle under Agile/Scrum methodologies, coordinating the integration of a local FAISS RAG pipeline (Qwen 2.5 7B), live GPS telematics ingestion, and MQTT haptic wearable synchronization. Streamlined cross-border execution to deliver a fully functional, audit-ready software-hardware prototype in just three months, earning international leadership accolades and peer endorsements for exceptional product management.",
        image: "/resources/img/2.png",
        type: "Internship"
    },
    {
        title: "Lead AI Systems Architect & Technical Product Lead (Diploma Thesis)",
        org: "University of Patras | Patras, Greece",
        date: "Aug 2024 – Oct 2025",
        desc: "Led the 14-month engineering and product lifecycle of 'ZenithDx' (Integrated M.Eng. Thesis, Grade: 10/10), transitioning it from academic research to a production-grade, High-Risk Software as a Medical Device (SaMD) prototype ready for CE/MDR certification. Applying a strict 'Compliance-by-Design' philosophy on NVIDIA DGX, architected an end-to-end multimodal MLOps and agentic pipeline orchestrating a fine-tuned 3B reasoning core (Llama-3.2 SFT) via LangGraph ReAct loops, a dual-lobe S²A-UNet lung segmentation model (0.9718 Dice), a masked ResNet-50 ROI classifier (96%+ diagnostic accuracy, sub-32s latency), and a Heterogeneous Graph Transformer (HGT) for longitudinal EHR graph traversal. Guaranteed absolute clinical interpretability and auditable decision-making by integrating PyTorch Captum feature ablation alongside Final-Layer Grad-CAM visual heatmaps, successfully embedding EU AI Act (Art. 14 Human-in-the-Loop), GDPR (Art. 22), and ISO 14971/IEC 62304 safety/privacy controls directly into the CI/CD pipeline.",
        image: "/resources/img/portfolios/logo/1.jpg",
        type: "Lead Engineer"
    },
    {
        title: "Technical Program Lead & AI Mentor",
        org: "Startup Week 2024 | Patras, Greece",
        date: "Oct 2024",
        desc: "Operated at the intersection of AI engineering and product management to spearhead the technical architecture, software program flow, and cross-functional logistics for one of Western Greece's premier tech and innovation summits. Championed the role of 'Technical Translator', bridging the communication gap between multidisciplinary engineering teams and business stakeholders to orchestrate developer hackathon tracks and program streams. Implemented Agile ML principles and Evaluation-Driven prototyping methodologies to mentor early-stage startup teams in leveraging generative AI APIs, local LLM wrappers, and rapid deployment workflows, guiding them to successfully transform complex organizational and business challenges into scalable, production-ready AI product proofs-of-concept.",
        image: "/resources/img/1.jpg",
        type: "Volunteering"
    },
    {
        title: "Community Member & Builder",
        org: "CPH Vibe Coders | Copenhagen, Denmark",
        date: "Jan 2026 – Present",
        desc: "As an active member of this grassroots community, I focus on 'Vibe Coding'—an approach prioritizing rapid MVP development via Agentic AI and intuitive coding. Moving away from over-analysis and 'hype,' I participate in hands-on processes that transform business ideas into functional products within hours. My work in Copenhagen highlights my agility and 'execution mentality,' delivering tangible results in fast-paced startup environments.",
        image: "/fotogra/copeenhagen.jpeg",
        type: "Community"
    },
    {
        title: "AI Policy Advisor & Technical Translator",
        org: "European Young Engineers (EYE) | Europe (Hybrid)",
        date: "Feb 2026 – Present",
        desc: "Serving as the primary technical authority bridging deep machine learning systems with European legislation, I translate complex regulatory frameworks—primarily the EU AI Act (High-Risk classifications, transparency mandates), EU MDR (SaMD), and GDPR—into actionable engineering specifications and CI/CD traceability parameters. I deliver rigorous technical briefings on algorithmic auditability, bias mitigation, and sovereign AI compute infrastructures to Members of the European Parliament (MEPs) and cross-border engineering bodies. My mission is to operationalize \"Compliance-by-Design\" principles, advocating for sovereign EU architectures that foster rapid technological innovation while guaranteeing strict data residency, auditability, and mathematical trustworthy AI standards.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
        type: "Policy Advisor"
    }
];
