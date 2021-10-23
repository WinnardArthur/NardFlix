import './navbar.scss';
import { useState } from "react"
import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null;
    }

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA6PMnbFhd_eA14zPg8e77vp6BshAkKkw8Vssg17ioLftD2re7rS0ifwEKlIdpdZ9MtOM&usqp=CAU" alt="" />
                    <span>Homepage</span>
                    <span>Series</span>
                    <span>Movies</span>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon"/>
                    <span>KID</span>
                    <Notifications className="icon"/>
                    <img src="/images/austin.jpg" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
