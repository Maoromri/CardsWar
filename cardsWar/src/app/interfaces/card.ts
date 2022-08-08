export interface Card {
  title: string;
  value: number;
  shape: 'club' | 'heart' | 'spade' | 'diamond' | 'joker';
  src: string
}
