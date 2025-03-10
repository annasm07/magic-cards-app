import { GridChildComponentProps } from "react-window";
import CardListItem from "./CardListItem";

export default function CardRow({
  columnIndex,
  rowIndex,
  style,
  data,
}: GridChildComponentProps) {
  const card = data[columnIndex + rowIndex];
  return (
    <div style={style}>
      <CardListItem card={card} />
    </div>
  );
}
