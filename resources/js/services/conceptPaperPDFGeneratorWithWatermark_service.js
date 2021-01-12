import { jsPDF } from "jspdf";

export class DocumentCreatorPDFWithWatermark {
    // tslint:disable-next-line: typedef

    create([name, course, currentSemester, logo, watermark, idea, basics, niceToHave, technologies, team]) {

        const { width, height } = this.calculateAspectRatioFit(logo.naturalWidth || logo.width, logo.naturalHeight || logo.height, 160, 30);
        const { watermarkWidth, watermarkHeight } = this.calculateAspectRatioFitWatermark(watermark.naturalWidth || watermark.width, watermark.naturalHeight || watermark.height, 100, 100);
        const { widthHSKL, heightHSKL } = this.calculateAspectRatioFitHSKLBranding(hskl_branding.naturalWidth || hskl_branding.width, hskl_branding.naturalHeight || hskl_branding.height, 160, 25);

        const doc = new jsPDF({
            orientation: 'p',
            unit: 'mm',
            format: 'a4',
            putOnlyUsedFonts: true,
            floatPrecision: 16 // or "smart", default is 16
        });

        var watermarkLeft = (doc.internal.pageSize.getWidth()/2) - (watermarkWidth/2);
        var watermarkTop = (doc.internal.pageSize.getHeight()/2) - (watermarkHeight/2);
        doc.addImage(watermark, watermarkLeft, watermarkTop, watermarkWidth, watermarkHeight);

        var left = 25;
        var leftTab1 = 35;
        var leftTab2 = 45;
        var top = 115;
        var helperTop = top;

        const textSizeTitle = 22;
        const textSizeHeading = 14;
        const textSizeSubHeading = 12;
        const textSizeText = 11;

        doc.addImage(hskl_branding, 135, 25, widthHSKL, heightHSKL);

        var courseHeadline = doc.setFont('times', 'bold')
            .setFontSize(textSizeTitle)
            .splitTextToSize(course, 160);
        doc.text((doc.internal.pageSize.getWidth()/2) - (doc.getTextDimensions(courseHeadline).w/2), 70, courseHeadline);

        var titleHeadline = doc.setFont('times', 'normal')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Konzeptpapier für die Projektarbeit/Prüfungsleistung", 160);
        doc.text((doc.internal.pageSize.getWidth()/2) - (doc.getTextDimensions(titleHeadline).w/2), 78, titleHeadline);

        var currentSemesterHeadline = doc.setFont('times', 'normal')
            .setFontSize(textSizeHeading)
            .splitTextToSize(currentSemester, 160);
        doc.text((doc.internal.pageSize.getWidth()/2) - (doc.getTextDimensions(currentSemesterHeadline).w/2), 86, currentSemesterHeadline);

        doc.setFont('times', 'bold');
        doc.setFontSize(17);
        doc.text(left, 110, name);

        doc.addImage(logo, left, top, width, height);

        //---------------------

        top = top + 40;

        var ideaHeadingLine = doc.setFont('times', 'bold')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Grundidee", 160);
        doc.text(left, top, ideaHeadingLine);
        
        top = top + 3;
        top = top + doc.getTextDimensions(ideaHeadingLine).h;

        var ideaLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(idea, 160);
        doc.text(left, top, ideaLines);

        top = top + doc.getTextDimensions(ideaLines).h + 5;


        //---------------------

        var featuresHeadingLine = doc.setFont('times', 'bold')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Features", 160);
        var basicsHeadingLine = doc.setFont('times', 'bold')
            .setFontSize(textSizeSubHeading)
            .splitTextToSize("Grundfunktionalitäten", 150);
        var basicsLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(basics, 140);

        var niceToHaveHeadingLine = doc.setFont('times', 'bold')
            .setFontSize(textSizeSubHeading)
            .splitTextToSize("Nice-To-Have Features", 150);
        var niceToHaveLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(niceToHave, 140);

        var technologiesHeadingLine = doc.setFont('times', 'bold')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Technologien", 160);
        var technologiesLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(technologies, 150);

        var teamHeadingLine = doc.setFont('times', 'bold')
            .setFontSize(textSizeHeading)
            .splitTextToSize("Team", 160);
        var teamLines = doc.setFont('times', 'normal')
            .setFontSize(textSizeText)
            .splitTextToSize(team, 150);

        helperTop = top + doc.getTextDimensions(featuresHeadingLine).h + doc.getTextDimensions(basicsHeadingLine).h + doc.getTextDimensions(basicsLines).h;

        if (helperTop > 267) {
            doc.addPage();
            top = 30;
        }

        //setText FeatureHeading
        doc.setFont('times', 'bold');
        doc.setFontSize(textSizeHeading);
        doc.text(left, top, featuresHeadingLine);

        top = top + 3;
        top = top + doc.getTextDimensions(featuresHeadingLine).h;

        //setText BasicsHeading
        doc.setFontSize(textSizeSubHeading);
        doc.text(leftTab1, top, basicsHeadingLine);

        top = top + 3;
        top = top + doc.getTextDimensions(basicsHeadingLine).h;

        //setText Basics
        doc.setFont('times', 'normal')
        doc.setFontSize(textSizeText);
        doc.text(leftTab2, top, basicsLines);

        top = top + doc.getTextDimensions(basicsLines).h + 5;

        //-----------------------

        helperTop = top + doc.getTextDimensions(niceToHaveHeadingLine).h + doc.getTextDimensions(niceToHaveLines).h;

        if (helperTop > 267) {
            doc.addPage();
            top = 30;
        }

        //setText NiceToHaveHeading
        doc.setFont('times', 'bold');
        doc.setFontSize(textSizeSubHeading)
        doc.text(leftTab1, top, niceToHaveHeadingLine);

        top = top + 3;
        top = top + doc.getTextDimensions(niceToHaveHeadingLine).h;

        //setText NiceToHave
        doc.setFont('times', 'normal')
        doc.setFontSize(textSizeText)
        doc.text(leftTab2, top, niceToHaveLines);

        top = top + doc.getTextDimensions(niceToHaveLines).h + 5;

        //-----------------------

        helperTop = top + doc.getTextDimensions(technologiesHeadingLine).h + doc.getTextDimensions(technologiesLines).h;
            
        if (helperTop > 267) {
            doc.addPage();
            top = 30;
        }

        //setText TechHeading
        doc.setFont('times', 'bold');
        doc.setFontSize(textSizeHeading);
        doc.text(left, top, technologiesHeadingLine);

        top = top + 3;
        top = top + doc.getTextDimensions(technologiesHeadingLine).h;

        //setText Tech
        doc.setFont('times', 'normal')
        doc.setFontSize(textSizeText);
        doc.text(leftTab1, top, technologiesLines);

        top = top + doc.getTextDimensions(technologiesLines).h + 5;

        //-----------------------

        helperTop = top + doc.getTextDimensions(teamHeadingLine).h + doc.getTextDimensions(teamLines).h;

        if (helperTop > 267) {
            doc.addPage();
            top = 30;
        }

        //setText TeamHeading
        doc.setFont('times', 'bold');
        doc.setFontSize(textSizeHeading);
        doc.text(left, top, teamHeadingLine);

        top = top + 3;
        top = top + doc.getTextDimensions(teamHeadingLine).h;

        //setText Team
        doc.setFont('times', 'normal')
        doc.setFontSize(textSizeText);
        doc.text(leftTab1, top, teamLines);

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

    calculateAspectRatioFitWatermark(
        srcWidth,
        srcHeight,
        maxWidth,
        maxHeight
    ) {
        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return { watermarkWidth: srcWidth * ratio, watermarkHeight: srcHeight * ratio };
    }

    calculateAspectRatioFitHSKLBranding(
        srcWidth,
        srcHeight,
        maxWidth,
        maxHeight
    ) {
        var ratio = Math.min(maxWidth / srcWidth, maxHeight / srcHeight);

        return { widthHSKL: srcWidth * ratio, heightHSKL: srcHeight * ratio };
    }
}