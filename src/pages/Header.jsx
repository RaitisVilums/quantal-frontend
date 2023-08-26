import { useEffect, useState, Fragment } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { Navigation } from "../components";

import { logo } from "../assets";
import "./styles/Header.scss";

const Header = () => {
  const location = useLocation();
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment !== "");
  const [breadcrumbs, setBreadcrumbs] = useState([]);

  useEffect(() => {
    const breadcrumbLinks = pathSegments.map((segment, index) => {
      const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
      const title = formatLocationPath(segment);
      return { path, title };
    });
    setBreadcrumbs(breadcrumbLinks);
  }, [location.pathname]);

  const formatLocationPath = (path) => {
    const locationPath = path
      .split("/")
      .map((segment) => decodeURIComponent(segment.replace("%20", " ")))
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
      .join(" / ");
    return locationPath;
  };

  const validPath = location.pathname === "/";

  return (
    <>
      <header
        className={`header ${
          validPath ? "background-image" : "background-image-changed"
        }`}
      >
        <div className="backdrop">
          <Navigation />
        </div>
        <div className="container">
          <NavLink to={"/"} className="header__logo">
            <img src={logo} alt="Quantal lake logo" width={250} height={150} />
          </NavLink>
        </div>
      </header>
      {(breadcrumbs.length > 0 || !validPath) && (
        <div className="location">
          <div className="container">
            <div className="location__wrapper">
              {!validPath && (
                <Fragment>
                  <Link className="location__link" to={"/"}>
                    Quantal Lake
                  </Link>
                  <span className="location__divider">/</span>
                </Fragment>
              )}
              {breadcrumbs.map((breadcrumb, index) => (
                <Fragment key={breadcrumb.path}>
                  <Link className="location__link" to={breadcrumb.path}>
                    {breadcrumb.title}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="location__divider">/</span>
                  )}
                </Fragment>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;

//   return (
//     <>
//       <header
//         className={`header ${
//           validPath ? "background-image" : "background-image-changed"
//         }`}
//       >
//         <div className="backdrop">
//           <Navigation />
//         </div>
//         <div className="container">
//           <NavLink to={"/"} className="header__logo">
//             <img src={logo} alt="Quantal lake logo" width={250} height={150} />
//           </NavLink>
//         </div>
//       </header>
//       {!validPath && (
//         <div className="location">
//           <div className="container">
//             <div className="location__wrapper">
//               <Link className="location__link" to={"/"}>
//                 Quantal Lake
//               </Link>
//               <span className="location__divider">/</span>
//               <Link className="location__link" to={pagePath.path}>
//                 {pagePath.title || formatLocatiobPath(location.pathname)}
//               </Link>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// const Header = () => {
//   const location = useLocation();

//   const formatLocatiobPath = (path) => {
//     const locationPath = path;
//     return locationPath.charAt(0).toUpperCase() + locationPath.slice(1);
//   };
//   const pathSegments = location.pathname
//     .split("/")
//     .filter((segment) => segment !== "");
//   const [breadcrumbs, setBreadcrumbs] = useState([]);

//   useEffect(() => {
//     const breadcrumbLinks = pathSegments.map((segment, index) => {
//       const path = `/${pathSegments.slice(0, index + 1).join("/")}`;
//       const title = formatLocatiobPath(segment);
//       return { path, title };
//     });
//     setBreadcrumbs(breadcrumbLinks);
//   }, [location.pathname]);

//   return (
//     <>
//       <header className={`header background-image-changed`}>
//         <div className="backdrop">
//           <Navigation />
//         </div>
//         <div className="container">
//           <NavLink to={"/"} className="header__logo">
//             <img src={logo} alt="Quantal lake logo" width={250} height={150} />
//           </NavLink>
//         </div>
//       </header>
//       {breadcrumbs.length > 0 && (
//         <div className="location">
//           <div className="container">
//             <div className="location__wrapper">
//               {breadcrumbs.map((breadcrumb, index) => (
//                 <React.Fragment key={breadcrumb.path}>
//                   <Link className="location__link" to={breadcrumb.path}>
//                     {breadcrumb.title}
//                   </Link>
//                   {index < breadcrumbs.length - 1 && (
//                     <span className="location__divider">/</span>
//                   )}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default Header;
