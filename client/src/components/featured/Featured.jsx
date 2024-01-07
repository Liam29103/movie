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
                    Là một thần đồng, Akali bắt đầu tập huấn với mẹ ngay khi cô biết co tay thành nắm đấm. Mẹ cô chẳng hề nương tay hay dễ dãi, theo một phương
                    châm nghiêm khắc: Cái gì cần thực thi sẽ phải được thực thi. Khi Kinkou bổ nhiệm cô vào hội ở tuổi mười bốn, cô đã có thể chặt đứt một sợi
                    xích chỉ bằng tay không. Chẳng nghi ngờ gì nữa - cô sẽ kế thừa danh hiệu Nắm Đấm Bóng Đêm của mẹ mình. Với vai trò này, cô đã phải thực hiện
                    những nhiệm vụ khiến nhiều người đặt câu hỏi về mặt đạo đức của chúng, nhưng đối với cô đó là những vấn đề bất khả xâm phạm mà mẹ cô đã dạy.
                    Giờ đây cô sánh vai cùng ShenSquare Shen và KennenSquare Kennen trong công cuộc duy trì sự cân bằng ở Valoran. Và mục đích cao cả này đã dẫn
                    bộ ba đến với Chiến trường Công lí.
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
