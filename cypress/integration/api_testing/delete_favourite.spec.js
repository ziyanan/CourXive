
describe('check favourite api', () => {
    context('GET /unfavourite', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:5000/api/Favourite/delete',
                body: {
                    id: "61a3c980092448d684c77cf6"
                },
            })
                .should((response) => {
                    console.log(response)
                    
                    expect(response.status).to.eq(200)
                });
        });
    });
});