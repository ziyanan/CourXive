describe('check favourite api', () => {
    context('GET /unfavourite', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'POST',
                url: 'https://courxive.herokuapp.com/api/Favourite/check',
                body: {
                    userId: "61a3c980092448d684c77cf6",
                    courseId: 1,
                    title: "urdu"
                },
            })
                .should((response) => {
                    console.log(response)
                    
                    expect(response.status).to.eq(200)
                });
        });
    });
});