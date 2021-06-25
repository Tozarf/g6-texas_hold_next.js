import { Deck } from "../../../lib/deck";
const deck = new Deck();

export default function handler(req, res) {
  const { quantity } = req.query;
  const card = deck.dispatchCards(parseInt(quantity));
  res.status(200).send(card);
}
