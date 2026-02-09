import Link from "next/link";
import Image from "next/image";

export default function ZenithDxPage() {
    return (
        <div className="bg-background-light dark:bg-black font-display text-slate-900 dark:text-white min-h-screen flex flex-col selection:bg-primary selection:text-white">
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 flex items-center justify-between border-b border-solid border-slate-200 dark:border-border-dark bg-white/80 dark:bg-black/80 backdrop-blur-md px-6 py-4 lg:px-10 transition-colors">
                <div className="flex items-center gap-4">
                    <Link href="/" className="size-6 text-primary hover:opacity-80 transition-opacity">
                        <span className="material-symbols-outlined">health_metrics</span>
                    </Link>
                    <h2 className="text-lg font-bold leading-tight tracking-tight">
                        ZenithDx Series
                    </h2>
                </div>
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex gap-6">
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            Case Studies
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            About
                        </a>
                        <a
                            className="text-sm font-medium hover:text-primary transition-colors"
                            href="#"
                        >
                            Contact
                        </a>
                    </nav>
                    <button className="flex items-center gap-2 rounded bg-primary px-4 py-2 text-sm font-bold text-white transition hover:bg-primary/90">
                        <span className="material-symbols-outlined text-[18px]">
                            download
                        </span>
                        <span>Download PDF</span>
                    </button>
                </div>
                <div className="md:hidden">
                    <span className="material-symbols-outlined cursor-pointer">menu</span>
                </div>
            </header>

            <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 py-8 md:px-10 md:py-16">
                {/* Hero Section */}
                <section className="mb-16 md:mb-24">
                    <div className="flex flex-col gap-2 mb-6">
                        <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-wide uppercase">
                            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                            Case Study 01
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-300 max-w-4xl">
                            ZenithDx: Multimodal Clinical Co-Pilot
                        </h1>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border-dark border border-border-dark rounded-lg overflow-hidden">
                        <div className="bg-background-dark p-6 flex flex-col gap-1">
                            <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                                Role
                            </p>
                            <p className="font-medium text-lg">Lead Architect & PM</p>
                        </div>
                        <div className="bg-background-dark p-6 flex flex-col gap-1">
                            <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                                Timeline
                            </p>
                            <p className="font-medium text-lg">6 Months</p>
                        </div>
                        <div className="bg-background-dark p-6 flex flex-col gap-1">
                            <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                                Client
                            </p>
                            <p className="font-medium text-lg">HealthTech Ventures</p>
                        </div>
                        <div className="bg-background-dark p-6 flex flex-col gap-1">
                            <p className="text-slate-400 text-xs font-mono uppercase tracking-wider">
                                Outcome
                            </p>
                            <p className="font-medium text-lg text-primary">
                                HIPAA Compliant
                            </p>
                        </div>
                    </div>
                    {/* Hero Image/Visual */}
                    <div className="mt-8 relative w-full h-[300px] md:h-[480px] rounded-lg overflow-hidden border border-border-dark group">
                        <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-500 group-hover:opacity-20"></div>
                        <Image
                            alt="Abstract visualization of digital healthcare data network with blue nodes"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRVkCBy1IT4LeSqq68MXO0P8J3HOecLooRUJ6sWos8laiRWujcGwrfOo2AEH3_qrSzwBS-mLkPTa5NWwcW9P-Seo7djJOawoG-MrCxRjAEIcPYGRSzCUh6zZ3X6Hg2GtIwXZDSL-3p9WB1LiDtT7CPFBT6-CJQMr6xZzZ4cOdeCzDdKa_5CIQTWnr7BTyBqTwdoDB64DGwLx708XqXZSEk9tiNbNH7jYy4PuM1V_IbREKi7-3YjIVk7W0TKQGMmlKITbGh__LL5rnk"
                            fill
                            className="object-cover"
                        />
                        <div className="absolute bottom-0 left-0 z-20 p-8 w-full bg-gradient-to-t from-background-dark to-transparent">
                            <div className="flex items-center gap-2 text-white/80 font-mono text-sm">
                                <span className="material-symbols-outlined text-sm">
                                    location_on
                                </span>
                                <span data-location="San Francisco, USA">
                                    San Francisco, USA
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Overview Split Section */}
                <section className="mb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-2 border-y border-border-dark">
                        {/* Left Pane: Challenge */}
                        <div className="py-12 lg:pr-12 lg:border-r border-border-dark flex flex-col gap-6">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    psychology_alt
                                </span>
                                The Challenge
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                Processing clinical data at scale requires rigorous adherence to
                                compliance standards while maintaining speed. The primary
                                challenge was orchestrating multimodal data flows—text,
                                imaging, and genetics—in a way that allowed for real-time
                                querying without compromising patient privacy or data integrity.
                                Legacy systems were siloed, creating a bottleneck for clinicians
                                needing immediate insights.
                            </p>
                            <ul className="space-y-3 mt-2">
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-red-400 mt-0.5 text-sm">
                                        close
                                    </span>
                                    <span className="text-slate-400">
                                        Fragmented data sources slowing diagnosis
                                    </span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="material-symbols-outlined text-red-400 mt-0.5 text-sm">
                                        close
                                    </span>
                                    <span className="text-slate-400">
                                        High latency in cross-referencing patient history
                                    </span>
                                </li>
                            </ul>
                        </div>
                        {/* Right Pane: Impact */}
                        <div className="py-12 lg:pl-12 flex flex-col gap-6">
                            <h3 className="text-2xl font-bold flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">
                                    shutter_speed
                                </span>
                                The Impact
                            </h3>
                            <p className="text-slate-300 leading-relaxed text-lg">
                                By implementing an agentic workflow system, we achieved a
                                scalable architecture that keeps humans in the loop (HITL) for
                                critical decisions. The new Co-Pilot reduced information
                                retrieval time by 40% and ensured 100% auditability for
                                compliance reviews.
                            </p>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div className="p-4 rounded border border-border-dark bg-surface-dark/50">
                                    <p className="text-3xl font-mono font-bold text-primary mb-1">
                                        40%
                                    </p>
                                    <p className="text-sm text-slate-400">Efficiency Boost</p>
                                </div>
                                <div className="p-4 rounded border border-border-dark bg-surface-dark/50">
                                    <p className="text-3xl font-mono font-bold text-primary mb-1">
                                        100%
                                    </p>
                                    <p className="text-sm text-slate-400">HITL Compliance</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Deep Dive: Architecture */}
                <section className="mb-24">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                        <div>
                            <h2 className="text-3xl font-bold mb-2">
                                Technical Architecture
                            </h2>
                            <p className="text-slate-400 max-w-xl">
                                High-level system design leveraging distributed agents for
                                secure data processing.
                            </p>
                        </div>
                        <div className="flex gap-2 flex-wrap">
                            <span className="px-3 py-1 rounded-full border border-border-dark bg-surface-dark text-xs font-mono text-primary">
                                Azure Mesh
                            </span>
                            <span className="px-3 py-1 rounded-full border border-border-dark bg-surface-dark text-xs font-mono text-primary">
                                LangGraph
                            </span>
                            <span className="px-3 py-1 rounded-full border border-border-dark bg-surface-dark text-xs font-mono text-primary">
                                FAISS
                            </span>
                        </div>
                    </div>
                    <div className="relative w-full rounded-xl border border-border-dark bg-surface-dark overflow-hidden min-h-[500px] flex flex-col">
                        {/* Mac-like header for the card */}
                        <div className="flex items-center gap-2 px-4 py-3 border-b border-border-dark bg-background-dark/50">
                            <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
                            <div className="ml-4 text-xs font-mono text-slate-500">
                                zenithdx_architecture_v2.json
                            </div>
                        </div>
                        {/* Diagram Area */}
                        <div className="flex-1 relative p-8 md:p-12 clinical-grid flex items-center justify-center">
                            {/* Simplified CSS/HTML Representation of a Diagram */}
                            <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                                {/* Input Node */}
                                <div className="border border-primary/30 bg-background-dark/80 p-6 rounded-lg backdrop-blur-sm relative group">
                                    <div className="absolute -top-3 left-4 bg-background-dark px-2 text-xs font-mono text-primary border border-primary/30 rounded">
                                        Input_Stream
                                    </div>
                                    <div className="flex items-center gap-3 mb-3 text-slate-200">
                                        <span className="material-symbols-outlined">
                                            clinical_notes
                                        </span>
                                        <span className="font-mono text-sm">EHR Data</span>
                                    </div>
                                    <div className="h-1 w-full bg-border-dark rounded overflow-hidden">
                                        <div className="h-full bg-primary w-2/3"></div>
                                    </div>
                                    {/* Connector Line */}
                                    <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-px bg-primary/50"></div>
                                    <div className="hidden md:block absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                                {/* Processing Node (Center) */}
                                <div className="border border-primary bg-background-dark/90 p-6 rounded-lg shadow-[0_0_30px_rgba(0,102,255,0.15)] relative">
                                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-white px-3 py-1 text-xs font-mono rounded shadow-lg">
                                        Core_Agent_Swarm
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                                            <span>Validation</span>
                                            <span className="text-green-400">OK</span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                                            <span>Vectorization</span>
                                            <span className="text-blue-400 animate-pulse">
                                                Running...
                                            </span>
                                        </div>
                                        <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                                            <span>Privacy Filter</span>
                                            <span className="text-green-400">Active</span>
                                        </div>
                                    </div>
                                    {/* Connector Line */}
                                    <div className="hidden md:block absolute top-1/2 -right-8 w-8 h-px bg-primary/50"></div>
                                    <div className="hidden md:block absolute top-1/2 -right-1 w-2 h-2 rounded-full bg-primary"></div>
                                </div>
                                {/* Output Node */}
                                <div className="border border-primary/30 bg-background-dark/80 p-6 rounded-lg backdrop-blur-sm relative">
                                    <div className="absolute -top-3 right-4 bg-background-dark px-2 text-xs font-mono text-primary border border-primary/30 rounded">
                                        Output_Interface
                                    </div>
                                    <div className="flex items-center gap-3 mb-3 text-slate-200">
                                        <span className="material-symbols-outlined">dataset</span>
                                        <span className="font-mono text-sm">Structured JSON</span>
                                    </div>
                                    <div className="text-xs font-mono text-slate-500 bg-black/50 p-2 rounded border border-border-dark">
                                        {'{ "diagnosis_confidence": 0.98 }'}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Process Timeline */}
                <section className="mb-24">
                    <div className="flex flex-col gap-10">
                        <h2 className="text-3xl font-bold px-4">Development Process</h2>
                        <div className="relative pl-4 md:pl-0">
                            {/* Vertical Line */}
                            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border-dark transform md:-translate-x-1/2"></div>
                            {/* Step 1 */}
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-16 group">
                                <div className="md:w-[45%] md:text-right pr-8 order-2 md:order-1 pl-16 md:pl-0">
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        Discovery & Compliance Mapping
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Analyzed HIPAA/GDPR requirements and defined data ingestion
                                        schemas for unstructured clinical notes.
                                    </p>
                                </div>
                                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 order-1 md:order-2 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-background-dark border-2 border-primary group-hover:scale-125 transition-transform duration-300"></div>
                                </div>
                                <div className="md:w-[45%] pl-16 md:pl-8 order-3">
                                    <span className="text-xs font-mono text-primary border border-primary/20 bg-primary/10 px-2 py-1 rounded">
                                        Month 1
                                    </span>
                                </div>
                            </div>
                            {/* Step 2 */}
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-16 group">
                                <div className="md:w-[45%] md:text-right pr-8 order-2 md:order-1 pl-16 md:pl-0">
                                    <span className="text-xs font-mono text-slate-500 border border-border-dark bg-surface-dark px-2 py-1 rounded">
                                        Month 2-3
                                    </span>
                                </div>
                                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 order-1 md:order-2 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-background-dark border-2 border-slate-600 group-hover:border-primary transition-colors duration-300"></div>
                                </div>
                                <div className="md:w-[45%] pl-16 md:pl-8 order-3">
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        Architecture & MVP
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Built the Azure Clinical Data Mesh and deployed the first
                                        version of the retrieval-augmented generation (RAG)
                                        pipeline.
                                    </p>
                                </div>
                            </div>
                            {/* Step 3 */}
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-16 group">
                                <div className="md:w-[45%] md:text-right pr-8 order-2 md:order-1 pl-16 md:pl-0">
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        Federated Learning Integration
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Implemented privacy-preserving model training across
                                        distributed hospital nodes without data egress.
                                    </p>
                                </div>
                                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 order-1 md:order-2 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-background-dark border-2 border-slate-600 group-hover:border-primary transition-colors duration-300"></div>
                                </div>
                                <div className="md:w-[45%] pl-16 md:pl-8 order-3">
                                    <span className="text-xs font-mono text-slate-500 border border-border-dark bg-surface-dark px-2 py-1 rounded">
                                        Month 4-5
                                    </span>
                                </div>
                            </div>
                            {/* Step 4 */}
                            <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between mb-6 group">
                                <div className="md:w-[45%] md:text-right pr-8 order-2 md:order-1 pl-16 md:pl-0">
                                    <span className="text-xs font-mono text-slate-500 border border-border-dark bg-surface-dark px-2 py-1 rounded">
                                        Month 6
                                    </span>
                                </div>
                                <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 order-1 md:order-2 flex items-center justify-center">
                                    <div className="w-4 h-4 rounded-full bg-background-dark border-2 border-slate-600 group-hover:border-primary transition-colors duration-300"></div>
                                </div>
                                <div className="md:w-[45%] pl-16 md:pl-8 order-3">
                                    <h4 className="text-xl font-bold text-white mb-2">
                                        System Audit & Handoff
                                    </h4>
                                    <p className="text-slate-400 text-sm">
                                        Final security penetration testing and documentation
                                        delivery for the internal engineering team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Key Features Grid */}
                <section className="mb-24">
                    <h2 className="text-3xl font-bold mb-8">Key Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <div className="p-6 rounded-lg border border-border-dark bg-surface-dark/40 hover:bg-surface-dark transition duration-300 group">
                            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20">
                                <span className="material-symbols-outlined text-primary">
                                    smart_toy
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Agentic Workflows
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Self-correcting AI agents that verify their own outputs against
                                medical ontologies before presenting to clinicians.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-border-dark bg-surface-dark/40 hover:bg-surface-dark transition duration-300 group">
                            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20">
                                <span className="material-symbols-outlined text-primary">
                                    hub
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Federated Learning
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Enables model improvement across institutions without sharing
                                raw patient data, preserving privacy.
                            </p>
                        </div>
                        <div className="p-6 rounded-lg border border-border-dark bg-surface-dark/40 hover:bg-surface-dark transition duration-300 group">
                            <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20">
                                <span className="material-symbols-outlined text-primary">
                                    description
                                </span>
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">
                                Auto-Documentation
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">
                                Automatically generates compliant clinical notes from multimodal
                                inputs, reducing administrative burden.
                            </p>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
            <footer className="border-t border-border-dark bg-background-dark py-12">
                <div className="max-w-[1200px] mx-auto px-6 lg:px-10 flex flex-col items-center text-center gap-8">
                    <div className="flex flex-col gap-2">
                        <h3 className="text-2xl font-bold text-white">
                            Ready to see more?
                        </h3>
                        <p className="text-slate-400">
                            Explore other projects in healthcare AI and system architecture.
                        </p>
                    </div>
                    <Link
                        className="group relative inline-flex items-center justify-center px-8 py-3 text-sm font-bold text-white transition-all duration-200 bg-transparent border border-white rounded hover:bg-white hover:text-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white"
                        href="/"
                    >
                        <span className="material-symbols-outlined mr-2 group-hover:-translate-x-1 transition-transform">
                            arrow_back
                        </span>
                        Return to Portfolio
                    </Link>
                    <div className="w-full h-px bg-border-dark mt-8"></div>
                    <div className="flex flex-col md:flex-row justify-between items-center w-full text-xs text-slate-500 font-mono">
                        <p>© 2023 ZenithDx Project Series. All rights reserved.</p>
                        <div className="flex gap-4 mt-4 md:mt-0">
                            <a className="hover:text-primary transition-colors" href="#">
                                Privacy
                            </a>
                            <a className="hover:text-primary transition-colors" href="#">
                                Terms
                            </a>
                            <a className="hover:text-primary transition-colors" href="#">
                                Contact
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
