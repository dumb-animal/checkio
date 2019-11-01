/* Первая рабочая версия до того как узнал про операцию | в регулярках
function brackets(expression) {
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    expression = expression.replace(/[0-9*+-/]/g, '').split('');
    if (expression.length % 2 != 0) return false;
    let stack = [];
    for (let i = 0; i < expression.length; i++) {
        let bracket = expression[i];
        if ('({['.indexOf(bracket) != -1) stack.push(bracket);
        else if (bracket !== brackets[stack.pop()]) return false;
    }
    if (stack.length != 0) return false;
    return true;
}
*/

function brackets(expression) {
    expression = expression.replace(/[*+-/\d]/g, '');
    let count = expression.length / 2;
    for (let i = 0; i < count; i++)
        expression = expression.replace(/\[\]|\{\}|\(\)/g, '');
    return !expression.length;
}

console.log(brackets("((5+3)*2+1)"), true);
console.log(brackets("{[(3+1)+2]+}"), true);
console.log(brackets("(3+{1-1)}"), false);
console.log(brackets("[1+1]+(2*2)-{3/3}"), true);
console.log(brackets("(({[(((1)-2)+3)-3]/3}-3)"), false);
console.log(brackets("2+3"), true);
console.log(brackets("{[(3+1)+2]+}"), true)