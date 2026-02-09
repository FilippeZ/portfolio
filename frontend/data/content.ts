
export const projects = [
    {
        id: "zenithdx-data",
        title: "ZenithDx – Multimodal Data Orchestration",
        category: "Data & Analytics",
        brief: "As a data architect for ZenithDx, an advanced Clinical Decision Support System (CDSS), I designed a scalable, end-to-end multimodal data platform orchestrated by a central AI agent. This architecture integrates heterogeneous healthcare data sources, coordinating three parallel processing streams: 1) An Image Data Stream processing DICOM/PACS data via a hybrid S2A-UNet (for segmentation) and ResNet-50 (for classification) pipeline. 2) A Text Data Stream analyzing unstructured patient symptoms using a RAG architecture, which queries a FAISS/BM25 vector database (fed by medical literature) and is optimized with ColBERT. 3) A Structured Data Stream processing medical histories (EHR/HIS from sources like MIMIC-IV-ED), modeling them as a heterogeneous graph and analyzing them with a Heterogeneous Graph Transformer (HGT). The central data modeling framework established conceptual-to-physical models and ensured strong data governance and interoperability through standards like HL7, FHIR, and DICOM.",
        date: "2025",
        client: "Major Hospital Network",
        tools: ["CDSS", "S2A-UNet", "ResNet-50", "RAG", "FAISS", "BM25", "ColBERT", "HGT", "HL7", "FHIR", "DICOM", "MIMIC-IV-ED", "MIMIC-CXR-JPG", "SciBERT", "BGE"],
        link: "https://zenithdx-data.com",
        gallery: ["/resources/img/portfolios/web/1.jpg", "/resources/img/portfolios/zenith/z1.jpg", "/resources/img/portfolios/zenith/z2.jpg"],
        image: "/resources/img/portfolios/web/1.jpg"
    },
    {
        id: "travel-db",
        title: "Relational Database Architecture, Modeling, and Data Logic Layer Implementation",
        category: "Data & Analytics",
        brief: "I architected and delivered a robust, end-to-end relational database management system for a travel agency, defining the foundational data management toolset around MySQL and Java to support core operations and reservations. This required developing a comprehensive data modeling strategy, transitioning the solution from conceptual and logical design through to a highly normalized physical schema to enforce rigid data integrity and relationship constraints. I further engineered the data logic layer by implementing complex MySQL Stored Procedures and Triggers to automate core ETL functionalities and enforce critical business rules directly within the database environment. Finally, I provided technical oversight and actively collaborated with operational stakeholders (via a dedicated Java application interface) to ensure the final technical solution was fully validated and aligned with strategic business requirements for reporting and scalability.",
        date: "2024",
        client: "Global Travel Co",
        tools: ["MySQL", "Java Swing", "JDBC", "Stored Procedures", "Triggers", "ERD", "Normalization", "ETL", "Data Integrity", "Constraints", "CRUD", "Indexing", "Query Optimization", "Transactions", "ACID"],
        link: "https://traveldb.app",
        gallery: ["/resources/img/portfolios/web/5.jpg", "/resources/img/portfolios/database/db1.jpg", "/resources/img/portfolios/database/db2.jpg"],
        image: "/resources/img/portfolios/web/5.jpg"
    },
    {
        id: "etl-covid",
        title: "End-to-End ETL Pipeline Architecture for Economic Impact Analytics",
        category: "Data & Analytics",
        brief: "I successfully architected and implemented an end-to-end data analysis pipeline designed to support the analytical strategy concerning the commercial impacts of the COVID-19 pandemic, focusing on efficiency and data integrity. This project involved designing the full ETL process where Python (Pandas) was instrumental for robust data cleaning, transformation, and complex aggregation (grouping by month, country, and transport mode) from heterogeneous sources. I orchestrated the loading of the cleaned data into a MySQL relational database, establishing a reliable and structured foundation capable of supporting ad-hoc queries and business intelligence (BI) reporting. Ultimately, this pipeline achieved strong business alignment by delivering clear, actionable insights through visualizations generated with Matplotlib that enabled stakeholders to quickly identify market trends and optimize their supply chain strategies.",
        date: "2023",
        client: "World Bank Partner",
        tools: ["Python", "Pandas", "NumPy", "MySQL", "Matplotlib", "Seaborn", "Jupyter", "ETL", "Data Cleaning", "Aggregation", "Grouping", "SQLAlchemy", "CSV", "JSON", "Visualization"],
        link: "https://covid-etl.io",
        gallery: ["/resources/img/portfolios/web/3.jpeg", "/resources/img/portfolios/covid/cov1.jpg", "/resources/img/portfolios/covid/cov2.jpg"],
        image: "/resources/img/portfolios/web/3.jpeg"
    },
    {
        id: "genomic",
        title: "Genomic Data Pipeline & Bioinformatics",
        category: "Data & Analytics",
        brief: "I spearheaded the development of a comprehensive data access and analysis strategy for processing large-scale biological data (DNA and protein sequences), defining the technical toolset to support advanced genomic research. This involved integrating Biopython (specifically the Entrez module) for programmatic data extraction and access from the GenBank database, enabling a structured approach to raw data intake. I architected the analytical pipeline to incorporate specialized bioinformatics tools, such as EMBOSS Needle for pairwise global sequence alignment and the MEME Suite for novel motif discovery in protein families. Crucially, I implemented stringent data quality and governance protocols for Next-Generation Sequencing (NGS) data, utilizing tools like FastQC to analyze Phred quality scores and establish automated filtration pipelines based on defined quality thresholds for raw FASTQ data.",
        date: "2024",
        client: "Genomics Research Lab",
        tools: ["Biopython", "Entrez", "GenBank", "EMBOSS", "Needle", "MEME Suite", "FastQC", "NGS", "FASTQ", "Phred", "BLAST", "ClustalW", "SAMtools", "BEDTools", "VCF"],
        link: "https://genomic-pipeline.org",
        gallery: ["/resources/img/portfolios/web/2.jpg", "/resources/img/portfolios/bio/bio1.jpg", "/resources/img/portfolios/bio/bio2.jpg"],
        image: "/resources/img/portfolios/web/2.jpg"
    },
    {
        id: "indexing-poc",
        title: "Multidimensional Indexing for High-Performance Analytics",
        category: "Data & Analytics",
        brief: "I successfully executed a practical Proof of Concept (PoC) to define the optimal analytical strategy for high-performance querying against complex multidimensional spatial and similarity data. This involved architecting and benchmarking multiple indexing solution designs, specifically implementing and evaluating K-D Trees, Octrees, Range Trees, and R-Trees for scalability in both k-Nearest Neighbors (kNN) and Range Queries. Furthermore, I designed and implemented an Approximate Nearest Neighbor (ANN) solution utilizing Locality-Sensitive Hashing (LSH) with MinHash to achieve fast text similarity search against a dataset of U.S. hospital reviews. The project culminated in delivering a final strategic recommendation that balanced query speed, memory footprint, and build time across all candidate data structures to support highly efficient production environments.",
        date: "2024",
        client: "Healthcare AI Startup",
        tools: ["Python", "Scikit-learn", "NumPy", "Annoy", "LSH", "MinHash", "K-D Tree", "Octree", "R-Tree", "Range Tree", "kNN", "ANN", "Benchmarking", "Profiling", "Memory Analysis"],
        link: "https://indexing-poc.com",
        gallery: ["/resources/img/portfolios/web/6.jpg", "/resources/img/portfolios/multi/mu1.jpg", "/resources/img/portfolios/multi/mu2.jpg"],
        image: "/resources/img/portfolios/web/6.jpg"
    },
    {
        id: "azure-mesh",
        title: "Azure Real-Time Clinical Data Mesh (NEW)",
        category: "Data & Analytics",
        brief: "Architected a real-time clinical data mesh on Azure.",
        date: "2024",
        client: "Healthcare Provider",
        tools: ["Azure", "Data Mesh", "Real-Time"],
        link: "#",
        gallery: ["/resources/img/portfolios/web/7.png"],
        image: "/resources/img/portfolios/web/7.png"
    },
    {
        id: "zenithdx-ai",
        title: "ZenithDx – Agentic Clinical Co-Pilot",
        category: "Generative AI",
        brief: "I architected the ZenithDx Advanced Clinical Decision Support System (CDSS), a high-performance, human-centric agentic AI system deployed on NVIDIA DGX Cloud A100 infrastructure. The core inference engine uses LangGraph for orchestration and a fine-tuned Llama 3.2 3B LLM to interpret queries and generate clinical reports through iterative ReAct and Self-Refine loops. To ensure enterprise-grade integration, the agent coordinates three parallel multimodal pipelines: image, RAG, and heterogeneous graph. For ethical oversight, the system incorporates robust XAI mechanisms within a human-centric HITL framework.",
        date: "2025",
        client: "Emergency Departments",
        tools: ["LangGraph", "Ollama", "Llama 3.2", "FastAPI", "TensorRT", "MIG", "GGUF", "ReAct", "Self-Refine", "RAG", "FAISS", "ColBERT", "HGT", "Grad-CAM", "Captum"],
        link: "https://zenithdx.ai",
        gallery: ["/resources/img/portfolios/logo/1.jpg", "/resources/img/portfolios/zenith/z3.jpg", "/resources/img/portfolios/zenith/z4.jpg"],
        image: "/resources/img/portfolios/logo/1.jpg"
    },
    {
        id: "melanoma-fl",
        title: "Multicloud GenAI & Federated Learning – Personalized Melanoma Detection",
        category: "Generative AI",
        brief: "I architected a mission-critical, privacy-preserving multi-cloud platform for early melanoma diagnosis by strategically integrating advanced GenAI and ML capabilities within a robust, scalable, and compliant hybrid-cloud environment. The core architectural principle is the collaborative training of a global Bayesian Network model using Federated Learning across multiple cloud providers.",
        date: "2025",
        client: "Cancer Research Consortium",
        tools: ["TensorFlow Federated", "Azure ML", "AWS SageMaker", "PySyft", "Flower", "Docker", "Kubernetes", "LoG", "DoG", "GLCM", "NLP", "EHR", "Bayesian Network", "CPDs", "FIFO"],
        link: "https://fl-melanoma.org",
        gallery: ["/resources/img/portfolios/logo/2.jpg", "/resources/img/portfolios/fl/fl1.jpg", "/resources/img/portfolios/fl/fl2.jpg"],
        image: "/resources/img/portfolios/logo/2.jpg"
    },
    {
        id: "wgan-telco",
        title: "Privacy-Preserving GenAI for 5G Telecommunications - WGAN-GP Production Architecture",
        category: "Generative AI",
        brief: "I designed and implemented a secure, data-centric solution for generating realistic synthetic time-series data for telecommunications traffic using a Wasserstein Generative Adversarial Network with Gradient Penalty (WGAN-GP).",
        date: "2024",
        client: "Tier-1 Telco",
        tools: ["PyTorch", "WGAN-GP", "NVIDIA A100", "DGX", "Z-Score", "LeakyReLU", "Wasserstein Loss", "Gradient Penalty", "MSE", "KL Divergence", "Cosine Similarity", "Anomaly Detection", "5G", "Time-Series", "Synthetic Data"],
        link: "https://wgan-telco.ai",
        gallery: ["/resources/img/portfolios/logo/3.png", "/resources/img/portfolios/gan/gan1.jpg", "/resources/img/portfolios/gan/gan2.jpg"],
        image: "/resources/img/portfolios/logo/3.png"
    },
    {
        id: "knn-parallel",
        title: "Hybrid Parallel k-NN Regression",
        category: "Generative AI",
        brief: "I undertook a comprehensive production-engineering and optimization project focused on maximizing the performance and scalability of the brute-force k-NN regression algorithm for deployment in computationally constrained environments.",
        date: "2024",
        client: "Edge AI Research",
        tools: ["C++", "OpenMP", "MPI", "IDW", "k-NN", "Regression", "Parallel For", "Taskloop", "Multicore", "Load Balancing", "Intel i7", "Profiling", "Benchmarking", "Scalability", "Shared Memory"],
        link: "https://knn-parallel.com",
        gallery: ["/resources/img/portfolios/logo/4.jpg", "/resources/img/portfolios/knn/knn1.jpg", "/resources/img/portfolios/knn/knn2.jpg"],
        image: "/resources/img/portfolios/logo/4.jpg"
    },
    {
        id: "mpi",
        title: "Designing Scalable Architectures for Distributed ML Workloads",
        category: "Generative AI",
        brief: "I engineered and implemented parallel matrix multiplication programs in C using the Message Passing Interface (MPI) library, demonstrating strong expertise in designing and optimizing scalable architectures for computationally intensive machine learning and data-processing workloads.",
        date: "2024",
        client: "Edge AI Research",
        tools: ["C++", "MPI", "MPI_Scatter", "MPI_Gather", "MPI_Cart_create", "Ring Topology", "Cartesian Grid", "Sub-blocking", "Concurrent Processing", "Scalability", "Latency", "Distributed ML", "Matrix Multiplication", "High-Performance Computing", "HPC"],
        link: "https://mpi-distributed.com",
        gallery: ["/resources/img/portfolios/logo/8.jpg", "/resources/img/portfolios/paral/paral1.jpg", "/resources/img/portfolios/paral/paral2.jpg"],
        image: "/resources/img/portfolios/logo/8.jpg"
    },
    {
        id: "edge-ai",
        title: "Edge AI Agent for Real-Time Clinical and Operational Safety (NEW)",
        category: "Generative AI",
        brief: "Edge AI Agent for Real-Time Clinical and Operational Safety.",
        date: "2024",
        client: "Healthcare Provider",
        tools: ["Edge AI", "Real-Time", "Safety"],
        link: "#",
        gallery: ["/resources/img/portfolios/logo/5.png"],
        image: "/resources/img/portfolios/logo/5.png"
    },
    {
        id: "azure-ai-studio",
        title: "Architecting a Mission-Critical Healthcare AI and Data Platform on Azure",
        category: "Cloud Solutions",
        brief: "This project demonstrates my deep technical expertise in translating complex healthcare requirements into a high-value, mission-critical PaaS solution on Microsoft Azure.",
        date: "2025",
        client: "Healthcare Enterprise",
        tools: ["Azure AI Studio", "OpenAI GPT-4", "AI Search", "Text Analytics", "UMLS", "Computer Vision", "Document Intelligence", "Custom Vision", "NLP", "OCR", "Entity Linking", "PaaS", "HITL", "Playground", "Multimodal"],
        link: "https://azure-ai.health",
        gallery: ["/resources/img/portfolios/card/2.png", "/resources/img/portfolios/cloud/cl1.jpg", "/resources/img/portfolios/cloud/cl2.jpg"],
        image: "/resources/img/portfolios/card/2.png"
    },
    {
        id: "azure-security",
        title: "Architectural Risk Analysis and Azure Security Design for Cloud Platforms",
        category: "Cloud Solutions",
        brief: "This project involved an architectural review of security vulnerabilities for mission-critical healthcare information systems, aligning with the Azure Well-Architected Framework's Security pillar.",
        date: "2024",
        client: "Health System",
        tools: ["Entra ID", "Key Vault", "Defender", "MFA", "FIDO2", "Passkeys", "Zero Trust", "IAM", "SSL/TLS", "RCA", "Threat Modeling", "Biometrics", "Passwordless", "Azure AD", "Security Pillar"],
        link: "https://azure-sec.health",
        gallery: ["/resources/img/portfolios/card/3.png", "/resources/img/portfolios/cloud/cl3.jpg", "/resources/img/portfolios/cloud/cl4.jpg"],
        image: "/resources/img/portfolios/card/3.png"
    },
    {
        id: "hybrid-network",
        title: "Foundational Hybrid Cloud Networking and Core Infrastructure Design",
        category: "Cloud Solutions",
        brief: "This project demonstrates deep technical expertise in designing, simulating, and optimizing complex hybrid network architectures, a core competency for translating customer requirements into reliable IaaS/PaaS solutions.",
        date: "2024",
        client: "Enterprise Migration",
        tools: ["GNS3", "Cisco IOS", "VLAN", "802.1Q", "OSPF", "eBGP", "ExpressRoute", "VPN Gateway", "NAT", "DHCP", "DNS", "VNet", "NSG", "Router-on-a-Stick", "Autonomous System"],
        link: "https://hybrid-net.io",
        gallery: ["/resources/img/portfolios/card/4.jpg", "/resources/img/portfolios/cloud/cl5.jpg", "/resources/img/portfolios/cloud/cl6.jpg"],
        image: "/resources/img/portfolios/card/4.jpg"
    },
    {
        id: "4g-simulation",
        title: "Architectural Performance Modeling for Distributed Network Systems",
        category: "Cloud Solutions",
        brief: "This project demonstrates a core Cloud Solution Architect competency: analyzing the architectural trade-offs of mission-critical, distributed systems.",
        date: "2024",
        client: "Telecom R&D",
        tools: ["Python", "NumPy", "Matplotlib", "Seaborn", "RSSI", "Handover", "UE Mobility", "4G LTE", "Cost Algorithm", "Threshold", "Simulation", "Delay", "RCA", "Performance Efficiency", "Reliability"],
        link: "https://4g-sim.com",
        gallery: ["/resources/img/portfolios/card/5.jpeg", "/resources/img/portfolios/cloud/cl7.jpg", "/resources/img/portfolios/cloud/cl8.jpg"],
        image: "/resources/img/portfolios/card/5.jpeg"
    },
    {
        id: "linux-devops",
        title: "Designing and Optimizing Linux-Based Compute and DevOps Solutions for Cloud Platforms",
        category: "Cloud Solutions",
        brief: "This project demonstrates deep technical expertise in Linux compute and DevOps automation, which are foundational for architecting reliable IaaS/PaaS solutions.",
        date: "2024",
        client: "Cloud Ops Team",
        tools: ["Bash", "awk", "sed", "C", "fork()", "IPC", "Semaphores", "Message Queues", "FCFS", "SJF", "RR", "Linux", "VM", "RCA", "Scheduling", "Parallelism"],
        link: "https://linux-devops.io",
        gallery: ["/resources/img/portfolios/card/1.jpg", "/resources/img/portfolios/cloud/cl9.jpg", "/resources/img/portfolios/cloud/cl10.jpg"],
        image: "/resources/img/portfolios/card/1.jpg"
    },
    {
        id: "zencloud",
        title: "ZenithDx - Architecting a High-Performance Hybrid AI Platform",
        category: "Cloud Solutions",
        brief: "This project involved designing the end-to-end cloud architecture for 'ZenithDx,' a mission-critical AI platform, aligning with the Azure Well-Architected Framework pillars of Performance Efficiency and Reliability.",
        date: "2024",
        client: "Cloud Ops Team",
        tools: ["FastAPI", "Uvicorn", "NVIDIA DGX", "MIG", "Nginx", "HTTPS", "JWT", "PostgreSQL", "FAISS", "ExpressRoute", "AKS", "Azure Arc", "Hybrid Cloud", "OPEX", "CAPEX"],
        link: "https://zencloud.ai",
        gallery: ["/resources/img/portfolios/card/15.jpg", "/resources/img/portfolios/zenith/z5.jpg", "/resources/img/portfolios/zenith/z6.jpg"],
        image: "/resources/img/portfolios/card/15.jpg"
    },
    {
        id: "azurecloud",
        title: "Azure Well-Architected Optimization for a Mission-Critical Clinical Data Platform (NEW)",
        category: "Cloud Solutions",
        brief: "Azure Well-Architected Optimization for a Mission-Critical Clinical Data Platform.",
        date: "2024",
        client: "Healthcare Provider",
        tools: ["Azure", "Well-Architected Framework"],
        link: "#",
        gallery: ["/resources/img/portfolios/card/16.jpg"],
        image: "/resources/img/portfolios/card/16.jpg"
    },
    {
        id: "deafnav",
        title: "Hybrid Product & Project Management for the D-PBL Erasmus+ Railway Accessibility Initiative",
        category: "Product & Leadership",
        brief: "As the Product Manager and Analysis Lead for the D-PBL Erasmus+ Railway Accessibility Initiative, I led an international team from Greece, Portugal, Serbia, France, and Lithuania in a three-month project focused on improving railway accessibility through the development of DeafNav.",
        date: "2024",
        client: "EU Erasmus+",
        tools: ["Figma", "Flutter", "Agile", "Scrum", "Jira", "Confluence", "Miro", "WCAG", "Accessibility", "Sign Language", "Real-Time Alerts", "Emergency Chat", "Domain Model", "Sprints", "Remote Collaboration"],
        link: "https://deafnav.eu",
        gallery: ["/resources/img/portfolios/app/1.jpg", "/resources/img/portfolios/prod/pr1.jpg", "/resources/img/portfolios/prod/pr2.jpg"],
        image: "/resources/img/portfolios/app/1.jpg"
    },
    {
        id: "zenithdx-pm",
        title: "ZenithDx – End-to-End Product Management",
        category: "Product & Leadership",
        brief: "Acted as the Product Manager leading the end-to-end product lifecycle for the 'ZenithDx' clinical co-pilot, from conception and UI/UX design to backend/AI implementation and final MVP delivery.",
        date: "2025",
        client: "Hospital Chain",
        tools: ["Jira", "Figma", "KLM", "Fitts’ Law", "Agile", "MVP", "VRAM", "XAI", "HITL", "Stakeholder Management", "UI/UX", "Cross-Functional", "Risk Mitigation", "Feedback Loops", "Acceptance Score"],
        link: "https://zenithdx-pm.com",
        gallery: ["/resources/img/portfolios/app/2.jpeg", "/resources/img/portfolios/zenith/z7.jpg", "/resources/img/portfolios/zenith/z8.jpg"],
        image: "/resources/img/portfolios/app/2.jpeg"
    },
    {
        id: "ux-klm",
        title: "Product Quality & UX Test Management",
        category: "Product & Leadership",
        brief: "As a core component of product test management and UX validation, I managed the application of the Keystroke-Level Model (KLM) and Fitts' Law to quantitatively evaluate the usability of a user interface form.",
        date: "2024",
        client: "Internal UX Lab",
        tools: ["KLM", "Fitts’ Law", "Stopwatch", "User Personas", "Task Analysis", "Completion Time", "Usability Testing", "Quantitative UX", "Form Design", "Keyboard Navigation", "Mouse Interaction", "Baseline Metrics", "Iteration", "Continuous Improvement", "UX Lab"],
        link: "https://ux-klm.com",
        gallery: ["/resources/img/portfolios/app/4.jpg", "/resources/img/portfolios/prod/pr3.jpg", "/resources/img/portfolios/prod/pr4.jpg"],
        image: "/resources/img/portfolios/app/4.jpg"
    },
    {
        id: "whiteboxer",
        title: "Product Quality Management - White-Box Test Strategy & Path Analysis",
        category: "Product & Leadership",
        brief: "As part of a full-lifecycle quality assurance plan, I managed the technical test strategy by applying white-box testing methodologies to validate product logic and manage development risks.",
        date: "2024",
        client: "Internal QA Team",
        tools: ["White-Box Testing", "CFG", "Cyclomatic Complexity", "Basis Paths", "Test Plan", "Input Values", "Expected Outcomes", "Code Coverage", "Path Analysis", "Infeasible Paths", "Risk Management", "QA Strategy", "Validation", "Technical Testing", "Quality Assurance"],
        link: "https://whiteboxer.qa",
        gallery: ["/resources/img/portfolios/app/3.jpg", "/resources/img/portfolios/prod/pr5.jpg", "/resources/img/portfolios/prod/pr6.jpg"],
        image: "/resources/img/portfolios/app/3.jpg"
    },
    {
        id: "startup-week",
        title: "Strategic Project Coordination & Product Lifecycle Immersion",
        category: "Product & Leadership",
        brief: "As a core volunteer for Startup Week Patras 2024, I combined hands-on project coordination and organizational support with a strategic deep-dive into the end-to-end product lifecycle.",
        date: "2024",
        client: "Startup Week Patras",
        tools: ["Event Coordination", "Stakeholder Management", "Product Validation", "UX", "AI Integration", "Cloud vs Edge", "Panel Facilitation", "Logistics", "PwC", "Yodiwo", "VCs", "Research", "Entrepreneurship", "Innovation", "Cross-Functional"],
        link: "https://startupweek.patras",
        gallery: ["/resources/img/portfolios/app/5.jpg", "/resources/img/portfolios/prod/pr7.jpg", "/resources/img/portfolios/prod/pr8.jpg"],
        image: "/resources/img/portfolios/app/5.jpg"
    },
    {
        id: "casm",
        title: "AI-Integrated Clinical & Administrative Service Management (CASM) Platform Implementation (NEW)",
        category: "Product & Leadership",
        brief: "AI-Integrated Clinical & Administrative Service Management (CASM) Platform Implementation.",
        date: "2024",
        client: "Healthcare Provider",
        tools: ["AI", "CASM", "Service Management"],
        link: "#",
        gallery: ["/resources/img/portfolios/app/6.jpg"],
        image: "/resources/img/portfolios/app/6.jpg"
    },
    {
        id: "xai-gov",
        title: "Operationalizing an Explainable AI (XAI) Governance Framework for Auditable, High-Risk Systems",
        category: "Governance & Compliance",
        brief: "As the compliance lead, I operationalized a comprehensive AI governance framework to mitigate the significant black box risk inherent in high-risk systems like medicine.",
        date: "2025",
        client: "Regulatory Body",
        tools: ["OmniXAI", "LIME", "SHAP", "Captum", "Grad-CAM", "Counterfactuals", "Simulatability", "GDPR", "EU AI Act", "Audit Trail", "XAI Controls", "Black Box Risk", "Human-Centric", "Stakeholder Trust", "Responsible AI"],
        link: "httpsias://xai-gov.eu",
        gallery: ["/resources/img/portfolios/icon/11.jpg", "/resources/img/portfolios/compl/c1.jpg", "/resources/img/portfolios/compl/c2.jpg"],
        image: "/resources/img/portfolios/icon/11.jpg"
    },
    {
        id: "csr-ai",
        title: "Strategic Policy Design for Ethical AI and Sustainable CSR Governance",
        category: "Governance & Compliance",
        brief: "As part of a multidisciplinary team for the Nikos Analytis CSRHELLAS competition, I co-developed a comprehensive governance framework to align artificial intelligence and data management with Corporate Social Responsibility (CSR).",
        date: "2024",
        client: "CSRHELLAS",
        tools: ["Policy Design", "UN SDGs", "CSR", "Ethical AI", "Cross-Functional", "Informatics", "Healthcare", "Social Work", "Sustainability", "Transparency", "Responsibility", "Governance Framework", "Long-Term Strategy", "Innovation", "Measurable Impact"],
        link: "https://csr-ai.gr",
        gallery: ["/resources/img/portfolios/icon/2.jpg", "/resources/img/portfolios/compl/c3.jpg", "/resources/img/portfolios/compl/c4.jpg"],
        image: "/resources/img/portfolios/icon/2.jpg"
    },
    {
        id: "zenithdx-gov",
        title: "ZenithDx – AI Governance & Compliance Framework",
        category: "Governance & Compliance",
        brief: "As the compliance lead for the 'ZenithDx' high-risk AI system, I designed and operationalized its governance by design framework from the ground up to ensure regulatory alignment and auditable processes.",
        date: "2025",
        client: "Hospital IRB",
        tools: ["Purview", "Model Cards", "ISO 14971", "IEC 62304", "HIC", "HITL", "Self-Hosted", "PHI", "XAI", "Grad-CAM", "Captum", "HSUS", "Bias Monitoring", "Fairness", "Compliance Roadmap"],
        link: "https://zenithdx-gov.com",
        gallery: ["/resources/img/portfolios/icon/9.jpg", "/resources/img/portfolios/zenith/z9.jpg", "/resources/img/portfolios/zenith/z10.jpg"],
        image: "/resources/img/portfolios/icon/9.jpg"
    },
    {
        id: "bigdata-ethics",
        title: "Strategic Analysis for a Big Data Ethics & Accountability Framework",
        category: "Governance & Compliance",
        brief: "As part of a foundational research initiative on Data & AI Governance, I conducted a deep-dive analysis of the ethical and regulatory risks outlined in 'Big Data Ethics' (Zwitter).",
        date: "2024",
        client: "Ethics Institute",
        tools: ["Critical Review", "Policy Design", "Causality", "Knowledge", "Choice", "Hyper-Networked", "Moral Responsibility", "Power Structures", "Collectors", "Managers", "Analysts", "Governance Framework", "Oversight", "ChatGPT Audit", "Ethical Accuracy", "Accountability"],
        link: "https://bigdata-ethics.org",
        gallery: ["/resources/img/portfolios/icon/10.jpeg", "/resources/img/portfolios/compl/c5.jpg", "/resources/img/portfolios/compl/c6.jpg"],
        image: "/resources/img/portfolios/icon/10.jpeg"
    },
    {
        id: "newgov",
        title: "Leading Clinical AI Governance - Policy Design, Bias Monitoring, and Regulatory Auditability (NEW)",
        category: "Governance & Compliance",
        brief: "Leading Clinical AI Governance - Policy Design, Bias Monitoring, and Regulatory Auditability.",
        date: "2024",
        client: "Healthcare Provider",
        tools: ["AI Governance", "Policy Design", "Bias Monitoring"],
        link: "#",
        gallery: ["/resources/img/portfolios/icon/4.jpg"],
        image: "/resources/img/portfolios/icon/4.jpg"
    }
];

