import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import ArticleList from "../components/ArticleList";

describe("ArticleList Component", () => {
  test("renders the heading", () => {
    render(
      <BrowserRouter>
        <ArticleList articles={[]} />
      </BrowserRouter>
    );

    expect(screen.getByText("NY Times Most Popular Articles")).toBeInTheDocument();
  });

  test("renders a list of articles", () => {
    const articles = [
      { id: 1, title: "Article One" },
      { id: 2, title: "Article Two" },
    ];

    render(
      <BrowserRouter>
        <ArticleList articles={articles} />
      </BrowserRouter>
    );

    expect(screen.getByText("Article One")).toBeInTheDocument();
    expect(screen.getByText("Article Two")).toBeInTheDocument();
  });

  test("renders links with correct href attributes", () => {
    const articles = [{ id: 1, title: "Test Article" }];

    render(
      <BrowserRouter>
        <ArticleList articles={articles} />
      </BrowserRouter>
    );

    const link = screen.getByText("Test Article");
    expect(link).toBeInTheDocument();
    expect(link.closest("a")).toHaveAttribute("href", "/article/1");
  });

  test("renders empty state when no articles exist", () => {
    render(
      <BrowserRouter>
        <ArticleList articles={[]} />
      </BrowserRouter>
    );

    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
  });

  test("does not crash when articles prop is undefined", () => {
    render(
      <BrowserRouter>
        <ArticleList />
      </BrowserRouter>
    );

    expect(screen.getByText("NY Times Most Popular Articles")).toBeInTheDocument();
  });
});
