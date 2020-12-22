import { jsPDF } from "jspdf";


export class DocumentCreatorPDF {
    // tslint:disable-next-line: typedef
    create([name, course, currentSemester, idea, basics, niceToHave, technologies, team]) {
        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // or "smart", default is 16
        });

        var left = 25;
        var leftTab1 = 35;
        var leftTab2 = 45;
        var top = 50;

        const textSizeHeader = 14;
        const textSizeHeading = 16;
        const textSizeSubHeading = 13;
        const textSizeText = 11;

        doc.setFont('times', 'bold');
        doc.setFontSize(textSizeHeader);
        doc.text(left, 30, name);

        doc.setFont('times', 'normal');
        doc.setFontSize(textSizeHeader);
        doc.text(left, 35, course);
        doc.text(left, 40, currentSemester);

        var ideaHeadingLine = doc.setFont('times', 'normal')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Grundidee", 160);
        doc.setTextColor('#2E74B5');
        doc.text(left, top, ideaHeadingLine);

        top = top + doc.getTextDimensions(ideaHeadingLine).h;

        var ideaLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(idea, 160);
            doc.setTextColor('#000000');
        doc.text(left, top, ideaLines);

        top = top + doc.getTextDimensions(ideaLines).h + 5;
        
        //---------------------

        var featuresHeadingLine = doc.setFont('times', 'normal')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Features", 160);
        doc.setTextColor('#2E74B5');
        doc.text(left, top, featuresHeadingLine);

        top = top + doc.getTextDimensions(featuresHeadingLine).h;

        var basicsHeadingLine = doc.setFont('times', 'normal')
            .setFontSize(textSizeSubHeading)
            .splitTextToSize("Grundfunktionalitäten", 150);
        doc.setTextColor('#2E74B5');
        doc.text(leftTab1, top, basicsHeadingLine);

        top = top + doc.getTextDimensions(basicsHeadingLine).h;

        var basicsLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(basics, 140);
            doc.setTextColor('#000000');
        doc.text(leftTab2, top, basicsLines);

        //-----------------------

        top = top + doc.getTextDimensions(basicsLines).h + 5;

        var niceToHaveHeadingLine = doc.setFont('times', 'normal')
            .setFontSize(textSizeSubHeading)
            .splitTextToSize("Nice-To-Have Features", 150);
        doc.setTextColor('#2E74B5');
        doc.text(leftTab1, top, niceToHaveHeadingLine);

        top = top + doc.getTextDimensions(niceToHaveHeadingLine).h;

        var niceToHaveLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(niceToHave, 140);
            doc.setTextColor('#000000');
        doc.text(leftTab2, top, niceToHaveLines);

        //-----------------------

        top = top + doc.getTextDimensions(niceToHaveLines).h + 5;

        var technologiesHeadingLine = doc.setFont('times', 'normal')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Technologien", 160);
        doc.setTextColor('#2E74B5');
        doc.text(left, top, technologiesHeadingLine);

        top = top + doc.getTextDimensions(technologiesHeadingLine).h;

        var technologiesLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(technologies, 150);
            doc.setTextColor('#000000');
        doc.text(leftTab1, top, technologiesLines);

        //-----------------------

        top = top + doc.getTextDimensions(technologiesLines).h + 5;

        var teamHeadingLine = doc.setFont('times', 'normal')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Team", 160);
        doc.setTextColor('#2E74B5');
        doc.text(left, top, teamHeadingLine);

        top = top + doc.getTextDimensions(teamHeadingLine).h;

        var teamLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(team, 150);
            doc.setTextColor('#000000');
        doc.text(leftTab1, top, teamLines);


        return doc;

    }
}