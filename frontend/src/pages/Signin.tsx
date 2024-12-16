import { Auth } from "../components/Auth";
import Quote from "../components/Quote";

const Signin = () => {
  return (
    <div>
      <div className="grid grid-cols-1 bg-white lg:grid-cols-2">
        <div>
          <Auth type="signin" />
        </div>
        <div className="invisible md:visible">
          <Quote />
        </div>
      </div>
    </div>
  );
};

export default Signin;
