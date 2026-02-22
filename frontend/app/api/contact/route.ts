import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, company, email, sector, service, message } = body;

        // Validate basic input
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use STARTTLS
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const submittedAt = new Date().toLocaleString('el-GR', { timeZone: 'Europe/Athens' });

        // 1. Admin Notification (Greek Alert)
        const adminMailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `🔴 SYSTEM ALERT: Νέο Αίτημα από ${name}`,
            text: `🔴 SYSTEM ALERT: Νέο Αίτημα Συνεργασίας\n` +
                `Ονοματεπώνυμο: ${name}\n` +
                `Εταιρεία: ${company || 'N/A'}\n` +
                `Email: ${email}\n` +
                `Strategic Sector: ${sector || 'Other'}\n` +
                `Ecosystem Entry/Service: ${service || 'Other'}\n` +
                `Message: ${message}\n` +
                `Υποβλήθηκε: ${submittedAt}`,
            html: `
                <div style="font-family: 'Courier New', Courier, monospace; background-color: #050505; color: #ffffff; padding: 40px; border: 1px solid #222; border-left: 4px solid #ef4444;">
                    <h2 style="color: #ef4444; text-transform: uppercase; letter-spacing: 2px; border-bottom: 1px solid #222; padding-bottom: 20px;">🔴 SYSTEM ALERT: Νέο Αίτημα Συνεργασίας</h2>
                    <p style="margin: 15px 0;"><strong>Ονοματεπώνυμο:</strong> ${name}</p>
                    <p style="margin: 15px 0;"><strong>Εταιρεία:</strong> ${company || 'N/A'}</p>
                    <p style="margin: 15px 0;"><strong>Email:</strong> ${email}</p>
                    <p style="margin: 15px 0;"><strong>Strategic Sector:</strong> ${sector || 'Other'}</p>
                    <p style="margin: 15px 0;"><strong>Ecosystem Entry/Service:</strong> ${service || 'Other'}</p>
                    <div style="margin-top: 30px; padding: 25px; background: #0a0a0a; border: 1px solid #111; border-radius: 4px;">
                        <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
                    </div>
                    <p style="margin-top: 30px; font-size: 11px; opacity: 0.5;">Υποβλήθηκε: ${submittedAt}</p>
                </div>
            `,
        };

        // 2. User Auto-reply (Bilingual/Professional Template)
        const userMailOptions = {
            from: `"Filippos P. Zygouris" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Transmission Received - Filippos P. Zygouris | Technical Authority`,
            text: `FILIPPOS P. ZYGOURIS | Technical Authority\n` +
                `Architecting the institutional survival of AI systems. Bridging the gap between Innovation and Regulation.\n\n` +
                `Αγαπητέ/ή ${name},\n\n` +
                `Σας ευχαριστώ για την επικοινωνία.\n\n` +
                `Έλαβα το αίτημά σας και τα στοιχεία που υποβάλατε σχετικά με τον τομέα ${sector || 'μας'}. Το μήνυμά σας βρίσκεται υπό εξέταση.\n\n` +
                `Ως Chartered Engineer (TEE), στόχος μου είναι να διασφαλίζω την τεχνική ακεραιότητα και τη θεσμική συμμόρφωση των ψηφιακών υποδομών. Θα μελετήσω προσωπικά τις ανάγκες σας γύρω από το ${service || 'project σας'} και θα επικοινωνήσω μαζί σας εντός 24 ωρών.\n\n` +
                `Τι ακολουθεί (Protocol Steps):\n\n` +
                `1. Αξιολόγηση των τεχνικών και ρυθμιστικών απαιτήσεων του project σας.\n` +
                `2. Προετοιμασία μιας εξατομικευμένης στρατηγικής (Compliance-by-Design / Architecture).\n` +
                `3. Επικοινωνία για τον προγραμματισμό μιας συμβουλευτικής συνάντησης (Secure Line).\n\n` +
                `Στο μεταξύ, μπορείτε να εξερευνήσετε το Governance Framework και παλαιότερα έργα μου στο portfolio: https://filippos-p-zygouris.vercel.app/\n\n` +
                `Με εκτίμηση,\n\n` +
                `Filippos P. Zygouris\n` +
                `Dipl. Eng. | Licensed TEE Engineer\n` +
                `Fractional PRRC & SaMD Lead Architect\n\n` +
                `Tactical Coordinates:\n` +
                `📍 LOC: LAMIA, HEADQUARTERS\n` +
                `📞 +30 697 592 2894\n` +
                `✉️ filippos.paraskevas.zygouris@gmail.com`,
            html: `
                <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; max-width: 650px; margin: auto; background-color: #ffffff; color: #111111; border: 1px solid #f0f0f0; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
                    <div style="background-color: #010101; color: #ffffff; padding: 40px 50px; text-align: left;">
                        <h1 style="margin: 0; font-size: 18px; font-weight: 900; letter-spacing: 2px; text-transform: uppercase;">FILIPPOS P. ZYGOURIS</h1>
                        <p style="margin: 5px 0 0; font-size: 12px; font-weight: 400; opacity: 0.7; letter-spacing: 1px;">Technical Authority</p>
                        <div style="height: 1px; width: 40px; background-color: #2563eb; margin: 20px 0;"></div>
                        <p style="margin: 0; font-size: 11px; font-style: italic; opacity: 0.6; line-height: 1.4;">Architecting the institutional survival of AI systems. <br/>Bridging the gap between Innovation and Regulation.</p>
                    </div>
                    
                    <div style="padding: 50px; line-height: 1.8; font-size: 15px;">
                        <p>Αγαπητέ/ή <strong>${name}</strong>,</p>
                        <p>Σας ευχαριστώ για την επικοινωνία.</p>
                        <p>Έλαβα το αίτημά σας και τα στοιχεία που υποβάλατε σχετικά με τον τομέα <strong>${sector || 'μας'}</strong>. Το μήνυμά σας βρίσκεται υπό εξέταση.</p>
                        <p>Ως Chartered Engineer (TEE), στόχος μου είναι να διασφαλίζω την τεχνική ακεραιότητα και τη θεσμική συμμόρφωση των ψηφιακών υποδομών. Θα μελετήσω προσωπικά τις ανάγκες σας γύρω από το <strong>${service || 'project σας'}</strong> και θα επικοινωνήσω μαζί σας εντός 24 ωρών.</p>
                        
                        <div style="margin: 40px 0; padding: 30px; background-color: #f8fafc; border-radius: 12px; border-left: 4px solid #2563eb;">
                            <h3 style="margin-top: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 1px; color: #2563eb;">Τι ακολουθεί (Protocol Steps):</h3>
                            <ul style="padding-left: 20px; margin-bottom: 0;">
                                <li style="margin-bottom: 10px;">Αξιολόγηση των τεχνικών και ρυθμιστικών απαιτήσεων του project σας.</li>
                                <li style="margin-bottom: 10px;">Προετοιμασία μιας εξατομικευμένης στρατηγικής (Compliance-by-Design / Architecture).</li>
                                <li style="margin-bottom: 0;">Επικοινωνία για τον προγραμματισμό μιας συμβουλευτικής συνάντησης (Secure Line).</li>
                            </ul>
                        </div>
                        
                        <p>Στο μεταξύ, μπορείτε να εξερευνήσετε το Governance Framework και παλαιότερα έργα μου στο portfolio: <a href="https://filippos-p-zygouris.vercel.app/" style="color: #2563eb; text-decoration: none; border-bottom: 1px solid #2563eb;">filippos-p-zygouris.vercel.app</a></p>
                        
                        <div style="margin-top: 50px;">
                            <p style="margin-bottom: 5px;">Με εκτίμηση,</p>
                            <p style="margin-top: 0;"><strong>Filippos P. Zygouris</strong><br/>
                            <span style="font-size: 13px; opacity: 0.8;">Dipl. Eng. | Licensed TEE Engineer</span><br/>
                            <span style="font-size: 13px; opacity: 0.8;">Fractional PRRC & SaMD Lead Architect</span></p>
                        </div>
                    </div>
                    
                    <div style="padding: 40px 50px; background-color: #fafafa; border-top: 1px solid #f0f0f0; font-size: 12px; color: #666;">
                        <h4 style="margin: 0 0 15px; font-size: 10px; text-transform: uppercase; letter-spacing: 2px; color: #999;">Tactical Coordinates:</h4>
                        <p style="margin: 5px 0;">📍 LOC: LAMIA, HEADQUARTERS</p>
                        <p style="margin: 5px 0;">📞 +30 697 592 2894</p>
                        <p style="margin: 5px 0;">✉️ filippos.paraskevas.zygouris@gmail.com</p>
                    </div>
                </div>
            `,
        };

        // Send both emails
        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(userMailOptions)
        ]);

        return NextResponse.json(
            { success: true, message: 'Transmission Successful' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
