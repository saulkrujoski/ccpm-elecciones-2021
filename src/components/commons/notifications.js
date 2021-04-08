import React from 'react';
import { connect } from 'react-redux';

import Notifications from 'react-notification-system-redux';

class GlobalNotifications extends React.Component {

  render() {
    const { notifications } = this.props;

    //Optional styling
    const style = {
      Containers: {
        DefaultStyle: {
          width: '400px'
        }
      },
      Title: {
        DefaultStyle: {
          fontSize: '1.3rem'
        }
      },
      NotificationItem: { // Override the notification item
        DefaultStyle: { // Applied to every notification, regardless of the notification level
          fontSize: '1.3rem',
          height: 'auto'
        }
      }
    };

    return (
      <Notifications
        notifications={notifications}
        style={style}
      />
    );
  }
}

export default connect(
  state => ({
    notifications: state.notifications
  })
)(GlobalNotifications);