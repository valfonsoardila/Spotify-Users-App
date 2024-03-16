import { motion } from "framer-motion";
import { resources } from "../../../assets/resources";
import "./ProfilePage.css";
import ButtonProfile from "../../utils/buttonProfile/ButtonProfile";
import Input from "../../utils/input/Input";
import InputSelect from "../../utils/input/InputSelect";
import ButtonLogin from "../../utils/buttonAuth/ButtonLogin";
import Prefix from "../../../assets/json/Prefix";

const ProfilePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      style={{ backgroundImage: `url(${resources.bgUser})` }}
      className="container"
    >
      <div className="blur-container">
        <div className="profile-container">
          <div className="profile-header">
            <div className="profile-header-logo">
              <img src={resources.logo} alt="logo" />
              <h1>Spotify</h1>
            </div>
            <h1>Register my profile</h1>
          </div>
          <div className="profile-content">
            <div className="profile-image">
              <ButtonProfile />
            </div>
            <div className="profile-fomr">
              <div className="inputcontainer">
                <Input type="text" placeholder="Name" />
              </div>
              <div className="inputcontainer">
                <Input type="text" placeholder="Last Name" />
              </div>
              <div className="inputcontainer">
                <Input type="date" placeholder="Date of Birth" />
              </div>
              <div className="inputcontainer">
                <InputSelect prefix={Prefix} />
                <Input type="text" placeholder="Phone" />
              </div>
              <ButtonLogin text="Save" mode="view-web" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProfilePage;
