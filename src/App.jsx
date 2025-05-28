import UserContextProvider from './context/UserContextProvider'
import Profile from "./component/Profile";
import Login from "./component/Login";
import Polar from './assets/Polar.png';

function App() {
  return (
    <UserContextProvider>
      <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col items-center p-6">
        <img
          src={Polar}
          alt="Polar Bear"
          className="w-40 h-40 mb-4 rounded-full object-cover border-4 border-blue-200 shadow-xl p-1"
        />
        <h1 className="text-3xl font-bold text-blue-900 mb-6">
          Welcome to Polar Login 🐻‍❄️
        </h1>
        <Login />
        <Profile />
      </div>
    </UserContextProvider>
  );
}

export default App;
