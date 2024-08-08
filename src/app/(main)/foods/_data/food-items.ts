import "server-only";

import {eq} from "drizzle-orm";
import {alias} from "drizzle-orm/pg-core";

import {db} from "@/db";
import {foodNutrients, foods, foodTypes} from "@/db/schema";

export async function getFoodItems() {
  let ft = alias(foodTypes, "foodType");
  let f = alias(foods, "food");
  return await db
    .select({
      foodId: f.id,
      foodName: f.name,
      foodType: {name: ft.name, id: ft.id},
      data: {
        calories: foodNutrients.calories,
        fat: foodNutrients.fat,
        protein: foodNutrients.protein,
        carbs: foodNutrients.carbs,
      },
    })
    .from(f)
    .innerJoin(ft, eq(f.typeId, ft.id))
    .innerJoin(foodNutrients, eq(f.id, foodNutrients.foodId));
}

export type FoodItem = Awaited<ReturnType<typeof getFoodItems>>[number];