//import Sidebar from "../../components/sidebar/Sidebar";
//import Navbar from "../../components/navbar/Navbar";
import "../../css/home.css";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";


const Home = () => {
  return (
    <div className="home">
      
      <div className="homeContainer">
       
        <div className="widgets">
          <Widget type="user" />
          <Widget type="order" />
          <Widget type="employees" />
          <Widget type="repairs" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div>
        
      </div>
    </div>
  );
};

export default Home;
