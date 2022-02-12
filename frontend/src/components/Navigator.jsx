import { Link } from "react-router-dom";

const navList = [
  {"link": "/profile", "name": "Profile"},
  {"link": "/univList", "name": "List"},
  {"link": "/wizard", "name": "Wizard"},
]

const Button = (props) => {
  const { info } = props;
  return (
    <li>
      <Link to={info.link}>
        {info.name}
      </Link>
    </li>
  )
}

const Navigator = () => {
  return (
    <>
      <hr />
      <ul>
        {navList.map(e => (
          <Button info={e} key={e.link} />
        ))}
      </ul>
    </>
  )
}

export default Navigator
