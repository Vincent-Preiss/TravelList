export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start adding some items to your packing list!</em>
      </footer>
    );
  const numberofPackedItems = items.filter((item) => item.packed).length;
  const percentage = Math.round((numberofPackedItems / items.length) * 100);

  return (
    <footer className="stats">
      <em>
        {percentage !== 100
          ? `💼 You have ${items.length} item${
              items.length !== 1 ? "s" : ""
            } on your
            list, and you already packed  ${numberofPackedItems}(${percentage}%) `
          : "You got everything! Ready to go ✈️"}
      </em>
    </footer>
  );
}
