import Navbar from "./components/shared/Navbar";
import Routes from "./Routes";
import MainLayout from "./components/layouts/MainLayout";

function App() {
  return (
    <div>
      <Navbar />
      <MainLayout>
        <Routes />
      </MainLayout>
    </div>
  );
}

export default App;
