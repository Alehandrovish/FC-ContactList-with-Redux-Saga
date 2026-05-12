import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import store from "./store/index.js";
import "./index.css";
import App from "./App.jsx";

const mainTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          boxShadow: "none",
          color: "black",
          borderColor: "black",
          borderWidth: 2.5,
          borderRadius: 4,
          backgroundColor: "white",
          flexGrow: 0,
          width: "auto",
          "&:hover": {
            backgroundColor: "#f5f5f5",
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={mainTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </StrictMode>,
);
