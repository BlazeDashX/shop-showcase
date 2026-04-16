export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image_url: string;
  category: string;
}

export const mockProducts: Product[] = [
  {
    id: "1",
    title: "Arc Desk Lamp",
    description:
      "A minimal arc lamp with a matte black finish and warm-toned LED. Adjustable arm with magnetic dimmer. Designed for focused work environments and clean desktops.",
    price: 189,
    image_url: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=80",
    category: "Lighting",
  },
  {
    id: "2",
    title: "Ceramic Pour-Over",
    description:
      "Hand-thrown stoneware pour-over brewer with a matte glaze finish. Pairs with any standard carafe. Each piece is unique — no two are identical.",
    price: 74,
    image_url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
    category: "Kitchen",
  },
  {
    id: "3",
    title: "Merino Throw Blanket",
    description:
      "100% Merino wool throw in a herringbone weave. Temperature-regulating, naturally hypoallergenic. Finished with hand-knotted fringe on both ends.",
    price: 230,
    image_url: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?w=800&q=80",
    category: "Home",
  },
  {
    id: "4",
    title: "Modular Shelf System",
    description:
      "Solid oak wall-mounted shelf with hidden steel brackets. Modular by design — connect multiple units horizontally or vertically. Holds up to 40kg per shelf.",
    price: 310,
    image_url: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=800&q=80",
    category: "Furniture",
  },
  {
    id: "5",
    title: "Linen Desk Pad",
    description:
      "Full-grain linen desk mat with a cork non-slip base. Naturally anti-static. Protects your desk and grounds your workspace with a warm neutral texture.",
    price: 58,
    image_url: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    category: "Workspace",
  },
  {
    id: "6",
    title: "Obsidian Fountain Pen",
    description:
      "Machined from solid brass with a matte black PVD coating. Medium nib with a smooth ink flow. Comes with a glass converter and presentation box.",
    price: 145,
    image_url: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=800&q=80",
    category: "Writing",
  },
  {
    id: "7",
    title: "Walnut Charging Tray",
    description:
      "CNC-milled American walnut tray with a recessed wireless charging pad. Holds your phone, keys, and cards. Oil-finished for a natural feel.",
    price: 95,
    image_url: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=800&q=80",
    category: "Workspace",
  },
  {
    id: "8",
    title: "Stone Diffuser",
    description:
      "Carved from single-piece travertine. Ultrasonic mist diffuser with 8-hour runtime and auto shutoff. Silent operation under 25dB.",
    price: 168,
    image_url: "https://images.unsplash.com/photo-1602928321679-560bb453f190?w=800&q=80",
    category: "Home",
  },
  {
    id: "9",
    title: "Slim Travel Wallet",
    description:
      "Full-grain vegetable-tanned leather. RFID-blocking card slots for up to 8 cards. Develops a unique patina over time. Ships flat, forms to your pocket.",
    price: 112,
    image_url: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=800&q=80",
    category: "Accessories",
  },
  {
    id: "10",
    title: "Glass Water Carafe",
    description:
      "Mouth-blown borosilicate glass carafe with an oak stopper. 1.2L capacity. Dishwasher safe. Pairs with the matching ribbed glass set.",
    price: 86,
    image_url: "https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=800&q=80",
    category: "Kitchen",
  },
];