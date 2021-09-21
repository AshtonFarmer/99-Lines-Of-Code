document.addEventListener('DOMContentLoaded', function () {

    //Adds Button with the lettering of Sing!
    const addSquareButton = document.createElement("button");
    addSquareButton.textContent = "Sing!";
    document.body.appendChild(addSquareButton);




    // Array of friends to you use in the loop
    let friends = ['John', 'Susize', 'Cameron', 'James', 'Grayson']




    //  What happens when button is clicked in console.log
    addSquareButton.addEventListener("click", function () {

        //Array for loop
        for (let i = 0; i < friends.length; i++) {

            for (let j = 99; j > 0; j--) {
                if (j > 2) {
                    console.log(j + ' lines of code in the file, ' + j + ' lines of code; ' + friends[i] +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file ')
                } else if (j == 2) {
                    console.log(j + 'lines of code in the file,' + j + ' lines of code; ' + friends[i] +
                        ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file')
                } else {
                    console.log(j + ' lines of code in the file,' + j + ' lines of code; ' + friends[i] +
                        ' strikes one out, clears it all out, no more lines in the code in the file. ')
                }
            }
        }

    })


    // H3 OF FRIENDS
    addSquareButton.addEventListener("click", function () {

        // h3 of John
        let h3 = document.createElement('h3');
        let h3text = document.createTextNode("John");


        h3.appendChild(h3text);
        document.body.appendChild(h3);

        for (let j = 99; j > 0; j--) {

            const paragraph = document.createElement("p");
            if (j > 2) {
                paragraph.textContent = j + ' lines of code in the file, ' + j + ' lines of code; ' + "John" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file '
            } else if (j == 2) {
                paragraph.textContent = j + 'lines of code in the file,' + j + ' lines of code; ' + "John" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file'
            } else {
                paragraph.textContent = j + ' lines of code in the file,' + j + ' lines of code; ' + "John" +
                    ' strikes one out, clears it all out, no more lines in the code in the file. '
            }

            document.body.appendChild(paragraph)
        }
        // h3 of Susize
        let h31 = document.createElement('h3');
        let h31text = document.createTextNode("Susize");


        h31.appendChild(h31text);
        document.body.appendChild(h31);



        for (let j = 99; j > 0; j--) {

            const paragraph = document.createElement("p");
            if (j > 2) {
                paragraph.textContent = j + ' lines of code in the file, ' + j + ' lines of code; ' + "Susize" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file '
            } else if (j == 2) {
                paragraph.textContent = j + 'lines of code in the file,' + j + ' lines of code; ' + "Susize" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file'
            } else {
                paragraph.textContent = j + ' lines of code in the file,' + j + ' lines of code; ' + "Susize" +
                    ' strikes one out, clears it all out, no more lines in the code in the file. '
            }

            document.body.appendChild(paragraph)
        }


        // h3 of Cameron
        let h32 = document.createElement('h3');
        let h32text = document.createTextNode("Cameron");

        h32.appendChild(h32text);
        document.body.appendChild(h32);


        for (let j = 99; j > 0; j--) {

            const paragraph = document.createElement("p");
            if (j > 2) {
                paragraph.textContent = j + ' lines of code in the file, ' + j + ' lines of code; ' + "Cameron" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file '
            } else if (j == 2) {
                paragraph.textContent = j + 'lines of code in the file,' + j + ' lines of code; ' + "Cameron" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file'
            } else {
                paragraph.textContent = j + ' lines of code in the file,' + j + ' lines of code; ' + "Cameron" +
                    ' strikes one out, clears it all out, no more lines in the code in the file. '
            }

            document.body.appendChild(paragraph)
        }



        // h3 of James
        let h33 = document.createElement('h3');
        let h33text = document.createTextNode("James");


        h33.appendChild(h33text);
        document.body.appendChild(h33);


        for (let j = 99; j > 0; j--) {

            const paragraph = document.createElement("p");
            if (j > 2) {
                paragraph.textContent = j + ' lines of code in the file, ' + j + ' lines of code; ' + "James" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file '
            } else if (j == 2) {
                paragraph.textContent = j + 'lines of code in the file,' + j + ' lines of code; ' + "James" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file'
            } else {
                paragraph.textContent = j + ' lines of code in the file,' + j + ' lines of code; ' + "James" +
                    ' strikes one out, clears it all out, no more lines in the code in the file. '
            }

            document.body.appendChild(paragraph)
        }



        // h3 of grayson
        let h34 = document.createElement('h3');
        let h34text = document.createTextNode("Grayson");


        h34.appendChild(h34text);
        document.body.appendChild(h34);


        for (let j = 99; j > 0; j--) {

            const paragraph = document.createElement("p");
            if (j > 2) {
                paragraph.textContent = j + ' lines of code in the file, ' + j + ' lines of code; ' + "Grayson" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file '
            } else if (j == 2) {
                paragraph.textContent = j + 'lines of code in the file,' + j + ' lines of code; ' + "Grayson" +
                    ' strikes one out, clears it all out, ' + (j - 1) + ' lines of code in the file'
            } else {
                paragraph.textContent = j + ' lines of code in the file,' + j + ' lines of code; ' + "Grayson" +
                    ' strikes one out, clears it all out, no more lines in the code in the file. '
            }

            document.body.appendChild(paragraph)
        }

    })



});