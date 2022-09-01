import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as S from "./Style/AppStyle";

import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";

export default function App() {
  return (
    <Router>
      <S.GlobalStyle />
      <S.Header>
        <S.Nav>
          <S.Ul>
            <S.Link href="/">
              <S.Li>PAGE ONE</S.Li>
            </S.Link>
            <S.Link href="/PageTwo">
              <S.Li>PAGE TWO</S.Li>
            </S.Link>
          </S.Ul>
        </S.Nav>
      </S.Header>
      <Routes>
        <Route path="/" element={<PageOne />} />
        <Route path="/PageTwo" element={<PageTwo />} />
      </Routes>
    </Router>
  );
}
