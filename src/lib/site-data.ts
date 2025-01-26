export default {
  siteName: "Nutri Check",
  features: [
    "Search for food items",
    "Filter food items by category",
    "View nutritional information for food items",
    "Export food items to CSV",
    "Customize the columns that are displayed in the food items table",
    "View individual food items and their nutritional information (Coming Soon)",
    "Calculate the total nutritional information for a group of food (Coming Soon)",
  ] as const,

  metadata: {
    title: "Create Next App",
    description: "Generated by create next app",
  },

  description:
    "Nutri Check is a simple web application that allows you to search for food items and view their nutritional information.",
  tools: ["Next.js", "Tailwind-CSS", "Shadcn"],
};