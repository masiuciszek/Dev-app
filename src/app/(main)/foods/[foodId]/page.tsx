import {redirect} from "next/navigation";

import {PageWrapper} from "@/_components/page-wrapper";
import {Icons} from "@/_components/ui/icons";
import {getFoodRecordById} from "@/persistence/food/dao";
import type {FoodResult} from "@/persistence/food/types";

import {FoodTypeBadge} from "../food-type-badge";

const ICON_SIZE = 18;

export default async function FoodSlugPage({
  params,
}: {
  params: {foodId: string};
}) {
  let foodItem = await getFoodRecordById(parseInt(params.foodId, 10));

  if (!foodItem.success) {
    return redirect("/404");
  }
  return (
    <PageWrapper>
      {/* <Flex direction="column" my="5" className="md:max-w-[40rem]">
        <Card size="2">
          <Flex my="5" align="center" position="relative">
            <Flex direction="column" gap="1">
              <H1>{foodItem.data.foodName}</H1>
              <P>{foodItem.data.description}</P>
            </Flex>
            <Link
              href={`/food-types-categories/${slugify(foodItem.data.foodType ?? "Other")}`}
            >
              <FoodTypeBadge
                foodType={foodItem.data.foodType ?? "Other"}
                className="absolute right-2 top-2"
                disableTooltip
                size="3"
              />
            </Link>
          </Flex>
          <FoodItemTable foodItem={foodItem.data} />
        </Card>
      </Flex> */}
    </PageWrapper>
  );
}

function FoodItemTable({foodItem}: {foodItem: FoodResult}) {
  let {calories, carbs, totalFat, protein} = foodItem;
  return null;
  // <Table.Root>
  //   <Table.Header>
  //     <Table.Row>
  //       <Table.ColumnHeaderCell>
  //         <Flex align="center" gap="1">
  //           <Span>Calories</Span>
  //           <Icons.Calorie size={ICON_SIZE} />
  //         </Flex>
  //       </Table.ColumnHeaderCell>
  //       <Table.ColumnHeaderCell>
  //         <Flex align="center" gap="1">
  //           <Span>Carbohydrates</Span>
  //           <Icons.Carbs size={ICON_SIZE} />
  //         </Flex>
  //       </Table.ColumnHeaderCell>
  //       <Table.ColumnHeaderCell>
  //         <Flex align="center" gap="1">
  //           <Span>Fat</Span>
  //           <Icons.Fat size={ICON_SIZE} />
  //         </Flex>
  //       </Table.ColumnHeaderCell>
  //       <Table.ColumnHeaderCell>
  //         <Flex align="center" gap="1">
  //           <Span>Protein</Span>
  //           <Icons.Protein size={ICON_SIZE} />
  //         </Flex>
  //       </Table.ColumnHeaderCell>
  //     </Table.Row>
  //   </Table.Header>

  //   <Table.Body>
  //     <Table.Row>
  //       <Table.Cell>{calories}</Table.Cell>
  //       <Table.Cell>{carbs}</Table.Cell>
  //       <Table.Cell>{totalFat}</Table.Cell>
  //       <Table.Cell>{protein}</Table.Cell>
  //     </Table.Row>
  //   </Table.Body>
  // </Table.Root>
}