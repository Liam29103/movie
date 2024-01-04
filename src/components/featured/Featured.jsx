import {InfoOutlined, PlayArrow} from "@material-ui/icons";
import "./featured.scss";

export default function Featured({type}) {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "TV Shows" : "Movies"}</span>
                    <select name="genre" id="genre">
                        <option>Genres</option>
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
            <img src="Backgr2.webp " alt="" />
            <div className="info">
                <img src="Name.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur nostrum in quidem laboriosam nam, dolor perferendis amet quos
                    suscipit, asperiores corrupti sit perspiciatis saepe vitae? Culpa dolores modi minima rem.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span> More Info</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
