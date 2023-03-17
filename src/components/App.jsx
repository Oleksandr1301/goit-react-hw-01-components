import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendsList from './friendList/friendsList';
import friends from './friendList/friends.json';
import TransactionHistory from './transactionHistory/transactionHistory';
import transactions from './transactionHistory/transactions.json';
import user from './profile/user.json';
import data from './statistics/data.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendsList friends={friends} />
      <TransactionHistory item={transactions} />
    </div>
  );
};
