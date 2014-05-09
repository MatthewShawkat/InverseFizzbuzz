var rfb = new InverseFizzBuzz();

describe("Inverse FizzBuzz", function() {
  describe("numberToWord", function() {
    it("multiple of 3", function() {
      expect(rfb.numberToWord(3)).toBe('fizz');
    });
    it("multiple of 5", function() {
      expect(rfb.numberToWord(5)).toBe('buzz');
    });
    it("multiple of 3 and 5", function() {
      expect(rfb.numberToWord(15)).toBe('fizzbuzz');
    });
    it("other", function() {
      expect(rfb.numberToWord(7)).toBe(null);
    });
  });

  describe("numbersToWords", function() {
    it("['fizz']", function() {
      expect(rfb.numbersToWords([3])).toEqual(['fizz']);
    });
    it("['buzz']", function() {
      expect(rfb.numbersToWords([5])).toEqual(['buzz']);
    });
    it("['fizzbuzz']", function() {
      expect(rfb.numbersToWords([15])).toEqual(['fizzbuzz']);
    });
    it("[]", function() {
      expect(rfb.numbersToWords([4])).toEqual([]);
    });
  });

  describe("Sequencer", function() {
    it("nextSequence", function() {
      rfb.sequencer.startSequenceAt(1);
      rfb.sequencer.nextSequence();
      expect(rfb.sequencer.getSequence()).toEqual([1,2]);
    });
    it("nextSequence - twice", function() {
      rfb.sequencer.nextSequence();
      expect(rfb.sequencer.getSequence()).toEqual([1,2,3]);
    });
    
    it("Set Sequence", function() {
      rfb.sequencer.startSequenceAt(3);
      expect(rfb.sequencer.getSequence()).toEqual([3]);
    });

    it("Short Sequence", function() {
      rfb.sequencer.startSequenceAt(1);
      rfb.sequencer.setSequenceIfShorter();
      expect(rfb.sequencer.getShortestSequence()).toEqual([1]);
    });

    it("Short Sequence 2", function() {
      rfb.sequencer.startSequenceAt(3);
      rfb.sequencer.shortestSequence = [3,4];
      rfb.sequencer.setSequenceIfShorter();
      expect(rfb.sequencer.getShortestSequence()).toEqual([3]);
    });
  });

  describe("List Equal", function() {
    var list1 = [1,2,3];
    var list2 = [1,2,3];
    var list3 = [1,3,3];
    var list4 = [1,2,3,4];

    it("equal", function() {
      expect(rfb.listEqual(list1, list2)).toBe(true);
    });
    it("not equal", function() {
      expect(rfb.listEqual(list1, list3)).toBe(false);
    });
    it("different length", function() {
      expect(rfb.listEqual(list1, list4)).toBe(false);
    });
  });

  describe("Shortest Sequence", function() {
    it("['fizz']", function() {
      expect(rfb.shortestSequence(['fizz'])).toEqual([3]);
    });
    it("['buzz']", function() {
      rfb = new InverseFizzBuzz();
      expect(rfb.shortestSequence(['buzz'])).toEqual([5]);
    });
    it("['fizz','buzz']", function() {
      rfb = new InverseFizzBuzz();
      expect(rfb.shortestSequence(['fizz', 'buzz'])).toEqual([9, 10]);
    });
    it("['buzz','fizz']", function() {
      rfb = new InverseFizzBuzz();
      expect(rfb.shortestSequence(['buzz', 'fizz'])).toEqual([5, 6]);
    });
    it("['fizz', 'buzz', 'fizz']", function() {
      rfb = new InverseFizzBuzz();
      expect(rfb.shortestSequence(['fizz', 'buzz', 'fizz'])).toEqual([3, 4, 5, 6]);
    });
    it("['fizz', 'fizz']", function() {
      rfb = new InverseFizzBuzz();
      expect(rfb.shortestSequence(['fizz', 'fizz'])).toEqual([6, 7, 8, 9]);
    });
    it("['fizz', 'fizz', 'buzz']", function() {
      rfb = new InverseFizzBuzz();
      expect(rfb.shortestSequence(['fizz', 'fizz', 'buzz'])).toEqual([6, 7, 8, 9, 10]);
    });
  });
});

