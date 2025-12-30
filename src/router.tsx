import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import {BookDetail} from "@/pages/BookDetail";

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;