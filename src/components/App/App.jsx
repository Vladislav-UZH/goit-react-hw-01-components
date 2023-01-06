import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { FriendList } from 'components/FriendList/FriendList';
// import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import user from '../../data-storage/user';
import friends from '../../data-storage/friends';
import data from '../../data-storage/data';

import transactions from '../../data-storage/transactions';
// console.log(data);

export const App = () => {
  return (
    <>
      <div
        style={{
          height: '20vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        React homework template
      </div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList props={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
