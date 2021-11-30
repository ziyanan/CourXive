// const chai = require('chai');
// const expect = chai.expect;
// const request = require("supertest");
// const app = require("../../../app");
// describe("GET /api/course/allCourse",()=>{
//    it("get all courses", (done)=>{
//         request(app).get("/api/course/allCourse")
//         .then((res)=>{
//             const body = res.body;
//             //  console.log(body)
//             //  expect(body).to.contain.property('_id');
//             //  expect(body).to.contain.property('id');
//             //  expect(body).to.contain.property('title');
//             //  expect(body).to.contain.property('image_750x422');
//             //  expect(body).to.contain.property('rating');
//             //  expect(body).to.contain.property('__v');
//             done();
//         })
//         .catch(err=>done("test all corse error",err))
//    })
//    it("update profile", (done)=>{
//     request(app).post("/api/profile")
//     .then((res)=>{
//         const body = res.body;
//         //  console.log(body)
//         //  expect(body).to.contain.property('_id');
//         //  expect(body).to.contain.property('id');
//         //  expect(body).to.contain.property('title');
//         //  expect(body).to.contain.property('image_750x422');
//         //  expect(body).to.contain.property('rating');
//         //  expect(body).to.contain.property('__v');
//         done();
//     })
//     .catch(err=>done("test all corse error",err))
// })
// })