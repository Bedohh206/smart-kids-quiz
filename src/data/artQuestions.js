// Art Questions - Two Modes: Kids & Advanced
// Kids Mode: Elementary (ages 6-8) - Basic art concepts, colors, shapes
// Advanced Mode: Middle/High School (ages 13-14) - Art history, famous artists, movements

const artQuestions = {
  // =========================================
  // KIDS MODE - Elementary Art
  // =========================================
  
  // ------------------------------
  // KIDS LEVEL 1 — EASY (50 QUESTIONS)
  // ------------------------------
  kids_level1: [
    { q: "What are the three primary colors?", a: "Red, blue, yellow", options: ["Red, green, blue", "Red, blue, yellow", "Orange, green, purple", "Black, white, gray"] },
    { q: "What color do you get when you mix red and blue?", a: "Purple", options: ["Orange", "Green", "Purple", "Brown"] },
    { q: "What do you use to paint with water colors?", a: "Brush", options: ["Pencil", "Brush", "Crayon", "Marker"] },
    { q: "What shape has four equal sides?", a: "Square", options: ["Rectangle", "Triangle", "Square", "Circle"] },
    { q: "What color do you get when you mix yellow and blue?", a: "Green", options: ["Orange", "Green", "Purple", "Brown"] },
    { q: "What is a picture of a person called?", a: "Portrait", options: ["Landscape", "Portrait", "Still life", "Abstract"] },
    { q: "What tool do you use to draw a straight line?", a: "Ruler", options: ["Compass", "Ruler", "Eraser", "Scissors"] },
    { q: "What color do you get when you mix red and yellow?", a: "Orange", options: ["Orange", "Green", "Purple", "Pink"] },
    { q: "What is a picture of nature called?", a: "Landscape", options: ["Landscape", "Portrait", "Still life", "Abstract"] },
    { q: "What shape has three sides?", a: "Triangle", options: ["Square", "Circle", "Triangle", "Pentagon"] },
    
    { q: "What do sculptors work with?", a: "Clay", options: ["Paint", "Clay", "Crayons", "Paper"] },
    { q: "What is the outline of a drawing called?", a: "Contour", options: ["Shade", "Contour", "Color", "Texture"] },
    { q: "What are the colors between primary colors called?", a: "Secondary colors", options: ["Tertiary colors", "Secondary colors", "Neutral colors", "Cool colors"] },
    { q: "What is a painting on a wall called?", a: "Mural", options: ["Canvas", "Mural", "Poster", "Sketch"] },
    { q: "What tool removes pencil marks?", a: "Eraser", options: ["Ruler", "Eraser", "Sharpener", "Scissors"] },
    { q: "What shape has no corners?", a: "Circle", options: ["Square", "Triangle", "Circle", "Rectangle"] },
    { q: "What do you call light and dark in art?", a: "Value", options: ["Hue", "Value", "Texture", "Form"] },
    { q: "What is art made from paper called?", a: "Collage", options: ["Sculpture", "Collage", "Painting", "Drawing"] },
    { q: "What are warm colors?", a: "Red, orange, yellow", options: ["Blue, green, purple", "Red, orange, yellow", "Black, white, gray", "Pink, brown, tan"] },
    { q: "What is the surface you paint on called?", a: "Canvas", options: ["Easel", "Canvas", "Palette", "Frame"] },
    
    { q: "What are cool colors?", a: "Blue, green, purple", options: ["Red, orange, yellow", "Blue, green, purple", "Black, white, gray", "Pink, brown, tan"] },
    { q: "What holds paint while you're painting?", a: "Palette", options: ["Easel", "Canvas", "Palette", "Brush"] },
    { q: "What shape has five sides?", a: "Pentagon", options: ["Square", "Triangle", "Pentagon", "Hexagon"] },
    { q: "What is 3D art called?", a: "Sculpture", options: ["Painting", "Drawing", "Sculpture", "Collage"] },
    { q: "What color is opposite red on the color wheel?", a: "Green", options: ["Blue", "Green", "Orange", "Purple"] },
    { q: "What is the lightness or darkness of a color?", a: "Value", options: ["Hue", "Tint", "Value", "Shade"] },
    { q: "What stands and holds your canvas?", a: "Easel", options: ["Easel", "Palette", "Frame", "Table"] },
    { q: "What shape has six sides?", a: "Hexagon", options: ["Pentagon", "Hexagon", "Octagon", "Square"] },
    { q: "What is black and white art called?", a: "Monochrome", options: ["Colorful", "Monochrome", "Rainbow", "Primary"] },
    { q: "What do you call the way something feels?", a: "Texture", options: ["Color", "Shape", "Texture", "Line"] },
    
    { q: "What are the neutral colors?", a: "Black, white, gray", options: ["Red, blue, yellow", "Orange, green, purple", "Black, white, gray", "Pink, brown, tan"] },
    { q: "What shape has eight sides?", a: "Octagon", options: ["Pentagon", "Hexagon", "Octagon", "Decagon"] },
    { q: "What is art made by printing called?", a: "Printmaking", options: ["Painting", "Drawing", "Printmaking", "Sculpture"] },
    { q: "What color is opposite blue on the color wheel?", a: "Orange", options: ["Red", "Green", "Orange", "Purple"] },
    { q: "What is a quick drawing called?", a: "Sketch", options: ["Painting", "Sketch", "Sculpture", "Photo"] },
    { q: "What does a painter mix colors on?", a: "Palette", options: ["Canvas", "Easel", "Palette", "Paper"] },
    { q: "What is art with no recognizable objects called?", a: "Abstract", options: ["Realistic", "Portrait", "Landscape", "Abstract"] },
    { q: "What color is opposite yellow on the color wheel?", a: "Purple", options: ["Red", "Blue", "Orange", "Purple"] },
    { q: "What is a picture of objects called?", a: "Still life", options: ["Portrait", "Landscape", "Still life", "Abstract"] },
    { q: "What makes a color lighter?", a: "Adding white", options: ["Adding black", "Adding white", "Adding gray", "Adding brown"] },
    
    { q: "What makes a color darker?", a: "Adding black", options: ["Adding white", "Adding black", "Adding gray", "Adding yellow"] },
    { q: "What is the path of a moving point called?", a: "Line", options: ["Shape", "Form", "Line", "Space"] },
    { q: "What is repeating a design called?", a: "Pattern", options: ["Texture", "Pattern", "Balance", "Unity"] },
    { q: "What are earth tone colors?", a: "Brown, tan, beige", options: ["Red, blue, yellow", "Black, white, gray", "Brown, tan, beige", "Pink, purple, orange"] },
    { q: "What is the area around objects called?", a: "Space", options: ["Line", "Shape", "Space", "Form"] },
    { q: "What is visual equality in art called?", a: "Balance", options: ["Rhythm", "Balance", "Unity", "Contrast"] },
    { q: "What is the name of the color?", a: "Hue", options: ["Value", "Hue", "Tint", "Shade"] },
    { q: "What is art on paper with pencil called?", a: "Drawing", options: ["Painting", "Drawing", "Sculpture", "Print"] },
    { q: "What is opposite colors on color wheel called?", a: "Complementary", options: ["Primary", "Secondary", "Complementary", "Tertiary"] },
    { q: "What is the difference between light and dark?", a: "Contrast", options: ["Balance", "Unity", "Contrast", "Pattern"] },
  ],

  // ------------------------------
  // KIDS LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ------------------------------
  kids_level2: [
    { q: "Who painted the Mona Lisa?", a: "Leonardo da Vinci", options: ["Michelangelo", "Leonardo da Vinci", "Raphael", "Donatello"] },
    { q: "What art period came after the Renaissance?", a: "Baroque", options: ["Medieval", "Baroque", "Romantic", "Modern"] },
    { q: "Who painted the Sistine Chapel ceiling?", a: "Michelangelo", options: ["Leonardo", "Michelangelo", "Raphael", "Botticelli"] },
    { q: "What is art from the 1400s-1600s called?", a: "Renaissance", options: ["Medieval", "Renaissance", "Baroque", "Romantic"] },
    { q: "Who cut off his ear?", a: "Van Gogh", options: ["Monet", "Van Gogh", "Picasso", "Dali"] },
    { q: "What is painting with tiny dots called?", a: "Pointillism", options: ["Cubism", "Impressionism", "Pointillism", "Surrealism"] },
    { q: "Who painted 'Starry Night'?", a: "Van Gogh", options: ["Monet", "Van Gogh", "Renoir", "Degas"] },
    { q: "What art uses geometric shapes?", a: "Cubism", options: ["Realism", "Impressionism", "Cubism", "Romanticism"] },
    { q: "Who painted 'The Scream'?", a: "Edvard Munch", options: ["Van Gogh", "Picasso", "Edvard Munch", "Kandinsky"] },
    { q: "What is dream-like art called?", a: "Surrealism", options: ["Realism", "Impressionism", "Cubism", "Surrealism"] },
    
    { q: "Who painted water lilies?", a: "Monet", options: ["Monet", "Renoir", "Degas", "Manet"] },
    { q: "What movement focused on light and color?", a: "Impressionism", options: ["Cubism", "Impressionism", "Surrealism", "Realism"] },
    { q: "Who painted 'The Persistence of Memory'?", a: "Salvador Dali", options: ["Picasso", "Salvador Dali", "Miro", "Magritte"] },
    { q: "What is ancient Greek art style called?", a: "Classical", options: ["Medieval", "Classical", "Renaissance", "Baroque"] },
    { q: "Who painted 'Guernica'?", a: "Picasso", options: ["Matisse", "Picasso", "Braque", "Kandinsky"] },
    { q: "What is art that shows things as they are?", a: "Realism", options: ["Abstract", "Realism", "Impressionism", "Surrealism"] },
    { q: "Who sculpted 'David'?", a: "Michelangelo", options: ["Donatello", "Michelangelo", "Bernini", "Rodin"] },
    { q: "What is Japanese woodblock prints called?", a: "Ukiyo-e", options: ["Manga", "Anime", "Ukiyo-e", "Origami"] },
    { q: "Who painted 'Girl with a Pearl Earring'?", a: "Vermeer", options: ["Rembrandt", "Vermeer", "Rubens", "Van Dyck"] },
    { q: "What is art with intense emotion called?", a: "Expressionism", options: ["Impressionism", "Realism", "Expressionism", "Classicism"] },
    
    { q: "Who painted 'The Birth of Venus'?", a: "Botticelli", options: ["Leonardo", "Michelangelo", "Raphael", "Botticelli"] },
    { q: "What is medieval church art called?", a: "Gothic", options: ["Romanesque", "Gothic", "Byzantine", "Renaissance"] },
    { q: "Who painted 'American Gothic'?", a: "Grant Wood", options: ["Hopper", "Grant Wood", "Wyeth", "Rockwell"] },
    { q: "What is art with bold, flat colors called?", a: "Fauvism", options: ["Cubism", "Fauvism", "Expressionism", "Impressionism"] },
    { q: "Who painted 'The Night Watch'?", a: "Rembrandt", options: ["Vermeer", "Rembrandt", "Rubens", "Hals"] },
    { q: "What is decorative Islamic art called?", a: "Arabesque", options: ["Calligraphy", "Arabesque", "Mosaic", "Fresco"] },
    { q: "Who painted 'Las Meninas'?", a: "Velázquez", options: ["Goya", "El Greco", "Velázquez", "Murillo"] },
    { q: "What is art on wet plaster called?", a: "Fresco", options: ["Tempera", "Fresco", "Encaustic", "Gouache"] },
    { q: "Who painted 'The Kiss'?", a: "Klimt", options: ["Schiele", "Klimt", "Kokoschka", "Kandinsky"] },
    { q: "What is abstract art with drips called?", a: "Action painting", options: ["Op art", "Pop art", "Action painting", "Minimalism"] },
    
    { q: "Who painted 'Nighthawks'?", a: "Edward Hopper", options: ["Hopper", "Edward Hopper", "Wyeth", "Rockwell"] },
    { q: "What is repeated commercial images called?", a: "Pop Art", options: ["Op Art", "Pop Art", "Minimal Art", "Conceptual Art"] },
    { q: "Who painted 'The Garden of Earthly Delights'?", a: "Bosch", options: ["Bruegel", "Bosch", "Van Eyck", "Memling"] },
    { q: "What is optical illusion art called?", a: "Op Art", options: ["Pop Art", "Op Art", "Kinetic Art", "Minimal Art"] },
    { q: "Who painted 'The Great Wave'?", a: "Hokusai", options: ["Hiroshige", "Hokusai", "Utamaro", "Sharaku"] },
    { q: "What is art with geometric patterns called?", a: "Abstract", options: ["Realistic", "Abstract", "Figurative", "Narrative"] },
    { q: "Who painted 'Bal du Moulin de la Galette'?", a: "Renoir", options: ["Monet", "Renoir", "Degas", "Pissarro"] },
    { q: "What is Chinese brush painting called?", a: "Ink wash painting", options: ["Calligraphy", "Ink wash painting", "Woodblock", "Silk painting"] },
    { q: "Who painted 'The Son of Man'?", a: "Magritte", options: ["Dali", "Magritte", "Ernst", "Miro"] },
    { q: "What is art movement in the 1920s called?", a: "Art Deco", options: ["Art Nouveau", "Art Deco", "Bauhaus", "Constructivism"] },
    
    { q: "Who painted 'The Arnolfini Portrait'?", a: "Jan van Eyck", options: ["Rogier van der Weyden", "Jan van Eyck", "Hans Memling", "Petrus Christus"] },
    { q: "What is early 1900s colorful art called?", a: "Fauvism", options: ["Cubism", "Fauvism", "Futurism", "Expressionism"] },
    { q: "Who painted 'Campbell's Soup Cans'?", a: "Andy Warhol", options: ["Lichtenstein", "Andy Warhol", "Rauschenberg", "Johns"] },
    { q: "What is art about nature called?", a: "Landscape", options: ["Still life", "Portrait", "Landscape", "Abstract"] },
    { q: "Who painted 'The School of Athens'?", a: "Raphael", options: ["Leonardo", "Michelangelo", "Raphael", "Titian"] },
    { q: "What is painting with egg yolk called?", a: "Tempera", options: ["Fresco", "Tempera", "Encaustic", "Gouache"] },
    { q: "Who painted 'Impression, Sunrise'?", a: "Monet", options: ["Monet", "Renoir", "Pissarro", "Sisley"] },
    { q: "What is art from 1800s emotion called?", a: "Romanticism", options: ["Realism", "Romanticism", "Neoclassicism", "Baroque"] },
    { q: "Who sculpted 'The Thinker'?", a: "Rodin", options: ["Rodin", "Brancusi", "Moore", "Giacometti"] },
    { q: "What is simplified essential art called?", a: "Minimalism", options: ["Maximalism", "Minimalism", "Realism", "Surrealism"] },
  ],

  // ------------------------------
  // KIDS LEVEL 3 — HARD (50 QUESTIONS)
  // ------------------------------
  kids_level3: [
    { q: "Who painted 'Las Meninas'?", a: "Diego Velázquez", options: ["El Greco", "Goya", "Diego Velázquez", "Zurbarán"] },
    { q: "What is the golden ratio also known as?", a: "Phi", options: ["Pi", "Phi", "Psi", "Theta"] },
    { q: "Who founded the Bauhaus school?", a: "Walter Gropius", options: ["Mies van der Rohe", "Walter Gropius", "Le Corbusier", "Frank Lloyd Wright"] },
    { q: "What is chiaroscuro?", a: "Light and shadow contrast", options: ["Color blending", "Light and shadow contrast", "Perspective technique", "Texture method"] },
    { q: "Who painted 'The Raft of the Medusa'?", a: "Géricault", options: ["Delacroix", "Géricault", "David", "Ingres"] },
    { q: "What is trompe-l'oeil?", a: "Optical illusion art", options: ["Abstract art", "Cubist art", "Optical illusion art", "Impressionist art"] },
    { q: "Who painted 'The Third of May 1808'?", a: "Goya", options: ["Velázquez", "Goya", "El Greco", "Murillo"] },
    { q: "What is sfumato technique?", a: "Soft blurred outlines", options: ["Sharp edges", "Soft blurred outlines", "Thick paint", "Visible brushstrokes"] },
    { q: "Who created 'Fountain' (urinal)?", a: "Marcel Duchamp", options: ["Picasso", "Marcel Duchamp", "Dali", "Warhol"] },
    { q: "What is pentimento?", a: "Visible underlying painting", options: ["Color theory", "Visible underlying painting", "Sculpture technique", "Print method"] },
    
    { q: "Who painted 'The Hay Wain'?", a: "John Constable", options: ["Turner", "John Constable", "Gainsborough", "Reynolds"] },
    { q: "What is encaustic painting?", a: "Hot wax painting", options: ["Oil painting", "Hot wax painting", "Water painting", "Egg painting"] },
    { q: "Who painted 'The Ambassadors'?", a: "Hans Holbein", options: ["Dürer", "Hans Holbein", "Cranach", "Altdorfer"] },
    { q: "What is impasto technique?", a: "Thick textured paint", options: ["Thin glazing", "Thick textured paint", "Watercolor wash", "Smooth blending"] },
    { q: "Who painted 'Liberty Leading the People'?", a: "Delacroix", options: ["Géricault", "Delacroix", "David", "Courbet"] },
    { q: "What is contrapposto?", a: "Weight-shifted pose", options: ["Frontal pose", "Weight-shifted pose", "Seated pose", "Reclining pose"] },
    { q: "Who painted 'The Death of Marat'?", a: "Jacques-Louis David", options: ["Géricault", "Delacroix", "Jacques-Louis David", "Ingres"] },
    { q: "What is grisaille?", a: "Gray monochrome painting", options: ["Red painting", "Gray monochrome painting", "Blue painting", "Multicolor painting"] },
    { q: "Who created 'The Gates' in Central Park?", a: "Christo and Jeanne-Claude", options: ["Smithson", "Christo and Jeanne-Claude", "Turrell", "Goldsworthy"] },
    { q: "What is alla prima technique?", a: "Wet-on-wet painting", options: ["Layer by layer", "Wet-on-wet painting", "Dry brush", "Glazing"] },
    
    { q: "Who painted 'The Angelus'?", a: "Jean-François Millet", options: ["Courbet", "Jean-François Millet", "Corot", "Daumier"] },
    { q: "What is terribilità?", a: "Powerful intensity", options: ["Soft beauty", "Powerful intensity", "Gentle grace", "Calm serenity"] },
    { q: "Who painted 'The Apotheosis of Homer'?", a: "Ingres", options: ["David", "Ingres", "Delacroix", "Géricault"] },
    { q: "What is quadratura?", a: "Illusionistic ceiling painting", options: ["Portrait technique", "Illusionistic ceiling painting", "Still life method", "Landscape style"] },
    { q: "Who painted 'The Swing'?", a: "Fragonard", options: ["Watteau", "Boucher", "Fragonard", "Lancret"] },
    { q: "What is sprezzatura?", a: "Effortless grace", options: ["Rigid formality", "Effortless grace", "Bold aggression", "Timid hesitation"] },
    { q: "Who painted 'Whistler's Mother'?", a: "James Whistler", options: ["Sargent", "James Whistler", "Cassatt", "Homer"] },
    { q: "What is veduta?", a: "Detailed city view", options: ["Portrait style", "Detailed city view", "Abstract form", "Still life"] },
    { q: "Who painted 'The Gross Clinic'?", a: "Thomas Eakins", options: ["Sargent", "Homer", "Thomas Eakins", "Whistler"] },
    { q: "What is plein air painting?", a: "Outdoor painting", options: ["Studio painting", "Outdoor painting", "Indoor painting", "Night painting"] },
    
    { q: "Who painted 'The Turkish Bath'?", a: "Ingres", options: ["David", "Ingres", "Delacroix", "Géricault"] },
    { q: "What is pastiglia?", a: "Raised gesso decoration", options: ["Flat decoration", "Raised gesso decoration", "Carved wood", "Metal inlay"] },
    { q: "Who painted 'The Gleaners'?", a: "Jean-François Millet", options: ["Courbet", "Jean-François Millet", "Corot", "Daubigny"] },
    { q: "What is putto (plural putti)?", a: "Cherubic child figure", options: ["Adult figure", "Cherubic child figure", "Animal figure", "Abstract shape"] },
    { q: "Who painted 'The Swing' (Rococo)?", a: "Fragonard", options: ["Watteau", "Boucher", "Fragonard", "Lancret"] },
    { q: "What is cangiante?", a: "Color shift technique", options: ["Single color", "Color shift technique", "Black and white", "Monochrome"] },
    { q: "Who painted 'The Fighting Temeraire'?", a: "J.M.W. Turner", options: ["Constable", "J.M.W. Turner", "Gainsborough", "Lawrence"] },
    { q: "What is pentimento in painting?", a: "Visible underlying changes", options: ["Top layer", "Visible underlying changes", "Final varnish", "Background"] },
    { q: "Who painted 'The Hay Wain'?", a: "John Constable", options: ["Turner", "John Constable", "Lawrence", "Reynolds"] },
    { q: "What is divisionism?", a: "Separated color dots", options: ["Blended colors", "Separated color dots", "Single hue", "Black lines"] },
    
    { q: "Who painted 'The Stone Breakers'?", a: "Gustave Courbet", options: ["Millet", "Gustave Courbet", "Daumier", "Corot"] },
    { q: "What is sgraffito?", a: "Scratching through layers", options: ["Building up layers", "Scratching through layers", "Blending colors", "Smooth glazing"] },
    { q: "Who painted 'The Horse Fair'?", a: "Rosa Bonheur", options: ["Cassatt", "Rosa Bonheur", "Morisot", "Kollwitz"] },
    { q: "What is pochade?", a: "Small quick sketch", options: ["Large mural", "Small quick sketch", "Detailed study", "Abstract work"] },
    { q: "Who painted 'The Boulevard Montmartre at Night'?", a: "Pissarro", options: ["Monet", "Renoir", "Pissarro", "Sisley"] },
    { q: "What is sotto in su?", a: "Upward perspective view", options: ["Side view", "Upward perspective view", "Frontal view", "Downward view"] },
    { q: "Who painted 'The Luncheon on the Grass'?", a: "Édouard Manet", options: ["Monet", "Édouard Manet", "Renoir", "Degas"] },
    { q: "What is verdaccio?", a: "Green underpainting", options: ["Red underpainting", "Green underpainting", "Blue underpainting", "Yellow underpainting"] },
    { q: "Who painted 'The Floor Scrapers'?", a: "Gustave Caillebotte", options: ["Degas", "Renoir", "Gustave Caillebotte", "Pissarro"] },
    { q: "What is macchia?", a: "Sketch with color patches", options: ["Detailed drawing", "Sketch with color patches", "Line work only", "Monochrome study"] },
  ],

  // =========================================
  // ADVANCED MODE - Middle/High School
  // =========================================
  
  advanced_level1: [],
  advanced_level2: [],
  advanced_level3: [],
};

// For advanced mode, reuse the same questions for now
artQuestions.advanced_level1 = artQuestions.kids_level1;
artQuestions.advanced_level2 = artQuestions.kids_level2;
artQuestions.advanced_level3 = artQuestions.kids_level3;

export default artQuestions;
