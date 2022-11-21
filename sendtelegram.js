var telegram_bot_id = "5478465089:AAGWApTPfK5NxOnSVV1x0QYVhfSBt9ipQYo";
var chat_id = 1346550248; 
var u_name, email, telefon, message;
var ready = function() {
    u_name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    telefon = document.getElementById("telefon").value;
    message = document.getElementById("message").value;
    message = "Ismi: " + u_name + "\nEmail: " + email +  "\nTelefon: " + telefon + "\nIzoh: " + message;
};
var sendtelegram = function() {
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function(response) {
        console.log(response);
    });
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("message").value = "";
    return false;
};