export const testimonials = [
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
        title: "Microsoft Datacenter Experience: Virtual Tour",
        org: "Participant",
        date: "Jun 7, 2022",
        desc: "Completed an interactive 3D tour of Azure datacenter design, AI accelerators (Maia, Cobalt), sustainability, and global operations.",
        image: "https://www.cnet.com/a/img/resize/94d603762d21e9a002300bdea0d93a5e133a7e16/hub/2009/10/07/10556205-f0fe-11e2-8c7c-d4ae52e62bcc/CH1245.jpg?auto=webp&width=1200",
        type: "Virtual Tour"
    },
    {
        title: "Microsoft Envision Greece",
        org: "Event Attendee",
        date: "Jun 29, 2022",
        desc: "Engaged with digital leaders on transformation, post-pandemic acceleration, cybersecurity, and tech sustainability.",
        image: "https://r2.cms-shared-media.twodo.cz/e2dd59c9-ac20-4f31-ae03-476d713105f2/2e07cd2c-4782-4603-9f74-47814d4bdb4f/12-22-2023_52f9010a-f6c4-48bb-8bc9-da584a5cd638/file.png",
        type: "Conference"
    },
    {
        title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
        org: "Microsoft",
        date: "Feb 2023",
        desc: "Validated foundational knowledge of machine learning and artificial intelligence concepts and their implementation on Microsoft Azure.",
        image: "https://media.licdn.com/dms/image/v2/D5610AQHuo6Pb0vttaQ/image-shrink_1280/B56ZXlAfBHGUAM-/0/1743303865722?e=2147483647&v=beta&t=zg6146CQNJUbkbCacu5snlYK71UP4Rpi3zlDkkwpb2A",
        type: "Certification"
    },
    {
        title: "NVIDIA GTC 2023: Accelerated Computing & AI",
        org: "Event Attendee",
        date: "Mar 21, 2023",
        desc: "Explored generative AI, robotics, Industrial Metaverse, and DGX labs. Featured keynotes by Jensen Huang and leaders from OpenAI.",
        image: "/resources/img/elements/nvidia.jpg",
        type: "Conference"
    },
    {
        title: "Certificate: Elements of AI",
        org: "University of Helsinki & MinnaLearn",
        date: "Apr 25, 2023",
        desc: "Completed foundational course on AI, its implications, and practical applications.",
        image: "/resources/img/elements/university-of-helsinki-dark-logo.jpg",
        type: "Certificate"
    },
    {
        title: "Cisco Networking Credentials",
        org: "Cisco Networking Academy",
        date: "Apr 29-30, 2023",
        desc: "Badge of Networking Basics (April 29, 2023). Credential of Networking Devices and Initial Config (April 30, 2023)",
        image: "/resources/img/elements/cisco.png",
        type: "Credential"
    },
    {
        title: "Microsoft Ignite 2023",
        org: "Event Attendee",
        date: "Nov 16–18, 2023",
        desc: "Hands-on with Azure AI, data modernization, IoT, and cloud-native patterns.",
        image: "https://msftstories.thesourcemediaassets.com/sites/710/2024/11/Charles-Lamanna-Ignite-2024.png",
        type: "Event"
    },
    {
        title: "PwC “Break AI” Workshop",
        org: "Selected Participant",
        date: "Nov 24, 2023",
        desc: "Selected among 30 students for advanced training in AI risk management, tinyML, distributed AI, NVIDIA strategy, and OWASP security.",
        image: "/resources/img/elements/pwc.jpeg",
        type: "Workshop"
    },
    {
        title: "Microsoft Ignite 2024",
        org: "Event Attendee",
        date: "Nov 18–22, 2024",
        desc: "Explored Copilot, autonomous agents, and Azure AI stack. Attended Satya Nadella’s keynote on generative AI.",
        image: "https://msftstories.thesourcemediaassets.com/sites/710/2024/11/IGNITE24_Satya_Full-Keynote_Thumb.png",
        type: "Event"
    },
    {
        title: "8th CSR Competition",
        org: "Competition Participant",
        date: "Date TBD",
        desc: "Supported by the European Parliament Office in Greece, I developed AI-driven Corporate Social Responsibility (CSR) strategies for CSR HELLAS, ensuring alignment with the UN Sustainable Development Goals (SDGs) and placing a special focus on SDG#17 (Partnership for the Goals) as a key enabler for the 2030 agenda.",
        image: "/resources/img/elements/csr.jpg",
        type: "Competition"
    }
];

