import React  from 'react';
import Editor from './Editor';

const App = () => (
  <Routes>
    // ブラウザでevents/で始まるURLの表示を開始するたびにレンダリング
    <Route path="events/*" element={<Editor />} />
  <Routes>
);

export default App;
