import { useState } from "react";

export const Header = ()=>{
   const [btnName , setbtnName] = useState("Login");

   return (
      <div className="header" style={{backgroundColor:"lightblue"}}>
        <div style={{ marginLeft: "60px" }} className="logo">
          <img
            style={{ height: '190px', width: '220px' }}
            src="https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            id="flex"
            alt="Logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>
              <h1 style={{ color: "brown" }}>Rental Application</h1>
            </li>
          </ul>
        </div>
      </div>
    );
    
};

export default Header;

