import React from "react";
import { MainArticle } from "../MainArticle/MainArticle.js";
import { SmallArticle } from "../SmallArticle/SmallArticle.js";
import "./Articles.css";

export const Articles = ({ articles }) => {
  return (
    <section className="articles">
      <div className="container grid">
        <section className="articles__big-colums">
          {articles.items.slice(0, 3).map((item) => {
            return (
              <MainArticle
                key={item.title}
                title={item.title}
                image={item.image}
                description={item.description}
                category={
                  articles.categories.find(({ id }) => item.category_id === id)
                    .name
                }
                source={
                  articles.sources.find(({ id }) => item.source_id === id).name
                }
              />
            );
          })}
        </section>
        <section className="articles__small-colums">
          {articles.items.slice(3, 12).map((item) => {
            return (
              <SmallArticle
                key={item.title}
                title={item.title}
                date={item.date}
                source={
                  articles.sources.find(({ id }) => item.source_id === id).name
                }
              />
            );
          })}
        </section>
      </div>
    </section>
  );
};
