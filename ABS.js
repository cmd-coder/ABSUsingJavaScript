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
addressBook.push(new Contact('First','Last', 'Address', 'City','State','455 645','7889455678','email@email.com'));
addressBook.push(new Contact('First','Last', 'Address2', 'City2','State2','455 646','7889455679','email2@email.com'));
addressBook.push(new Contact('First','Last', 'Address3', 'City3','State3','455647','7889455670','email3@email.com'));
addressBook.forEach((contact)=>
{
    console.log(contact.firstName+" -- "+contact.lastName+" -- "+contact.address+" -- "+contact.city+" -- "+contact.state+" -- "+contact.zip+" -- "+contact.phone+" -- "+contact.email);
});
