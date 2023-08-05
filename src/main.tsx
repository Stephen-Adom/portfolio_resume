import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./index.css";
import AOS from "aos";

AOS.init();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
