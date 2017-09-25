function Student() {
    this.data = [];
    this.add = function(item) {this.data.push(item);};
    this.average = function() {
        var total = this.data.reduce((a, b) => a + b);
        return total / this.data.length
    };
}

var student = new Student();

student.add(1);
student.add(30);
student.add(29);
console.info(student.average());



