import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { ErrorBoundary } from "./providers/error-boundary";
import { store } from "./providers/redux/config";
import AppRoutes from "./providers/router/config/app.routes";
import { theme } from "./providers/theme/theme";
import "./providers/i18n/i18n";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <Router>
            <AppRoutes />
          </Router>
        </Provider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