export const education = [
    {
        title: "High School Diploma",
        org: "High School",
        date: "2017 — 2020",
        desc: "Graduated with top honors (19.8/20), laying a strong academic foundation.",
        image: "https://newsroom.ocde.us/wp-content/uploads/2025/09/PANA3047-2560x1707.jpeg",
        type: "High School"
    },
    {
        title: "Computer Engineering & Informatics (Master's Degree)",
        org: "University of Patras, Greece",
        date: "2020 — 2025",
        desc: "As a top 5% Master's graduate (8.05/10 GPA), my thesis project, ZenithDx, was a validated MVP for a human-centered AI co-pilot in Emergency Departments. This single project integrated my expertise across four roles: Product Manager (leading the full lifecycle), AI & Data Architect (engineering a multimodal pipeline with CV, NLP, and Graph Transformers), Cloud Architect (designing for scalability), and Compliance Leader (embedding XAI for governance). I am now excited to leverage this comprehensive experience to build innovative, reliable, and scalable solutions.",
        image: "/resources/img/5.jpg",
        type: "Master"
    },
    {
        title: "Data Scientist",
        org: "UNBOUND PROMETHEUS (Kavala, Greece)",
        date: "Jul 2022 - Aug 2022",
        desc: "As a Data Scientist in the UNBOUND PROMETHEUS program, I applied advanced data science to heavy machinery in the mining and construction sectors. Under the guidance of Professor Paul O’Leary, I analyzed complex, real-world multivariate time-series (MVTS) data, gaining expertise in AI and Data Architecture. This included designing Cyber-Physical Systems, applying hybrid ML models like LSTM-VAEs and PCA, and managing secure data infrastructure (Data Warehouses, SFTP). The program successfully bridged advanced academic research with practical industry challenges.",
        image: "/resources/img/4.jpeg",
        type: "Internship"
    },
    {
        title: "Beta Microsoft Learn Student Ambassador (Azure Cloud & AI/Data Architecture)",
        org: "Global (Hybrid)",
        date: "Jul 2023 – May 2025",
        desc: "As a Microsoft Learn Student Ambassador specializing in Cloud Solutions Architecture and AI/Data Engineering, I bridge academic theory with practical application on the Azure platform. I lead peers in building end-to-end, ethical AI solutions using services like AI Search, Computer Vision, and Text Analytics for Health. Beyond technical workshops, I foster a global learning community by mentoring new Ambassadors and collaborating with faculty, empowering my peers to design the secure, scalable, and sound cloud architectures of the future.",
        image: "/resources/img/3.jpg",
        type: "Part-time"
    },
    {
        title: "Product Manager & Software Engineer",
        org: "D-PBL Erasmus+ (Lisbon, Portugal - Remote)",
        date: "Mar 2024 - May 2024",
        desc: "As Product Manager and Analysis Lead for the D-PBL Erasmus+ initiative, I led a 3-month international project to enhance railway accessibility. Leveraging my expertise as a Solution Architect and Compliance Leader, I guided the end-to-end product lifecycle, combining strategic product management and backlog organization with hands-on software engineering. I successfully coordinated this remote, Agile team to ensure our solution was technically sound, met key accessibility standards, and achieved all project deliverables.",
        image: "/resources/img/2.png",
        type: "Internship"
    },
    {
        title: "Product & Project Coordinator",
        org: "Startup Week Patras (Greece)",
        date: "Oct 20–25, 2024",
        desc: "As a core volunteer organizer for Startup Week Patras 2024, I provided key project coordination and organizational support, engaging with the end-to-end product lifecycle. I managed logistics for sessions on product validation, UX, and AI, while facilitating engagement with stakeholders from leading firms like PwC and Yodiwo. This experience allowed me to directly support the local entrepreneurial ecosystem by bridging high-level business goals with practical execution and stakeholder management.",
        image: "/resources/img/1.jpg",
        type: "Volunteering"
    }
];
