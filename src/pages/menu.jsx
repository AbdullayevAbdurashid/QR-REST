import React, { useState, useRef } from "react";
import {
  Tag,
  Box,
  TabList,
  Tab,
  Container,
  Grid,
  background,
} from "@chakra-ui/react";
import { products, categories } from "../data/products";
import ProductCard from "../components/productCard";
import useIsInViewport from "use-is-in-viewport";

function Menu(props) {
  const [filters, setFilters] = useState({
    fastfood: { isActive: false },
    filter: "fastfood",
  });
  const [isInViewport, wrappedTargetRef] = useIsInViewport({ threshold: 50 });
  return (
    <Container maxW={"3xl"} p={1}>
      <Box
        mt={isInViewport ? 4 : 0}
        position={isInViewport ? "" : "fixed"}
        background="white"
        overflowX="scroll"
        zIndex={999}
        display="flex"
        flexWrap="nowrap"
      >
        {categories.map((category) => (
          <Tag
            borderRadius="full"
            background={filters[category.slug].isActive ? "primary" : ""}
            onClick={() =>
              setFilters({
                filter: category.slug,
                [category.slug]: { isActive: true },
              })
            }
            colorScheme="orange"
          >
            Sample Tag
          </Tag>
          //   <Tab
          //     background="primary"
          //     color="white"
          //     onClick={() => setFilters(category.slug)}
          //   >
          //     {category.name}
          //   </Tab>
        ))}
      </Box>
      <div className="products">
        <div ref={wrappedTargetRef}>{isInViewport ? "Visible" : "Nope"}</div>

        <Grid gap={2} templateColumns="repeat(2, 1fr)">
          {products
            .filter((product) => product.cotegorie == filters.filter)
            .map((product) => (
              <ProductCard
                name={product.name}
                descr={product.description}
                image={product.photo}
                price={product.price}
              >
                {product.name}
              </ProductCard>
            ))}
        </Grid>
      </div>
    </Container>
  );
}

export default Menu;
