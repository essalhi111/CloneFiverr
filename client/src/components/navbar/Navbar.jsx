/*import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.scss";
import { useNavigate } from 'react-router-dom';
import newRequest from "../../utils/newRequest";*/
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import newRequest from "../../utils/newRequest";
import "./Navbar.scss";
function Navbar() {
const [active, setActive] = useState(false);
const [open, setOpen] = useState(false);

const { pathname } = useLocation();

const isActive = () => {
window.scrollY > 0 ? setActive(true) : setActive(false);
};

useEffect(() => {
window.addEventListener("scroll", isActive);
return () => {
window.removeEventListener("scroll", isActive);
};
}, []);


const currentUser = JSON.parse(localStorage.getItem("currentUser"));
const navigate = useNavigate();
const handleLogout = async () => {
try {
await newRequest.post("/auth/logout");
localStorage.setItem("currentUser", null);
navigate("/");
} catch (err) {
console.log(err);
}
};
return (
<div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
<div className="container">
<div className="logo">
<Link className="link" to="/">
<span className="text">liverr</span>
</Link>
<span className="dot">.</span>
</div>
<div className="links">
<span>Explore Fiverr  </span>
 <Link to="/register" >Become a seller</Link>
 
{!currentUser?.isSeller && <span>.</span>}
{currentUser ? (
<div className="user" onClick={()=>setOpen(!open)}>
<img
src={currentUser.img || "https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-avatar-icon-png-image_695765.jpg"}
alt=""
/>
<span>{currentUser?.username}</span>
{open && <div className="options">
{currentUser.isSeller && (
<>
<Link className="link" to="/mygigs">
Gigs
</Link>
<Link className="link" to="/add">
Add New Gig
</Link>
</>
)}
<Link className="link" to="/orders">
Orders
</Link>
<Link className="link" to="/messages">
Messages
</Link>
<Link className="link" onClick={handleLogout} >
Logout
</Link>
</div>}
</div>
) : (
<>
<Link to="/login" className="link">Sign in</Link>
<Link className="link" to="/register">
<button>Join</button>
</Link>
</>
)}
</div>
</div>
{(active || pathname !== "/") && (
<>
<hr />
<div className="menu">
<Link className="link menuLink" to="/gigs?cat=GraphicsDesign">
Graphics & Design
</Link>
<Link className="link menuLink" to="/gigs?cat=VideoAnimation">
Video & Animation
</Link>
<Link className="link menuLink" to="/gigs?cat=WritingTranslation">
Writing & Translation
</Link>
<Link className="link menuLink" to="/gigs?cat=Data">
AI Services
</Link>
<Link className="link menuLink" to="/gigs?cat=DigitalMarketing">
Digital Marketing
</Link>
<Link className="link menuLink" to="/gigs?cat=MusicAudio">
Music & Audio
</Link>
<Link className="link menuLink" to="/gigs?cat=ProgrammingTech">
Programming & Tech
</Link>
<Link className="link menuLink" to="/gigs?cat=Business">
Business
</Link>
<Link className="link menuLink" to="/gigs?cat=Lifestyle">
Lifestyle
</Link>
<Link className="link menuLink" to="/logina">
ADMINLogin
</Link>
</div>
<hr />
</>
)}
</div>
);
}

export default Navbar;