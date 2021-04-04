//do not use "while" or "for" loops
//again googled
function returnEvenArray(arr) {
    const returnEvenArray = (arr) => {
        return arr.filter(el => {
            return el % 2 === 0;
        })
    };
    console.log(returnEvenArray(arr));
}


returnEvenArray([3, 5, 6, 7, 8, 4, 2, 1, 66, 77])