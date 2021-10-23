import { Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined } from "@material-ui/icons";
import "./listItem.scss";
import { useState } from 'react';

export default function ListItem({index}) {
    const [isHovered, setIsHovered] = useState(false);
    const trailer = "/video/Davido - FEM (Official Video).mp4"
    return (
        <div 
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            className="listItem"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img src="/images/phones.jpg" alt="" />
            {isHovered && (
                <>
                    <video src={trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon"/>
                            <Add className="icon"/>
                            <ThumbUpOutlined className="icon"/>
                            <ThumbDownOutlined className="icon"/>
                        </div>
                        <div className="itemInfoTop">
                            <span>1 hour 14 mins</span>
                            <span className="limit">+16</span>
                            <span>1999</span>
                        </div>
                        <div className="desc">
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                            Voluptates modi labore, molestiae obcaecati quibusdam iure numquam repellendus perferendis 
                            accusamus sed, ut voluptatum dolor quasi adipisci perspiciatis velit consequuntur 
                            qui ea tenetur pariatur nobis excepturi in. 
                        </div>
                        <div className="genre">Action</div>
                    </div>
                </>
            )}
        </div>
    )
}
