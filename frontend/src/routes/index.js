import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Login } from "../views/Auth/Login";
import { Register } from "../views/Auth/Register";
import { Profile } from "../views/Profile/Profile";
import { RootLayout } from "../layout/RootLayout";
import { LoginForm } from "../views/Auth/LoginForm";
import { Home } from "../views/Home/Home";
import { BookDetails } from "../component/BooksItem/BookDetails";

export const Routes = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Login />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/home" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/books-details" element={<BookDetails />} />
        </Route>
    )
) 