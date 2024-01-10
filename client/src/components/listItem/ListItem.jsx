import "./listItem.scss";
import {PlayArrow, Add, ThumbUpAltOutlined, ThumbDownOutlined} from "@material-ui/icons";
import axios from "axios";
import {useEffect, useState} from "react";

export default function ListItem({index, item}) {
    const [isHovered, setIsHovered] = useState(false);

    const [movie, setMovie] = useState({});
    useEffect(() => {
        const getMovie = async () => {
            try {
                const res = await axios.get("/movies/find/" + item, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWQ0MmYxMmViZTM3NDExMDY5MjFjYiIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE3MDQ4ODc2NjksImV4cCI6MTcwNTMxOTY2OX0.Tn0RojPcJUr2ZT3dISFZz3l5SiaK1e6ecGk83918qas",
                    },
                });
                setMovie(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getMovie();
    }, [item]);
    return (
        <div
            className="listItem"
            style={{left: isHovered && index * 225 - 50 + index * 2.5}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
            <img src={movie.img} alt="" />
            {isHovered && (
                <>
                    <video src={movie.trailer} autoPlay={true} loop />
                    <div className="itemInfo">
                        <div className="icons">
                            <PlayArrow className="icon" />
                            <Add className="icon" />
                            <ThumbUpAltOutlined className="icon" />
                            <ThumbDownOutlined className="icon" />
                        </div>
                        <div className="itemInfoTop">
                            <span>{movie.duration}</span>
                            <span className="limit">+{movie.limit}</span>
                            <span>{movie.year}</span>
                        </div>
                        <div className="desc">{movie.desc}</div>
                        <div className="genre">{movie.genre}</div>
                    </div>
                </>
            )}
        </div>
    );
}
