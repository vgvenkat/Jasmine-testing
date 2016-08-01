describe("Address Book", function() {
    var addressbook,thisContact;

    beforeEach(function() {
         addressbook = new AddressBook(),
            thisContact = new Contact();
    });

    it("Should be able to add a contact", function() {


        addressbook.addContact(thisContact);

        expect(addressbook.getContact(0)).toBe(thisContact);

    });

    it("Should delete a contact", function() {
        //should insert a contact,
        // delete the contact,
        // verify it no longer exists



        addressbook.addContact(thisContact);
        addressbook.deleteContact(0);

        expect(addressbook.getContact(0)).not.toBeDefined();
    })

});

describe("Async call test", function() {
var addressbook ;
    beforeEach(function(done) {
        addressbook = new AddressBook();
        addressbook.getInitialContacts(function(){
                done();
        });

    })
    it("Should return success after getContact", function(){




        expect(addressbook.initialComplete).toBe(true);
    });
});
