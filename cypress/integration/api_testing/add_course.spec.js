
describe('Products api', () => {
    context('GET /products', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'POST',
                url: 'http://localhost:5000/api/course/add',
                body: {
                    id: 1,
                    title: "testing",
                    image_750x422: "https://google.com",
                    rating: "dfghkjlk"
                },
            })
                .should((response) => {
                    console.log(response)
                    
                    expect(response.status).to.eq(200)
                });
        });
    });
});