import { Route, Routes } from "react-router-dom";
import IndexLayout from "./components/layouts/IndexLayout";
import HomePage from "./home/HomePage";
import PageNotFound from "./errors/404";
import AuthorPage from "./components/authors/AuthorPage";
import BlogsPage from "./components/blogs/BlogsPage";

function App() {
  return (
    <IndexLayout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/author/:slug" element={<AuthorPage />} />
        <Route path="/blogs/:slug" element={<BlogsPage />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
    </IndexLayout>
  );
}

export default App;
