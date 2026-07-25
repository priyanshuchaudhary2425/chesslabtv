export const SITE = {
  name: "ChessLabTV",
  tagline: "For the love of chess.",
  phoneDisplay: "+91 70041 63132",
  phoneHref: "tel:+917004163132",
  email: "chesslabtv@gmail.com",
  emailHref: "mailto:chesslabtv@gmail.com",
  address: "Silvassa, Dadra & Nagar Haveli, 396230, India",
  groupLink: "https://chat.whatsapp.com/",
};

export const wa = (message: string) =>
  `https://wa.me/917004163132?text=${encodeURIComponent(message)}`;

export const WA_TRIAL = wa(
  "Hi ChessLabTV, I'd like to book my FREE trial chess class.",
);
export const WA_ASK = wa("Hi ChessLabTV, I have a question about your coaching.");
