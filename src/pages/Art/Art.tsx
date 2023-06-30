import Navbar from "../../components/Navbar/Navbar";
import art from "../../images/art.png";

const Art = () => {
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", padding: "5% 5% 5% 5%" }}>
        <img src={art} alt="art" width={"50%"} />
      </div>
    </div>
  );
};

export default Art;
