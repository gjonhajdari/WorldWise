import { Link } from "react-router-dom";
import PageNav from "../components/PageNav";
import AppNav from "../components/AppNav";

function Homepage() {
  return (
    <div>
      <PageNav />
      <h1>WorldWise</h1>
      <AppNav />

      <Link to="/app">Go to the app</Link>
    </div>
  );
}

export default Homepage;
