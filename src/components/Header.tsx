import React from 'react';

const Header: React.FC = () => {
  return (
    <header>
      <h1>Tide Data Application</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/tide-info">Tide Info</a></li>
          <li><a href="/tide-chart">Tide Chart</a></li>
          <li><a href="/activity-recommendations">Activity Recommendations</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;