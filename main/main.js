module.exports = function main(num) {
    console.log("Debug Info");
    var result;
    var digit_top    = ["._.","...","._.","._.","...","._.","._.","._.","._.","._."];
    var digit_middle = ["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"];
    var digit_bottom = ["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"];
    
    var result_top = [], result_middle = [], result_bottom = [];
    var i, x;
    for (i = 0; i < num.length; i++)
    {
        x = parseInt(num[i]);
        result_top.push(digit_top[x]);
        result_middle.push(digit_middle[x]);
        result_bottom.push(digit_bottom[x]);
    }
    result = result_top.join(' ') + '\n' + result_middle.join(' ') + '\n' + result_bottom.join(' ') + '\n';
    return result
};