let tokens = [""]; //токены

function send () {
for(let i = 0; i < tokens.length; i++) {
let vk = new VK({ token: tokens[i] });
vk.api.messages.send({user_id: message.args[1], message: `${message.args[2]}`});
}
}
send();
return bot(`сообщение отправлено!`);