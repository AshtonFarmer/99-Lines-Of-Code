let friends = ['John', 'Susize', 'Cameron', 'James', 'Grayson']

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
   