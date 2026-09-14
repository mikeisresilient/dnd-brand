import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import Features from "./components/Features";
import Collaboration from "./components/Collaboration";
import AIMeeting from "./components/AIMeeting";
import Security from "./components/Security";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import Meeting from "./pages/Meeting";

import AuthProvider from "./context/AuthProvider";
import { useAuth } from "./context/useAuth";

function LandingPage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustedBy />
        <Features />
        <Collaboration />
        <AIMeeting />
        <Security />
        <Pricing />
      </main>

      <Footer />
    </>
  );
}

function ProtectedMeeting() {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Meeting />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />

      <Route path="/sign-in" element={<SignIn />} />

      <Route path="/register" element={<Register />} />

      <Route
        path="/meeting"
        element={<ProtectedMeeting />}
      />

      <Route
        path="*"
        element={<Navigate to="/" replace />}
      />
    </Routes>
  );
}

function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#050b16] text-white">
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;