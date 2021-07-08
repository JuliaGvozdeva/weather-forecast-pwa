import React, { useState } from 'react';
import NoNetworkImg from '../../assets/images/icons/cloud-network.png';

const NetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState(navigator.onLine ? 'online' : 'offline');
  window.addEventListener('load', function () {
    function updateOnlineStatus(event?: any) {
      const condition = navigator.onLine ? 'online' : 'offline';
      setNetworkStatus(condition);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
  });

  if (networkStatus === 'offline') {
    return (
      <img src={NoNetworkImg} alt="network status" className="no-network-icon" />
    );
  }

  return (
    <img src={NoNetworkImg} alt="network status" className="no-network-icon" hidden />
  );
};

export default NetworkStatus;
