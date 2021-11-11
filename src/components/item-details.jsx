import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import User from "./user.png";
function ItemDetails(props) {
  const [item, setItem] = useState("");
  const [isFavourite, setIsFavourite] = useState({});
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const user = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    console.log("useEffect", user);
    setItem(props.location.state);
    user &&
      axios
        .post("http://localhost:5000/api/Favourite/check", {
          courseId: props.location.state.id,
          userId: user.user.id,
        })
        .then((val) => {
          console.log("res of Favourite", val);
          setIsFavourite(val.data);
          // props.history.push("/dashboard");
        })
        .catch((err) => console.log("error", err));
    true &&
      axios
        .post("http://localhost:5000/api/comment/allComment", {
          courseId: props.location.state.id,
        })
        .then((val) => {
          console.log("res of all Comment", val);
          setAllComments(val.data);
          // props.history.push("/dashboard");
        })
        .catch((err) => console.log("error", err));
  }, [props]);
  useEffect(() => {}, []);
  console.log("item", item);

  const handleData = (courseId, title) => {
    if (user && user.token) {
      const data = {
        courseId: courseId,
        userId: user.user.id,
        title: title,
      };
      if (Object.keys(isFavourite).length < 1) {
        console.log("add favourite caalled");
        user &&
          axios
            .post("http://localhost:5000/api/Favourite/add", data)
            .then((val) => {
              console.log("res of Favourite", val);
              setSuccess("Successfully Added to Favourite");
              setIsFavourite(val.data);
              // props.history.push("/dashboard");
            })
            .catch((err) => console.log("error", err));
      } else {
        console.log("delete favourite caalled");
        user &&
          axios
            .post("http://localhost:5000/api/Favourite/delete", {
              _id: isFavourite._id,
            })
            .then((val) => {
              console.log("res of Favourite", val);
              setSuccess("Successfully Remove from Favourite");
              setIsFavourite({});
              // props.history.push("/dashboard");
            })
            .catch((err) => console.log("error", err));
      }
    } else {
      setError("login to add Favourite courses");
    }
    setTimeout(function () {
      removeNotofications();
    }, 10000);
  };
  const removeNotofications = () => {
    setError("");
    setSuccess("");
  };
  const handleComment = (courseId) => {
    console.log("comment", comment);
    if (user && user.token) {
      user &&
        axios
          .post("http://localhost:5000/api/comment/add", {
            userId: user.user.id,
            msg: comment,
            courseId,
          })
          .then((val) => {
            console.log("res of Favourite", val);
            const prevComment = [...allComments];
            prevComment.push(val.data);
            setAllComments(prevComment);
            // props.history.push("/dashboard");
          })
          .catch((err) => console.log("error", err));
    } else {
      setError("login to add Comment on courses");
    }
    setTimeout(function () {
      removeNotofications();
    }, 10000);
  };
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />
      <section aria-label="section" className="mt90 sm-mt-0">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center">
              <img
                src={item ? item.image_750x422 : null}
                className="img-fluid img-rounded mb-sm-30"
                alt=""
              />
            </div>
            <div className="col-md-6">
              <div className="item_info">
                <h2>{item ? item.title : null}</h2>
                <div className="item_info_counts">
                  <div className="item_info_like">
                    <i className="fa fa-star" />
                    {item.avg_rating
                      ? item.avg_rating.toFixed(1)
                      : item.rating
                      ? (+item.rating).toFixed(1)
                      : null}
                  </div>
                </div>
                <p>
                  PlaceHolder
                </p>
                <h6>Creator</h6>
                <div className="item_author">
                  <div className="author_list_pp">
                    <a href="author.html">
                      <img
                        className="lazy"
                        src={
                          item &&
                          item.visible_instructors &&
                          item.visible_instructors[0]
                            ? item.visible_instructors[0].image_100x100
                            : null
                        }
                        alt=""
                      />
                    </a>
                  </div>
                  <div className="author_list_info">
                    <a href="">
                      {item &&
                      item.visible_instructors &&
                      item.visible_instructors[0]
                        ? item.visible_instructors[0].name
                        : null}
                    </a>
                  </div>
                </div>
                <div className="spacer-40" />
                <div className="de_tab tab_simple">
                  <ul className="de_nav">
                    <li className="active">
                      <span
                        style={{ padding: "12px 10px" }}
                        onClick={() => handleData(item.id, item.title)}
                      >
                        Add to favorite
                      </span>
                    </li>
                    <li style={{ padding: "5px 10px" }}>
                      <span>
                        <a
                          href={"https://www.udemy.com" + item.url}
                          target="_blank"
                        >
                          See Details
                        </a>
                      </span>
                    </li>
                  </ul>
                  <div style={{ margin: "20px 0px" }} />
                  <h1>Comments</h1>
                  <div>
                    <textarea
                      style={{ width: "100%" }}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    />
                    <div className="comment__btnWrapper">
                      <a
                        onClick={() => handleComment(item.id)}
                        className="btn-main wow fadeInUp lead animated"
                        data-wow-delay="1.25s"
                        style={{
                          visibility: "visible",
                          animationDelay: "1.25s",
                          animationName: "fadeInUp",
                        }}
                      >
                        Add Comment
                      </a>
                    </div>
                  </div>
                  <ul className="activity-list">
                    {allComments.map((data, i) => {
                      return (
                        <li className="act_like">
                          <img style={{ width: "55px" }} src={User} alt="" />
                          <div
                            className="act_list_text"
                            style={{ backgroundSize: "cover" }}
                          >
                            <h4>Anonymous </h4>
                            {data.message}{" "}
                            {/* <a href="#">Nicholas Daniels</a> */}
                            {/* <span class="act_list_date">Nicolas Daniels</span> */}
                          </div>
                        </li>
                      );
                    })}
                    {/* <li className="act_like">
                      <img src="images/thumbnail-7.jpg" alt="" />
                      <div
                        className="act_list_text"
                        style={{ backgroundSize: "cover" }}
                      >
                        <h4>Cute Astronout</h4>
                        This is the best course you can buy out there in market{" "}
                        <a href="#">Nicholas Daniels</a>
                        {/* <span class="act_list_date">Nicolas Daniels</span> */}
                    {/* </div>
                    </li>
                    <li className="act_like">
                      <img src="images/thumbnail-7.jpg" alt="" />
                      <div
                        className="act_list_text"
                        style={{ backgroundSize: "cover" }}
                      >
                        <h4>Cute Astronout</h4>
                        This is the best course you can buy out there in market{" "}
                        <a href="#">Nicholas Daniels</a>
                        {/* <span class="act_list_date">Nicolas Daniels</span> */}
                    {/* </div>
                    </li> */}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {error ? (
        <div
          class="toast animate__animated  animate__fadeInRightBig"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            {/* <img src="..." class="rounded mr-2" alt="..." /> */}
            <strong class="mr-auto">Message</strong>
            {/* <small class="text-muted">11 mins ago</small> */}
          </div>
          <div class="toast-body" style={{ color: "red" }}>
            {error ? error : null}
          </div>
        </div>
      ) : null}

      {success ? (
        <div
          class="toast  animate__animated  animate__fadeInRightBig"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div class="toast-header">
            {/* <img src="..." class="rounded mr-2" alt="..." /> */}
            <strong class="mr-auto">Message</strong>
            {/* <small class="text-muted">11 mins ago</small> */}
          </div>
          <div class="toast-body" style={{ color: "green" }}>
            {success ? success : null}
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default ItemDetails;
