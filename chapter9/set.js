function Set() {
    this.dataSource = [];
    this.add = add;
    this.remove = remove;
    this.size = size;
    this.union = union;
    this.intersect = intersect;
    this.subset = subset;
    this.difference = difference;
    this.show = show;
    this.contains = contains;
}

function add(data) {
    if(this.dataSource.indexOf(data) == -1) {
        this.dataSource.push(data);
        return true;
    }
    else {
        return false;
    }
}

function remove(data) {
    var pos = this.dataSource.indexOf(data);
    if(pos > -1) {
        this.dataSource.splice(pos, 1);
        return true;
    }
    else {
        return false;
    }
}

function show() {
    console.log(this.dataSource);
}

function contains(data) {
    if (this.dataSource.indexOf(data) > -1) {
        return true;
    }
    else {
        return false;
    }
}

function union(set) {
    var tempSet = new Set();
    for(var i = 0; i < this.dataSource.length; ++i) {
        tempSet.add(this.dataSource[i]);
    }

    for(var i = 0; i < set.dataSource.length; ++i) {
        if(!tempSet.contains(set.dataSource[i])) {
            tempSet.add(set.dataSource[i]);
        }
    }

    return tempSet;
}

function intersect(set) {
    var tempSet = new Set();
    for (var i = 0; i < this.dataSource.length; ++i) {
        if(set.contains(this.dataSource[i])) {
            tempSet.add(this.dataSource[i]);
        }
    }

    return tempSet;
}

function subset(set) {
    if(this.size() > set.size()) {
        return false;
    }
    else {
        for(var member in this.dataSource) {
            if(!set.contains)
        }
    }
}