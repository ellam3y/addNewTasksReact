import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "animate.css";
import "sweetalert2";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(<App />);
