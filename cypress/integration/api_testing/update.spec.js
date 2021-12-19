describe('Update profile api', () => {
    context('GET update profile', () => {
        it('should Update profile', () => {
            cy.request({
                method: 'POST',
                url: 'https://courxive.herokuapp.com/api/profile/update',
                body: {
<<<<<<< HEAD
                    name: "Annie",
                    password: "12345",
=======
                    name: "Xinru Li",
                    password: "123456789",
>>>>>>> 30d7b54f3c934adab3854b1f5423d2751873c1fa
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
