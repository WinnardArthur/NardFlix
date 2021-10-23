import { ArrowBackOutlined } from "@material-ui/icons";
import "./watch.scss";
import { Link } from 'react-router-dom';


export default function Watch() {
    return (
        <div className="watch">
            <Link to="/" className="back">
                <ArrowBackOutlined />
                Home 
            </Link>
            <video className="video" src="/video/NOBODY ft Tclassic.mp4" autoPlay progress controls />
        </div>
    )
}
