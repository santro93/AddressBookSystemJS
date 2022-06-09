class Contact {

    constructor(firstName, lastName, address, city, state, zip, phoneNo, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNo = phoneNo;
        this.email = email;
    }

    get firstName() {
        return this._firstName;
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get address() {
        return this._address;
    }
    
    set address(address) {
        this._address = address;
    }

    get city() {
        return this._city;
    }

    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }

    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }

    set zip(zip) {
        this._zip = zip;
    }

    get phoneNo() {
        return this._phoneNo;
    }

    set phoneNo(phoneNo) {
        this._phoneNo = phoneNo;
    }

    get email() {
        return this._email;
    }

    set email(email) {
        this._email = email;
    }

    toString() {
        return "First Name : " + this.firstName + ", Last Name : " + this.lastName + ", Address : " + this.address +
            ", City : " + this.city + ", State : " + this.state + ", Zip : " + this.zip + ", Phone No : " + this.phoneNo + ", Email : " + this.email;
    }
}

let addressBookArr = new Array();

try {
    addressBookArr.push(new Contact("Pratik", "Savji", "Shivaji Nagar", "Pune", "Maharashtra", "411001", "8208508814", "pratikchitruk@gmail.com"));
} catch (e) {
    console.error(e);
}
try {
    addressBookArr.push(new Contact("Omkar", "Pathak", "Sanewadi", "Pune", "Maharashtra", "411007", "91 8989888989", "opatil@gmail.com"));
} catch (e) {
    console.error(e)
}

function contactExists(fName, lName) {
    return addressBookArr.some(u => u.firstName == fName && u.lastName == lName);
}

function editContact(fName, lName, property, value) {
    if (contactExists(fName, lName)) {
        switch (property) {
            case "address":
                addressBookArr.find((contact) => contact.firstName == fName).address = value;
                break;
            case "city":
                addressBookArr.find((contact) => contact.firstName == fName).city = value;
                break;
            case "state":
                addressBookArr.find((contact) => contact.firstName == fName).state = value;
                break;
            case "zip":
                addressBookArr.find((contact) => contact.firstName == fName).zip = value;
                break;
            case "phone":
                addressBookArr.find((contact) => contact.firstName == fName).phoneNo = value;
                break;
            case "email":
                addressBookArr.find((contact) => contact.firstName == fName).email = value;
                break;
            default:
                console.log("Enter valid Property");
        }
    } else {
        console.log("Contact Does Not Exist");
    }
}


function deleteContact(fName, lName) {
    if (contactExists(fName, lName)) {
        addressBookArr = addressBookArr.filter((user) => user.firstName != fName && user.lastName != lName);
    } else {
        console.log("Contact Does Not Exist");
    }
}

console.log(addressBookArr);
console.log("-----------------------")
console.log("Contact edited")
editContact("Omkar", "Pathak", "address", "Aundh")
editContact("Omkar", "Pathak", "zip", "411027")
console.log(addressBookArr);
console.log("-----------------------")
console.log("ContactDeleted")
deleteContact("Omkar", "Pathak");
console.log(addressBookArr);


//alert(addressBookArr);
//alert("-----------------------")
//alert("Contact edited")
//alert("Omkar", "Pathak", "address", "Shivaji Nagar")
//alert(addressBookArr);
//alert("-----------------------")
//alert("ContactDeleted")
//alert("Omkar", "Pathak");
//alert(addressBookArr);



