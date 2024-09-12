import '@backstage/cli/asset-types';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { asyncWithLDProvider } from 'launchdarkly-react-client-sdk';

// ReactDOM.createRoot(document.getElementById('root')!).render(<App />);

(async () => {
    const LDProvider = await asyncWithLDProvider({
        clientSideID: 'ENV_CLIENTSIDE_ID', // dev LaunchDarkly client-side ID
    });

    ReactDOM.createRoot(document.getElementById('root')!).render(
        <LDProvider>
            <App />
        </LDProvider>,
    );
})();
