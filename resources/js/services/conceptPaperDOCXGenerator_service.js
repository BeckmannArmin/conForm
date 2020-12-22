import { AlignmentType, Document, HeadingLevel, Packer, Paragraph, TabStopPosition, TabStopType, TextRun, Media } from "docx";


export class DocumentCreatorDOCX {
    // tslint:disable-next-line: typedef
    create([name, course, currentSemester, idea, basics, niceToHave, technologies, team]) {
        const document = new Document();
        //const image = Media.addImage(document, );


        console.log(basics);

        document.addSection({
            children: [
                new Paragraph({
                    children: [
                        new TextRun({
                            text: name,
                            bold: true,
                            size: 28,
                        }),
                        new TextRun({
                            text: course,
                            bold: false,
                            size: 28,
                        }).break(),
                        new TextRun({
                            text: currentSemester,
                            bold: false,
                            size: 28,
                        }).break(),
                    ],
                    spacing: {
                        after: 200,
                    }
                }),
                //new Paragraph(image),
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
                if(tabBool == true) {
                    var text = new TextRun({ text: "\t" + "\t" + stringArray[i], size: 22 });
                }
                else {
                    var text = new TextRun({ text: "\t" + stringArray[i], size: 22 });
                }
            }
            else {
                if(tabBool == true) {
                    var text = new TextRun({ text: "\t" + "\t" + stringArray[i], size: 22 }).break();
                }
                else {
                    var text = new TextRun({ text: "\t" + stringArray[i], size: 22 }).break();
                }
            }
            console.log(text)
            children.push(text);
        }



        return new Paragraph({
            children,
            spacing: {
                after: 200,
            }
        });
    }

    createSubHeading(text){
        return new Paragraph({
            text: text,
            heading: HeadingLevel.HEADING_2,
        });
    }
    createHeading(text){
        return new Paragraph({
            text: text,
            heading: HeadingLevel.HEADING_1,
        });
    }
    createSpace(){
        return new Paragraph({
            
        });
    }
}