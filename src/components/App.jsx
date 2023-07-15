import Profile from "./Profile/Profile";
import Statistics from "./Statistics/Statistics";
import FriendList from "./FriendList/FriendList";
import TransactionHistory from "./TransactionHistory/TransactionHistory";
import user from "../components/user";
import data from "../components/data";
import friends from "../components/friends";
import transactions from "../components/transactions";

export const App = () => {
  return (
  <>
    <Profile 
    username={user.username}
    tag={user.tag}
    location={user.location}
    avatar={user.avatar}
    stats={user.stats}
    />

    <Statistics title="Upload stats" stats={data} />

    <FriendList friends={friends} />

    <TransactionHistory items={transactions} />
    
  </>
  );
};
