describe('Register api', () => {
    context('GET /Register', () => {
        it('should register', () => {
            cy.request({
                method: 'POST',
                url: 'https://courxive.herokuapp.com/api/auth/register',
                body: {
                    name: "Angie",
                    email: "Angie123@gmail.com",
                    password: "123456",
                    phone: "03026255627",
                    InterestOfLearning: "web development",
                },
            })
                .should((response) => {
                    console.log(response)
                    
                    expect(response.status).to.eq(200)
                });
        });
    });
});