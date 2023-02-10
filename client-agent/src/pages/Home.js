import Button from "@mui/material/Button";
import { FaSistrix, FaGlobe } from "react-icons/fa";


const Home = () => {
  return (
    <div className="home1">
      <h1>Add and Search Travel Content</h1>
      <div className="homeButtons">
        <Button size="large" href="/add" variant="contained">
          For travel providers - Add
          <FaGlobe style={{ marginLeft: "10px" }} />
        </Button>
        <Button size="large" href="/search" variant="outlined">
          For Travel Agents - Search <FaSistrix style={{ marginLeft: "10px" }} />
        </Button>
      </div>
    </div>
  );
};

export default Home;
