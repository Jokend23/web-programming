let text = document.querySelector('#form-textarea');
let resultText = document.querySelector('.result-count');
let resultInfo = document.querySelector('.result-info');
let wordsCollection = new Map;
let wordsArray = [];

function setWordValues(elem) {
	let wordTitle = elem[0];
	let wordColor = elem[1]['color'];
	let wordCount = elem[1]['count'];
	if (wordCount >= 10) {
		wordColor = 'red';
	} else if (wordCount >= 6) {
		wordColor = 'yellow';
	} else if (wordCount >= 3) {
		wordColor = 'green';
	} else {
		wordColor = 'gray';
	}
	return [wordTitle, wordCount, wordColor]
}

function countWord() {
	wordsCollection.clear();
	textArray = this.value
		.trim()
		.replace(/[.,?!()"']/g, '')
		.replace(/\s+/g, ' ')
		.replace(/\n/g,' ')
		.split(' ');

	textArray.forEach(function (word, i, arr) {
		if (word != '') {
			if (wordsCollection.has(word)) {
				count = wordsCollection.get(word)['count'] + 1
				wordsCollection.set(word, {'count': count, 'color': null});
			} else {
				wordsCollection.set(word, {'count': 1, 'color': null});
			}
		}

	})

	wordsArray  = [...wordsCollection].map(setWordValues).sort(function (a, b) {
		return b[1] - a[1];
	})
	
}

function addText () {
	resultText.textContent = '';
	resultInfo.textContent = '';

	for (let i = 0; i < wordsArray.length; i++) {
		spanWord = document.createElement('span')
		spanWord.className = 'word badge bg-info text-white mr-1 mb-1';
		spanWord.style.fontSize = 12 + wordsArray[i][1] + 'px'
		spanWord.innerHTML = `${wordsArray[i][0]}<span class="ml-1 word-color badge ${wordsArray[i][2]}">${wordsArray[i][1]}</span>`;
		
		resultText.append(spanWord);
	}

	if (wordsArray.length != 0) {
		resultInfo.textContent += `Кол-во слов: ${wordsArray.length}`;
	}

};


text.addEventListener('change', countWord);
text.addEventListener('change', addText);