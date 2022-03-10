import Service from "../components/Service";
import Story from '../components/Story'
import Groups from '../components/Groups'
import Connects from '../components/Connects'
import Submit from '../components/Submit'
import Cargo from "../components/Cargo";
import { ReactComponent as cargo }  from "../asserts/icons/cargoprime.svg";
import { ReactComponent as story } from "../asserts/icons/story.svg";
import { ReactComponent as service} from "../asserts/icons/servide.svg";
import { ReactComponent as groups } from "../asserts/icons/groups.svg";
import { ReactComponent as connects } from "../asserts/icons/connects.svg";
import { ReactComponent as submit} from "../asserts/icons/submit.svg";

export const navbar = [
  // {
  //   id: 1,
  //   Title: cargo,
  //   pathname: "/cargo",
  //   Element: Cargo,
  // },
  {
    id: 2,
    Title: story,
    pathname: "/story",
    Element: Story,
  },
  {
    id: 3,
    Title: service,
    pathname: "/servide",
    Element: Service,
  },
  {
    id: 4,
    Title: groups,
    pathname: "/groups",
    Element: Groups,
  },
  {
    id: 5,
    Title: connects,
    pathname: "/connects",
    Element: Connects,
  },
  {
    id: 6,
    Title: submit,
    pathname: "/submit",
    Element: Submit,
  },
];
