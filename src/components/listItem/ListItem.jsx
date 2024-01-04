import {Add, PlayArrow, ThumbDownOutlined, ThumbUpOutlined} from "@material-ui/icons";
import "./listItem.scss";

export default function ListItem() {
    return (
        <div className="listItem">
            <img src="Akalist.jpg" alt="" />
            <div className="itemInfo">
                <div className="icons">
                    <PlayArrow />
                    <Add />
                    <ThumbUpOutlined />
                    <ThumbDownOutlined />
                </div>
            </div>
        </div>
    );
}
