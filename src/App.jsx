import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {
    return (
        <Routes>
            <Route
                path="/"
                element={
                    <main className="min-h-screen flex flex-col break-words">
                        <Header />
                        <Dashboard />
                    </main>
                }
            />
        </Routes>
    );
}

export default App;
