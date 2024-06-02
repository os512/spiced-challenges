import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";
import { Fragment } from "react";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      {data.reviews.map((review) => (
        <Fragment key={review._id}>
          <h4>{review.title}</h4>
          <p>{[...Array(review.rating)].map(() => "★")}</p>
          <p>{review.text}</p>
        </Fragment>
      ))}
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}
