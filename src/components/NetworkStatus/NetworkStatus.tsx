import React, { useState } from 'react';
import NoNetworkImg from '../../assets/images/icons/cloud-network.png';

const NetworkStatus = () => {
  const [networkStatus, setNetworkStatus] = useState('online');
  window.addEventListener('load', function () {
    function updateOnlineStatus(event: any) {
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
  return <></>;
};

export default NetworkStatus;
