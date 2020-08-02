import React from 'react';
import { NotificationImportant } from '@material-ui/icons';
import '../../../stylesheets/my_pokemons/index/notification.css';

const Notification: React.FC<{}> = () => (
  <>
    <NotificationImportant id="notification_icon" />
    <h2>Please add pokemons !</h2>
  </>
);

export default Notification;
