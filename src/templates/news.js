import { graphql } from "gatsby";

import GlobalLayout from "../components/globalLayout";
import News from "../components/news";

export default function NewsTempalte(props) {
  return (
    <GlobalLayout {...props}>
      <News {...props} />
    </GlobalLayout>
  );
}

export const pageQuery = graphql`
  fragment NewsDeets on NewsItem {
    id
    date
    locale
    author
    source
    link
    title
    newsType
  }

  query ($skip: Int!, $limit: Int!, $filterQuery: NewsItemFilterInput!) {
    items: allNewsItem(
      filter: $filterQuery
      sort: { fields: date, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          ...NewsDeets
        }
      }
    }
  }
`;
