import React from "react";
import "./Gig.scss";
import { Slider } from "infinite-react-carousel/lib";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import Reviews from "../../components/reviews/Reviews";

function Gig() {
  const { id } = useParams();

  const { isLoading, error, data } = useQuery({
    queryKey: ["gig"],
    queryFn: () =>
      newRequest.get(`/gigs/single/${id}`).then((res) => {
        return res.data;
      }),
  });

  const userId = data?.userId;

  const {
    isLoading: isLoadingUser,
    error: errorUser,
    data: dataUser,
  } = useQuery({
    queryKey: ["user"],
    queryFn: () =>
      newRequest.get(`/users/${userId}`).then((res) => {
        return res.data;
      }),
    enabled: !!userId,
  });

  return (
    <div className="gig">
      {isLoading ? (
        "loading"
      ) : error ? (
        "Something went wrong!"
      ) : (
        <div className="container">
          <div className="left">

            <span className="breadcrumbs">
              <Link to="/"> Fiverr</Link> <Link to={"/gigs?cat=" + data.cat}> {" > "}{data.cat} {"   >  "}</Link>
            </span>
            <h1>{data.title}</h1>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="user">
                <img
                  className="pp"
                  src={dataUser.img || "data:image/png;base64,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"}
                  alt=""
                />
                <span>{dataUser.username}</span>
                {!isNaN(data.totalStars / data.starNumber) && (
                  <div className="stars">
                    {Array(Math.round(data.totalStars / data.starNumber))
                      .fill()
                      .map((item, i) => (
                        <img src="/img/star.png" alt="" key={i} />
                      ))}
                    <span>{Math.round(data.totalStars / data.starNumber)}</span>
                  </div>
                )}
              </div>
            )}
            <Slider slidesToShow={1} arrowsScroll={1} className="slider">
              {data.images.map((img) => (
                <img key={img} src={img} alt="" />
              ))}
            </Slider>
            <h2>About This Gig</h2>
            <p>{data.shortDesc}</p>
            {isLoadingUser ? (
              "loading"
            ) : errorUser ? (
              "Something went wrong!"
            ) : (
              <div className="seller">
                <h2>About The Seller</h2>
                <div className="user">
                  <img src={dataUser.img || " data:image/png;base64,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"} alt="" />
                  <div className="info">
                    <span>{dataUser.username}</span>
                    {!isNaN(data.totalStars / data.starNumber) && (
                      <div className="stars">
                        {Array(Math.round(data.totalStars / data.starNumber))
                          .fill()
                          .map((item, i) => (
                            <img src="data:image/jpeg;base64,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" alt="" key={i} />
                          ))}
                        <span>
                          {Math.round(data.totalStars / data.starNumber)}
                        </span>
                      </div>
                    )}
                    <button>Contact Me</button>
                  </div>
                </div>
                <div className="box">
                  <div className="items">
                    <div className="item">
                      <span className="title">From</span>
                      <span className="desc">{dataUser.country}</span>
                    </div>
                    <div className="item">
                      <span className="title">Member since</span>
                      <span className="desc">Aug 2022</span>
                    </div>
                    <div className="item">
                      <span className="title">Avg. response time</span>
                      <span className="desc">4 hours</span>
                    </div>
                    <div className="item">
                      <span className="title">Last delivery</span>
                      <span className="desc">1 day</span>
                    </div>
                    <div className="item">
                      <span className="title">Languages</span>
                      <span className="desc">English</span>
                    </div>
                  </div>
                
                  <p>{dataUser.desc}</p>
                </div>
              </div>
            )}
                <Reviews gigId={id} />
          </div>
          <div className="right">
            <div className="price">
               
              <h2>$ {data.price}</h2> 
            
            </div>
            <p>{data.shortDesc}</p>
            <div className="details">
              <div className="item">
                <img src="/img/clock.png" alt="" />
                <span>{data.deliveryDate} Days Delivery</span>
              </div>
              <div className="item">
                <img src="/img/recycle.png" alt="" />
                <span>{data.revisionNumber} Revisions</span>
              </div>
            </div>
            <div className="features">
              {data.features.map((feature) => (
                <div className="item" key={feature}>
                  <img src="/img/greencheck.png" alt="" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            <Link to={`/pay/${id}`}>
            <button>Continue</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Gig;