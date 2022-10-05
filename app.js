function getPassword(){
    var chars ="123456abcdABCD*";
    var passwordlen = 8;
    var password="";
    for (var i =0; i < passwordlen ;i++) {
        var random = Math.floor(Math.random()*chars.length)
        password+=chars.substring(random,random+1);

    }
    document.getElementById("password").value = password
}