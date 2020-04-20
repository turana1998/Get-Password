
function enter() {
    var string_length = document.getElementById("text").value;

    if (string_length < 6) {
        swal({
            title: "Error",
            text: "The lenght must be longer than 5",
            icon: "error",
        });

    }

    
    else {
        var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var signs = ['!', '"', "#", "&", "$", "%", "`", "(", ")", "_", "=", "+", "-", "/", "*", ",", "@", "^", "\""];
        var randomstring = '';
        var a = Math.floor(Math.random() * string_length);
        var c = string_length - a;
        var b = Math.floor(Math.random() * c);
        var d = string_length - (a + b);

        for (var i = 0; i < a; i++) {
            var rlet = Math.floor(Math.random() * letters.length);
            randomstring += letters[rlet];
        }
        for (var i = 0; i < b; i++) {
            var rnum = Math.floor(Math.random() * numbers.length);
            randomstring += numbers[rnum];
        }
        for (var i = 0; i < d; i++) {
            var rnum = Math.floor(Math.random() * signs.length);
            randomstring += signs[rnum];
        }
        // console.log(a);
        // console.log(b);
        // console.log(d);
        document.getElementById("password").value = randomstring

    }

}
