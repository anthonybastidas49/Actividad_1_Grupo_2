import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/home/Home.tsx";
import {BookDetail} from "@/pages/book_details/BookDetail.tsx";
import {Layout} from "@/layouts/Layout.tsx";
import {Landing} from "@/pages/landing/Landing.tsx";
import { Checkout } from "@/pages/checkout/Checkout";

export const GlobalRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/home" element={<Layout><Home /></Layout>}/>
        <Route path="/books/:id" element={<Layout><BookDetail /></Layout>} />
        <Route path="/checkout" element={<Layout><Checkout /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
};

export default GlobalRouter;
