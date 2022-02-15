import PrgmItem from "./PrgmItem"

import { loadProfile } from "../utils/repo"
import { isAppliable } from "../utils/wizardSupport"

const PrgmList = (props) => {
  const userProfile = loadProfile();
  
  return (
    <ul>
      {props.prgms.map(e => (
        <li key={e.sequence}>
          <PrgmItem info={e}
                isFavorite={props.favorites.includes(e.sequence)}
                isAppliable={isAppliable(userProfile, e)}
                onChangeFavorite={props.onChangeFavorite} />
        </li>
      ))}
    </ul>
  )
}

export default PrgmList;
