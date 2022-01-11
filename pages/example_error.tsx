import React from 'react'

const example_error = () => {
    return (
        <div>
            example_error page
        </div>
    )
}

export default example_error

// import Route from "next/router";
// import React from "react";
// import Img from "../components/ui/Img/Img";
// import Wrapper from "../hoc/Wrapper";
// import isMobile from "../hooks/isMobile";
// import {
//   CLOSE_ICON_WHITE,
//   LOGO,
//   PAGE_NOT_FOUND,
//   P_CLOSE_ICONS,
// } from "../lib/config";
// import { startLoader, sendMail } from "../lib/global";
// import { useTheme } from "react-jss";
// import Button from "../components/button/button";

// const Error = (props) => {
//   const theme = useTheme();
//   // console.log('props', props)
//   const { statusCode } = props || {};
//   // console.log('statusCode', statusCode)
//   const [mobileView] = isMobile();

//   const goBack = () => {
//     if (props.onClose) {
//       props.onClose();
//     } else {
//       Route.back();
//     }
//   };
//   try {
//   } catch (error) { }
//   const MVPageNotFound = () => {
//     return (
//       <Wrapper>
//         <div className="scr bg-dark-custom">
//           <div className="col-12">
//             <div className="row justify-content-between align-items-center py-3">
//               <div title="Close" className="col-auto">
//                 <figure className="mb-0">
//                   <span onClick={goBack}>
//                     <Img src={CLOSE_ICON_WHITE} width="24" alt="close" />
//                   </span>
//                 </figure>
//               </div>
//             </div>
//           </div>

//           <div className="set__pos__fxd__center">
//             <div className="w-330 mx-auto">
//               <div className="text-center">
//                 <Img src={LOGO} width="120px" alt="FANLY LOGO" />
//               </div>

//               <div className="text-center">
//                 <Img src={PAGE_NOT_FOUND} width="auto" alt="404" />
//               </div>

//               <div className="text-center mb-5">
//                 <span className="not__found__title txt-book">
//                   We are sorry, but the page you requested was not found
//                 </span>
//               </div>

//               <div className="col-12">
//                 <div className="form-row align-items-center justify-content-center">
//                   <div className="col-auto">
//                     <Button
//                       onClick={() => Route.push("/")}
//                       type="button"
//                       cssStyles={theme.blueButton}
//                     >
//                       Go Back to Home page
//                     </Button>
//                   </div>
//                   <div className="col-auto">
//                     <Button
//                       onClick={sendMail}
//                       type="button"
//                       cssStyles={theme.blueButton}
//                     >
//                       Contact
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     );
//   };
//   const DVPageNotFound = () => {
//     return (
//       <Wrapper>
//         <div className="scr">
//           <div className="col-12">
//             <div className="row justify-content-end align-items-center py-3">
//               <div title="Close" className="col-auto dv_close_btn">
//                 <figure className="mb-0">
//                   <span onClick={goBack}>
//                     <Img src={CLOSE_ICON_WHITE} width="24" alt="close" />
//                   </span>
//                 </figure>
//               </div>
//             </div>
//           </div>

//           <div className="set__pos__fxd__center">
//             <div className="w-100 mx-auto">
//               <div className="text-center">
//                 <Img src={LOGO} width="120px" alt="FANZLY LOGO" />
//               </div>

//               <div className="text-center">
//                 <Img src={PAGE_NOT_FOUND} width="auto" alt="404" />
//               </div>

//               <div className="text-center mb-5">
//                 <span className="dv__not__found__title txt-book">
//                   We are sorry, but the page you requested was not found
//                 </span>
//               </div>

//               <div className="col-12">
//                 <div className="form-row align-items-center justify-content-center">
//                   <div className="col-auto">
//                     <Button
//                       onClick={() => Route.push("/")}
//                       type="button"
//                       cssStyles={theme.blueButton}
//                       fclassname="not__found__btn"
//                     >
//                       Go Back to Home page
//                     </Button>
//                   </div>
//                   <div className="col-auto">
//                     <Button
//                       onClick={sendMail}
//                       type="button"
//                       cssStyles={theme.blueButton}
//                       fclassname="not__found__btn"
//                     >
//                       Contact
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Wrapper>
//     );
//   };

//   return (
//     <React.Fragment>
//       {mobileView ? MVPageNotFound() : DVPageNotFound()}
//     </React.Fragment>
//   );
// };

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
//   return { statusCode };
// };

// export default Error;
