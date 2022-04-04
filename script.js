var button = document.getElementById("btnid");
function generatePassword() {
		var prompts = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "?", "!", "/"];
		var a = prompts[Math.floor(Math.random() * prompts.length)];
		var b = prompts[Math.floor(Math.random() * prompts.length)];
		var c = prompts[Math.floor(Math.random() * prompts.length)];
		var d = prompts[Math.floor(Math.random() * prompts.length)];
		var e = prompts[Math.floor(Math.random() * prompts.length)];
		var f = prompts[Math.floor(Math.random() * prompts.length)];
		var g = prompts[Math.floor(Math.random() * prompts.length)];
		var h = prompts[Math.floor(Math.random() * prompts.length)];
		var i = prompts[Math.floor(Math.random() * prompts.length)];
		var j = prompts[Math.floor(Math.random() * prompts.length)];
		var k = prompts[Math.floor(Math.random() * prompts.length)];
		var l = prompts[Math.floor(Math.random() * prompts.length)];
		var m = prompts[Math.floor(Math.random() * prompts.length)];
		var n = prompts[Math.floor(Math.random() * prompts.length)];
		var o = prompts[Math.floor(Math.random() * prompts.length)];
		var p = prompts[Math.floor(Math.random() * prompts.length)];
		var password = a + b + c + d + e + f + g + h + i + j + k + l + m + n + o + p;
		document.getElementById("password").value = password;
}