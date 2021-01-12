import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun, Media, VerticalPositionAlign } from "docx";


export class DocumentCreatorDOCXWithWatermark {
    // tslint:disable-next-line: typedef
    create([name, course, currentSemester, logo, widthImg, heightImg, idea, basics, niceToHave, technologies, team, hskl_branding_logo, widthHSKL, heightHSKL, watermark_logo, widthWatermark, HeightWatermark]) {
        const document = new Document();
        const image = Media.addImage(document, logo, widthImg, heightImg);
        const hskl_branding_image = Media.addImage(document, hskl_branding_logo, widthHSKL, heightHSKL, {
            floating: {
                horizontalPosition: {
                    offset: 4803569,
                },
                verticalPosition: {
                    offset: 900000,
                },
            },
        });
        const watermark_image = Media.addImage(document, watermark_logo, widthWatermark, HeightWatermark, {
            floating: {
                horizontalPosition: {
                    align: VerticalPositionAlign.CENTER,
                },
                verticalPosition: {
                    align: VerticalPositionAlign.CENTER,
                },
            },
        });


        document.addSection({
            children: [
                new Paragraph(watermark_image),
                new Paragraph({
                    children: [hskl_branding_image],
                    spacing: {
                        after: 1750,
                    }
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: course,
                            bold: true,
                            size: 44,
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        after: 200,
                    }
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: "Konzeptpapier für die Projektarbeit/Prüfungsleistung",
                            size: 28,
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        after: 200,
                    }
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: currentSemester,
                            bold: false,
                            size: 28,
                        }),
                    ],
                    alignment: AlignmentType.CENTER,
                    spacing: {
                        after: 1000,
                    }
                }),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: name,
                            bold: true,
                            size: 34,
                        }),
                    ],
                    spacing: {
                        after: 200,
                    }
                }),
                new Paragraph(image),
                this.createHeading("Grundidee"),
                new Paragraph({
                    children: [
                        new TextRun({
                            text: idea,
                            size: 22
                        }),
                    ],
                    spacing: {
                        after: 200,
                    }
                }),

                this.createHeading("Features"),
                this.createSubHeading("\tGrundfunktionalitäten"),
                this.createList(basics, true),
                this.createSubHeading("\tNice-To-Have Features"),
                this.createList(niceToHave, true),

                this.createHeading("Technologien"),
                this.createList(technologies, false),

                this.createHeading("Team"),
                this.createList(team, false),

            ],
        });

        return document;
    }

    createList(stringArrayInput, tabBool) {
        var stringArray = stringArrayInput.split("\n");

        var children = new Array();

        var i;
        for (i = 0; i < stringArray.length; i++) {
            if (i == 0) {
                if (tabBool == true) {
                    var text = new TextRun({ text: "\t" + "\t" + stringArray[i], size: 22 });
                }
                else {
                    var text = new TextRun({ text: "\t" + stringArray[i], size: 22 });
                }
            }
            else {
                if (tabBool == true) {
                    var text = new TextRun({ text: "\t" + "\t" + stringArray[i], size: 22 }).break();
                }
                else {
                    var text = new TextRun({ text: "\t" + stringArray[i], size: 22 }).break();
                }
            }
            children.push(text);
        }



        return new Paragraph({
            children,
            spacing: {
                after: 200,
            }
        });
    }

    createSubHeading(text) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 24,
                    bold: true
                }),
            ],
            spacing: {
                after: 200,
            }
        });
    }
    createHeading(text) {
        return new Paragraph({
            children: [
                new TextRun({
                    text: text,
                    size: 28,
                    bold: true,
                }),
            ],
            spacing: {
                after: 200,
            }
        });
    }
    createSpace(spaceSize) {
        console.log(spaceSize)
        return new Paragraph({
            spacing: {
                after: spaceSize,
            }
        });
    }
}