import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import './index.css'

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-hbkdlmlugouau4i3.us.auth0.com"
    clientId="hedfov5V3MzATb95UocHqGN1KwLcr715"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);