import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import '@mantine/core/styles.css';
import '@mantine/nprogress/styles.css';
import './index.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import i18n from './i18n.ts';
import { I18nextProvider } from 'react-i18next';
import { SnackbarProvider } from 'notistack';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <SnackbarProvider autoHideDuration={1500} hideIconVariant anchorOrigin={{ horizontal: 'right', vertical: 'top' }}>
        <App />
      </SnackbarProvider>
    </I18nextProvider>
  // </React.StrictMode>,
)
