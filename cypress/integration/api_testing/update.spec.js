describe('Update profile api', () => {
    context('GET update profile', () => {
        it('should Update profile', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:5000/api/profile/update',
                body: {
                    name: "Xinru Li",
                    password: "123456789",
                    phone: "03021561276",
                    InterestOfLearning: "english",
                    userId: "61a93f5a46b8dca838ea9eb8",
                },
            })
                .should((response) => {
                    console.log(response)
                    
                    expect(response.status).to.eq(200)
                });
        });
    });
});
