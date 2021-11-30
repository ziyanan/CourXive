describe('Login api', () => {
    context('GET /login', () => {
        it('user should login', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:5000/api/auth/login',
                body: {
                    email: "Angie@gmail.com",
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