
describe("Users app", () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000');
    });
    it('sanity test to make sure tests works just a place to say stuff', () => {
        //epect is an assertion
        //there can be many assertions per test
        //though inside the "it" statement (the test),
        //usually those assertions are logically grouped together
        expect(1 + 2).to.equal(3)
        expect(2 + 2).not.to.equal(5)
    })
    it('Playing around with selecting elements', () => {
        //grabbing my element and saying type this into it
        cy.get('input[name="name"]').type("Putting my words in")
        //checking the value after to validate it added my string
        cy.get('input[name="name"]').should("have.value", "Putting my words in");

        cy.get('input[name="email"]').type('daddykong@gmail.com')
        cy.get('input[name="password"]').type('passworddaddy')
        cy.get('input[name="foobar"]').should("not.exist");
        cy.get('button[id="submitBtn"]')
        cy.get('input[name="terms"]').click();
        cy.get('button[id="submitBtn"]').click();
        cy.get('input[name="name"]').should("have.value", "");
        cy.get('input[name="terms"]').click();
        cy.contains("you must agree to the terms of service").click
        
    })
    
    
    });