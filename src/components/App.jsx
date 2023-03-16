import Profile from './profile/profile';
import Statistics from './statistics/statistics';
import FriendsList from './friendList/friendsList';
import friends from './friendList/friends.json';
import TransactionHistory from './transactionHistory/transactionHistory';
import transactions from './transactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </div>
  );
};
