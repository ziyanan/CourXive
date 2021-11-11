import axios from "axios";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { matchSorter } from "match-sorter";
const Courses = () => {
  const history = useHistory();
  const [courses, setCourses] = useState([]);
  const [pagesize, setPageSize] = useState(20);
  const [subcategory, setSubcategory] = useState(288);
  const [p, setP] = useState(2);
  const [value, setValue] = useState("");
  const [localCourse, setLocalCourse] = useState([]);
  const [searchedProduct, setSearchedProduct] = useState([]);
  const [valueSearched, setValueSearched] = useState("");
  // Similar to componentDidMount and componentDidUpdate:

  // https://www.udemy.com/api-2.0/search-courses/?src=ukw&q=react&skip_price=true
  //   https://www.udemy.com/api-2.0/search-courses/?src=ukw&q=react%20node%202021&skip_price=true

  // Page 2
  // https://www.udemy.com/api-2.0/search-courses/?p=1&q=react%20node%202021&src=ukw&skip_price=true

  //   https://www.udemy.com/api-2.0/discovery-units/all_courses/?p=2&page_size=16&subcategory=&instructional_level=&lang=&price=&duration=&closed_captions=&subs_filter_type=&category_id=288&source_page=category_page&locale=en_US&currency=usd&navigation_locale=en_US&skip_price=true&sos=pc&fl=cat
  useEffect(() => {
    axios
      .get(
        `https://www.udemy.com/api-2.0/discovery-units/all_courses/?p=${p}&page_size=${pagesize}&subcategory=&instructional_level=&lang=&price=&duration=&closed_captions=&subs_filter_type=&category_id=${subcategory}&source_page=category_page&locale=en_US&currency=usd&navigation_locale=en_US&skip_price=false&sos=pc&fl=cat`
      )
      .then((response) => {
        //   var combinedData = [ ...courses, response.data.unit.items]

        setCourses(response.data.unit.items);
        // const structData = response.data.unit.items.map((item,i)=>{
        //   return {
        //    id: item.id,
        //    title: item.title,
        //    image_750x422:item.image_750x422,
        //    rating:item.avg_rating

        //   }
        // })
        // structData.map((item)=>{
        //   axios.post("http://localhost:5000/api/course/add",{...item})
        //   .then((res)=>{
        //        console.log("add course response", res);
        //   })
        //   .catch(error=>console.log("add course error", error))
        // })

        console.log("data Variables", response.data.unit.items);
      })
      .catch((error) => {
        console.log("data error", error);
      });
  }, [p, subcategory]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/course/allCourse")
      .then((res) => {
        console.log("all course res", res);
        setLocalCourse(res.data);
      })
      .catch((err) => console.log("all course err", err));
  }, []);
  const LoadMore = (e) => {
    console.log("button cliked");
    setP(p + 1);
    // setPageSize(pagesize + 12);
  };

  const JumpUser = (e, data) => {
    console.log("data jump", data);
    // /course/:id/:authorname/:authorimage/:courseimage/:ratings/:title
    history.push({
      pathname: "/course",
      state: data,
    });
  };

  function handleChange(e) {
    setSubcategory(e.target.value);
  }

  const handleSearch = async (e) => {
    setValueSearched(e.target.value);
    const sortedCourse = await matchSorter(localCourse, e.target.value, {
      keys: ["title"],
    });

    // setSearchedProduct(sortedCourse);
    setCourses(sortedCourse);
    // courses
  };
  console.log("searchedProduct", searchedProduct);
  return (
    <section id="section-nfts" style={{ backgroundSize: "cover" }}>
      <div className="container" style={{ backgroundSize: "cover" }}>
        <div className="row" style={{ backgroundSize: "cover" }}>
          <div className="col-lg-12" style={{ backgroundSize: "cover" }}>
            <div className="text-center" style={{ backgroundSize: "cover" }}>
              <h2>Popular Courses</h2>

              <div className="de-flex-col" style={{ backgroundSize: "cover" }}>
                <input
                  // id="quick_search"
                  className="search-bar"
                  name="quick_search"
                  placeholder="Search Courses Here By Title"
                  type="text"
                  value={valueSearched}
                  onChange={handleSearch}
                />
              </div>
              <select
                onChange={(e) => {
                  handleChange(e);
                }}
              >
                <option value="288">Web Development</option>
                <option value="274">Lifestyle</option>
                <option value="273">Photography</option>
                <option value="273">Test category</option>
              </select>
              <div className="row" style={{ margin: "10px 0px" }} />
            </div>
          </div>
        </div>

        <div
          className="row wow fadeIn animated"
          style={{
            backgroundSize: "cover",
            visibility: "visible",
            animationName: "fadeIn",
          }}
        >
          {courses && courses.length > 0
            ? courses.map((item, id) => (
                <div
                  className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
                  style={{ display: "block", backgroundSize: "cover" }}
                >
                  <div
                    className="nft__item"
                    style={{ backgroundSize: "cover" }}
                  >
                    <div
                      className="author_list_pp"
                      style={{ backgroundSize: "cover" }}
                    >
                      {item &&
                      item.visible_instructors &&
                      item.visible_instructors.length > 0 &&
                      item.visible_instructors[0] ? (
                        <a href="author.html">
                          <img
                            className="lazy"
                            src={item.visible_instructors[0].image_100x100}
                            alt=""
                          />
                        </a>
                      ) : null}
                    </div>
                    <div
                      className="nft__item_wrap"
                      style={{ backgroundSize: "cover" }}
                    >
                      <div
                        className="nft__item_extra"
                        style={{
                          backgroundSize: "cover",
                          visibility: "hidden",
                          opacity: 0,
                        }}
                      ></div>
                      <a href="">
                        <img
                          src={item.image_750x422}
                          className="lazy nft__item_preview"
                          alt=""
                        />
                      </a>
                    </div>
                    <div
                      className="nft__item_info"
                      style={{ backgroundSize: "cover" }}
                    >
                      <a
                        onClick={(e) => {
                          JumpUser(e, item);
                        }}
                        style={{ cursor: "pointer" }}
                      >
                        <h4>{item.title}</h4>
                      </a>
                      <div
                        className="nft__item_like"
                        style={{ backgroundSize: "cover" }}
                      >
                        <i className="fa fa-star" />
                        <span>
                          {item.avg_rating ? item.avg_rating.toFixed(1) : item.rating ? (+item.rating).toFixed(1):null}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            : "No Courses to Show"}

          {/* nft item begin */}
        </div>
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        {/* nft item begin */}
        <div
          className="col-md-12 text-center "
          style={{ backgroundSize: "cover", cursor: "pointer" }}
          onClick={(e) => {
            LoadMore(e);
          }}
        >
          <a
            className="btn-main wow fadeInUp lead animated"
            style={{ visibility: "visible", animationName: "fadeInUp" }}
          >
            Load more
          </a>
        </div>
      </div>
    </section>
  );
};

export default Courses;
