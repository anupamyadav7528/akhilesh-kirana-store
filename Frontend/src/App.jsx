import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Shop";  // यह आपकी पुरानी 127 लाइन वाली दुकान है
import Admin from "./Admin"; // यह प्रोडक्ट अपलोड करने वाला फॉर्म है

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* जब कोई वेबसाइट खोलेगा, उसे दुकान (Shop) दिखेगी */}
        <Route path="/" element={<Shop />} />
        
        {/* जब कोई '/admin' लिखेगा, उसे फॉर्म दिखेगा */}
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
}