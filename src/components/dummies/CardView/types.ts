import {ILoveCard} from "@/components/widgets/LoveCards/types";

export interface ICardViewProps{
  onCardClick: () => void;
  card: ILoveCard|null;
}
