// Задача:
// напиши функцию, которая принимает 1 параметр.
// при первом вызове, она его запоминает, при втором,- - суммирует переданый параметр с тем, что передали первый раз и тд
// и всё это с замыканиями
// например
// sum(3) = 3
// sum(5) = 8
// sum(228) = 236
 
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
