// To install extension:
// - Navigate to chrome://extensions.
// - Press Load unpacked.
// - Select folder, which contains manifest.json.

const tag = "[Password Manager] "

window.onload = function() { 
    var inputs = document.getElementsByTagName('input');

    for (var i = 0; i < inputs.length; i++) {
        console.log(tag + "Input name: " + inputs[i].name + ", value: " + inputs[i].value + ", type: " + inputs[i].type + ".");

        if (inputs[i].type.toLowerCase() == 'password') {
            inputs[i].value = "test_password";
        }

        if (inputs[i].type.toLowerCase() == 'email') {
            inputs[i].value = "test@email.com";
        }
    }
}