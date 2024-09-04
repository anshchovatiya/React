export default function Pasta({ Qty = 1 }) {
  return (
    <div style={{fontFamily:"sans-serif"}}>
      <h1>Garlic Butter Pasta</h1>
      <div>
        <h2>Ingredients for {Qty} person</h2>
        <ul>
          <li>
            {100 * Qty}g pasta (about ${Qty} cup of spaghetti, linguine, or your
            favorite type)
          </li>
          <li>{2 * Qty} tablespoons butter</li>
          <li>{2 * Qty} cloves garlic, minced</li>
          <li>Salt and pepper to taste</li>
          <li>
            Optional: {Qty}-{Qty + 1} tablespoons grated Parmesan cheese,
            chopped parsley, or a pinch of red pepper flakes
          </li>
        </ul>
      </div>
    </div>
  );
}
