const Footer = () => {
  return (
    <div>
      <footer className="bg-dark footer_dark ">
        <div className="top_footer">
          <div className="container ">
            <div className="row text-center align-items-center ">
              <center>
                <div className="col-lg-12 col-sm-12 mb-4 mb-lg-0 my-5">
                  <div className="footer_logo">
                    <h1 className="text-white">
                      <b style={{ fontSize: "35px",fontFamily:"Italic"}}>
                        KIT<span style={{ color: "blue" }}>CHEN</span>
                      </b>{" "}
                    </h1>
                  </div>
                  <h6 className="text-white p-2">KITCHEN INFORMATIONS</h6>
                  <p className="text-white p-2">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Atque voluptatum corrupti optio nihil repellendus doloremque
                    harum quia possimus officiis totam est nesciunt,
                    voluptatibus nisi illum nostrum ex minima? Exercitationem,
                    modi?
                  </p>
                  <ul
                    className="text-white d-inline-flex  "
                    style={{ color: "black", fontSize: 25, cursor: "pointer" }}
                  >
                    <i className="fa-brands fa-facebook p-3"></i>
                    <i className="fa-brands fa-instagram-square  p-3"></i>
                    <i className="fa-brands fa-linkedin p-3"></i>
                  </ul>
                </div>

                <ul className="text-white d-inline-flex  ">
                  <h4 className="p-3">Home</h4>
                  <h4 className="p-3">About</h4>
                  {/* <h4 className="p-3">News</h4> */}
                  <h4 className="p-3">Contact</h4>
                </ul>
              </center>
            </div>
          </div>
        </div>
        <hr className="text-white" />
        <div className="bottom_footer bg_black">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-12 p-3">
                <p className="text-white copyright m-md-0 text-center text-md-left">
                  Copyright © 2022 Developed By Ritu Gour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
