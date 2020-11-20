class Contact
{
    //property
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phone;
    email;

    //constructor
    constructor(...params)
    {
        if(this.checkNameUsingRegex(params[0]))
            this.firstName=params[0];
        if(this.checkNameUsingRegex(params[1]))
            this.lastName=params[1];
        if(this.checkAddressUsingRegex(params[2]))
            this.address=params[2];
        if(this.checkAddressUsingRegex(params[3]))
            this.city=params[3];
        if(this.checkAddressUsingRegex(params[4]))
            this.state=params[4];
        if(this.checkZipUsingRegex(params[5]))
            this.zip=params[5];
        if(this.checkPhoneUsingRegex(params[6]))
            this.phone=params[6];
        if(this.checkEmailUsingRegex(params[7]))
            this.email=params[7];
    }

    checkNameUsingRegex(name)
    {
        let nameRegex=new RegExp(/^[A-Z][a-z]{2,}$/);
        if(nameRegex.test(name))
            return true;
        else
            throw "Invalid Name";
    }

    checkAddressUsingRegex(address)
    {
        let addressRegex=new RegExp(/^[A-Za-z0-9]{4,}$/);
        if(addressRegex.test(address))
            return true;
        else
            throw "Invalid Address";
    }

    checkZipUsingRegex(zip)
    {
        let zipRegex=new RegExp(/^[1-9][0-9]{2}[ ]?[0-9]{3}$/);
        if(zipRegex.test(zip))
            return true;
        else
            throw "Invalid Zip";
    }

    checkPhoneUsingRegex(phone)
    {
        let phoneRegex=new RegExp(/^[6-9]{1}[0-9]{9}$/);
        if(phoneRegex.test(phone))
            return true;
        else
            throw "Invalid Phone";
    }

    checkEmailUsingRegex(email)
    {
        let emailRegex=new RegExp(/^[a-zA-Z0-9]+([._+-][a-z0-9A-Z]+)*[@][a-zA-Z0-9]+[.][a-zA-Z]{2,3}([.][a-zA-A]{2,3})?$/);
        if(emailRegex.test(email))
            return true;
        else
            throw "Invalid Email";
    }
    
}

let addressBook=new Array();
addressBook.push(new Contact('First','Last', 'Address', 'Cityold','Stateold','455645','7889455678','email@email.com'));
addressBook.push(new Contact('Gautam','Singh', 'Address2', 'City2','State2','455 646','7889455679','email2@email.com'));
addressBook.push(new Contact('Afirstname','Lastname', 'Address3', 'Citynew','Statenew','455647','7889455670','email3@email.com'));
addressBook.forEach((contact)=>
{
    console.log(contact.firstName+" -- "+contact.lastName+" -- "+contact.address+" -- "+contact.city+" -- "+contact.state+" -- "+contact.zip+" -- "+contact.phone+" -- "+contact.email);
});

//UC4 Ability to find existing contact person using their name and edit it
addressBook.filter((contact)=>{if(contact.firstName=="Gautam") contact.firstName='Gautama';});
console.log('-------------');
console.log('Changed \'Gautam\' to \'Gautama\'');
console.log('-------------');
addressBook.forEach((contact)=>
{
    console.log(contact.firstName+" -- "+contact.lastName+" -- "+contact.address+" -- "+contact.city+" -- "+contact.state+" -- "+contact.zip+" -- "+contact.phone+" -- "+contact.email);
});

//UC5 Ability to find a person with name delete it from the array
addressBook=addressBook.filter((contact)=>{if(contact.firstName!="Gautama") return contact;});
console.log('-------------');
console.log('Deleted contact named \'Gautama\'');
console.log('-------------');
addressBook.forEach((contact)=>
{
    console.log(contact.firstName+" -- "+contact.lastName+" -- "+contact.address+" -- "+contact.city+" -- "+contact.state+" -- "+contact.zip+" -- "+contact.phone+" -- "+contact.email);
});

//UC6 Ability to find number of contacts in the address book
let countOfElements=addressBook.reduce((totalCount)=>totalCount+=1,0);
console.log('The count of elements is: '+countOfElements);

//UC7 Ability to ensure there is no Duplicate Entry of the same Person in the Address Book
console.log('-------------');
let newContact=new Contact('Firstone','Last', 'Address', 'Cityold','Stateold','455645','7889455678','email@email.com');
if(addressBook.find(contact=>{return contact.firstName=='First';}).firstName!='Firstone')
    addressBook.push(newContact);
else
    console.log('This contact is already present');
console.log('-------------');
addressBook.forEach((contact)=>
{
    console.log(contact.firstName+" -- "+contact.lastName+" -- "+contact.address+" -- "+contact.city+" -- "+contact.state+" -- "+contact.zip+" -- "+contact.phone+" -- "+contact.email);
});

//UC8 Ability to search Person in a particularCity or State
console.log('-------------');
let place='City';
addressBook.forEach((contact)=>{if(contact.city==place || contact.state==place) console.log(contact);});
console.log('-------------');

//UC9 Ability to view Person in a particularCity or State
console.log('-------------');
place='City';
addressBook.forEach((contact)=>{if(contact.city==place || contact.state==place) console.log(contact);});
console.log('-------------');

//UC10 Ability to get number of contact persons i.e. count by City or State
console.log('-------------');
place='State'
let countOfContacts=addressBook.reduce((totalCount,contact)=>{if(contact.state==place || contact.city==place) totalCount+=1},0);
console.log('The count of contacts is: '+countOfElements);
console.log('-------------');

//UC11 Ability to sort the entries in the address book alphabetically by Person’s name
console.log('-------------');
addressBook.sort((contact1, contact2)=>contact1.firstName<contact2.firstName?-1:contact1.firstName>contact2.firstName?1:0);
console.log('Sorting by name');
console.log(addressBook);
console.log('-------------');

//UC12 Ability to sort the entries in the address book by City, State, or Zip
console.log('-------------');
addressBook.sort((contact1, contact2)=>contact1.city<contact2.city?-1:contact1.city>contact2.city?1:0);
console.log('Sorting by city');
console.log(addressBook);

addressBook.sort((contact1, contact2)=>contact1.state<contact2.state?-1:contact1.state>contact2.state?1:0);
console.log('Sorting by state');
console.log(addressBook);

addressBook.sort((contact1, contact2)=>contact1.zip<contact2.zip?-1:contact1.zip>contact2.zip?1:0);
console.log('Sorting by zip');
console.log(addressBook);
console.log('-------------');