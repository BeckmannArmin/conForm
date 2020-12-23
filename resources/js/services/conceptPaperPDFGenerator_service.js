import { jsPDF } from "jspdf";


export class DocumentCreatorPDF {
    // tslint:disable-next-line: typedef

    create([name, course, currentSemester, logo, idea, basics, niceToHave, technologies, team]) {

        const { width, height } = this.calculateAspectRatioFit(logo.naturalWidth || logo.width, logo.naturalHeight || logo.height, 160, 30);

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

        doc.addImage(logo, left, top, width, height);

        //---------------------

        top = top + 40;

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
        var basicsHeadingLine = doc.setFont('times', 'normal')
            .setFontSize(textSizeSubHeading)
            .splitTextToSize("Grundfunktionalitäten", 150);
        var basicsLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(basics, 140);

        var niceToHaveHeadingLine = doc.setFont('times', 'normal')
            .setFontSize(textSizeSubHeading)
            .splitTextToSize("Nice-To-Have Features", 150);
        var niceToHaveLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(niceToHave, 140);

        helperTop = top + doc.getTextDimensions(featuresHeadingLine).h + doc.getTextDimensions(basicsHeadingLine).h + doc.getTextDimensions(basicsLines).h + doc.getTextDimensions(featuresHeadingLine).h;

        if (helperTop > 267) {
            doc.addPage();
            top = 30;
        }

        //setText FeatureHeading
        doc.setFontSize(textSizeHeading);
        doc.setTextColor('#2E74B5');
        doc.text(left, top, featuresHeadingLine);

        top = top + doc.getTextDimensions(featuresHeadingLine).h;

        //setText BasicsHeading
        doc.setFontSize(textSizeSubHeading);
        doc.setTextColor('#2E74B5');
        doc.text(leftTab1, top, basicsHeadingLine);

        top = top + doc.getTextDimensions(basicsHeadingLine).h;

        //setText Basics
        doc.setFontSize(textSizeText);
        doc.setTextColor('#000000');
        doc.text(leftTab2, top, basicsLines);

        top = top + doc.getTextDimensions(basicsLines).h + 5;

        //-----------------------

        doc.setFontSize(textSizeSubHeading)
        doc.setTextColor('#2E74B5');
        doc.text(leftTab1, top, niceToHaveHeadingLine);

        top = top + doc.getTextDimensions(niceToHaveHeadingLine).h;

        doc.setFontSize(textSizeText)
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

        top = top + doc.getTextDimensions(teamLines).h;




        return doc;

    }

    calculateAspectRatioFit(
        srcWidth,
        srcHeight,
        maxWidth,
        maxHeight
    ) {
        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return { width: srcWidth * ratio, height: srcHeight * ratio };
    }
}