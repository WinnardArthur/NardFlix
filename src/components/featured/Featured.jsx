import "./featured.scss";
import { PlayArrow, InfoOutlined } from '@material-ui/icons'

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="adventure">Adventure</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="romance">Romance</option>
                        <option value="sci-fi">Sci-fi</option>
                        <option value="thriller">Thriller</option>
                        <option value="western">Western</option>
                        <option value="animation">Animation</option>
                        <option value="drama">Drama</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img 
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU4ozF3Lb3a9TDg0B7fvdvqK8xApYgJPvHaA&usqp=CAU" 
                alt="" 
            />
            <div className="info">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFGyvl9nXXgOBfbN3-gTwoc1lLMScw1L164Q&usqp=CAU" alt="" />
                <span className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Hic dolor veniam ducimus incidunt dolore aperiam. Molestiae sed, quo porro reprehenderit quasi dicta impedit rerum? Ullam doloremque asperiores quaerat aliquid possimus eos explicabo 
                    eum. Suscipit facere ipsa iste explicabo praesentium quibusdam!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
