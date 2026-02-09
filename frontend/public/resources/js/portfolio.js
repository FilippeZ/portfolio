/**
 * ZenithDx Portfolio Interactive Module
 * Executive Edition — 2025
 *
 * Features:
 * • MixItUp filtering with live controls
 * • Swiper.js cube-effect gallery
 * • Dynamic, accessible modal with spring-scale animation
 * • Keyboard navigation + focus management
 * • Reduced motion support
 * • Graceful fallbacks & error handling
 *
 * @version 2.6.0 (Final Subdirectory Pathing Fix)
 * @author ZenithDx
 */
(() => {
    "use strict";
    // =============================================
    // 1. CONFIG & CONSTANTS
    // =============================================
    const SELECTORS = {
        mixContainer: ".mymixcont",
        mixTarget: ".mix",
        modal: ".tip",
        description: ".description",
        portContent: ".port_content",
        swiperWrapper: ".tip .swiper-wrapper",
        exitBtn: ".exitButton",
        closeBtn: ".closeButton",
        filterBtn: ".filter"
    };
    const CLASSES = {
        modalOpen: "view",
        filterActive: "mixitup-control-active",
        iconActive: "active"
    };

    //
    // <<< --- FIX #1: ΟΡΙΖΟΥΜΕ ΤΟΝ ΒΑΣΙΚΟ ΦΑΚΕΛΟ --- >>>
    //
    const BASE_PATH = "/COMPLETE-PORTFOLIO-WEBSITE";
    //

    // =============================================
    // 2. DOM CACHE & VALIDATION
    // =============================================
    const $ = (sel, ctx = document) => ctx.querySelector(sel);
    const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const elements = {
        mixContainer: $(SELECTORS.mixContainer),
        modal: $(SELECTORS.modal),
        description: $(SELECTORS.description),
        portContent: $(SELECTORS.portContent),
        swiperWrapper: $(SELECTORS.swiperWrapper),
        exitBtn: $(SELECTORS.exitBtn),
        closeBtn: $(SELECTORS.closeBtn),
        filterBtns: $$(SELECTORS.filterBtn)
    };
    const required = ["mixContainer", "modal", "swiperWrapper", "exitBtn", "closeBtn", "description"];
    const missing = required.filter(key => !elements[key]);
    if (missing.length) {
        console.warn(`Portfolio Module: Missing elements → .${missing.join(", .")}`);
        return;
    }

    // =============================================
    // 3. MIXITUP FILTER INITIALIZATION
    // =============================================
    let mixer;
    try {
        mixer = mixitup(elements.mixContainer, {
            selectors: { target: SELECTORS.mixTarget },
            animation: {
                duration: 750,
                easing: "cubic-bezier(0.16, 0.68, 0.32, 1)",
                effects: "fade rotateY(90deg) stagger(100ms)",
                reverseOut: true,
                nudge: false
            },
            controls: { live: true },
            callbacks: {
                onMixStart: () => document.body.style.pointerEvents = "none",
                onMixEnd: () => document.body.style.pointerEvents = ""
            }
        });
        // Sync active filter button
        elements.filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                elements.filterBtns.forEach(b => b.classList.remove(CLASSES.filterActive));
                btn.classList.add(CLASSES.filterActive);
            });
        });
    } catch (err) {
        console.error("MixItUp failed to initialize:", err);
    }

    // =============================================
    // 4. SWIPER GALLERY INITIALIZATION
    // =============================================
    let swiper;
    try {
        swiper = new Swiper(".swiper-container-2", {
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: 1,
            effect: "cube",
            cubeEffect: {
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94
            },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev"
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                hide: true
            },
            keyboard: { enabled: true },
            a11y: {
                prevSlideMessage: "Previous image",
                nextSlideMessage: "Next image"
            }
        });
    } catch (err) {
        console.error("Swiper failed to initialize:", err);
    }

    // =============================================
    // 5. PROJECT DATA REPOSITORY (Centralized & Immutable)
    // =============================================
    const PROJECTS = Object.freeze({
        // DATA & ANALYTICS (6 projects)
        "zenithdx-data": {
            title: "ZenithDx – Multimodal Data Orchestration",
            category: "Data & Analytics",
            brief: "As a data architect for ZenithDx, an advanced Clinical Decision Support System (CDSS), I designed a scalable, end-to-end multimodal data platform orchestrated by a central AI agent. This architecture integrates heterogeneous healthcare data sources, coordinating three parallel processing streams: 1) An Image Data Stream processing DICOM/PACS data via a hybrid S2A-UNet (for segmentation) and ResNet-50 (for classification) pipeline. 2) A Text Data Stream analyzing unstructured patient symptoms using a RAG architecture, which queries a FAISS/BM25 vector database (fed by medical literature) and is optimized with ColBERT. 3) A Structured Data Stream processing medical histories (EHR/HIS from sources like MIMIC-IV-ED), modeling them as a heterogeneous graph and analyzing them with a Heterogeneous Graph Transformer (HGT). The central data modeling framework established conceptual-to-physical models and ensured strong data governance and interoperability through standards like HL7, FHIR, and DICOM.",
            date: "2025",
            client: "Major Hospital Network",
            tools: "CDSS, S2A-UNet, ResNet-50, RAG, FAISS, BM25, ColBERT, HGT, HL7, FHIR, DICOM, MIMIC-IV-ED, MIMIC-CXR-JPG, SciBERT, BGE",
            link: "https://zenithdx-data.com",
            gallery: ["web/1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z2.jpg"]
        },
        "travel-db": {
            title: "Relational Database Architecture, Modeling, and Data Logic Layer Implementation",
            category: "Data & Analytics",
            brief: "I architected and delivered a robust, end-to-end relational database management system for a travel agency, defining the foundational data management toolset around MySQL and Java to support core operations and reservations. This required developing a comprehensive data modeling strategy, transitioning the solution from conceptual and logical design through to a highly normalized physical schema to enforce rigid data integrity and relationship constraints. I further engineered the data logic layer by implementing complex MySQL Stored Procedures and Triggers to automate core ETL functionalities and enforce critical business rules directly within the database environment. Finally, I provided technical oversight and actively collaborated with operational stakeholders (via a dedicated Java application interface) to ensure the final technical solution was fully validated and aligned with strategic business requirements for reporting and scalability.",
            date: "2024",
            client: "Global Travel Co",
            tools: "MySQL, Java Swing, JDBC, Stored Procedures, Triggers, ERD, Normalization, ETL, Data Integrity, Constraints, CRUD, Indexing, Query Optimization, Transactions, ACID",
            link: "https://traveldb.app",
            //
            // (Μπορείς να αφήσεις το "working fix" σου εδώ, θα δουλέψει)
            //
            gallery: ["web/5.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/database/db1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/database/db2.jpg"]
        },
        "etl-covid": {
            title: "End-to-End ETL Pipeline Architecture for Economic Impact Analytics",
            category: "Data & Analytics",
            brief: "I successfully architected and implemented an end-to-end data analysis pipeline designed to support the analytical strategy concerning the commercial impacts of the COVID-19 pandemic, focusing on efficiency and data integrity. This project involved designing the full ETL process where Python (Pandas) was instrumental for robust data cleaning, transformation, and complex aggregation (grouping by month, country, and transport mode) from heterogeneous sources. I orchestrated the loading of the cleaned data into a MySQL relational database, establishing a reliable and structured foundation capable of supporting ad-hoc queries and business intelligence (BI) reporting. Ultimately, this pipeline achieved strong business alignment by delivering clear, actionable insights through visualizations generated with Matplotlib that enabled stakeholders to quickly identify market trends and optimize their supply chain strategies.",
            date: "2023",
            client: "World Bank Partner",
            tools: "Python, Pandas, NumPy, MySQL, Matplotlib, Seaborn, Jupyter, ETL, Data Cleaning, Aggregation, Grouping, SQLAlchemy, CSV, JSON, Visualization",
            link: "https://covid-etl.io",
            gallery: ["web/3.jpeg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/covid/cov1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/covid/cov2.jpg"]
        },
        "genomic": {
            title: "Genomic Data Pipeline & Bioinformatics",
            category: "Data & Analytics",
            brief: "I spearheaded the development of a comprehensive data access and analysis strategy for processing large-scale biological data (DNA and protein sequences), defining the technical toolset to support advanced genomic research. This involved integrating Biopython (specifically the Entrez module) for programmatic data extraction and access from the GenBank database, enabling a structured approach to raw data intake. I architected the analytical pipeline to incorporate specialized bioinformatics tools, such as EMBOSS Needle for pairwise global sequence alignment and the MEME Suite for novel motif discovery in protein families. Crucially, I implemented stringent data quality and governance protocols for Next-Generation Sequencing (NGS) data, utilizing tools like FastQC to analyze Phred quality scores and establish automated filtration pipelines based on defined quality thresholds for raw FASTQ data.",
            date: "2024",
            client: "Genomics Research Lab",
            tools: "Biopython, Entrez, GenBank, EMBOSS, Needle, MEME Suite, FastQC, NGS, FASTQ, Phred, BLAST, ClustalW, SAMtools, BEDTools, VCF",
            link: "https://genomic-pipeline.org",
            gallery: ["web/2.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/bio/bio1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/bio/bio2.jpg"]
        },
        "indexing-poc": {
            title: "Multidimensional Indexing for High-Performance Analytics",
            category: "Data & Analytics",
            brief: "I successfully executed a practical Proof of Concept (PoC) to define the optimal analytical strategy for high-performance querying against complex multidimensional spatial and similarity data. This involved architecting and benchmarking multiple indexing solution designs, specifically implementing and evaluating K-D Trees, Octrees, Range Trees, and R-Trees for scalability in both k-Nearest Neighbors (kNN) and Range Queries. Furthermore, I designed and implemented an Approximate Nearest Neighbor (ANN) solution utilizing Locality-Sensitive Hashing (LSH) with MinHash to achieve fast text similarity search against a dataset of U.S. hospital reviews. The project culminated in delivering a final strategic recommendation that balanced query speed, memory footprint, and build time across all candidate data structures to support highly efficient production environments.",
            date: "2024",
            client: "Healthcare AI Startup",
            tools: "Python, Scikit-learn, NumPy, Annoy, LSH, MinHash, K-D Tree, Octree, R-Tree, Range Tree, kNN, ANN, Benchmarking, Profiling, Memory Analysis",
            link: "https://indexing-poc.com",
            gallery: ["web/6.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/multi/mu1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/multi/mu2.jpg"]
        },

        // GENERATIVE AI (6 projects)
        "zenithdx-ai": {
            title: "ZenithDx – Agentic Clinical Co-Pilot",
            category: "Generative AI",
            brief: "I architected the ZenithDx Advanced Clinical Decision Support System (CDSS), a high-performance, human-centric agentic AI system deployed on NVIDIA DGX Cloud A100 infrastructure, designed to improve diagnostic speed and quality in Emergency Departments by processing real-time multimodal data. The core inference engine uses LangGraph for orchestration and a fine-tuned Llama 3.2 3B LLM (cost-optimized via Ollama/GGUF) to interpret queries and generate clinical reports through iterative ReAct (Reasoning + Action) and Self-Refine loops. To ensure enterprise-grade integration, the agent coordinates three parallel multimodal pipelines: an image pipeline (S2A-UNet and ResNet-50) for chest X-ray classification; a contextual RAG pipeline (FAISS, BM25, and ColBERT) for aligning patient symptoms with medical literature; and a medical-history pipeline that models EHR data as a Heterogeneous Graph using an HGT to retrieve personalized clinical context. For ethical oversight and evaluation, the system incorporates robust XAI mechanisms, including Grad-CAM for image attribution and Captum/Feature Ablation for text-based influence scores, all within a human-centric HITL framework where physicians retain full authority to accept, modify, or reject AI-generated content. The production engineering relies on a three-layer architecture with a FastAPI backend optimized for NVIDIA DGX A100 GPUs using MIG and mixed-precision computing, achieving high clinical reliability (96.28% correct inferences) and acceptable ED latency (25.7s/31.9s) validated through the KLM model.",
            date: "2025",
            client: "Emergency Departments",
            tools: "LangGraph, Ollama, Llama 3.2, FastAPI, TensorRT, MIG, GGUF, ReAct, Self-Refine, RAG, FAISS, ColBERT, HGT, Grad-CAM, Captum",
            link: "https://zenithdx.ai",
            gallery: ["logo/1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z3.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z4.jpg"]
        },
        "melanoma-fl": {
            title: "Multicloud GenAI & Federated Learning – Personalized Melanoma Detection",
            category: "Generative AI",
            brief: "I architected a mission-critical, privacy-preserving multi-cloud platform for early melanoma diagnosis by strategically integrating advanced GenAI and ML capabilities within a robust, scalable, and compliant hybrid-cloud environment. The core architectural principle is the collaborative training of a global Bayesian Network model using Federated Learning across multiple cloud providers, solving the dual challenge of improving diagnostic accuracy on diverse datasets while maintaining strict data security and regulatory compliance (such as GDPR) by sharing only updated model parameters (CPDs). This Federated Learning core is supported by multimodal data pipelines that combine quantitative features extracted from dermoscopic images through CV and Radiomics techniques (LoG, DoG, GLCM) with structured clinical text validated by NLP from EHRs, all stored in unified local hospital databases to enable personalized diagnostic precision. The resulting hybrid operating model emphasizes architectural optimization: on-premise hospital servers handle the initial Federated Learning rounds, while the multi-cloud layer (primary and secondary providers) manages computationally intensive model aggregation and distribution with strict stability checks, convergence verification, and performance enhancements such as API-based transfer and FIFO-queue-driven horizontal scaling. Overall, the platform demonstrates expertise in designing secure, high-performance healthcare systems aligned with Azure Well-Architected Framework principles.",
            date: "2025",
            client: "Cancer Research Consortium",
            tools: "TensorFlow Federated, Azure ML, AWS SageMaker, PySyft, Flower, Docker, Kubernetes, LoG, DoG, GLCM, NLP, EHR, Bayesian Network, CPDs, FIFO",
            link: "https://fl-melanoma.org",
            gallery: ["logo/2.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/fl/fl1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/fl/fl2.jpg"]
        },
        "wgan-telco": {
            title: "Privacy-Preserving GenAI for 5G Telecommunications - WGAN-GP Production Architecture",
            category: "Generative AI",
            brief: "I designed and implemented a secure, data-centric solution for generating realistic synthetic time-series data for telecommunications traffic (SMS, calls, internet usage) using a Wasserstein Generative Adversarial Network with Gradient Penalty (WGAN-GP), with an emphasis on ethical governance and robust production-grade engineering. The architectural focus was to provide high data utility without compromising user privacy, since the synthetic data fully replaces sensitive records and enables the creation of large, diverse datasets where real data is restricted. I performed all stages of the implementation, including Z-score preprocessing to manage zero-heavy distributions, and I engineered the WGAN-GP using a custom expansion-compression Generator and a Critic designed with LeakyReLU and no Batch Normalization to preserve the 1-Lipschitz constraint. The system achieved stable training and high-quality outputs by employing the Wasserstein loss with a gradient penalty (lambda = 10), and optimal convergence was observed at 150 epochs through rigorous evaluation using fidelity metrics (MSE, Cosine Similarity, KL Divergence) and diversity metrics (Mean Variance, Coverage). Strategically, the generated data provides immediate value for enterprise use cases such as anomaly and cyberattack detection in 5G networks, leveraging the WGAN-GP Critic as an effective anomaly detector. The project was executed on an NVIDIA DGX system with A100 GPUs, demonstrating strong proficiency in high-performance infrastructure for demanding machine learning workloads.",
            date: "2024",
            client: "Tier-1 Telco",
            tools: "PyTorch, WGAN-GP, NVIDIA A100, DGX, Z-Score, LeakyReLU, Wasserstein Loss, Gradient Penalty, MSE, KL Divergence, Cosine Similarity, Anomaly Detection, 5G, Time-Series, Synthetic Data",
            link: "https://wgan-telco.ai",
            gallery: ["logo/3.png","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/gan/gan1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/gan/gan2.jpg"]
        },
        "knn-parallel": {
            title: "Hybrid Parallel k-NN Regression",
            category: "Generative AI",
            brief: "I undertook a comprehensive production-engineering and optimization project focused on maximizing the performance and scalability of the brute-force k-NN regression algorithm for deployment in computationally constrained environments. The core strategy involved a multi-layered parallelization architecture that first improved prediction accuracy by implementing the Inverse Distance Weighted Average method. I then demonstrated proficiency in designing scalable systems by implementing concurrent processing across two paradigms: shared-memory parallelism using OpenMP (with the parallel-for directive for multicore architectures and the taskloop directive for better load balancing) and distributed-memory parallelism using MPI for multi-node scalability. The project culminated in a detailed performance analysis that, while confirming MPI’s general scalability, validated OpenMP’s superior execution time in a constrained single-node environment (Intel Core i7-4700MQ) due to its minimal communication overhead, thereby showcasing my ability to evaluate and optimize systems based on specific hardware and latency requirements—an essential component of production-grade AI engineering.",
            date: "2024",
            client: "Edge AI Research",
            tools: "C++, OpenMP, MPI, IDW, k-NN, Regression, Parallel For, Taskloop, Multicore, Load Balancing, Intel i7, Profiling, Benchmarking, Scalability, Shared Memory",
            link: "https://knn-parallel.com",
            gallery: ["logo/4.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/knn/knn1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/knn/knn2.jpg"]
        },
        "mpi": {
            title: "Designing Scalable Architectures for Distributed ML Workloads",
            category: "Generative AI",
            brief: "I engineered and implemented parallel matrix multiplication programs in C using the Message Passing Interface (MPI) library, demonstrating strong expertise in designing and optimizing scalable architectures for computationally intensive machine learning and data-processing workloads. The project focused on minimizing execution time by strategically distributing the core computation (C = A × B) across multiple processors using two distinct, optimized topologies: a 1D ring topology, which used MPI_Scatter and MPI_Gather for efficient data distribution and collection, and a 2D Cartesian grid topology (MPI_Cart_create), which partitioned the matrices into sub-blocks for concurrent processing. This hands-on implementation showcases the core production-engineering capability of abstracting and deploying distributed processing logic across multiple nodes, ensuring that large-scale AI systems operate with optimal latency and efficiency.",
            date: "2024",
            client: "Edge AI Research",
            tools: "C++, MPI, MPI_Scatter, MPI_Gather, MPI_Cart_create, Ring Topology, Cartesian Grid, Sub-blocking, Concurrent Processing, Scalability, Latency, Distributed ML, Matrix Multiplication, High-Performance Computing, HPC",
            link: "https://mpi-distributed.com",
            gallery: ["logo/8.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/paral/paral1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/paral/paral2.jpg"]
        },

        // CLOUD SOLUTIONS (6 projects)
        "azure-ai-studio": {
            title: "Architecting a Mission-Critical Healthcare AI and Data Platform on Azure",
            category: "Cloud Solutions",
            brief: "This project demonstrates my deep technical expertise in translating complex healthcare requirements into a high-value, mission-critical PaaS solution on Microsoft Azure. I architected an end-to-end AI platform using Azure AI Studio as the central hub, leveraging Azure OpenAI (GPT-4) in the Playground to design advanced diagnostic assistants while enforcing a 'human-in-the-loop' framework for clinical safety. The architecture's data pipeline combines Azure AI Search with the Azure AI Language service—specifically Text Analytics for Health—to implement a robust NLP solution that extracts and codifies unstructured data (like doctor's notes) by identifying entities and linking them to standards like UMLS. For multimodal data ingestion, the design incorporates the Computer Vision API and the asynchronous Read Operation (via Document Intelligence Studio) for document analysis, alongside Custom Vision models trained to perform specialized object detection and classification on medical imagery (e.g., X-rays), delivering a stable and performant platform that aligns with the Azure Well-Architected Framework.",
            date: "2025",
            client: "Healthcare Enterprise",
            tools: "Azure AI Studio, OpenAI GPT-4, AI Search, Text Analytics, UMLS, Computer Vision, Document Intelligence, Custom Vision, NLP, OCR, Entity Linking, PaaS, HITL, Playground, Multimodal",
            link: "https://azure-ai.health",
            gallery: ["card/2.png","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl2.jpg"]
        },
        "azure-security": {
            title: "Architectural Risk Analysis and Azure Security Design for Cloud Platforms",
            category: "Cloud Solutions",
            brief: "This project involved an architectural review of security vulnerabilities for mission-critical healthcare information systems, aligning with the Azure Well-Architected Framework's Security pillar. I analyzed significant industry security failures and Root Cause Analyses (RCAs), such as the Capital One and Toyota incidents, to identify high-risk threat vectors including data breaches, insecure APIs, and account hijacking. Based on this analysis, I designed a proactive remediation strategy leveraging the Microsoft Azure ecosystem, centering on Microsoft Entra ID for robust Identity and Access Management (IAM) and Multi-Factor Authentication (MFA), and utilizing Azure Key Vault for the secure, centralized management of cryptographic keys, secrets, and SSL/TLS certificates. The engagement concluded with a forward-looking proposal to integrate modern Passkeys (FIDO2) with AI-driven biometrics to create a passwordless, zero-trust authentication framework.",
            date: "2024",
            client: "Health System",
            tools: "Entra ID, Key Vault, Defender, MFA, FIDO2, Passkeys, Zero Trust, IAM, SSL/TLS, RCA, Threat Modeling, Biometrics, Passwordless, Azure AD, Security Pillar",
            link: "https://azure-sec.health",
            gallery: ["card/3.png","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl3.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl4.jpg"]
        },
        "hybrid-network": {
            title: "Foundational Hybrid Cloud Networking and Core Infrastructure Design",
            category: "Cloud Solutions",
            brief: "This project demonstrates deep technical expertise in designing, simulating, and optimizing complex hybrid network architectures, a core competency for translating customer requirements into reliable IaaS/PaaS solutions. Using GNS3 as a pre-production environment to validate designs against the Azure Well-Architected Framework, I architected multiple PoC scenarios: implementing VLANs (VLAN 5, VLAN 10), 802.1Q trunking, and 'router-on-a-stick' sub-interfaces to model secure network segmentation (analogous to Azure VNet subnets with NSGs); configuring DNS/DHCP services and NAT to manage IP addressing and secure outbound connectivity (reflecting Azure NAT Gateway principles); and architecting a mission-critical hybrid cloud scenario by building two distinct Autonomous Systems (AS 10945, AS 11945), running OSPF as the internal gateway protocol (simulating an on-prem data center) and peering them with eBGP, the foundational protocol for interconnecting on-prem environments with Azure via ExpressRoute and VPN Gateway.",
            date: "2024",
            client: "Enterprise Migration",
            tools: "GNS3, Cisco IOS, VLAN, 802.1Q, OSPF, eBGP, ExpressRoute, VPN Gateway, NAT, DHCP, DNS, VNet, NSG, Router-on-a-Stick, Autonomous System",
            link: "https://hybrid-net.io",
            gallery: ["card/4.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl5.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl6.jpg"]
        },
        "4g-simulation": {
            title: "Architectural Performance Modeling for Distributed Network Systems",
            category: "Cloud Solutions",
            brief: "This project demonstrates a core Cloud Solution Architect competency: analyzing the architectural trade-offs of mission-critical, distributed systems. I developed a Python simulation to model a dynamic 4G cellular network, aligning with the Azure Well-Architected Framework (WAF) principles of Performance Efficiency and Reliability. By simulating different User Equipment (UE) mobility patterns (random, linear, custom) as dynamic workloads, I conducted a performance analysis comparing three distinct architectural designs for session management (RSSI-based, Threshold-based, and a multi-factor Cost-based algorithm factoring in signal, load, and distance). The analysis of key metrics, such as average delay and total handovers, provided data-driven insights into performance bottlenecks, mirroring the proactive optimization and RCA (Root Cause Analysis) methodologies a CSA employs to ensure stability and business value for stateful, high-availability customer applications in Azure.",
            date: "2024",
            client: "Telecom R&D",
            tools: "Python, NumPy, Matplotlib, Seaborn, RSSI, Handover, UE Mobility, 4G LTE, Cost Algorithm, Threshold, Simulation, Delay, RCA, Performance Efficiency, Reliability",
            link: "https://4g-sim.com",
            gallery: ["card/5.jpeg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl7.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl8.jpg"]
        },
        "linux-devops": {
            title: "Designing and Optimizing Linux-Based Compute and DevOps Solutions for Cloud Platforms",
            category: "Cloud Solutions",
            brief: "This project demonstrates deep technical expertise in Linux compute and DevOps automation, which are foundational for architecting reliable IaaS/PaaS solutions. I developed a comprehensive Bash script (logparser.sh) to perform mission-critical operational tasks, such as parsing web server logs from Linux VMs for Root Cause Analysis (RCA) and incident management. This script utilizes core tools like awk and sed to filter logs by network protocol (IPv4/IPv6), user ID, and other criteria, directly supporting network and security diagnostics. Furthermore, I engineered concurrent C applications using fork(), IPC (message queues), and semaphores to model high-performance, parallelized workloads, providing the deep OS-level understanding necessary to optimize Azure compute services like AKS or HPC. This was complemented by a performance analysis of CPU scheduling algorithms (FCFS, SJF, RR), demonstrating the ability to analyze and optimize resource management for platform stability and efficiency, aligning with the Azure Well-Architected Framework.",
            date: "2024",
            client: "Cloud Ops Team",
            tools: "Bash, awk, sed, C, fork(), IPC, Semaphores, Message Queues, FCFS, SJF, RR, Linux, VM, RCA, Scheduling, Parallelism",
            link: "https://linux-devops.io",
            gallery: ["card/1.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl9.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/cloud/cl10.jpg"]
        },
        "zencloud": {
            title: "ZenithDx - Architecting a High-Performance Hybrid AI Platform",
            category: "Cloud Solutions",
            brief: "This project involved designing the end-to-end cloud architecture for 'ZenithDx,' a mission-critical AI platform, aligning with the Azure Well-Architected Framework pillars of Performance Efficiency and Reliability. I architected a three-tier architecture with a decoupled FastAPI/Uvicorn backend server acting as the web layer, distinct from the high-performance compute (AI agent) deployed on the NVIDIA DGX Cloud A100 platform, which uses MIG (Multi-Instance GPU) technology for optimal resource partitioning. The networking architecture is secured via HTTPS using Nginx as a reverse proxy for TLS termination and JWT for API authorization. The data center architecture features a distributed storage solution, using PostgreSQL for ACID-compliant structured data and FAISS vector databases for high-throughput semantic search. Finally, I designed a proactive, cost-optimizing hybrid cloud strategy to integrate this environment with Microsoft Azure, using Azure ExpressRoute for dedicated, low-latency networking, with Azure Kubernetes Service (AKS) and Azure Arc for unified management, enabling a split-workload model: computationally expensive AI training (OPEX) in the cloud, and real-time, secure inference (CAPEX) on local servers.",
            date: "2024",
            client: "Cloud Ops Team",
            tools: "FastAPI, Uvicorn, NVIDIA DGX, MIG, Nginx, HTTPS, JWT, PostgreSQL, FAISS, ExpressRoute, AKS, Azure Arc, Hybrid Cloud, OPEX, CAPEX",
            link: "https://zencloud.ai",
            gallery: ["card/15.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z5.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z6.jpg"]
        },
        // PRODUCT & LEADERSHIP (6 projects)
        "deafnav": {
            title: "Hybrid Product & Project Management for the D-PBL Erasmus+ Railway Accessibility Initiative",
            category: "Product & Leadership",
            brief: "As the Product Manager and Analysis Lead for the D-PBL Erasmus+ Railway Accessibility Initiative, I led an international team from Greece, Portugal, Serbia, France, and Lithuania in a three-month project focused on improving railway accessibility through the development of DeafNav. DeafNav is a comprehensive application designed to support the unique needs of deaf travelers in metro and train environments by enhancing accessibility, safety, and real-time communication. Its key features include sign language interpretation, audio transcripts, real-time visual alerts, live chat support, educational content, and an emergency chat system, all aimed at ensuring a safer and more independent travel experience. Leveraging my background as a Solution Architect and Compliance Leader, I directed the full product lifecycle and shaped the technical vision for a dual-solution ecosystem consisting of a web application and a vibrating bracelet, ensuring both technical integrity and compliance with accessibility standards. I translated complex user requirements into actionable use cases—such as real-time metro updates, customizable bracelet alerts, and multimodal communication tools—and formalized the system structure through a detailed domain model. Operating in a hybrid capacity that combined strategic product leadership with hands-on engineering involvement, I organized the development backlog across three Agile sprints, facilitated collaboration across all partner teams, and supported both the Scrum Master and Marketing Lead, ultimately delivering all project components successfully in a fully remote environment.",
            date: "2024",
            client: "EU Erasmus+",
            tools: "Figma, Flutter, Agile, Scrum, Jira, Confluence, Miro, WCAG, Accessibility, Sign Language, Real-Time Alerts, Emergency Chat, Domain Model, Sprints, Remote Collaboration",
            link: "https://deafnav.eu",
            gallery: ["app/1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/prod/pr1.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/prod/pr2.jpg"]
        },
        "zenithdx-pm": {
            title: "ZenithDx – End-to-End Product Management",
            category: "Product & Leadership",
            brief: "Acted as the Product Manager leading the end-to-end product lifecycle for the 'ZenithDx' clinical co-pilot, from conception and UI/UX design to backend/AI implementation and final MVP delivery. I managed this complex, cross-functional initiative by defining the product vision and scope to address critical diagnostic delays in Emergency Departments, aligning clinical and technical stakeholders in a human-centered, Agile framework built on iterative feedback loops. My role involved bridging business/IT needs by overseeing the complete system architecture, managing the UI/UX design to define patient and doctor workflows, and mitigating risk by ensuring the physician retains ultimate control over the AI. I drove the integration of a complex portfolio of AI models—including image (S2A-UNet/ResNet-50), text (RAG/FAISS), and data (HGT) pipelines—while managing the computational budget (VRAM) on the NVIDIA A100 platform. The project successfully delivered a functional prototype that created tangible value, demonstrating 96.28% correct clinical inferences and achieving a 76.1/100 stakeholder acceptance score from 121 clinicians, who specifically cited the built-in Explainable AI (XAI) for increasing their trust.",
            date: "2025",
            client: "Hospital Chain",
            tools: "Jira, Figma, KLM, Fitts’ Law, Agile, MVP, VRAM, XAI, HITL, Stakeholder Management, UI/UX, Cross-Functional, Risk Mitigation, Feedback Loops, Acceptance Score",
            link: "https://zenithdx-pm.com",
            gallery: ["app/2.jpeg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z7.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z8.jpg"]
        },
        "ux-klm": {
            title: "Product Quality & UX Test Management",
            category: "Product & Leadership",
            brief: "As a core component of product test management and UX validation, I managed the application of the Keystroke-Level Model (KLM) and Fitts' Law to quantitatively evaluate the usability of a user interface form, aligning with product-centric goals of efficiency and value creation. I defined and executed a series of test scenarios against different user personas—such as a 'best typist' using a mouse (54.94s) versus a 'good typist' using only a keyboard (40.32s)—to generate data-driven insights, concluding that keyboard navigation offered significant time savings in our example. I also managed the analysis for a custom-developed Scholarship Application Form, breaking down the user flow into discrete tasks (e.g., 'First Name', 'Choose Department') to establish a baseline average completion time of 47.5 seconds, providing a quantitative metric for future iterations and continuous improvement.",
            date: "2024",
            client: "Internal UX Lab",
            tools: "KLM, Fitts’ Law, Stopwatch, User Personas, Task Analysis, Completion Time, Usability Testing, Quantitative UX, Form Design, Keyboard Navigation, Mouse Interaction, Baseline Metrics, Iteration, Continuous Improvement, UX Lab",
            link: "https://ux-klm.com",
            gallery: ["app/4.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/prod/pr3.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/prod/pr4.jpg"]
        },
        "whiteboxer": {
            title: "Product Quality Management - White-Box Test Strategy & Path Analysis",
            category: "Product & Leadership",
            brief: "As part of a full-lifecycle quality assurance plan, I managed the technical test strategy by applying white-box testing methodologies to validate product logic and manage development risks. This involved creating a detailed control-flow graph (CFG) to visualize the program's logic, calculating its cyclomatic complexity (V(g)=7) to quantify logical intricacy, and analyzing path dependencies to identify infeasible paths (e.g., the 10-13-14 path). This process defined the scope for comprehensive code coverage by deriving the three basis paths (M1, M2, M3) and enabled the creation of a targeted test plan, complete with specific input values (e.g., 7, 0/3, 47) and their expected outcomes, directly linking technical validation to robust product delivery.",
            date: "2024",
            client: "Internal QA Team",
            tools: "White-Box Testing, CFG, Cyclomatic Complexity, Basis Paths, Test Plan, Input Values, Expected Outcomes, Code Coverage, Path Analysis, Infeasible Paths, Risk Management, QA Strategy, Validation, Technical Testing, Quality Assurance",
            link: "https://whiteboxer.qa",
            gallery: ["app/3.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/prod/pr5.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/prod/pr6.jpg"]
        },
        "startup-week": {
            title: "Strategic Project Coordination & Product Lifecycle Immersion",
            category: "Product & Leadership",
            brief: "As a core volunteer for Startup Week Patras 2024, I combined hands-on project coordination and organizational support with a strategic deep-dive into the end-to-end product lifecycle, aligning with the innovation goals of partners. My engagement spanned all event phases, from managing logistics for Day 1's sessions on product validation and iterative testing to supporting Day 2's focus on user-centric development (UX). I facilitated stakeholder engagement for Day 3's 'AI & Startups' summit, gaining insights into strategic AI integration, ethical implementation, and cloud vs. edge compute decisions. Furthermore, I supported the 'Working in Tech' panel, coordinating with executives from firms like PwC and Yodiwo, and the 'Research & Entrepreneurship' finale with VCs, demonstrating a clear ability to bridge high-level business goals with technical execution and stakeholder management.",
            date: "2024",
            client: "Startup Week Patras",
            tools: "Event Coordination, Stakeholder Management, Product Validation, UX, AI Integration, Cloud vs Edge, Panel Facilitation, Logistics, PwC, Yodiwo, VCs, Research, Entrepreneurship, Innovation, Cross-Functional",
            link: "https://startupweek.patras",
            gallery: ["app/5.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/prod/pr7.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/prod/pr8.jpg"]
        },

        // GOVERNANCE & COMPLIANCE (5 projects)
        "xai-gov": {
            title: "Operationalizing an Explainable AI (XAI) Governance Framework for Auditable, High-Risk Systems",
            category: "Governance & Compliance",
            brief: "As the compliance lead, I operationalized a comprehensive AI governance framework to mitigate the significant black box risk inherent in high-risk systems like medicine, ensuring alignment with regulatory mandates such as the GDPR's right to explanation and the principles of the EU AI Act. My role was to move from policy to execution by designing and analyzing the implementation of a full audit trail for AI-driven decisions, configuring a portfolio of XAI controls including model-agnostic tools (LIME/SHAP), model-specific techniques (Grad-CAM heatmaps for visual audits), and counterfactuals (to provide transparent 'what if' explanations). Furthermore, I planned for the consolidation of these controls on a unified governance platform (like OmniXAI) and, crucially, established a human-centric monitoring strategy using Simulatability to quantitatively measure and report on the effectiveness of these controls, proving they successfully build stakeholder trust and ensure responsible, auditable AI adoption.",
            date: "2025",
            client: "Regulatory Body",
            tools: "OmniXAI, LIME, SHAP, Captum, Grad-CAM, Counterfactuals, Simulatability, GDPR, EU AI Act, Audit Trail, XAI Controls, Black Box Risk, Human-Centric, Stakeholder Trust, Responsible AI",
            link: "httpsias://xai-gov.eu",
            gallery: ["icon/11.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/compl/c1.jpg","/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/compl/c2.jpg"]
        },
        "csr-ai": {
            title: "Strategic Policy Design for Ethical AI and Sustainable CSR Governance",
            category: "Governance & Compliance",
            brief: "As part of a multidisciplinary team (Computer Engineering, Social Work, Nursing) for the Nikos Analytis CSRHELLAS competition, I co-developed a comprehensive governance framework to align artificial intelligence and data management with Corporate Social Responsibility (CSR) and the UN Sustainable Development Goals (SDGs). My role involved extensive cross-functional collaboration, bridging the gap between informatics, healthcare, and social work to design long-term policy strategies for the business landscape. We focused on creating and operationalizing a framework for ethical AI, moving beyond just technological innovation to ensure responsible and transparent business practices. This research initiative delivered a holistic strategy for integrating AI in sectors like healthcare, demonstrating how to align technological advancement with measurable social and environmental sustainability goals.",
            date: "2024",
            client: "CSRHELLAS",
            tools: "Policy Design, UN SDGs, CSR, Ethical AI, Cross-Functional, Informatics, Healthcare, Social Work, Sustainability, Transparency, Responsibility, Governance Framework, Long-Term Strategy, Innovation, Measurable Impact",
            link: "https://csr-ai.gr",
            gallery: ["icon/2.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/compl/c3.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/compl/c4.jpg"]
        },
        "zenithdx-gov": {
            title: "ZenithDx – AI Governance & Compliance Framework",
            category: "Governance & Compliance",
            brief: "As the compliance lead for the 'ZenithDx' high-risk AI system, I designed and operationalized its governance by design framework from the ground up to ensure regulatory alignment and auditable processes. I established the core 'Human-in-Command' (HIC) policy, which mandates a 'human-in-the-loop' (HITL) workflow where physicians must actively review, modify, or accept all AI-generated reports, ensuring the practitioner always retains final authority. To meet GDPR and EU AI Act requirements, I drove the key architectural decision to use a self-hosted model, ensuring all sensitive patient data (PHI) remained securely within the provider's internal network. A critical part of my role was the hands-on implementation of a multi-modal Explainable AI (XAI) framework to create a full audit trail for all conclusions: this involved deploying Grad-CAM for auditable visual heatmaps on X-rays and Feature Ablation (Captum) to provide a textual audit trail linking patient symptoms directly to the AI's reasoning. I then validated this strategy by measuring its impact on stakeholders, using a customized usability scale (HSUS) which proved our XAI implementation quantitatively increased clinician trust (77.4/100 score). Finally, I developed the long-term compliance roadmap, including continuous bias and fairness monitoring, implementing model cards for documentation, and ensuring future alignment with medical device standards like ISO 14971 (risk management) and IEC 62304 (software lifecycle).",
            date: "2025",
            client: "Hospital IRB",
            tools: "Purview, Model Cards, ISO 14971, IEC 62304, HIC, HITL, Self-Hosted, PHI, XAI, Grad-CAM, Captum, HSUS, Bias Monitoring, Fairness, Compliance Roadmap",
            link: "https://zenithdx-gov.com",
            gallery: ["icon/9.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z9.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/zenith/z10.jpg"]
        },
        "bigdata-ethics": {
            title: "Strategic Analysis for a Big Data Ethics & Accountability Framework",
            category: "Governance & Compliance",
            brief: "As part of a foundational research initiative on Data & AI Governance, I conducted a deep-dive analysis of the ethical and regulatory risks outlined in 'Big Data Ethics' (Zwitter), identifying how traditional accountability frameworks (based on Causality, Knowledge, Choice) are insufficient for modern systems. My work focused on policy design, highlighting how the hyper-networked nature of Big Data blurs moral responsibility and creates new power structures (Collectors, Managers, Analysts) that require a new governance framework and oversight strategy. A key part of this project involved the practical monitoring and auditing of AI systems, where I performed hands-on critical reviews of ChatGPT's outputs to assess their compliance and ethical accuracy, demonstrating the need to re-establish accountability for data-driven power.",
            date: "2024",
            client: "Ethics Institute",
            tools: "Critical Review, Policy Design, Causality, Knowledge, Choice, Hyper-Networked, Moral Responsibility, Power Structures, Collectors, Managers, Analysts, Governance Framework, Oversight, ChatGPT Audit, Ethical Accuracy, Accountability",
            link: "https://bigdata-ethics.org",
            gallery: ["icon/10.jpeg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/compl/c5.jpg", "/COMPLETE-PORTFOLIO-WEBSITE/public/resources/img/portfolios/compl/c6.jpg"]
        }
    });

    // =============================================
    // 6. MODAL OPEN HANDLER (Click + Keyboard)
    // =============================================
    $$(SELECTORS.mixTarget).forEach(card => {
        const openModal = (e) => {
            if (e.type === "keydown" && !["Enter", " "].includes(e.key)) return;
            const id = card.dataset.project;
            const project = PROJECTS[id];
            if (!project) {
                console.error(`Project "${id}" not found.`);
                return;
            }
            // Populate content
            $("[data-title]").textContent = project.title;
            $("[data-category]").textContent = project.category;
            $("[data-brief]").textContent = project.brief;
            $("[data-date]").textContent = project.date;
            $("[data-client]").textContent = project.client;
            $("[data-tools]").textContent = project.tools;
            const link = $("[data-link]");
            link.href = project.link;
            link.textContent = "View Case Study";
            
            // *UPDATED*: Populate gallery
            elements.swiperWrapper.innerHTML = project.gallery
                .map(src => {
                    //
                    // <<< --- FIX #2: ΧΡΗΣΙΜΟΠΟΙΟΥΜΕ ΤΟ BASE_PATH --- >>>
                    //
                    // Ελέγχει αν το 'src' ξεκινά με '/'.
                    // Αν ΝΑΙ (όπως το travel-db σου), το χρησιμοποιεί ως έχει.
                    // Αν ΟΧΙ (όπως όλα τα άλλα), προσθέτει το BASE_PATH και το κανονικό path.
                    //
                    const imgSrc = src.startsWith('/') 
                        ? src  // Χειρίζεται το "travel-db" που έφτιαξες: /COMPLETE-PORTFOLIO-WEBSITE/public/...
                        : `${BASE_PATH}/resources/img/portfolios/${src}`; // Διορθώνει ΟΛΑ ΤΑ ΑΛΛΑ: /COMPLETE-PORTFOLIO-WEBSITE/resources/img/portfolios/web/1.jpg
                    
                    // Added 'border-radius: 0;' to ensure images are rectangular.
                    return `
                        <div class="swiper-slide">
                            <img src="${imgSrc}"
                                 alt="${project.title}"
                                 style="width: 100%; height: 100%; object-fit: contain; border-radius: 0;">
                        </div>
                    `.trim();
                })
                .join("");

            // Open modal
            elements.modal.classList.add(CLASSES.modalOpen);
            elements.description.style.display = "none";
            elements.portContent.style.display = "flex";
            document.body.style.overflow = "hidden";
            // Focus management
            elements.exitBtn.focus();
            // Update Swiper
            setTimeout(() => {
                swiper?.update();
                swiper?.slideTo(0, 0);
            }, 150);
        };
        card.addEventListener("click", openModal);
        card.addEventListener("keydown", openModal);
    });

    // =============================================
    // 7. MODAL CLOSE & TOGGLE
    // =============================================
    const closeModal = () => {
        elements.modal.classList.remove(CLASSES.modalOpen);
        elements.description.style.display = "none";
        elements.portContent.style.display = "none";
        document.body.style.overflow = "";
        elements.swiperWrapper.innerHTML = "";
        const icon = elements.closeBtn.querySelector(".icon");
        if (icon) icon.classList.remove(CLASSES.iconActive);
    };
    elements.exitBtn.addEventListener("click", closeModal);
    elements.modal.addEventListener("click", (e) => {
        if (e.target === elements.modal) closeModal();
    });
    // This button now toggles the description
    elements.closeBtn.addEventListener("click", () => {
        const icon = elements.closeBtn.querySelector(".icon");
        if (icon) icon.classList.toggle(CLASSES.iconActive);
        
        // Toggle description visibility
        const isHidden = elements.description.style.display === "none";
        elements.description.style.display = isHidden ? "grid" : "none";
    });
    // ESC key support
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && elements.modal.classList.contains(CLASSES.modalOpen)) {
            closeModal();
        }
    });

    // =============================================
    // 8. REDUCED MOTION RESPECT
    // =============================================
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        document.documentElement.style.setProperty("--transition", "none");
        if (swiper) swiper.params.speed = 0;
    }
})();