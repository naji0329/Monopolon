import React from 'react';
import styled from 'styled-components';
import { NavBackground, MLogo, Star } from '../../assets';

interface NavbarContainerProps {
  t?: any;
}

const NavbarWrapper = styled.div`
  padding: 10px;
  background: url(${NavBackground});
  // width: 100vw;
  // height: 70px;
  background-size: cover;
  background-poisition: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  z-index: 88888;
`;

const LogoContainer = styled.div``;
const Logo = styled.img`
  width: 70px;
  height: auto;
`;

const NavItemsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Navitem = styled.span`
  color: #fff;
  margin: 0 1rem;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    transform: scaleX(0);
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #3ebbeb;
    transform-origin: left;
    transition: transform 0.25s ease-out;
  }
  &:hover {
    color: #3ebbeb;
    cursor: pointer;
  }
  &:hover:after {
    color: #3ebbeb;
    transform: scaleX(1);
    transform-origin: left;
  }
`;

const StarImage = styled.img``;

const navitems = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Roadmap',
    url: '#roadmap',
  },
  {
    title: 'Document',
    url: '#document',
  },
  {
    title: 'About us',
    url: '#about-us',
  },
];

export const NavbarContainer: React.FC<NavbarContainerProps> = () => {
  return (
    // <NavbarWrapper>
    //   <LogoContainer>
    //     <Logo src={MLogo} alt="Monopolon" />
    //   </LogoContainer>
    //   <NavItemsWrapper>
    //     <StarImage src={Star} alt="*" />
    //     {navitems.map((items, index) => {
    //       console.log(index, 'index');
    //       // renderStar(index, items)
    //       return (
    //         <>
    //           {' '}
    //           <Navitem>
    //             <a href={items.url}> {items.title}</a>
    //           </Navitem>
    //           &nbsp;&nbsp; <StarImage src={Star} alt="*" />{' '}
    //         </>
    //       );
    //     })}
    //   </NavItemsWrapper>
    // </NavbarWrapper>
    <>
      <div className='NavbarWrapper'>
        <div className='LogoContainer'>
          <img src={MLogo} alt="" className='Logo' />
        </div>
        <div className='NavItemsWrapper'>
          <img src={Star} alt="" className="StarImage" />
          {navitems.map((items, index) => {
            console.log(index, 'index');
            // renderStar(index, items)
            return (
              <>
                {' '}
                <div className='Navitem'>
                  <a href={items.url}> {items.title}</a>
                </div>
                &nbsp;&nbsp; <img src={Star} alt="" className="StarImage" />
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

// import React, { useState, useRef } from "react";
// import styled from "styled-components";
// import {
//   Button,
//   Container,
//   Form,
//   Modal,
//   Nav,
//   Navbar,
//   NavDropdown,
//   Offcanvas,
// } from "react-bootstrap";
// import Caret from "../../assets/caret.png";
// import emailjs from "@emailjs/browser";
// import monopolonLogo from "../../assets/mlon_token_transparent.png";
// import "../../App.css";
// import { useTranslation } from "react-i18next";

// const NavLogo = styled.img`
//   width: 55px;
//   height: auto;
//   text-align: left;

//   @media screen and (max-width: 450px) {
//     width: 45px;
//   }
// `;
// const NavLinksWrapper = styled.ul`
//   display: flex;
//   flex-direction: row;
//   list-style: none;

//   @media screen and (max-width: 769px) {
//     display: none;
//   }
// `;
// const NavLinkList = styled.li`
//   color: #ffffff;
//   margin: 0px 10px -8px;
//   font-weight: 300;
//   display: inline-block;
//   font-size: 1rem;
//   position: relative;
//   &:after {
//     content: "";
//     position: absolute;
//     width: 100%;
//     transform: scaleX(0);
//     height: 2px;
//     bottom: 0;
//     left: 0;
//     background-color: white;
//     transform-origin: center;
//     transition: transform 0.25s ease-out;
//   }
//   &:hover {
//     cursor: pointer;
//   }
//   &:hover:after {
//     // color: white;
//     transform: scaleX(1);
//     transform-origin: center;
//   }

//   @media screen and (min-width: 768px) and (max-width: 1024px) {
//     font-size: 1rem;
//   }
// `;
// const RightSide = styled.div`
//   display: flex;
//   justify-content: space-around;
//   align-items: baseline;

//   @media screen and (max-width: 769px) {
//     display: none;
//   }
// `;
// const LogoWord = styled.div`
//   // display: flex;
//   color: white;
//   font-weight: 800;
//   margin-bottom: -5px;
//   font-size: 1.6rem;
//   // margin-left:-220px;
//   @media screen and (max-width: 769px) {
//     display: none;
//   }
// `;
// const ButtonWrapper = styled.button`
//   margin-bottom: 0.3rem;
//   border: none;
//   background: linear-gradient(to right, #158be2, #89a3e5);
//   padding: 2px;
//   border-radius: 0.7rem;
// `;
// const BuyButton = styled.button`
//   color: white;
//   padding: 0.5rem;
//   border-radius: 0.6rem;
//   font-weight: 300;
//   width: 100%;
//   font-size: 0.8rem;
//   background: #202231;
//   border: none;
//   &:hover {
//     cursor: pointer;
//   }
//   @media screen and (max-width: 450px) {
//     font-size: 0.7rem;
//     // margin-left: 0.5rem;
//     padding: 0.7rem;
//     border-radius: 0.7rem;
//   }
// `;
// interface NavbarProps {
//   t?: any;
// }

// export const NavbarContainer: React.FC<NavbarProps> = ({ t }) => {
//   const { i18n } = useTranslation();
//   const [showDropdownLang, setShowDropdownLang] = useState(false);
//   const [language, setLanguage] = useState("en");
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const form = useRef();

//   const handleChangeLanguage = (lang: any) => {
//     i18n.changeLanguage(lang);
//     setLanguage(lang);
//     setShowDropdownLang(false);
//   };

//   function sendEmail(e: any) {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_qvber9b",
//         "template_5197kcw",
//         e.target,
//         "user_eaq2jUgsDlxyOP8OlrKUD"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//   }

//   return (
//     <div className="Nav-section">
//       <Navbar className="Nav-section" expand="lg">
//         <Container fluid>
//           <Navbar.Brand
//             href="#"
//             style={{
//               display: "flex",
//               flexDirection: "row",
//               alignItems: "center",
//             }}
//           >
//             <NavLogo src={monopolonLogo} alt="Logo" />
//             <LogoWord>Monopolon</LogoWord>
//           </Navbar.Brand>
//           {/* <LogoWord>Monopolon</LogoWord> */}
//           {/* <a href="/" >
//            <span>
//              <img src={monopolonLogo} alt="logo" width="100" height="auto" />
//              <LogoWord>Monopolon</LogoWord>
//            </span>
//          </a> */}
//           <NavLinksWrapper>
//             <NavLinkList>{t("text.home")}</NavLinkList>
//             <NavLinkList>{t("text.roadmap")}</NavLinkList>
//             <NavLinkList>{t("text.document")}</NavLinkList>
//             <NavLinkList>{t("text.aboutus")}</NavLinkList>

//             {/* <Nav.Link className='px-3 py-3 hover' >{t("text.home")}</Nav.Link >
//             <Nav.Link  className='px-3 py-3 hover'>{t("text.roadmap")}</Nav.Link >
//             <Nav.Link className='px-3 py-3 hover' >{t("text.document")}</Nav.Link >
//             <Nav.Link className='px-3 py-3 hover'>{t("text.aboutus")}</Nav.Link >

//             <NavDropdown
//               title={t("text.more")}
//               className="px-3 py-2 moredropdown hover"
//               // variant='custom'
//               id="basic-nav-dropdown1"
//             >
//               <NavDropdown.Item href="#roadmaps" variant="custom">
//                 {t("text.roadmap")}
//               </NavDropdown.Item>
//               <NavDropdown.Item href="#community" variant="custom">
//                 {t("text.document")}
//               </NavDropdown.Item>
//             </NavDropdown> */}
//           </NavLinksWrapper>
//           <RightSide>
//             <ButtonWrapper>
//               <BuyButton onClick={handleShow}>{t("text.Buy")}</BuyButton>
//             </ButtonWrapper>
//             <Modal show={show} onHide={handleClose}>
//               <Modal.Header closeButton>
//                 <NavLogo src={monopolonLogo} alt="Logo" />
//                 <Modal.Title>Monopolon</Modal.Title>
//               </Modal.Header>
//               <Modal.Body>
//                 {" "}
//                 {/* <div className="contact_form px-4 pt-4"> */}
//                   {/* <Form onSubmit={sendEmail}>
//                     <Form.Group className="mb-4" controlId="formBasicName">
//                       <Form.Label className="contact_label mb-2">
//                         Name
//                       </Form.Label>
//                       <Form.Control
//                         type="text"
//                         name="name"
//                         placeholder="Enter Your Name"
//                       />
//                     </Form.Group>
//                     <Form.Group className="mb-4" controlId="formBasicEmail">
//                       <Form.Label className="contact_label mt-2 mb-2">
//                         Email
//                       </Form.Label>
//                       <Form.Control
//                         name="user_email"
//                         type="email"
//                         placeholder="Enter Your Email"
//                       />
//                     </Form.Group>

//                     <Form.Group
//                       className="mb-4"
//                       controlId="exampleForm.ControlTextarea1"
//                     >
//                       <Form.Label className="contact_label mt-2 mb-2">
//                         Wallet Address
//                       </Form.Label>
//                       <Form.Control
//                         name="message"
//                         as="textarea"
//                         rows={1}
//                         placeholder="Type your   Wallet Address here...."
//                       />
//                     </Form.Group>
//                     <div className="text-end">
//                       <Button
//                         variant="primary"
//                         className="btn btn-w-shadow w-100"
//                         type="submit"
//                       >
//                         Send
//                       </Button>
//                     </div>
//                   </Form> */}
//                   <iframe
//                     src="https://docs.google.com/forms/d/e/1FAIpQLSeLZQhRGixwNDVn7TCcX2em4bO2P9eIOtzuAF2p5kQheY4jmA/viewform?embedded=true"
//                     width="100%"
//                     height="509"
//                     // frameborder="0"
//                     // marginheight="0"
//                     // marginwidth="0"
//                   >
//                     Loading…
//                   </iframe>
//                 {/* </div> */}
//               </Modal.Body>
//               {/* <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                   Close
//                 </Button>
//                 <Button variant="primary" onClick={handleClose}>
//                   Save Changes
//                 </Button>
//               </Modal.Footer> */}
//             </Modal>
//             {/* <div className="DropdownLang px-3 py-2">
//               <Button
//                 id="nav-lang"
//                 variant="custom"
//                 onClick={() => setShowDropdownLang(!showDropdownLang)}
//                 // style={{fontSize:'0.9rem', padding: '0.375rem'}}
//               >
//                 <img
//                   src={
//                     language === "en"
//                       ? "https://cdn-icons-png.flaticon.com/512/197/197484.png"
//                       : language === "cn"
//                       ? "https://cdn-icons-png.flaticon.com/512/197/197375.png"
//                       : "https://cdn-icons-png.flaticon.com/512/197/197604.png"
//                   }
//                   width="24px"
//                   style={{
//                     marginRight: "10px",
//                     marginBottom: "0",
//                     position: "relative",
//                     top: "-2px",
//                   }}
//                   alt=""
//                 />
//                 <img
//                   src={Caret}
//                   width="10px"
//                   height="auto"
//                   className="sort-dow"
//                   alt=""
//                 />
//               </Button>
//               {showDropdownLang && (
//                 <div className="LangList">
//                   <ul>
//                     <li onClick={() => handleChangeLanguage("en")}>
//                       <img
//                         src="https://cdn-icons-png.flaticon.com/512/197/197484.png"
//                         width="24px"
//                         alt=""
//                       />
//                     </li>
//                     <li onClick={() => handleChangeLanguage("cn")}>
//                       <img
//                         src="https://cdn-icons-png.flaticon.com/512/197/197375.png"
//                         width="24px"
//                         alt=""
//                       />
//                     </li>
//                     <li onClick={() => handleChangeLanguage("jp")}>
//                       <img
//                         src="https://cdn.countryflags.com/thumbs/japan/flag-3d-round-500.png	"
//                         width="24px"
//                         alt=""
//                       />
//                     </li>
//                   </ul>
//                 </div>
//               )}
//             </div> */}
//           </RightSide>
//           <Navbar.Toggle aria-controls="offcanvasNavbar" />
//           <Navbar.Offcanvas
//             className="offcanvas-section"
//             id="offcanvasNavbar"
//             aria-labelledby="offcanvasNavbarLabel"
//             placement="end"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id="offcanvasNavbarLabel">
//                 Monopolon
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3 color">
//                 <Nav.Link href="#" style={{ color: "white" }}>
//                   {t("text.home")}
//                 </Nav.Link>
//                 <NavDropdown.Divider />
//                 <Nav.Link href="#" style={{ color: "white" }}>
//                   {t("text.roadmap")}
//                 </Nav.Link>
//                 <NavDropdown.Divider />
//                 <Nav.Link href="#" style={{ color: "white" }}>
//                   {t("text.document")}
//                 </Nav.Link>
//                 <NavDropdown.Divider />
//                 <Nav.Link href="#" style={{ color: "white" }}>
//                   {t("text.aboutus")}
//                 </Nav.Link>
//                 <NavDropdown.Divider />
//                 <ButtonWrapper>
//                   <BuyButton onClick={handleShow}>{t("text.Buy")}</BuyButton>
//                 </ButtonWrapper>
//                 <Modal show={show} onHide={handleClose}>
//                   <Modal.Header closeButton>
//                     <NavLogo src={monopolonLogo} alt="Logo" />
//                     <Modal.Title>Monopolon</Modal.Title>
//                   </Modal.Header>
//                   <Modal.Body>
//                     {" "}
//                     {/* <div className="contact_form px-4 pt-4">
//                       <Form>
//                         <Form.Group className="mb-4" controlId="formBasicName">
//                           <Form.Label className="contact_label mb-2">
//                             Name
//                           </Form.Label>
//                           <Form.Control
//                             type="text"
//                             placeholder="Enter Your Name"
//                           />
//                         </Form.Group>
//                         <Form.Group className="mb-4" controlId="formBasicEmail">
//                           <Form.Label className="contact_label mb-2">
//                             Email
//                           </Form.Label>
//                           <Form.Control
//                             type="email"
//                             placeholder="Enter Your Email"
//                           />
//                         </Form.Group>
//                         <Form.Group
//                           className="mb-4"
//                           controlId="exampleForm.ControlTextarea1"
//                         >
//                           <Form.Label className="contact_label mb-2">
//                             Wallet Address
//                           </Form.Label>
//                           <Form.Control
//                             as="textarea"
//                             rows={1}
//                             placeholder="Type your  Wallet Address here...."
//                           />
//                         </Form.Group>
//                         <div className="text-end">
//                           <Button
//                             variant="primary"
//                             className="btn btn-w-shadow w-100"
//                             type="submit"
//                           >
//                             Send
//                           </Button>
//                         </div>
//                       </Form>
//                     </div> */}
//                     <iframe
//                       src="https://docs.google.com/forms/d/e/1FAIpQLSeLZQhRGixwNDVn7TCcX2em4bO2P9eIOtzuAF2p5kQheY4jmA/viewform?embedded=true"
//                       width="100%"
//                       height="509"
//                       // frameborder="0"
//                       // marginheight="0"
//                       // marginwidth="0"
//                     >
//                       Loading…
//                     </iframe>
//                   </Modal.Body>
//                   {/* <Modal.Footer>
//                 <Button variant="secondary" onClick={handleClose}>
//                   Close
//                 </Button>
//                 <Button variant="primary" onClick={handleClose}>
//                   Save Changes
//                 </Button>
//               </Modal.Footer> */}
//                 </Modal>
//                 {/* <div className="DropdownLang px-3 py-2">
//                   <Button
//                     id="nav-lang"
//                     variant="custom"
//                     onClick={() => setShowDropdownLang(!showDropdownLang)}
//                   >
//                     <img
//                       src={
//                         language === "en"
//                           ? "https://cdn-icons-png.flaticon.com/512/197/197484.png"
//                           : language === "cn"
//                           ? "https://cdn-icons-png.flaticon.com/512/197/197375.png"
//                           : "https://cdn-icons-png.flaticon.com/512/197/197604.png"
//                       }
//                       className="flag"
//                       width="24px"
//                       style={{
//                         marginRight: "10px",
//                         marginBottom: "0",
//                         position: "relative",
//                         top: "-2px",
//                       }}
//                       alt=""
//                     />
//                     <img
//                       src={Caret}
//                       width="10px"
//                       height="auto"
//                       className="sort-dow"
//                       alt=""
//                     />
//                   </Button>
//                   {showDropdownLang && (
//                     <div className="LangList">
//                       <ul>
//                         <li onClick={() => handleChangeLanguage("en")}>
//                           <img
//                             src="https://cdn-icons-png.flaticon.com/512/197/197484.png"
//                             className="flag"
//                             width="24px"
//                             alt=""
//                           />
//                         </li>
//                         <li onClick={() => handleChangeLanguage("cn")}>
//                           <img
//                             src="https://cdn-icons-png.flaticon.com/512/197/197375.png"
//                             className="flag"
//                             width="24px"
//                             alt=""
//                           />
//                         </li>
//                         <li onClick={() => handleChangeLanguage("jp")}>
//                           <img
//                             src="https://cdn.countryflags.com/thumbs/japan/flag-3d-round-500.png	"
//                             className="flag"
//                             width="24px"
//                             alt=""
//                           />
//                         </li>
//                       </ul>
//                     </div>
//                   )}
//                 </div> */}
//               </Nav>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };
