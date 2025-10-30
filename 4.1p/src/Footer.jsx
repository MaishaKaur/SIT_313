import "./Footer.css";

function Footer() {
  return (

      <div style={{ backgroundColor: "lightgray", textAlign: "center" }}>
        <div
          style={{ display: "flex", justifyContent: "center", gap: "100px" }}
        >
          {" "}
          <div>
            <h3>Explore</h3>
            home <br />
            Questions <br />
            Articles
            <br />
            Tutorials
          </div>
          <div>
            <h3>Support</h3>
            FAQs
            <br />
            Help
            <br />
            Contact Us
          </div>
          <div>
            <h3>Stay Connected</h3>
            <div style={{ display: "flex", gap: "5px",width: "100%" }}>
            <img src="https://www.bing.com/th/id/OIP.1uRJRrJ3B2d6iKpfm-pFpAHaHa?w=185&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2" alt="Facebook" style={{ width: "40px", height: "40px" }} /> 
            <img src="https://images.rawpixel.com/image_png_1000/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3JtNTM1LXNvY2lhbC0wMDMucG5n.png" alt="Instagram" style={{ width: "40px", height: "40px" }} /> 
            <img src="https://as1.ftcdn.net/v2/jpg/05/26/73/34/1000_F_526733447_TIiVtNVzPsIzTcpIYUWL0WVk3AYycARx.jpg" alt="Twitter" style={{ width: "40px", height: "40px" }} />
          </div>
         </div>
        </div>{" "}
        DEV@deakin 2022
        <br />
        <p style={{ display: "inline", margin: "30px" }}>Privacy policy</p>{" "}
        <p style={{ display: "inline", margin: "30px" }}>Terms </p>
        <p style={{ display: "inline", margin: "30px" }}> Code of COnduct</p>
      </div>

  );
}
export default Footer;