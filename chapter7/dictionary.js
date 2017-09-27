function Dictionary() {
    this.dataSource = new Array();
    this.add = function(key, value) {
        this.dataSource[key] = value;
    }
    this.find = function(key) {
        return this.dataSource[key];
    }
    this.toString = function() {
        return this.dataSource;
    }
    this.remove = function(key) {
        delete this.dataSource[key];
    }
}

var dic = new Dictionary();
dic.add("name", "Jhon");
dic.add("age", 22);
dic.add("sex", "male");
console.log(dic.toString());