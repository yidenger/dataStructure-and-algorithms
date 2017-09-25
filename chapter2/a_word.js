function Word() {
        this.chars = [];
        this.chars.push('a');
        for (var i = 'a'; i < 'z';) {
            this.chars.push(String.fromCharCode(i.charCodeAt() + 1))
            i = String.fromCharCode(i.charCodeAt() + 1);
        }

        this.show = function() {console.info([...arguments].join(''))}
}

var word = new Word();
console.info(word.chars.toString());
word.show('a', 'b', 'd');