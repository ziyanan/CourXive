describe('Update profile api', () => {
    context('GET update profile', () => {
        it('should Update profile', () => {
            cy.request({
                method: 'POST',
                url: 'https://courxive.herokuapp.com/api/profile/update',
                body: {
                    name: "Annie",
                    password: "12345",
                    phone: "03021561276",
                    InterestOfLearning: "english",
                    userId: "61a3c980092448d684c77cf6",
                },
            })
                .should((response) => {
                    console.log(response)
                    
                    expect(response.status).to.eq(200)
                });
        });
    });
});