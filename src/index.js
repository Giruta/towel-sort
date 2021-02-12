
// You should implement your task here.

module.exports = function towelSort (matrix) {

    let arr=[];
    if (arguments.length===0) return [];

    matrix.forEach((el, ind) => {
        if (ind % 2 === 0) {
            el.forEach(item => arr.push(item))
        } else {
            el.reverse().forEach(item => arr.push(item))
        }
    })

    return arr;
}

