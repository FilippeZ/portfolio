
export const projects = [
    {
        id: "zenithdx-data",
        title: "ZenithDx: Class IIb Regulatory Architecture & Clinical Orchestration",
        category: "Regulatory Architecture (SaMD)",
        brief: "A technical deep-dive into the regulatory architecture of a Class IIb SaMD clinical co-pilot. I architected the integration of ISO 14971 Risk Management into an Agentic AI pipeline, mapping clinical hazards to automated safety gates within a LangGraph-orchestrated inference engine. The goal was to provide high-authority XAI evidence that satisfies both MDR transparency mandates and the EU AI Act's requirements for high-risk systems, ensuring the 'institutional survival' of the product through the audit and into the market.",
        date: "2025",
        client: "Emergency Departments",
        tools: ["ISO 14971", "IEC 62304", "LangGraph", "XAI", "MDR Compliance", "Agentic AI", "Clinical Risk", "Audit Trails"],
        link: "https://zenithdx-data.com",
        gallery: ["/resources/img/portfolios/web/1.jpg", "/resources/img/portfolios/zenith/z1.jpg", "/resources/img/portfolios/zenith/z2.jpg"],
        image: "/resources/img/portfolios/web/1.jpg"
    },
    {
        id: "deafnav",
        title: "DeafNav: IoT Accessibility & EU Legislative Policy Integration",
        category: "AI Governance & Policy",
        brief: "Lead Product Manager & Analysis lead for a multi-national railway accessibility initiative. This project didn't just build technology; it translated European accessibility directives into a technical roadmap for real-time sign language avatars. I served as the bridge between technical sensor networks and the 'Public Officer' persona, ensuring the solution aligned with local legislative requirements and cross-border technical standards to facilitate institutional adoption across five EU member states.",
        date: "2024",
        client: "EU Erasmus+",
        tools: ["IoT", "WCAG 2.1", "Public Policy", "Accessibility", "Cross-border Logistics", "Stakeholder Management", "Agile", "User Experience"],
        link: "https://deafnav.eu",
        gallery: ["/resources/img/portfolios/app/1.jpg", "/resources/img/portfolios/prod/pr1.jpg", "/resources/img/portfolios/prod/pr2.jpg"],
        image: "/resources/img/portfolios/app/1.jpg"
    },
    {
        id: "dermagnosis-fl",
        title: "DermaGnosis: Federated Learning & GDPR Privacy-by-Design Validation",
        category: "Regulatory Architecture (SaMD)",
        brief: "Architected a privacy-preserving Federated Learning platform for early melanoma detection, emphasizing 'Privacy-by-Design' (GDPR Article 25). I redefined the technical challenge as a regulatory one: ensuring PHI never leaves hospital servers while maintaining diagnostic accuracy. By utilizing Bayesian Networks for decentralized training, I delivered a technical proof-of-concept for 'Sovereign Healthcare' AI that is legally bulletproof and ready for institutional deployment.",
        date: "2025",
        client: "Cancer Research Consortium",
        tools: ["GDPR", "Federated Learning", "Privacy-by-Design", "Bayesian Networks", "Data Residency", "Hybrid Cloud", "Medical Imaging", "MDR Annex I"],
        link: "https://fl-melanoma.org",
        gallery: ["/resources/img/portfolios/logo/2.jpg", "/resources/img/portfolios/fl/fl1.jpg", "/resources/img/portfolios/fl/fl2.jpg"],
        image: "/resources/img/portfolios/logo/2.jpg"
    },
    {
        id: "travel-db",
        title: "Relational Data Integrity Layer for High-Stakes Operations",
        category: "Technical Validation Logic",
        brief: "I architected a robust relational database management system where the focus was 'Data Integrity as a Service'. Beyond modeling, I engineered a logic layer using MySQL Stored Procedures and Triggers to enforce rigid integrity constraints and business rules directly at the source. This architecture ensures that all operational data is verifiable and audit-ready, providing a foundational toolset for high-stakes reservation systems where data failure is not an option.",
        date: "2024",
        tools: ["MySQL", "Java Swing", "JDBC", "Stored Procedures", "Triggers", "ERD", "Normalization", "ETL", "Data Integrity", "Constraints"],
        link: "https://traveldb.app",
        gallery: ["/resources/img/portfolios/web/5.jpg"],
        image: "/resources/img/portfolios/web/5.jpg"
    },
    {
        id: "etl-covid",
        title: "End-to-End ETL Pipeline for Economic Impact Validation",
        category: "Technical Validation Logic",
        brief: "Architected a high-integrity data analysis pipeline to validate commercial impacts for global transport strategies. I implemented a robust ETL process using Python (Pandas) that didn't just transform data, but 'scrubbed' it to ensure accuracy for BI reporting. This project demonstrated the ability to deliver actionable, high-authority insights from heterogeneous data sources, providing stakeholders with validated evidence to optimize supply chain resilience.",
        date: "2023",
        tools: ["Python", "Pandas", "NumPy", "MySQL", "Matplotlib", "ETL", "Data Cleaning", "Validation"],
        link: "https://covid-etl.io",
        gallery: ["/resources/img/portfolios/web/3.jpeg"],
        image: "/resources/img/portfolios/web/3.jpeg"
    },
    {
        id: "genomic",
        title: "Genomic Data Quality & Bioinformatics Governance Pipeline",
        category: "Technical Validation Logic",
        brief: "Spearheaded the development of a comprehensive data access and analysis strategy for large-scale biological data. I implemented stringent data quality and governance protocols for Next-Generation Sequencing (NGS) data, using FastQC to establish automated filtration pipelines based on Phred quality thresholds. This project frames bioinformatics as a 'Data Governance' challenge, ensuring the purity and auditability of sequences for advanced genomic research.",
        date: "2024",
        tools: ["Biopython", "Entrez", "MEME Suite", "FastQC", "NGS", "Governance", "Quality Thresholds"],
        link: "https://genomic-pipeline.org",
        gallery: ["/resources/img/portfolios/web/2.jpg"],
        image: "/resources/img/portfolios/web/2.jpg"
    },
    {
        id: "indexing-poc",
        title: "Multidimensional Indexing PoC for High-Performance Clinical Search",
        category: "Mission-Critical Systems",
        brief: "Executed a practical Proof of Concept to define the optimal search strategy for complex spatial and clinical data. I architected and benchmarked multidimensional solution designs (K-D Trees, Octrees) and implemented ANN solutions using Locality-Sensitive Hashing. The final strategic recommendation provided a validated roadmap for high-performance querying that balances speed with memory footprints for enterprise-scale clinical environments.",
        date: "2024",
        tools: ["Python", "NumPy", "LSH", "MinHash", "K-D Tree", "Benchmarking", "Profiling"],
        link: "https://indexing-poc.com",
        gallery: ["/resources/img/portfolios/web/6.jpg"],
        image: "/resources/img/portfolios/web/6.jpg"
    },
    {
        id: "azure-mesh",
        title: "Azure Real-Time Clinical Data Mesh & Governance Infrastructure",
        category: "Mission-Critical Systems",
        brief: "Architected a real-time clinical data mesh on Azure, focusing on decentralized data ownership combined with centralized governance. I mapped the Azure Well-Architected Framework to ensure the persistence and reliability of clinical streams, providing a blueprint for data residency and institutional sovereignty in healthcare cloud environments.",
        date: "2024",
        tools: ["Azure", "Data Mesh", "Real-Time", "Governance"],
        link: "#",
        gallery: ["/resources/img/portfolios/web/7.png"],
        image: "/resources/img/portfolios/web/7.png"
    },
    {
        id: "zenithdx-ai",
        title: "ZenithDx – High-Performance Agentic Clinical Co-Pilot",
        category: "Regulatory Architecture (SaMD)",
        brief: "I architected ZenithDx, a high-performance agentic AI system deployed on NVIDIA DGX infrastructure. This project wasn't just about building an LLM; it was about engineering a system that survives clinical scrutiny. I implemented robust XAI mechanisms and iterative ReAct loops to ensure all clinical reports are interpretable and auditable, effectively 'validating' the future of clinical AI deployment for high-stakes environments.",
        date: "2025",
        tools: ["LangGraph", "Llama 3.2", "NVIDIA DGX", "XAI", "ReAct", "RAG", "HITL"],
        link: "https://zenithdx.ai",
        gallery: ["/resources/img/portfolios/logo/1.jpg"],
        image: "/resources/img/portfolios/logo/1.jpg"
    },
    {
        id: "wgan-telco",
        title: "WGAN-GP Architecture for Privacy-Preserving Synthetic Traffic",
        category: "Regulatory Architecture (SaMD)",
        brief: "Designed a secure, data-centric solution for generating realistic synthetic time-series data for 5G traffic. By implementing WGAN-GP, I enabled the generation of high-fidelity data that satisfies privacy constraints, allowing for the simulation and validation of 5G network performance without compromising real-user data integrity.",
        date: "2024",
        tools: ["PyTorch", "WGAN-GP", "Synthetic Data", "Privacy", "5G"],
        link: "https://wgan-telco.ai",
        gallery: ["/resources/img/portfolios/logo/3.png"],
        image: "/resources/img/portfolios/logo/3.png"
    },
    {
        id: "azure-ai-studio",
        title: "Mission-Critical Healthcare AI Platform on Azure Studio",
        category: "Mission-Critical Systems",
        brief: "Translated complex healthcare requirements into a high-value PaaS solution on Azure AI Studio. I architected the integration of OpenAI GPT-4 with clinical text analytics and HITL playgrounds, ensuring that the platform satisfies institutional security requirements while delivering state-of-the-art multimodal clinical reasoning.",
        date: "2025",
        tools: ["Azure AI Studio", "GPT-4", "UMLS", "Document Intelligence", "HITL", "Multimodal"],
        link: "https://azure-ai.health",
        gallery: ["/resources/img/portfolios/card/2.png"],
        image: "/resources/img/portfolios/card/2.png"
    },
    {
        id: "azure-security",
        title: "Architectural Risk Analysis & Zero-Trust Cloud Security Design",
        category: "Mission-Critical Systems",
        brief: "Performed deep architectural reviews of security vulnerabilities for mission-critical healthcare systems. I aligned the platform with the Azure Well-Architected Framework's Security pillar, designing IAM, FIDO2, and Threat Modeling components to ensure that clinical data is protected by the highest institutional security standards.",
        date: "2024",
        tools: ["Entra ID", "Zero Trust", "Threat Modeling", "FIDO2", "Security Pillar"],
        link: "https://azure-sec.health",
        gallery: ["/resources/img/portfolios/card/3.png"],
        image: "/resources/img/portfolios/card/3.png"
    },
    {
        id: "zenithdx-pm",
        title: "ZenithDx – Strategic Product Orchestration & Full Lifecycle",
        category: "Strategic Engineering Coordination",
        brief: "Led the end-to-end product lifecycle for the ZenithDx co-pilot, serving as the bridge between clinicians, AI engineers, and hospital stakeholders. I managed the backlog through a regulatory lens, ensuring that every sprint deliverable was aligned with both clinical needs and future MDR/AI Act submission requirements.",
        date: "2025",
        tools: ["Jira", "Agile", "MDR Strategy", "XAI", "Stakeholder Management", "Acceptance Score"],
        link: "https://zenithdx-pm.com",
        gallery: ["/resources/img/portfolios/app/2.jpeg"],
        image: "/resources/img/portfolios/app/2.jpeg"
    },
    {
        id: "xai-gov",
        title: "XAI Governance Framework for Auditable, High-Risk Systems",
        category: "AI Governance & Policy",
        brief: "Operationalized a comprehensive AI governance framework to mitigate 'black box' risks in clinical software. I implemented XAI controls using SHAP and Captum, ensuring that all AI-driven decisions are auditable and satisfy GDPR and EU AI Act mandates for high-risk clinical systems.",
        date: "2025",
        tools: ["SHAP", "Captum", "GDPR", "EU AI Act", "Audit Trail", "Governance Framework"],
        link: "httpsnias://xai-gov.eu",
        gallery: ["/resources/img/portfolios/icon/11.jpg"],
        image: "/resources/img/portfolios/icon/11.jpg"
    },
    {
        id: "knn-parallel",
        title: "Hybrid Parallel k-NN: Algorithmic Integrity & Stress Testing",
        category: "Technical Validation Logic",
        brief: "Optimized brute-force k-NN regression for deployment in computationally constrained environments. I reframed this as a 'Reliability' challenge, using OpenMP and MPI to ensure that parallelized workloads maintain perfect logic integrity under high-concurrency stress. This demonstrates the ability to validate algorithmic performance in mission-critical edge scenarios.",
        date: "2024",
        tools: ["C++", "OpenMP", "MPI", "Parallelism", "Stress Testing", "IDW", "k-NN"],
        link: "https://knn-parallel.com",
        gallery: ["/resources/img/portfolios/logo/4.jpg"],
        image: "/resources/img/portfolios/logo/4.jpg"
    },
    {
        id: "mpi",
        title: "Distributed ML Architectures: Matrix Integrity Validation",
        category: "Technical Validation Logic",
        brief: "Engineered parallel matrix multiplication programs using MPI, focusing on the auditability of distributed workloads. By implementing Ring Topologies and Cartesian Grids for sub-blocking, I established a framework for validating that large-scale ML computations remain synchronized and logically sound across decentralized nodes.",
        date: "2024",
        tools: ["C", "MPI", "Distributed Systems", "Logic Integrity", "HPC"],
        link: "https://mpi-distributed.com",
        gallery: ["/resources/img/portfolios/logo/8.jpg"],
        image: "/resources/img/portfolios/logo/8.jpg"
    },
    {
        id: "hybrid-network",
        title: "IaaS/PaaS Core Infrastructure: Connectivity Validation",
        category: "Mission-Critical Systems",
        brief: "Designed and simulated complex hybrid networking architectures to validate connectivity for enterprise-scale migrations. I leveraged OSPF, eBGP, and ExpressRoute to ensure that institutional data flows remain secure and persistent, providing a verified blueprint for sovereign cloud networking.",
        date: "2024",
        tools: ["GNS3", "OSPF", "eBGP", "ExpressRoute", "IaaS/PaaS", "Core Infrastructure"],
        link: "https://hybrid-net.io",
        gallery: ["/resources/img/portfolios/card/4.jpg"],
        image: "/resources/img/portfolios/card/4.jpg"
    },
    {
        id: "4g-simulation",
        title: "Distributed Systems Modeling: Architectural Performance Audit",
        category: "Mission-Critical Systems",
        brief: "Modeled architectural trade-offs for distributed 4G LTE systems. I analyzed UE mobility and handover costs through a 'Reliability' lens, providing validated performance metrics that ensure network stability during high-stakes institutional operations.",
        date: "2024",
        tools: ["Python", "NumPy", "Network Modeling", "Distributed Systems", "Performance Audit"],
        link: "https://4g-sim.com",
        gallery: ["/resources/img/portfolios/card/5.jpeg"],
        image: "/resources/img/portfolios/card/5.jpeg"
    },
    {
        id: "linux-devops",
        title: "Linux Compute & DevOps: Audit-Ready Deployment Pipelines",
        category: "Mission-Critical Systems",
        brief: "Developed automated Linux compute solutions focusing on process scheduling and IPC integrity. I implemented fork() and semaphore logic to ensure that mission-critical background tasks are auditable and resilient, laying the foundation for zero-failure DevOps environments.",
        date: "2024",
        tools: ["Bash", "C", "IPC", "Semaphores", "DevOps", "Scheduling"],
        link: "https://linux-devops.io",
        gallery: ["/resources/img/portfolios/card/1.jpg"],
        image: "/resources/img/portfolios/card/1.jpg"
    },
    {
        id: "ux-klm",
        title: "Product Quality Validation: Quantitative Usability Auditing",
        category: "Strategic Engineering Coordination",
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
        category: "Strategic Engineering Coordination",
        brief: "Managed white-box testing strategies for validating complex product logic. I applied cyclomatic complexity and basis path analysis to 'audit' software paths, ensuring that all logical branches are verified and development risks are mitigated through evidence-based QA.",
        date: "2024",
        tools: ["White-Box Testing", "Path Analysis", "Risk Management", "QA Strategy"],
        link: "https://whiteboxer.qa",
        gallery: ["/resources/img/portfolios/app/3.jpg"],
        image: "/resources/img/portfolios/app/3.jpg"
    },
    {
        id: "csr-ai",
        title: "Institutional Policy Design: Ethical AI & CSR Governance",
        category: "AI Governance & Policy",
        brief: "Co-developed a governance framework for the Nikos Analytis CSRHELLAS competition, aligning AI strategies with UN Sustainable Development Goals. I focused on translating ethical mandates into actionable policy design to ensure institutional accountability in social and corporate governance.",
        date: "2024",
        tools: ["Policy Design", "UN SDGs", "CSR", "Ethical AI Governance"],
        link: "https://csr-ai.gr",
        gallery: ["/resources/img/portfolios/icon/2.jpg"],
        image: "/resources/img/portfolios/icon/2.jpg"
    },
    {
        id: "bigdata-ethics",
        title: "Regulatory Auditability: Big Data Ethics & Accountability Review",
        category: "AI Governance & Policy",
        brief: "Conducted a deep-dive analysis of ethical and regulatory risks in 'Big Data Ethics' (Zwitter). I identified power structures within data management and proposed accountability framework revisions to ensure institutional accountability in social and corporate governance.",
        date: "2024",
        tools: ["Regulatory Review", "Policy Oversight", "Ethics Framework"],
        link: "https://bigdata-ethics.org",
        gallery: ["/resources/img/portfolios/icon/10.jpeg"],
        image: "/resources/img/portfolios/icon/10.jpeg"
    },
    {
        id: "zenithdx-gov",
        title: "Governance-by-Design: Clinical AI Compliance Framework",
        category: "Regulatory Architecture (SaMD)",
        brief: "Designed and operationalized a 'Governance-by-Design' framework for high-risk clinical AI. I integrated ISO 14971 and IEC 62304 mandates into a self-hosted PHI environment, ensuring that the ZenithDx system remains auditable, compliant, and ready for institutional legacy.",
        date: "2025",
        tools: ["ISO 14971", "IEC 62304", "Compliance Roadmap", "Governance-by-Design"],
        link: "https://zenithdx-gov.com",
        gallery: ["/resources/img/portfolios/icon/9.jpg"],
        image: "/resources/img/portfolios/icon/9.jpg"
    },
    {
        id: "edge-ai",
        title: "Edge AI Agent: Real-Time Clinical & Operational Safety Validation",
        category: "Regulatory Architecture (SaMD)",
        brief: "Architected an Edge AI agent for real-time risk mitigation in clinical environments. I focused on validating the inference reliability of local 'Small Language Models' to ensure that operational safety is maintained even in disconnected states, satisfying the highest standards for clinical fault tolerance.",
        date: "2024",
        tools: ["Edge AI", "SLMs", "Safety Validation", "Clinical Fault Tolerance"],
        link: "#",
        gallery: ["/resources/img/portfolios/logo/5.png"],
        image: "/resources/img/portfolios/logo/5.png"
    },
    {
        id: "zencloud",
        title: "ZenithDx: Hybrid AI Platform & High-Performance Cloud Architecture",
        category: "Mission-Critical Systems",
        brief: "Designed the end-to-end hybrid architecture for the ZenithDx platform. I focused on alignment with the Azure Well-Architected Framework's pillars of 'Performance Efficiency' and 'Reliability', ensuring that the scaling of GPU-intensive Agentic AI workloads is legally and technically persistent.",
        date: "2024",
        tools: ["Azure Arc", "NVIDIA DGX", "Hybrid Cloud", "Performance Efficiency"],
        link: "https://zencloud.ai",
        gallery: ["/resources/img/portfolios/card/15.jpg"],
        image: "/resources/img/portfolios/card/15.jpg"
    },
    {
        id: "azurecloud",
        title: "Clinical Data Platform: Well-Architected Regulatory Optimization",
        category: "Mission-Critical Systems",
        brief: "Performed a deep-dive optimization of a clinical data platform to satisfy institutional 'Persistence' mandates. I re-architected the storage and retrieval layers to ensure audit-ready availability, mapping technical performance directly to regulatory submission requirements.",
        date: "2024",
        tools: ["Azure Well-Architected", "Data Persistence", "Regulatory Auditability"],
        link: "#",
        gallery: ["/resources/img/portfolios/card/16.jpg"],
        image: "/resources/img/portfolios/card/16.jpg"
    },
    {
        id: "casm",
        title: "CASM Platform: Integrated Clinical & Administrative Service Architecture",
        category: "Strategic Engineering Coordination",
        brief: "Orchestrated the architectural design of a Clinical & Administrative Service Management (CASM) platform. I served as the technical bridge ensuring that administrative data workflows are synchronized with clinical safety standards, establishing a unified lifecycle for institutional resource governance.",
        date: "2024",
        tools: ["CASM", "Service Management", "Governance Integration"],
        link: "#",
        gallery: ["/resources/img/portfolios/app/6.jpg"],
        image: "/resources/img/portfolios/app/6.jpg"
    },
    {
        id: "startup-week",
        title: "High-Impact Project Coordination: Institutional Stakeholder Engagement",
        category: "Strategic Engineering Coordination",
        brief: "Managed strategic coordination for Startup Week Patras, facilitating technical engagement between innovators and institutional stakeholders (PwC, Yodiwo). I reframed project management as 'Lifecycle Orchestration', ensuring that technical validation sessions were aligned with high-level business governance.",
        date: "2024",
        tools: ["Stakeholder Management", "Lifecycle Orchestration", "Strategic Coordination"],
        link: "https://startupweek.patras",
        gallery: ["/resources/img/portfolios/app/5.jpg"],
        image: "/resources/img/portfolios/app/5.jpg"
    },
    {
        id: "newgov",
        title: "Clinical AI Governance: Policy Design & Bias Monitoring Pipeline",
        category: "AI Governance & Policy",
        brief: "Architected an automated pipeline for monitoring bias and policy drift in clinical AI agents. I implemented technical audit trails to ensure that model outputs remain within defined ethical boundaries, providing the high-authority evidence needed for institutional sign-off on high-risk clinical deployments.",
        date: "2024",
        tools: ["Bias Monitoring", "Policy Design", "Audit Trails", "Ethics Governance"],
        link: "#",
        gallery: ["/resources/img/portfolios/icon/4.jpg"],
        image: "/resources/img/portfolios/icon/4.jpg"
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
        title: "IAPP Certified AI Governance Professional (AIGP)",
        org: "International Association of Privacy Professionals",
        date: "Expected Jun 2026",
        desc: "Pursuing advanced certification in AI governance to master the intersection of privacy, compliance, and ethical AI deployment.",
        image: "/fotogra/IAPP%20Certified%20AI%20Governance%20Professional%20(AIGP).jpeg",
        type: "Certification"
    },
    {
        title: "Microsoft Certified: Azure AI Engineer Associate",
        org: "Microsoft",
        date: "Mar 2026",
        desc: "Mastering the design and implementation of AI solutions on Azure, focusing on NLP, Computer Vision, and Generative AI integration.",
        image: "/fotogra/Azure%20AI%20Engineer%20Associate.png",
        type: "Certification"
    },
    {
        title: "Microsoft Certified: AI Product Manager",
        org: "Microsoft",
        date: "Jan 2026",
        desc: "Transitioned from technical implementation to strategic 'Why,' leveraging Microsoft’s methodology to align code with business objectives. I manage AI products as dynamic ecosystems, ensuring that innovation across the lifecycle is grounded in safety, ethics, and scalability for real-world market impact.",
        image: "/fotogra/AI%20Product%20Manager.jpg",
        type: "Certification"
    },
    {
        title: "Microsoft European Digital Commitment Day",
        org: "Strategic Delegate (Vienna, Austria)",
        date: "Nov 2025",
        desc: "Strategic Delegate analyzing EU Sovereign Innovation and Data Residency. The event highlighted the shift to 'Digital Resilience'—a unified European digital fortress where innovation and compliance are twin pillars. Gained critical insights on architecting for speed within complex regulatory and geopolitical landscapes.",
        image: "/fotogra/microsoft%20european%20digital%20commitment%20day.jpeg",
        type: "Event"
    },
    {
        title: "ISO 13485 & IEC 62304 Compliance",
        org: "In Progress",
        date: "In Progress",
        desc: "Focusing on quality management systems for medical devices and software life cycle processes, aiming to become PRRC and Product Manager for medical software.",
        image: "/fotogra/compliance.jpg",
        type: "Certification"
    },
    {
        title: "Research Ethics & Compliance (Human Research - Data Privacy)",
        org: "MIT Affiliates",
        date: "Sep 2024",
        desc: "Attained certification in the ethical conduct of research involving human subjects and data privacy protocols.",
        image: "/fotogra/citi.jpg",
        type: "Certification"
    },
    {
        title: "Cornell University Leadership Program",
        org: "MEXOXO",
        date: "Dec 2023",
        desc: "Completed an intensive leadership development program focused on empowering social impact and innovation.",
        image: "https://upload.wikimedia.org/wikipedia/commons/4/47/Cornell_University_seal.svg",
        type: "Certificate"
    },
    {
        title: "Certificate: Elements of AI",
        org: "University of Helsinki & MinnaLearn",
        date: "Apr 2023",
        desc: "Completed foundational course on AI, its implications, and practical applications.",
        image: "/resources/img/elements/university-of-helsinki-dark-logo.jpg",
        type: "Certificate"
    },
    {
        title: "Microsoft Certified: Azure AI Fundamentals (AI-900)",
        org: "Microsoft",
        date: "Apr 2023",
        desc: "Validated foundational knowledge of machine learning and artificial intelligence concepts and their implementation on Microsoft Azure.",
        image: "https://media.licdn.com/dms/image/v2/D5610AQHuo6Pb0vttaQ/image-shrink_1280/B56ZXlAfBHGUAM-/0/1743303865722?e=2147483647&v=beta&t=zg6146CQNJUbkbCacu5snlYK71UP4Rpi3zlDkkwpb2A",
        type: "Certification"
    },
    {
        title: "8th CSR Competition",
        org: "Competition Participant",
        date: "Feb 12, 2023 — Feb 6, 2024",
        desc: "Supported by the European Parliament Office in Greece, I developed AI-driven Corporate Social Responsibility (CSR) strategies for CSR HELLAS, ensuring alignment with the UN Sustainable Development Goals (SDGs) and placing a special focus on SDG#17 (Partnership for the Goals) as a key enabler for the 2030 agenda.",
        image: "/resources/img/elements/csr.jpg",
        type: "Competition"
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
        title: "NVIDIA GTC 2023: Accelerated Computing & AI",
        org: "Event Attendee",
        date: "Mar 21, 2023",
        desc: "Explored generative AI, robotics, Industrial Metaverse, and DGX labs. Featured keynotes by Jensen Huang and leaders from OpenAI.",
        image: "/resources/img/elements/nvidia.jpg",
        type: "Conference"
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
        title: "Microsoft Envision Greece",
        org: "Event Attendee",
        date: "Jun 29, 2022",
        desc: "Engaged with digital leaders on transformation, post-pandemic acceleration, cybersecurity, and tech sustainability.",
        image: "/fotogra/Microsoft%20Envision%20Greece.jpg",
        type: "Event"
    },
    {
        title: "Microsoft Datacenter Experience: Virtual Tour",
        org: "Participant",
        date: "Jun 7, 2022",
        desc: "Completed an interactive 3D tour of Azure datacenter design, AI accelerators (Maia, Cobalt), sustainability, and global operations.",
        image: "https://www.cnet.com/a/img/resize/94d603762d21e9a002300bdea0d93a5e133a7e16/hub/2009/10/07/10556205-f0fe-11e2-8c7c-d4ae52e62bcc/CH1245.jpg?auto=webp&width=1200",
        type: "Virtual Tour"
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
        title: "Advanced Industrial AI & Data Engineering",
        org: "F.H.L. I. KIRIAKIDIS Group | Kavala, Greece (On-site)",
        date: "Jul 2022 – Aug 2022",
        desc: "Under the auspices of the UNBOUND PROMETHEUS scholarship, I applied advanced algorithms to real-world, large-scale industrial data, managing logistics for 330,000 tons of marble. Utilizing the KDD (Knowledge Discovery in Databases) cycle and IQR-based anomaly detection, I identified and resolved three critical bottlenecks in the production process, ensuring operational continuity. This experience acted as a catalyst for my shift toward Quality Assurance (QA) and Process Validation in high-stakes environments.",
        image: "/resources/img/4.jpeg",
        type: "Internship"
    },
    {
        title: "Azure AI Engineer & Solutions Advocate",
        org: "Microsoft (Beta Student Ambassador) | Global (Hybrid)",
        date: "Jul 2023 – Jan 2026",
        desc: "In this leadership role, I functioned as a Cloud Governance Architect, training over 125 specialists in Azure AI orchestration and Responsible AI. My contribution focused on designing solutions that promote Sovereign Data Residency, ensuring that cloud utilization aligns fully with GDPR and the EU AI Act. Through algorithmic bias mitigation and risk management, I bridged the gap between raw technological power and regulatory ethics.",
        image: "/resources/img/3.jpg",
        type: "Ambassador"
    },
    {
        title: "Technical Product Manager & Solution Architect",
        org: "D-PBL Erasmus+ | Lisbon, Portugal (Remote)",
        date: "Mar 2024 – May 2024",
        desc: "I led a multinational team of 10+ experts from five European countries to develop the 'DeafNav' project, an IoT infrastructure designed for the safety of deaf travelers. Acting as the 'bridge' between Policy and Engineering, I translated European accessibility directives into WCAG technical specifications using Agile Scrum methodology. My proficiency in precise sprint planning led to the delivery of a functional prototype in just three months, earning international leadership accolades.",
        image: "/resources/img/2.png",
        type: "Internship"
    },
    {
        title: "Technical AI Product Lead & Engineer (ZenithDx)",
        org: "University of Patras, Greece",
        date: "Aug 2024 – Oct 2025",
        desc: "I took the technical lead of ZenithDx, transforming academic research into a High-Risk AI Medical Device ready for MDR certification. I integrated cutting-edge technologies such as Agentic Frameworks (ReAct loops) and Explainable AI (XAI) (SHAP, Grad-CAM), allowing the system to not only diagnose with 96%+ accuracy but also explain its decision-making process. My 'Compliance-by-Design' approach ensured the product met the transparency requirements of GDPR and the EU AI Act, making it a benchmark for safe and auditable medical software.",
        image: "/resources/img/portfolios/logo/1.jpg", // Using ZenithDx logo
        type: "Lead Engineer"
    },
    {
        title: "Technical Program Lead",
        org: "Startup Week 2024 | Patras, Greece",
        date: "Oct 20 – 25, 2024",
        desc: "Serving as the Technical Program Lead, I spearheaded the technical design and coordination of one of the region's most significant entrepreneurship events. My role went beyond standard programming; I managed the technical program flow and coordinated cross-functional teams, solidifying my profile as a Technical Authority. The event's success demonstrated my ability to inspire the local tech community and turn organizational challenges into innovation opportunities.",
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
        title: "Public Policy Task Force Member",
        org: "European Young Engineers (EYE) | Europe (Hybrid)",
        date: "Feb 2026 – Present",
        desc: "In this institutional role, I act as a Technical Authority shaping the European strategy for young engineers. I bridge the gap between innovation and legislation by drafting Position Papers and providing technical briefings to Members of the European Parliament (MEPs) regarding the EU AI Act and MDR. My mission focuses on promoting Sovereign Innovation, ensuring Europe remains a technological leader while maintaining strict data sovereignty.",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Flag_of_Europe.svg",
        type: "Policy Advisor"
    }
];
