// A "Method" is a function embedded into an object. "this" is a keyword for the method that represents the object

let restaraunt = { 
    name: "Snoopy's",
    guestCapacity: 200,
    currentGuestCount: 0,
    checkAvailability: function(partySize) {  // method within the object
        let seatsLeft = this.guestCapacity - this.currentGuestCount
        return partySize <= seatsLeft
    },
    seatParty: function(partySize) {
        this.currentGuestCount = this.currentGuestCount + partySize   
    },
    removeParty: function(partySize) {
        this.currentGuestCount = this.currentGuestCount - partySize
    }
}
restaraunt.seatParty(14) 
console.log(restaraunt.currentGuestCount)
restaraunt.removeParty(7)
console.log(restaraunt.currentGuestCount)


