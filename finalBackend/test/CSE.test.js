// // const jest = require("jest");
// const  request  = require('supertest');
// const Courses = require('../models/course');
// const app = require("../app");
// describe("create course",()=>{
//     const course = {
//         id:12345,
//         title:"test book",
//         rating:"test rating",
//         image_750x422:"test image"
//     }
//     it("should add and return cousrses",()=>{
//          const mockCreateCourse = jest.fn(()=>course);
//          jest.spyOn(Courses, 'allCourses')
//          .mockImplementation(()=>mockCreateCourse);
//          const res = request(app).post("/api/course/add").send(course)
//         expect(true).toBe(true)
//     })
// })