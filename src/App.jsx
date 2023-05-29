import appRoute from "./routes/app.route";
import { useRoutes } from "react-router-dom";
// import classes from "./App.scss?inline";

function App() {
  const routes = useRoutes(appRoute);
  return (
        <main>
          {routes}
        </main>
  );
}
export default App;
