
describe('Products api', () => {
    context('GET /products', () => {
        it('should return a list with all products', () => {
            cy.request({
                method: 'POST',
                url: 'https://courxive.herokuapp.com/api/course/add',
                body: {
                    id: 1,
                    title: "Test Courses",
                    image_750x422: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/83/e258e0532611e5a5072321239ff4d4/jhep-coursera-course4.png",
                    rating: "4.5"
                },
            })
                .should((response) => {
                    console.log(response)
                    
                    expect(response.status).to.eq(200)
                });
        });
    });
});