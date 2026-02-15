const { mdToPdf } = require('md-to-pdf');
const path = require('path');
const fs = require('fs');

async function convertReport() {
    const date = new Date().toISOString().split('T')[0];
    const mdFile = `/root/business/reports/report_${date}.md`;
    const pdfFile = `/root/business/reports/report_${date}.pdf`;

    if (!fs.existsSync(mdFile)) {
        console.error(`Report ${mdFile} existiert nicht.`);
        return;
    }

    console.log(`Konvertiere ${mdFile} zu PDF...`);
    try {
        const pdf = await mdToPdf({ path: mdFile }, { 
            dest: pdfFile,
            launch_options: {
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            },
            pdf_options: {
                format: 'A4',
                margin: '20mm',
                printBackground: true
            }
        });
        console.log(`PDF erfolgreich erstellt: ${pdfFile}`);
    } catch (error) {
        console.error('Fehler bei der PDF-Erstellung:', error);
    }
}

convertReport();
