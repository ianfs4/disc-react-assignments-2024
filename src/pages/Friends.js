import React, { useState } from 'react';
import '../css/Friends.css';

function Friends() {
  const [friends, setFriends] = useState([
    { id: 1, name: 'Alice', status: 'Online' },
    { id: 2, name: 'Bob', status: 'Offline' },
    { id: 3, name: 'Charlie', status: 'Online' },
  ]);
  const [newFriend, setNewFriend] = useState('');

  const addFriend = () => {
    if (newFriend.trim()) {
      setFriends([...friends, { id: Date.now(), name: newFriend, status: 'Offline' }]);
      setNewFriend('');
    }
  };

  const removeFriend = (id) => {
    setFriends(friends.filter((friend) => friend.id !== id));
  };

  return (
    <div className="friends-container">
      <h2>Your Friends</h2>
      <p>Here you can view and manage your friends list.</p>

      <div className="friends-list">
        {friends.map((friend) => (
          <div key={friend.id} className="friend-card">
            <div className="friend-info">
              <h3>{friend.name}</h3>
              <p>Status: {friend.status}</p>
            </div>
            <button className="remove-button" onClick={() => removeFriend(friend.id)}>
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="add-friend">
        <input
          type="text"
          placeholder="Add a new friend"
          value={newFriend}
          onChange={(e) => setNewFriend(e.target.value)}
        />
        <button onClick={addFriend}>Add Friend</button>
      </div>
    </div>
  );
}

export default Friends;
