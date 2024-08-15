import {Flex, Tooltip} from "@radix-ui/themes";
import Link from "next/link";
import type {PropsWithChildren} from "react";

import {Span, Strong} from "@/components/typography";
import {FoodTypeBadge} from "@/components/ui/food-type-badge";
import {Icons} from "@/components/ui/icons";
import {
  Body,
  Cell,
  ColumnHeaderCell,
  Header,
  Row,
  RowHeaderCell,
  Table,
  TableCaption,
} from "@/components/ui/table";

import {
  type FoodItem,
  getFoodItemsData,
  ITEMS_PER_PAGE,
} from "../_data/food-items";
import {Pagination} from "./pagination";
import {SearchFood} from "./search-food";

type Props = {
  foodName: string;
  page: number;
  orderBy: string;
};

export async function FoodTable({foodName, page, orderBy}: Props) {
  let {foodItems, totalFoods} = await getFoodItemsData(
    foodName,
    ITEMS_PER_PAGE,
    (page - 1) * ITEMS_PER_PAGE, // skip items based on page number
    orderBy
  );

  let totalPages = Math.ceil(totalFoods / ITEMS_PER_PAGE);
  let currentPage = page > totalPages ? totalPages : page;
  return (
    <>
      <Flex asChild direction="column" gap="2">
        <div className="mb-5  w-full max-w-md ">
          <SearchFood foodName={foodName} />
        </div>
      </Flex>
      <Table className="relative">
        <TableCaption>
          List of food items available in the database
        </TableCaption>
        <TableHead />
        <TableBody foodItems={foodItems}>
          <Footer
            totalFoodItems={foodItems.length}
            totalFoods={totalFoods}
            currentPage={currentPage}
            totalPages={totalPages}
          >
            <Pagination page={page} totalPages={totalPages} />
          </Footer>
        </TableBody>
      </Table>
    </>
  );
}

function TableHead() {
  let searchParams = new URLSearchParams(); // TODO
  return (
    <Header>
      <Row>
        <ColumnHeaderCell>
          <Link href="/foods?orderby=name">
            <Tooltip content="Food name">
              <Icons.Food />
            </Tooltip>
          </Link>
        </ColumnHeaderCell>
        <ColumnHeaderCell>
          <Tooltip content="Food type">
            <Icons.Label />
          </Tooltip>
        </ColumnHeaderCell>
        <ColumnHeaderCell>
          <Link href="/foods?orderby=calories">
            <Tooltip content="Calories in food item">
              <Icons.Calories />
            </Tooltip>
          </Link>
        </ColumnHeaderCell>
        <ColumnHeaderCell>
          <Link href="/foods?orderby=carbs">
            <Tooltip content="Carbs">
              <Icons.Carbs />
            </Tooltip>
          </Link>
        </ColumnHeaderCell>
        <ColumnHeaderCell>
          <Link href="/foods?orderby=protein">
            <Tooltip content="Protein">
              <Icons.Protein />
            </Tooltip>
          </Link>
        </ColumnHeaderCell>
        <ColumnHeaderCell>
          <Link href="/foods?orderby=fat">
            <Tooltip content="Total fat">
              <Icons.Fat />
            </Tooltip>
          </Link>
        </ColumnHeaderCell>
      </Row>
    </Header>
  );
}

function TableBody({
  foodItems,
  children,
}: PropsWithChildren<{foodItems: FoodItem[]}>) {
  return (
    <Body>
      {foodItems.map((foodItem) => (
        <Row key={foodItem.foodId}>
          <RowHeaderCell>
            <Link
              href={`/foods/${foodItem.slug}`}
              className="hover:underline hover:opacity-60"
            >
              <Strong className="capitalize">{foodItem.foodName} </Strong>
            </Link>
          </RowHeaderCell>
          <Cell>
            <FoodTypeBadge
              name={foodItem.foodType.name}
              slug={foodItem.foodType.slug}
            />
          </Cell>
          <Cell>
            <Span>{foodItem.data.calories}</Span>
          </Cell>
          <Cell>
            <Span>{foodItem.data.carbs}</Span>
          </Cell>
          <Cell>
            <Span>{foodItem.data.protein}</Span>
          </Cell>
          <Cell>
            <Span>{foodItem.data.fat}</Span>
          </Cell>
        </Row>
      ))}
      {children}
    </Body>
  );
}

function Footer({
  totalFoodItems,
  totalFoods,
  currentPage,
  totalPages,
  children,
}: PropsWithChildren<{
  totalFoodItems: number;
  totalFoods: number;
  currentPage: number;
  totalPages: number;
}>) {
  return (
    <Row className="border-none">
      <RowHeaderCell colSpan={3}>
        <div className="flex flex-col">
          <div className="flex gap-2">
            <Span className="italic">Total</Span>
            <Span className="italic">
              {totalFoodItems}/{totalFoods} items
            </Span>
          </div>
          <Span>
            Page {currentPage} of {totalPages}
          </Span>
        </div>
      </RowHeaderCell>
      <Cell colSpan={3}>{children}</Cell>
    </Row>
  );
}
