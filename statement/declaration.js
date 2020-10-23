var pokemon = "ニドラン♂";

var box = function() {
    console.log(pokemon); // ログの出力結果は「ニドラン♂」ではなく「undefined」
    var pokemon = "ニドラン♀";
    console.log(pokemon); // ログの出力結果は「ニドラン♀」
};

box();