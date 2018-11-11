import React, { Component } from "react";
// can use a stateless functional component as there is no state involved, it just takes the prop and then projects it.
// in stateless functional components, we need to explicitly define the props, and remove the this reference
// destructuring is where we treat the param argument as JS and define it as props.property (NULL CHECKING?!?)
const NavBar = props => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        Navbar{" "}
        <span className="badge badg-pill badge-secondary">
          {props.TotalCounters}
        </span>
      </a>
    </nav>
  );
};

// class NavBar extends Component {
//   render() {
//     return (
//       <nav className="navbar navbar-light bg-light">
//         <a className="navbar-brand" href="#">
//           Navbar{" "}
//           <span className="badge badg-pill badge-secondary">
//             {this.props.TotalCounters}
//           </span>
//         </a>
//       </nav>
//     );
//   }
// }

export default NavBar;
