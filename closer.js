function matrix(row, column){
    const m = [[1, 2, 4], [4, 6, 40], [7, 7, 7]];
    let position = m[column][row];
    function elem(){
        console.log(position);
    }
    return elem;
}
const pos = matrix(2, 2);
pos();
