import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./components/MainLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { CardPage } from "./pages/CardPage";
import { ThemeProvider } from "./theme/ThemeProvider";

function App() {
    return (
        <ThemeProvider>
            <BrowserRouter>
                <Routes>
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/card/:id" element={<CardPage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;
