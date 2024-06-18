
import React, { useState } from 'react';
import './AsideSection.css';

const AsideSection = ({ questionCount }) => {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handleAvatarClick = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleLogout = () => {
    // Implement logout logic
    alert('Logged out');
  };

  return (
    <aside>
      <div className="user-info">
        <img
          src="avatar.png"
          alt="User Avatar"
          onClick={handleAvatarClick}
        />
        {dropdownVisible && (
          <div className="dropdown">
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
      <p>Questions: {questionCount}</p>
    </aside>
  );
};

export default AsideSection;


