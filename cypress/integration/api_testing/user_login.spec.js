describe('Login api', () => {
    context('GET /login', () => {
        it('user should login', () => {
            cy.request({
                method: 'POST',
                url: 'https://courxive.herokuapp.com/api/auth/login',
                body: {
                    email: "Angie123@gmail.com",
                    password: "123456",
                },
            })
                .should((response) => {
                    console.log(response)
                    
                    expect(response.status).to.eq(200)
                });
        });
    });
});