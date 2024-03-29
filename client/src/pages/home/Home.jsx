import Navbar from "../../components/navbar/Navbar";
import Featured from "../../components/featured/Featured";
import "./Home.scss";
import List from "../../components/list/List";
import {useEffect, useState} from "react";
import axios from "axios";

const Home = ({type}) => {
    const [lists, setLists] = useState([]);
    const [genre, setGenre] = useState(null);

    useEffect(() => {
        const getRandomLists = async () => {
            try {
                const res = await axios.get(`lists${type ? "?type=" + type : ""}${genre ? "&genre=" + genre : ""}`, {
                    headers: {
                        token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1OWQ0MmYxMmViZTM3NDExMDY5MjFjYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcwNTU1MzU5MywiZXhwIjoxNzA1OTg1NTkzfQ.6Z5I7Ci88kmI9qvcTVMiYtO_xu31b2fG7n9IvR-Fcyo",
                    },
                });
                setLists(res.data);
            } catch (err) {
                console.log(err);
            }
        };
        getRandomLists();
    }, [type, genre]);
    return (
        <div className="home">
            <Navbar />
            <Featured type={type} />
            {lists.map((list) => (
                <List list={list} />
            ))}
        </div>
    );
};

export default Home;
