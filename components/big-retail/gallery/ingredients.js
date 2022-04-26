export const allIngredients = [
  { label: "Parter", category: "parter"},
  { label: "Etajul 1", category: "floor"},
];

const [parter, floor] = allIngredients;
export const initialTabs = [parter, floor];

export function getNextIngredient(ingredients) {
  const existing = new Set(ingredients);
  return allIngredients.find((ingredient) => !existing.has(ingredient));
}
