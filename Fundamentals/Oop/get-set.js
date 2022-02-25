const data = {
    locations: [],
    // custom getter
    get location() {
        return this._location
    },
    //backend logic for setting location
    set location(value) {
        //where data actually lives
        this._location = value.trim()
        this.locations.push(this._location)
    },
}

// code that uses data-object
data.location = "       Corpus Christi"
data.location = "San Antonio"
console.log(data)
