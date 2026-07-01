import { useState } from "react";

const cocktails = [
  // === CLAUDE RECOMMENDED ===
  {
    name: "Strega Sour",
    category: "Herbal",
    base: "Gin / Strega",
    method: "Shaken",
    source: "Claude",
    vibe: "Saffron-forward and weird in the best way",
    ingredients: ["1½ oz Strega", "¾ oz gin", "¾ oz lemon juice", "½ oz simple syrup", "2 dashes Angostura"],
    steps: "Shake all with ice 12–15 sec. Double-strain into a coupe. Express lemon peel.",
    notes: "Pull simple back to ¼ oz if too sweet — Strega brings its own sweetness.",
  },
  {
    name: "Oaxaca Old Fashioned",
    category: "Smoky",
    base: "Mezcal / Reposado",
    method: "Stirred",
    source: "Claude",
    vibe: "Smoky, warm — a mezcalería classic",
    ingredients: ["1 oz mezcal", "1 oz reposado tequila", "¼ oz simple syrup", "2 dashes Angostura", "Orange peel"],
    steps: "Stir with ice 30 sec. Strain over a big cube. Express orange peel, drop it in.",
    notes: "More smoke? Go 1.5 oz mezcal / 0.5 oz reposado. Agave syrup is traditional.",
  },
  {
    name: "St. Germain Reposado Sour",
    category: "Floral",
    base: "Reposado",
    method: "Shaken",
    source: "Claude",
    vibe: "Floral, citrus-forward — Steve approved",
    ingredients: ["1½ oz reposado tequila", "¾ oz St. Germain", "¾ oz lemon juice", "¼ oz simple syrup"],
    steps: "Shake all with ice 12–15 sec. Double-strain into a coupe or over fresh ice. Lemon peel garnish.",
    notes: "Drop the simple if you like it drier — St. Germain brings plenty of sweetness.",
  },
  {
    name: "Martinez",
    category: "Classic",
    base: "Gin",
    method: "Stirred",
    source: "Claude",
    vibe: "The granddaddy of the Martini — rich, herbal, elegant",
    ingredients: ["1½ oz gin", "1½ oz sweet vermouth", "¼ oz maraschino", "2 dashes orange bitters", "Absinthe rinse"],
    steps: "Rinse coupe with absinthe (swirl & discard). Stir remaining with ice 30 sec. Strain. Lemon twist.",
    notes: "The absinthe rinse is what separates this from a sweet Martini.",
  },
  {
    name: "Smoky Paper Plane",
    category: "Smoky",
    base: "Mezcal",
    method: "Shaken",
    source: "Claude",
    vibe: "A Naked & Famous with green chartreuse + lemon",
    ingredients: ["¾ oz mezcal", "¾ oz Aperol", "¾ oz green chartreuse", "¾ oz lemon juice"],
    steps: "Shake all with ice 12–15 sec. Double-strain into a coupe. Optional lemon peel.",
    notes: "Bump mezcal to 1 oz / Aperol to ½ oz for more smoke.",
  },
  {
    name: "Galiano Gin Fizz",
    category: "Light",
    base: "Gin / Galiano",
    method: "Shaken",
    source: "Claude",
    vibe: "Vanilla-anise, bright, fizzy — a lighter nightcap",
    ingredients: ["1 oz Galiano", "1 oz gin", "¾ oz lemon juice", "¼ oz simple syrup", "2 oz soda water"],
    steps: "Shake everything except soda with ice. Strain into tall glass over fresh ice. Top with soda, gentle stir. Lemon wheel garnish.",
    notes: "Skip the soda for a Galiano Sour — more concentrated but still great.",
  },
  {
    name: "Elderflower Margarita",
    category: "Floral",
    base: "Reposado",
    method: "Shaken",
    source: "Claude",
    vibe: "The one that converts tequila skeptics",
    ingredients: ["1½ oz reposado tequila", "¾ oz St. Germain", "½ oz orange liqueur", "¾ oz lemon juice"],
    steps: "Shake all with ice 12–15 sec. Strain into rocks glass over ice or up in a coupe. Lemon wheel.",
    notes: "Half-rim with salt so guests can choose sip by sip. Scales great for batching.",
  },
  {
    name: "Vieux Carré (Strega riff)",
    category: "Classic",
    base: "Rye",
    method: "Stirred",
    source: "Claude",
    vibe: "New Orleans classic with a saffron twist",
    ingredients: ["1½ oz rye", "1 oz sweet vermouth", "¼ oz Strega", "2 dashes Angostura", "2 dashes orange bitters"],
    steps: "Optional absinthe rinse. Stir with ice 30 sec. Strain over big cube or up. Lemon twist.",
    notes: "Traditional uses Bénédictine. Strega's saffron-vanilla takes it in its own direction.",
  },
  {
    name: "Division Bell",
    category: "Bitter",
    base: "Mezcal",
    method: "Shaken",
    source: "Claude",
    vibe: "Named after Pink Floyd — smoky, bitter, balanced",
    ingredients: ["¾ oz mezcal", "¾ oz Suze", "¾ oz maraschino", "¾ oz lemon juice"],
    steps: "Shake all with ice 12–15 sec. Double-strain into a coupe. Lemon peel optional.",
    notes: "Same structure as a Last Word with mezcal + Suze. If too bitter, pull Suze to ½ oz.",
  },
  {
    name: "Alaska",
    category: "Herbal",
    base: "Gin",
    method: "Stirred",
    source: "Claude",
    vibe: "Bijou without the safety net — stripped-down and potent",
    ingredients: ["2 oz gin", "¾ oz green chartreuse", "1 dash orange bitters"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Lemon twist.",
    notes: "Just gin and chartreuse. Nowhere to hide.",
  },
  {
    name: "Rosita",
    category: "Bitter",
    base: "Reposado",
    method: "Stirred",
    source: "Claude",
    vibe: "A tequila Negroni — for Negroni lovers",
    ingredients: ["1½ oz reposado tequila", "½ oz sweet vermouth", "½ oz Aperol", "2 dashes Angostura"],
    steps: "Stir with ice 30 sec. Strain over a big cube. Orange peel garnish.",
    notes: "Aperol standing in for Campari — lighter but solid.",
  },
  {
    name: "Whiskey Sour",
    category: "Classic",
    base: "Rye",
    method: "Shaken",
    source: "Claude",
    vibe: "Timeless. Nothing more to say.",
    ingredients: ["2 oz rye", "¾ oz lemon juice", "½ oz simple syrup", "¼ oz orange liqueur (optional)"],
    steps: "Shake all with ice 12–15 sec. Strain into rocks glass over ice or up. Lemon wheel and cherry garnish.",
    notes: "Add orange liqueur for a Fancy Whiskey Sour.",
  },
  {
    name: "Rum Old Fashioned",
    category: "Warm",
    base: "Dark Rum",
    method: "Stirred",
    source: "Claude",
    vibe: "Like a fireplace in a glass — warm and spiced",
    ingredients: ["2 oz dark rum", "¼ oz allspice dram", "¼ oz simple syrup", "2 dashes Angostura", "Orange peel"],
    steps: "Stir with ice 30 sec. Strain over big cube. Express orange peel.",
    notes: "The allspice dram does the heavy lifting. A little goes a long way.",
  },
  {
    name: "Tequila Old Fashioned",
    category: "Classic",
    base: "Reposado",
    method: "Stirred",
    source: "Claude",
    vibe: "Easy, impressive — the reposado's oak does the work",
    ingredients: ["2 oz reposado tequila", "¼ oz simple syrup", "2 dashes Angostura", "Orange peel"],
    steps: "Stir with ice 30 sec. Strain over big cube. Express orange peel, drop it in.",
    notes: "Crowd-pleaser. The vanilla and oak in reposado shine here.",
  },
  {
    name: "Black Manhattan",
    category: "Classic",
    base: "Rye",
    method: "Stirred",
    source: "Claude",
    vibe: "A Manhattan's darker sibling — Amaro Nonino replaces vermouth",
    ingredients: ["2 oz rye", "1 oz Amaro Nonino", "2 dashes Angostura", "Cherry garnish"],
    steps: "Stir with ice 30 sec. Strain into a coupe or over a big cube. Cherry garnish.",
    notes: "Traditionally uses Averna, but Nonino is lighter with more citrus peel and vanilla. Try with bourbon too.",
  },
  {
    name: "Tequila Bijou",
    category: "Herbal",
    base: "Reposado",
    method: "Stirred",
    source: "Claude",
    vibe: "A citrus-free Bijou built on reposado instead of gin — equal parts elegance",
    ingredients: ["1 oz reposado tequila", "1 oz sweet vermouth", "1 oz green chartreuse", "1 dash Angostura"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Lemon twist optional.",
    notes: "A riff on the classic Bijou — reposado stands in for gin, Angostura for orange bitters. Same 'jewel' structure, agave-forward instead of botanical.",
  },
  {
    name: "M&M (Mezcal & Montenegro)",
    category: "Smoky",
    base: "Mezcal",
    method: "Stirred",
    source: "Claude",
    vibe: "Raton Canyon's smoky cousin — mezcal and Montenegro with cardamom spice",
    ingredients: ["1½ oz mezcal", "1½ oz Montenegro amaro", "1 barspoon maraschino", "2 dashes cardamom bitters"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Lemon twist optional.",
    notes: "A smoky riff on the Raton Canyon — mezcal in for gin. Same bittersweet, cardamom-spiced backbone.",
  },
  // === FROM HIGHBALL ===
  {
    name: "Bijou",
    category: "Herbal",
    base: "Gin",
    method: "Stirred",
    source: "Highball",
    vibe: "Translates to 'jewel' — stiff and herbal, old man energy",
    ingredients: ["1½ oz gin", "½ oz sweet vermouth", "½ oz green chartreuse", "1 dash orange bitters"],
    steps: "Stir with ice 30 sec. Strain into a chilled coupette or cocktail glass. Garnish with lemon twist and maraschino cherry.",
    notes: "Gin-forward version — lets the botanicals lead while chartreuse and vermouth play support.",
  },
  {
    name: "Corpse Reviver No. 2",
    category: "Classic",
    base: "Gin",
    method: "Shaken",
    source: "Highball",
    vibe: "Hair of the dog — bright, botanical, deadly drinkable",
    ingredients: ["¾ oz gin", "¾ oz orange liqueur", "¾ oz Lillet Blanc", "¾ oz lemon juice", "Absinthe rinse"],
    steps: "Rinse coupe with absinthe. Shake remaining with ice 12–15 sec. Strain into the glass. Lemon twist.",
    notes: "Equal parts make it easy. Lillet Blanc is the traditional call.",
  },
  {
    name: "Last Word",
    category: "Herbal",
    base: "Gin",
    method: "Shaken",
    source: "Highball",
    vibe: "Prohibition-era classic — perfectly balanced equal parts",
    ingredients: ["1 oz gin", "1 oz green chartreuse", "1 oz maraschino", "1 oz lime juice"],
    steps: "Shake all with ice 12–15 sec. Strain into a coupe. Brandied cherry garnish.",
    notes: "Traditionally lime. Lemon works as a sub.",
  },
  {
    name: "Negroni",
    category: "Bitter",
    base: "Gin",
    method: "Stirred",
    source: "Highball",
    vibe: "The king of bitter cocktails — equal parts perfection",
    ingredients: ["1 oz gin", "1 oz sweet vermouth", "1 oz Campari"],
    steps: "Stir with ice 30 sec. Strain over a big cube. Orange peel.",
    notes: "Aperol can sub for Campari if you want it lighter.",
  },
  {
    name: "White Negroni",
    category: "Bitter",
    base: "Gin",
    method: "Stirred",
    source: "Highball",
    vibe: "The Negroni's sophisticated, lighter sibling",
    ingredients: ["1½ oz gin", "1 oz Suze", "1 oz Lillet Blanc"],
    steps: "Stir with ice 30 sec. Strain over a big cube. Lemon twist.",
    notes: "Suze gives the bitterness. Completely different mood than a regular Negroni.",
  },
  {
    name: "Boulevardier",
    category: "Bitter",
    base: "Bourbon",
    method: "Stirred",
    source: "Highball",
    vibe: "A whiskey Negroni — warm and bittersweet",
    ingredients: ["1½ oz bourbon", "1 oz sweet vermouth", "1 oz Campari"],
    steps: "Stir with ice 30 sec. Strain over big cube. Orange peel.",
    notes: "Aperol subbing for Campari works — a shade lighter.",
  },
  {
    name: "Paper Plane",
    category: "Bitter",
    base: "Bourbon",
    method: "Shaken",
    source: "Highball",
    vibe: "Modern classic — bittersweet, bright, perfectly balanced",
    ingredients: ["¾ oz bourbon", "¾ oz Aperol", "¾ oz Amaro Nonino", "¾ oz lemon juice"],
    steps: "Shake all with ice 12–15 sec. Double-strain into a coupe. No garnish needed.",
    notes: "Amaro Nonino is the key. No great sub, but Aperol + something herbal gets close.",
  },
  {
    name: "Manhattan",
    category: "Classic",
    base: "Rye",
    method: "Stirred",
    source: "Highball",
    vibe: "The cocktail — rye, vermouth, bitters, done",
    ingredients: ["2 oz rye", "1 oz sweet vermouth", "2 dashes Angostura", "Cherry garnish"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Cherry garnish.",
    notes: "Luxardo cherries if you have them. Bourbon works but rye is the classic.",
  },
  {
    name: "Sazerac",
    category: "Classic",
    base: "Rye",
    method: "Stirred",
    source: "Highball",
    vibe: "New Orleans royalty — rye, absinthe, Peychaud's",
    ingredients: ["2 oz rye", "¼ oz simple syrup", "3 dashes Peychaud's bitters", "Absinthe rinse", "Lemon peel"],
    steps: "Rinse chilled rocks glass with absinthe. Stir rye, simple, bitters with ice. Strain into glass. Express lemon peel, discard.",
    notes: "Peychaud's is essential — Angostura makes it a different drink. No ice in the glass.",
  },
  {
    name: "Old Fashioned",
    category: "Classic",
    base: "Bourbon",
    method: "Stirred",
    source: "Highball",
    vibe: "The original cocktail — spirit, sugar, bitters, water",
    ingredients: ["2 oz bourbon", "¼ oz simple syrup", "2 dashes Angostura", "Orange peel"],
    steps: "Stir with ice 30 sec. Strain over a big cube. Express orange peel, drop it in.",
    notes: "Rye works equally well. Don't muddle fruit in this.",
  },
  {
    name: "Maple Bourbon Smash",
    category: "Warm",
    base: "Bourbon",
    method: "Shaken",
    source: "Highball",
    vibe: "Autumn in a glass — maple, bourbon, citrus",
    ingredients: ["2 oz bourbon", "¾ oz lemon juice", "½ oz maple syrup", "2 dashes Angostura"],
    steps: "Shake all with ice 12–15 sec. Strain over fresh ice in rocks glass. Lemon wheel.",
    notes: "Real maple syrup only. Dark amber has more flavor.",
  },
  {
    name: "Rusty Nail",
    category: "Warm",
    base: "Scotch",
    method: "Stirred",
    source: "Highball",
    vibe: "Scotch and Drambuie — honey, herbs, smoke",
    ingredients: ["1½ oz scotch", "¾ oz Drambuie"],
    steps: "Stir with ice. Strain over a big cube. Lemon twist optional.",
    notes: "Simple and strong. Less Drambuie for drier.",
  },
  {
    name: "Rob Roy",
    category: "Classic",
    base: "Scotch",
    method: "Stirred",
    source: "Highball",
    vibe: "A Scottish Manhattan — scotch and sweet vermouth",
    ingredients: ["2 oz scotch", "1 oz sweet vermouth", "2 dashes Angostura", "Cherry garnish"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Cherry garnish.",
    notes: "Same structure as a Manhattan. Smoke level depends on your scotch.",
  },
  {
    name: "South by Southwest",
    category: "Bitter",
    base: "Scotch",
    method: "Stirred",
    source: "Highball",
    vibe: "A scotch Negroni with orange blossom — smoky and floral",
    ingredients: ["1 oz scotch", "1 oz sweet vermouth", "1 oz Campari", "3 dashes orange bitters", "Orange blossom water"],
    steps: "Mist chilled rocks glass with 4 sprays orange blossom water. Stir scotch, vermouth, Campari, bitters with ice. Strain into glass. Spray again, orange twist.",
    notes: "The orange blossom water is what makes this special. Don't skip it.",
  },
  {
    name: "Tom Collins",
    category: "Light",
    base: "Gin",
    method: "Shaken",
    source: "Highball",
    vibe: "Gin, lemon, soda — the original long drink",
    ingredients: ["2 oz gin", "1 oz lemon juice", "½ oz simple syrup", "Soda water"],
    steps: "Shake gin, lemon, simple with ice. Strain into tall glass over fresh ice. Top with soda. Lemon wheel and cherry.",
    notes: "Classic summer drink.",
  },
  {
    name: "Margarita",
    category: "Classic",
    base: "Tequila",
    method: "Shaken",
    source: "Highball",
    vibe: "The margarita — no explanation needed",
    ingredients: ["2 oz tequila", "1 oz lime juice", "¾ oz orange liqueur"],
    steps: "Shake all with ice 12–15 sec. Strain into salt-rimmed rocks glass over ice or up. Lime wheel.",
    notes: "Salt rim optional. Reposado adds depth over blanco.",
  },
  {
    name: "Tommy's Margarita",
    category: "Classic",
    base: "Tequila",
    method: "Shaken",
    source: "Highball",
    vibe: "The purist's margarita — agave instead of orange liqueur",
    ingredients: ["2 oz tequila", "1 oz lime juice", "½ oz agave syrup"],
    steps: "Shake all with ice 12–15 sec. Strain into rocks glass over ice. Lime wheel.",
    notes: "Lets the tequila speak. Agave syrup is key.",
  },
  {
    name: "Loaded Pistol",
    category: "Smoky",
    base: "Mezcal",
    method: "Stirred",
    source: "Highball",
    vibe: "Mezcal, Strega, grapefruit bitters — smoky and complex",
    ingredients: ["1½ oz mezcal", "¾ oz sweet vermouth", "½ oz Strega", "1 pinch salt", "2 dashes grapefruit bitters"],
    steps: "Stir all with ice 30 sec. Strain into a coupe.",
    notes: "The pinch of salt opens everything up. Don't skip it.",
  },
  {
    name: "Paloma",
    category: "Light",
    base: "Tequila",
    method: "Built",
    source: "Highball",
    vibe: "Mexico's most popular tequila cocktail — not the margarita",
    ingredients: ["2 oz tequila", "½ oz lime juice", "Grapefruit soda", "Pinch of salt"],
    steps: "Add tequila and lime to tall glass with ice. Top with grapefruit soda. Stir gently. Grapefruit wedge or lime wheel.",
    notes: "Squirt, Jarritos, or Fresca all work.",
  },
  {
    name: "Naked and Famous",
    category: "Smoky",
    base: "Mezcal",
    method: "Shaken",
    source: "Highball",
    vibe: "Equal parts mezcal perfection — smoky, bitter, sweet",
    ingredients: ["¾ oz mezcal", "¾ oz yellow chartreuse", "¾ oz Aperol", "¾ oz lime juice"],
    steps: "Shake all with ice 12–15 sec. Double-strain into a coupe. No garnish needed.",
    notes: "Yellow chartreuse is the classic. Green works but hits harder (that's the Smoky Paper Plane).",
  },
  {
    name: "Allspice Manhattan",
    category: "Warm",
    base: "Rye",
    method: "Stirred",
    source: "Highball",
    vibe: "A Manhattan with warm spice from allspice dram",
    ingredients: ["2 oz rye", "1 oz sweet vermouth", "¼ oz allspice dram", "2 dashes Angostura"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Cherry garnish.",
    notes: "The allspice dram adds warm, clove-y depth. Go easy — it's potent.",
  },
  {
    name: "Lion's Tail",
    category: "Warm",
    base: "Bourbon",
    method: "Shaken",
    source: "Highball",
    vibe: "Bourbon and allspice — a forgotten pre-Prohibition gem",
    ingredients: ["2 oz bourbon", "½ oz allspice dram", "½ oz lime juice", "¼ oz simple syrup", "2 dashes Angostura"],
    steps: "Shake all with ice 12–15 sec. Strain into a coupe. Lime wheel.",
    notes: "The allspice dram is the star. Tastes like autumn.",
  },
  {
    name: "Green Point",
    category: "Herbal",
    base: "Rye",
    method: "Stirred",
    source: "Highball",
    vibe: "Rye, sweet vermouth, green chartreuse — a Brooklyn riff",
    ingredients: ["2 oz rye", "½ oz sweet vermouth", "½ oz green chartreuse", "2 dashes Angostura", "1 dash orange bitters"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Lemon twist.",
    notes: "Named after the Brooklyn neighborhood. The chartreuse makes this special.",
  },
  {
    name: "Raton Canyon",
    category: "Bitter",
    base: "Gin",
    method: "Stirred",
    source: "Highball",
    vibe: "Gin and Montenegro — bittersweet with cardamom",
    ingredients: ["1½ oz gin", "1½ oz Montenegro amaro", "¼ oz maraschino", "2 dashes cardamom bitters"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Lemon twist.",
    notes: "Cardamom bitters tie it together. Montenegro's sweetness balances the gin.",
  },
  {
    name: "Aviation",
    category: "Floral",
    base: "Gin",
    method: "Shaken",
    source: "Highball",
    vibe: "Gin, maraschino, crème de violette — purple and floral",
    ingredients: ["2 oz gin", "½ oz maraschino", "¾ oz lemon juice", "¼ oz crème de violette"],
    steps: "Shake all with ice 12–15 sec. Strain into a coupe. Cherry optional.",
    notes: "The violette gives the purple hue. Easy to overdo — keep it to ¼ oz.",
  },
  {
    name: "Tuxedo",
    category: "Classic",
    base: "Gin",
    method: "Stirred",
    source: "Highball",
    vibe: "Gin and dry vermouth dressed up — pre-Prohibition elegance",
    ingredients: ["1½ oz gin", "1½ oz dry vermouth", "¼ oz maraschino", "¼ tsp absinthe", "2 dashes orange bitters"],
    steps: "Stir with ice 30 sec. Strain into a coupe. Lemon twist.",
    notes: "A Martini in a tuxedo. The maraschino and absinthe add complexity.",
  },
  {
    name: "Aperol Spritz",
    category: "Light",
    base: "Aperol",
    method: "Built",
    source: "Highball",
    vibe: "Italian aperitivo — bitter, bubbly, easy",
    ingredients: ["3 oz prosecco", "2 oz Aperol", "Splash soda water", "Orange slice"],
    steps: "Fill wine glass with ice. Add prosecco, Aperol, soda. Stir gently. Orange slice.",
    notes: "The order matters for the layered look.",
  },
  {
    name: "French 75",
    category: "Light",
    base: "Gin",
    method: "Shaken",
    source: "Highball",
    vibe: "Gin sour topped with champagne — celebratory and sharp",
    ingredients: ["1 oz gin", "½ oz lemon juice", "½ oz simple syrup", "Champagne or sparkling wine"],
    steps: "Shake gin, lemon, simple with ice. Strain into flute. Top with champagne. Lemon twist.",
    notes: "Named after a French 75mm field gun. Hits like one too.",
  },
];

const WHISKEY_ALIASES = ["whiskey", "whisky", "bourbon", "rye", "scotch"];

const categories = ["All", ...Array.from(new Set(cocktails.map(c => c.category)))];
const sources = ["All", "Claude", "Highball"];
const methods = ["All", "Stirred", "Shaken", "Built"];

const catColors = {
  Herbal: { bg: "#2d4a22", text: "#b8d4a8", pill: "#3d6a2e" },
  Smoky: { bg: "#3a2a1a", text: "#d4a867", pill: "#5a4020" },
  Floral: { bg: "#3a2248", text: "#d4a8e0", pill: "#5a3468" },
  Classic: { bg: "#1a2a3a", text: "#a8c4d4", pill: "#2a4a5a" },
  Bitter: { bg: "#4a2222", text: "#d4a8a8", pill: "#6a3030" },
  Light: { bg: "#2a3a2a", text: "#c4d4a8", pill: "#3a5a3a" },
  Warm: { bg: "#3a2a1a", text: "#d4b888", pill: "#5a4028" },
};

export default function CocktailMenu() {
  const [selected, setSelected] = useState(null);
  const [renderedIndex, setRenderedIndex] = useState(null);
  const [filterCat, setFilterCat] = useState("All");
  const [filterSource, setFilterSource] = useState("All");
  const [filterMethod, setFilterMethod] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = cocktails.filter(c => {
    if (filterCat !== "All" && c.category !== filterCat) return false;
    if (filterSource !== "All" && c.source !== filterSource) return false;
    if (filterMethod !== "All" && c.method !== filterMethod) return false;
    if (search) {
      const q = search.toLowerCase().trim();
      const isWhiskeyQuery = q.length >= 3 && ("whiskey".startsWith(q) || "whisky".startsWith(q));
      const terms = isWhiskeyQuery ? WHISKEY_ALIASES : [q];
      const matches = text => terms.some(t => text.toLowerCase().includes(t));
      const inName = matches(c.name);
      const inBase = matches(c.base);
      const inIngredients = c.ingredients.some(ing => matches(ing));
      const inCategory = matches(c.category);
      const inVibe = matches(c.vibe);
      if (!inName && !inBase && !inIngredients && !inCategory && !inVibe) return false;
    }
    return true;
  });

  const drink = renderedIndex !== null ? cocktails[renderedIndex] : null;

  const openDrink = (i) => {
    setRenderedIndex(i);
    setSelected(i);
  };
  const closeDrink = () => setSelected(null);

  const Pill = ({ children, active, onClick }) => (
    <button onClick={onClick} style={{
      padding: "5px 13px",
      fontSize: 12,
      border: active ? "1px solid #d4a867" : "1px solid #2a2520",
      borderRadius: 20,
      background: active ? "#d4a86722" : "transparent",
      color: active ? "#d4a867" : "#6a6054",
      cursor: "pointer",
      letterSpacing: "0.04em",
      fontFamily: "inherit",
      transition: "all 0.15s ease",
      flexShrink: 0,
      whiteSpace: "nowrap",
    }}>
      {children}
    </button>
  );

  return (
    <div style={{
      minHeight: "100vh",
      background: "#0f0f0f",
      color: "#e8e0d4",
      fontFamily: "'Georgia', 'Times New Roman', serif",
    }}>
      {/* Header */}
      <div style={{
        paddingTop: "calc(32px + env(safe-area-inset-top))",
        paddingRight: "20px",
        paddingBottom: "16px",
        paddingLeft: "20px",
        borderBottom: "1px solid #2a2520",
        background: "linear-gradient(180deg, #1a1612 0%, #0f0f0f 100%)",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}>
        <h1 style={{
          fontSize: 26,
          fontWeight: 400,
          margin: 0,
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          color: "#d4a867",
          textAlign: "center",
        }}>
          The Spec
        </h1>
        <p style={{
          textAlign: "center",
          fontSize: 12,
          color: "#6a6054",
          margin: "4px 0 14px",
          fontStyle: "italic",
        }}>
          {cocktails.length} cocktails · {filtered.length} showing
        </p>

        {/* Search */}
        <input
          type="text"
          placeholder="Search name, spirit, ingredient..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "10px 14px",
            fontSize: 14,
            border: "1px solid #2a2520",
            borderRadius: 8,
            background: "#1a1612",
            color: "#e8e0d4",
            fontFamily: "inherit",
            marginBottom: 12,
            boxSizing: "border-box",
            outline: "none",
          }}
        />

        {/* Filter rows */}
        <div className="filter-scroll" style={{ display: "flex", gap: 5, marginBottom: 6 }}>
          {categories.map(cat => (
            <Pill key={cat} active={filterCat === cat} onClick={() => setFilterCat(cat)}>{cat}</Pill>
          ))}
        </div>
        <div className="filter-scroll" style={{ display: "flex", gap: 5 }}>
          {methods.map(m => (
            <Pill key={m} active={filterMethod === m} onClick={() => setFilterMethod(m)}>{m}</Pill>
          ))}
          <span style={{ width: 1, background: "#2a2520", margin: "0 4px", flexShrink: 0 }} />
          {sources.map(s => (
            <Pill key={s} active={filterSource === s} onClick={() => setFilterSource(s)}>{s}</Pill>
          ))}
        </div>
      </div>

      {/* Detail view — full-screen panel that pushes in from the right */}
      <div
        onTransitionEnd={() => {
          if (selected === null) setRenderedIndex(null);
        }}
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 50,
          background: "#0f0f0f",
          transform: selected !== null ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.32s cubic-bezier(0.32, 0.72, 0, 1)",
          overflowY: "auto",
          WebkitOverflowScrolling: "touch",
          visibility: drink ? "visible" : "hidden",
        }}
      >
        {drink && (
        <div style={{ padding: "0 20px 40px", maxWidth: 500, margin: "0 auto" }}>
          <div style={{
            position: "sticky",
            top: 0,
            zIndex: 1,
            paddingTop: "calc(12px + env(safe-area-inset-top))",
            paddingBottom: 12,
            marginBottom: 8,
            background: "#0f0f0fee",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
          }}>
            <button
              onClick={closeDrink}
              style={{
                background: "none",
                border: "none",
                color: "#d4a867",
                fontSize: 15,
                cursor: "pointer",
                padding: "8px 0",
                fontFamily: "inherit",
                letterSpacing: "0.05em",
              }}
            >
              ‹ Back
            </button>
          </div>

          <div style={{
            background: catColors[drink.category]?.bg || "#1a1a1a",
            borderRadius: 12,
            padding: "24px 20px",
            marginTop: 8,
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
              <h2 style={{ fontSize: 22, fontWeight: 400, margin: 0, color: "#e8e0d4", lineHeight: 1.2, flex: 1 }}>
                {drink.name}
              </h2>
              <span style={{
                fontSize: 10,
                padding: "3px 10px",
                borderRadius: 12,
                background: drink.source === "Claude" ? "#d4a86733" : "#a8c4d433",
                color: drink.source === "Claude" ? "#d4a867" : "#a8c4d4",
                whiteSpace: "nowrap",
                marginLeft: 12,
                flexShrink: 0,
              }}>
                {drink.source}
              </span>
            </div>
            <p style={{
              fontSize: 14,
              color: catColors[drink.category]?.text || "#aaa",
              fontStyle: "italic",
              margin: "8px 0 0",
              lineHeight: 1.4,
            }}>
              {drink.vibe}
            </p>

            <div style={{ display: "flex", gap: 8, marginTop: 14, flexWrap: "wrap" }}>
              {[drink.method, drink.base, drink.category].map((tag, i) => (
                <span key={i} style={{
                  fontSize: 11,
                  padding: "3px 10px",
                  borderRadius: 12,
                  border: "1px solid #ffffff15",
                  color: "#8a7e6e",
                }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Ingredients */}
          <div style={{ marginTop: 24 }}>
            <h3 style={{
              fontSize: 11,
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#d4a867",
              margin: "0 0 12px",
            }}>
              Ingredients
            </h3>
            {drink.ingredients.map((ing, i) => (
              <div key={i} style={{
                padding: "10px 0",
                borderBottom: i < drink.ingredients.length - 1 ? "1px solid #1a1612" : "none",
                fontSize: 15,
                color: "#ccc4b8",
              }}>
                {ing}
              </div>
            ))}
          </div>

          {/* Method */}
          <div style={{ marginTop: 24 }}>
            <h3 style={{
              fontSize: 11,
              fontWeight: 400,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              color: "#d4a867",
              margin: "0 0 12px",
            }}>
              Method
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.6, color: "#ccc4b8", margin: 0 }}>
              {drink.steps}
            </p>
          </div>

          {/* Notes */}
          {drink.notes && (
            <div style={{
              marginTop: 24,
              padding: "16px",
              background: "#1a1612",
              borderRadius: 8,
              borderLeft: "3px solid #d4a867",
            }}>
              <h3 style={{
                fontSize: 11,
                fontWeight: 400,
                textTransform: "uppercase",
                letterSpacing: "0.15em",
                color: "#d4a867",
                margin: "0 0 8px",
              }}>
                Notes
              </h3>
              <p style={{ fontSize: 14, lineHeight: 1.5, color: "#8a7e6e", margin: 0, fontStyle: "italic" }}>
                {drink.notes}
              </p>
            </div>
          )}
        </div>
        )}
      </div>

      {/* List view */}
      <div style={{ padding: "4px 20px 40px", maxWidth: 500, margin: "0 auto" }}>
        {filtered.length === 0 && (
          <p style={{ textAlign: "center", color: "#6a6054", fontStyle: "italic", marginTop: 32 }}>
            No cocktails match these filters.
          </p>
        )}
        {filtered.map((c) => {
          const globalIndex = cocktails.indexOf(c);
          return (
            <button
              key={c.name}
              onClick={() => openDrink(globalIndex)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                background: "none",
                border: "none",
                borderBottom: "1px solid #1a1612",
                padding: "14px 0",
                cursor: "pointer",
                fontFamily: "inherit",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 16, color: "#e8e0d4", marginBottom: 3 }}>
                    {c.name}
                    {c.source === "Claude" && (
                      <span style={{
                        fontSize: 9,
                        marginLeft: 8,
                        padding: "2px 7px",
                        borderRadius: 10,
                        background: "#d4a86722",
                        color: "#d4a867",
                        verticalAlign: "middle",
                      }}>
                        Claude
                      </span>
                    )}
                  </div>
                  <div style={{ fontSize: 12, color: "#6a6054" }}>
                    {c.base} · {c.method}
                  </div>
                </div>
                <span style={{
                  fontSize: 10,
                  padding: "3px 10px",
                  borderRadius: 12,
                  background: (catColors[c.category]?.pill || "#1a1a1a") + "66",
                  color: catColors[c.category]?.text || "#aaa",
                  flexShrink: 0,
                  marginLeft: 8,
                }}>
                  {c.category}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
