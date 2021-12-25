import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBView,
  MDBIcon,
} from "mdbreact";

const Blog = (data) => {
  return (
    <div className="mt-5">
      <MDBRow>
        {data.data !== "" &&
          data.data.slice(0, 3).map((item, index) => (
            <MDBCol md="4" key={index}>
              <MDBCard wide cascade>
                <MDBView cascade>
                  <a href={item.link}>
                    <MDBCardImage
                      hover
                      overlay="white-slight"
                      className="card-img-top"
                      src={
                        item.better_featured_image
                          ? item.better_featured_image
                          : "https://fs-avijeh.com/wp-content/uploads/2020/11/placeholder.6a9d678d.png"
                      }
                      alt={item.title.rendered}
                    />
                  </a>
                </MDBView>

                <MDBCardBody cascade className="text-center">
                  <MDBCardTitle className="card-title">
                    <strong>{item.title.rendered}</strong>
                  </MDBCardTitle>

                  {/* <p className="font-weight-bold blue-text">Photographer</p> */}

                  <MDBCardText>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.excerpt.rendered,
                      }}
                    ></div>
                  </MDBCardText>

                  <MDBCol md="12" className="d-flex justify-content-center">
                    <a href="!#" className="px-2 fa-lg li-ic">
                      <MDBIcon fab icon="linkedin-in"></MDBIcon>
                    </a>

                    <a href="!#" className="px-2 fa-lg tw-ic">
                      <MDBIcon fab icon="twitter"></MDBIcon>
                    </a>

                    <a href="!#" className="px-2 fa-lg fb-ic">
                      <MDBIcon fab icon="facebook-f"></MDBIcon>
                    </a>
                  </MDBCol>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          ))}
      </MDBRow>
    </div>
  );
};

export default Blog;
