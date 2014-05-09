function InverseFizzBuzz() {
	this.sequencer = {
		sequence: [],
		shortestSequence: [],
		nextSequence: function(){
			var nextNumber = this.sequence[this.sequence.length - 1] + 1;
			this.sequence.push(nextNumber);
		},
		startSequenceAt: function(value){
			this.sequence = [];
			this.sequence.push(value);
		},
		getSequence: function(){
			return this.sequence;
		},
		getShortestSequence: function(){
			return this.shortestSequence;
		},
		setSequenceIfShorter: function(){
			if (this.sequence.length < this.shortestSequence.length || this.shortestSequence.length === 0) {
				this.shortestSequence = this.sequence.slice(0);
			};
		}
	}

	this.listEqual = function(list1, list2){
		if(list1.length !== list2.length){
			return false;
		} else {
			for (var i = 0; i < list1.length; i++) {
				if(list1[i] !== list2[i]){
					return false;
				}
			};
			return true;
		}
	}

	this.numberToWord = function(number){
		if(number % 3 === 0 && number % 5 === 0){
			return 'fizzbuzz';
		} else if(number % 3 === 0){
			return 'fizz';
		} else if(number % 5 === 0){
			return 'buzz';
		} else {
			return null;
		}
	}

	this.numbersToWords = function(numbers){
		var words = [];
		for(var i = 0; i < numbers.length; i++){
			var word = this.numberToWord(numbers[i]);
			if(word !== null){
				words.push(word);
			}
		}
		return words;
	}

	this.shortestSequence = function(listOfWords){
		for (var i = 1; i <= 100; i++) {
			this.sequencer.startSequenceAt(i);
			for (var j = i; j <= 100; j++) {
				var convertedSequence = this.numbersToWords(this.sequencer.getSequence());

				if (this.listEqual(listOfWords, convertedSequence)) {
					this.sequencer.setSequenceIfShorter();
				}
				this.sequencer.nextSequence();
			};
		};
		return this.sequencer.getShortestSequence();
	}
}