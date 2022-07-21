import { Slider } from "@mui/material";
import CradHome from "../components/Homecomponent/CradHome";
import Sliderss from "../components/Homecomponent/Sliderss";
import SecC from "../components/Homecomponent/SecC";
import Rowcoln from "../components/Homecomponent/Rowcoln";
import Row2 from "../components/Homecomponent/Row2";
import Row2Text from "../components/Homecomponent/Row2Text";
import Imge from "../components/Homecomponent/Imge";
import HomeCards from '../components/HomeCards';
import HomeRow from "../components/HomeRow";

const Home = () => {
  return (
    <div>
      <Sliderss />
      <div class="container my-5">
        <div class="row">
          <div class="col-sm-4">
            <CradHome
              title="lorem ipsum"
              des="Some quick example text to build on the card "
            />
            <CradHome
              title="lorem ipsum"
              des="Some quick example text to build on the card "
            />
          </div>
          <div class="col-sm-4">
            <CradHome
              title="lorem ipsum"
              des="Some quick example text to build on the card  "
            />
            <CradHome
              title="lorem ipsum"
              des="Some quick example text to build on the card  "
            />
          </div>
          <div class="col-sm-4">
            <SecC img="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/87-512.webp" />
          </div>
        </div>
      </div>
      <Rowcoln imgg="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg" />

      <div class="container my-5">
        <h1 className="text-center">Latest Posts</h1>
        <div class="row my-5">
          <div class="col-sm-6">
          <HomeRow imgg="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg"/>
          </div>
          <div class="col-sm-6 ">
            <div className="row">
              
              <div className="col-sm-6">
              <Imge imgg="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg"/>
              </div>
              <div className="col-sm-6">
              <Row2Text imgg="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg"/>
              </div>
            </div>
            <div className="row">
              
              <div className="col-sm-6">
              <Imge imgg="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg"/>
              </div>
              <div className="col-sm-6">
              <Row2Text imgg="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg"/>
              </div>
            </div>
            <div className="row">
              
              <div className="col-sm-6">
              <Imge imgg="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg"/>
              </div>
              <div className="col-sm-6">
              <Row2Text imgg="http://morros.orphicwebsitetesting.site/wp-content/uploads/2022/05/pexels-sarah-chai-7262351.jpg"/>
              </div>
            </div>
         
          </div>
        
          
        </div>
      </div>

      <HomeCards />
    </div>
  );
};

export default Home;
