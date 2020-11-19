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
        this.firstName=params[0];
        this.lastName=params[1];
        this.address=params[2];
        this.city=params[3];
        this.state=params[4];
        this.zip=params[5];
        this.phone=params[6];
        this.email=params[7];
    }

    //method
    Print(contact)
    {
        return contact.firstName+" -- "+contact.lastName+" -- "+contact.address+" -- "+contact.city+" -- "+contact.state+" -- "+contact.zip+" -- "+contact.phone+" -- "+contact.email;
    }
}

let addressBook=new Array();
addressBook.push(new Contact('First','Last', 'Address', 'City','State',455645,'+91 7889455678','email@email.com'));
addressBook.push(new Contact('First2','Last2', 'Address2', 'City2','State2',455646,'+91 7889455679','email2@email.com'));
addressBook.push(new Contact('First3','Last3', 'Address3', 'City3','State3',455647,'+91 7889455670','email3@email.com'));
addressBook.forEach((contact)=>
{
    console.log(contact.firstName+" -- "+contact.lastName+" -- "+contact.address+" -- "+contact.city+" -- "+contact.state+" -- "+contact.zip+" -- "+contact.phone+" -- "+contact.email);
});