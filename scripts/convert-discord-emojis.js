function checkInput() {
	var input = document.getElementById('discordEmojiInput').value;
	if (input != '') {
		document.getElementById('convertEmojis').classList.remove('disabled');
	}
}

function convertEmojis() {
	var input = document.getElementById('discordEmojiInput').value.toLowerCase();
	var copyEmojiBtn = document.getElementById("copyEmoji");
	var specialChars = /^[a-zA-Z0-9 ]+$/;
	var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	var valid = specialChars.test(input);
	var result = '';
	if (!valid) {
		result = 'Alpha Numeric Characters only are allowed';
		document.getElementById('discordEmojiString').innerHTML = result;
		copyEmojiBtn.classList.add("disabled");
		return;
	}
	var emojiPrefix = ':regional_indicator_'
	for (var i = 0; i < input.length; i++) {
		if (input[i] == ' ') {
			result += `\xa0\xa0\xa0\xa0`;
		} else if (numbers.includes(input[i])) {
			result += numberToString(input[i]);
		} else {
			result += emojiPrefix + input[i].toLowerCase() + ': ';
		}
	}
	copyEmojiBtn.classList.remove("disabled");
	document.getElementById('discordEmojiString').innerHTML = result;
}

function numberToString(number) {
	var answer = '';

	switch (number) {
		case '1':
			answer = ':one: ';
			break;
		case '2':
			answer = ':two: ';
			break;
		case '3':
			answer = ':three: ';
			break;
		case '4':
			answer = ':four: ';
			break;
		case '5':
			answer = ':five: ';
			break;
		case '6':
			answer = ':six: ';
			break;
		case '7':
			answer = ':seven: ';
			break;
		case '8':
			answer = ':eight: ';
			break;
		case '9':
			answer = ':nine: ';
			break;
		case '0':
			answer = ':zero: ';
			break;
	}
	return answer;

}

function copyEmojis() {
	var copyText = document.getElementById('discordEmojiString').textContent;
	navigator.clipboard.writeText(copyText);
	alert('Copied to Clipboard!');
}
