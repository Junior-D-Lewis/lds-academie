import Elearning from "../component/Elearning";
import Formation from "../component/Formation";
import { Training } from "../component/Formation/Training";
import HomeScreen from "../component/Home/HomeScreen";

const routes = [
  {
    path: "/formation",
    component: Formation,
  },
  {
    path: "/",
    component: HomeScreen,
  },
  {
    path: "/e-learning",
    component: Elearning,
  },
  {
    path: "/training",
    component: Training,
  },
];

export default routes;
