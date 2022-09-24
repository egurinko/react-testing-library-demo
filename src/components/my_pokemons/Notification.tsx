import { NotificationImportant } from '@mui/icons-material';
import React from 'react';
import '@/stylesheets/my_pokemons/index/notifiscation.css';

const Notification: React.FC<NoProps> = () => (
  <>
    <NotificationImportant id="notification_icon" />
    <h2>Please add pokemons !</h2>
  </>
);

const memoed = React.memo(Notification);
export { memoed as Notification };
