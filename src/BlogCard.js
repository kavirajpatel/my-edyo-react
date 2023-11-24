
import React from "react";
import "./App.css";

function BlogCard() {
  return (
    <>
      <div className="main">
        <div className="card">
          <div>
            <img
              className="card_img"
              src="https://edyoda.s3.amazonaws.com/media/blog-images/7_reasons_to_learn_Python_u3lFION.jpg"
              alt=""
            />
          </div>
          <div className="info">
          <div className="card_head">
            <h3>
              <div>Fresh Graduate or IT professional Looking for...</div>
            </h3>
            <p className="author_Name">
              Arman Ahmed
              <span className="date"> | 05 Jul 2019</span>
            </p>
            <div>
              <div className="card_Text">
                If you are a fresh graduate - or new to IT - looking for the
                next job, you need to read this. The last couple of years
                zekeLabs gave me a unique opportunity to assess...
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div>
            <img
              className="card_img"
              src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_WxvDSK1.jpg"
              alt=""
            />
          </div>
          <div className="info">
          <div className="card_head">
            <h3>
              <div>Introducing you all to EdYoda -</div>
            </h3>
            <p className="author_Name">
              Arman Ahmed
              <span className="date"> | 05 Jul 2019</span>
            </p>
            <div>
              <div className="card_Text">
                Really ecstatic and immensely proud to introduce you all to our
                latest attempt of adding value and making an impact to the world
                we are a part of....
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div>
            <img
              className="card_img"
              src="https://edyoda.s3.amazonaws.com/media/blog-images/devops-edYoda-blog-small.jpg"
              alt=""
            />
          </div>
          <div className="info">
          <div className="card_head">
            <h3>
              <div>From identity crisis to the Success Story - Th..</div>
            </h3>
            <p className="author_Name">
              Kalyan Mahalingam
              <span className="date"> | 05 Jul 2019</span>
            </p>
            <div>
              <div className="card_Text">
                DevOps is a paradigm shift in the way how software products are
                being built in the modern day Information Technology (IT)
                organizations. It is becoming the...
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div>
            <img
              className="card_img"
              src="https://edyoda.s3.amazonaws.com/media/blog-images/Data_Scientist_1920_1280_DsZBGZu.jpg"
              alt=""
            />
          </div>
          <div className="info">
          <div className="card_head">
            <h3>
              <div>Typical day of Data Scientist - An insider..</div>
            </h3>
            <p className="author_Name">
              Saurav Ghosh
              <span className="date"> | 05 Jul 2019</span>
            </p>
            <div>
              <div className="card_Text">
                I’ve been a Data Scientist for three years now and I can only
                say that Chris Lynch was right - “ Big Data and Data Science are
                the foundation of all the trends that...
              </div>
            </div>
            </div>
          </div>
        </div>

        <div className="card">
          <div>
            <img
              className="card_img"
              src="https://edyoda.s3.amazonaws.com/media/blog-images/edyoda_blog_aws_cloudday_17may2018_Bangalore_small_ByulIE.jpg"
              alt=""
            />
          </div>
          <div className="info">
          <div className="card_head">
            <h3>
              <div>Amazon Web Services (AWS) Cloud Day -</div>
            </h3>
            <p className="author_Name">
              Kalyan Mahalingam
              <span className="date"> | 05 Jul 2019</span>
            </p>
            <div>
              <div className="card_Text">
                It was indeed a hectic day with back to back session sandwiched
                by good food and tea on a lighter note, need to investigate the
                tactics behind the 5-star hotels..
              </div>
            </div>
          </div>
          </div>
        </div>

        <div className="card">
          <div>
            <img
              className="card_img"
              src="https://edyoda.s3.amazonaws.com/media/blog-images/cloud-meetup-edyoda-small_b2EXhBe.jpg"
              alt=""
            />
          </div>
          <div className="info">
          <div className="card_head">
            <h3>
              <div>edYoda Meetup #01 : A Date with Cloud</div>
            </h3>
            <p className="author_Name">
              Arman Ahmed
              <span className="date"> | 05 Jul 2019</span>
            </p>
            <div>
              <div className="card_Text">
                I recently had the opportunity to lead the initiative to
                organize the first Cloud meetup for edYoda. Here, I recount my
                experience in organizing the very first in the..
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
