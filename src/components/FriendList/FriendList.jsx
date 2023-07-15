import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";
import style from "./FriendList.module.css"

export default function FriendList ({ friends }) {
    return (
    <ul className={style.friendList}>
       {friends.map((friend) => (
        <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        />
       ))}
       
       
    </ul>
    )
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object.isRequired),
    }
