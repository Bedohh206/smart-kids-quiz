// Music Questions - Two Modes: Kids & Advanced
// Kids Mode: Elementary (ages 6-8) - Basic instruments, notes, rhythm
// Advanced Mode: Middle/High School (ages 13-14) - Theory, composers, music history

const musicQuestions = {
  // =========================================
  // KIDS MODE - Elementary Music
  // =========================================
  
  // ------------------------------
  // KIDS LEVEL 1 — EASY (50 QUESTIONS)
  // ------------------------------
  kids_level1: [
    { q: "What has 88 keys and makes music?", a: "Piano", options: ["Guitar", "Piano", "Drum", "Flute"] },
    { q: "Which instrument do you blow into?", a: "Flute", options: ["Drum", "Piano", "Flute", "Guitar"] },
    { q: "How many strings does a guitar usually have?", a: "6", options: ["4", "5", "6", "8"] },
    { q: "What do you hit with drumsticks?", a: "Drums", options: ["Piano", "Violin", "Drums", "Flute"] },
    { q: "Which instrument has black and white keys?", a: "Piano", options: ["Violin", "Piano", "Trumpet", "Drum"] },
    { q: "What instrument does a violinist play?", a: "Violin", options: ["Violin", "Guitar", "Piano", "Flute"] },
    { q: "How many beats does a whole note get?", a: "4", options: ["1", "2", "3", "4"] },
    { q: "What is the first note in the musical scale?", a: "Do", options: ["Do", "Re", "Mi", "Fa"] },
    { q: "What do we call the speed of music?", a: "Tempo", options: ["Volume", "Tempo", "Pitch", "Rhythm"] },
    { q: "Which is a brass instrument?", a: "Trumpet", options: ["Flute", "Violin", "Trumpet", "Piano"] },
    
    { q: "What is the symbol that tells you to be quiet in music?", a: "Rest", options: ["Note", "Rest", "Clef", "Sharp"] },
    { q: "How many lines does a music staff have?", a: "5", options: ["3", "4", "5", "6"] },
    { q: "What do you use to play a violin?", a: "Bow", options: ["Stick", "Bow", "Hand", "Pick"] },
    { q: "Which instrument is the smallest in the string family?", a: "Violin", options: ["Cello", "Violin", "Bass", "Viola"] },
    { q: "What are the loud and soft in music called?", a: "Dynamics", options: ["Tempo", "Pitch", "Dynamics", "Rhythm"] },
    { q: "Which instrument uses pedals and pipes?", a: "Organ", options: ["Piano", "Organ", "Harp", "Guitar"] },
    { q: "What is a group of singers called?", a: "Choir", options: ["Band", "Choir", "Orchestra", "Ensemble"] },
    { q: "How many beats does a half note get?", a: "2", options: ["1", "2", "3", "4"] },
    { q: "What makes sound on a guitar?", a: "Strings", options: ["Keys", "Strings", "Buttons", "Pedals"] },
    { q: "Which note comes after 'Do' in the scale?", a: "Re", options: ["Re", "Mi", "Fa", "Sol"] },
    
    { q: "What is the largest instrument in the string family?", a: "Double Bass", options: ["Cello", "Violin", "Double Bass", "Viola"] },
    { q: "What do we call high and low sounds in music?", a: "Pitch", options: ["Volume", "Tempo", "Pitch", "Beat"] },
    { q: "Which instrument has a slide?", a: "Trombone", options: ["Trumpet", "Trombone", "Flute", "Clarinet"] },
    { q: "What are the dots and lines called that show music?", a: "Notes", options: ["Letters", "Notes", "Beats", "Clefs"] },
    { q: "How many quarter notes equal a whole note?", a: "4", options: ["2", "3", "4", "8"] },
    { q: "Which instrument has reeds?", a: "Clarinet", options: ["Flute", "Trumpet", "Clarinet", "Violin"] },
    { q: "What is a very small guitar called?", a: "Ukulele", options: ["Banjo", "Ukulele", "Mandolin", "Bass"] },
    { q: "What is the pattern of beats in music called?", a: "Rhythm", options: ["Melody", "Harmony", "Rhythm", "Tempo"] },
    { q: "Which instrument do you shake?", a: "Maracas", options: ["Triangle", "Maracas", "Piano", "Violin"] },
    { q: "What is the tune of a song called?", a: "Melody", options: ["Beat", "Melody", "Rhythm", "Tempo"] },
    
    { q: "How many beats does a quarter note get?", a: "1", options: ["1", "2", "3", "4"] },
    { q: "Which family does the flute belong to?", a: "Woodwind", options: ["String", "Brass", "Woodwind", "Percussion"] },
    { q: "What do singers use to make sound?", a: "Voice", options: ["Hands", "Voice", "Feet", "Instruments"] },
    { q: "Which instrument is also called a mouth organ?", a: "Harmonica", options: ["Accordion", "Harmonica", "Organ", "Piano"] },
    { q: "What is the symbol at the start of a staff called?", a: "Clef", options: ["Note", "Rest", "Clef", "Sharp"] },
    { q: "Which instrument family are drums in?", a: "Percussion", options: ["String", "Brass", "Woodwind", "Percussion"] },
    { q: "What does 'forte' mean in music?", a: "Loud", options: ["Soft", "Loud", "Fast", "Slow"] },
    { q: "How many notes are in an octave?", a: "8", options: ["5", "7", "8", "12"] },
    { q: "Which instrument has hammers that hit strings?", a: "Piano", options: ["Guitar", "Violin", "Piano", "Harp"] },
    { q: "What is the person who leads an orchestra called?", a: "Conductor", options: ["Director", "Conductor", "Composer", "Player"] },
    
    { q: "Which instrument is like a large violin?", a: "Cello", options: ["Viola", "Cello", "Bass", "Harp"] },
    { q: "What does 'piano' mean in music?", a: "Soft", options: ["Loud", "Soft", "Fast", "Slow"] },
    { q: "Which instrument has valves and is brass?", a: "Trumpet", options: ["Flute", "Trumpet", "Saxophone", "Clarinet"] },
    { q: "What is the wooden stick used to play percussion called?", a: "Drumstick", options: ["Baton", "Bow", "Drumstick", "Mallet"] },
    { q: "How many white keys are there in one octave on a piano?", a: "7", options: ["5", "7", "8", "12"] },
    { q: "What is a song for a solo singer called?", a: "Solo", options: ["Duet", "Solo", "Choir", "Ensemble"] },
    { q: "Which instrument do you pluck?", a: "Harp", options: ["Flute", "Drum", "Harp", "Trumpet"] },
    { q: "What is a group of musicians playing together called?", a: "Band", options: ["Choir", "Band", "Solo", "Singer"] },
    { q: "Which note is below the staff in treble clef?", a: "Middle C", options: ["High C", "Middle C", "Low C", "D"] },
    { q: "What makes the sound in a drum?", a: "Vibrating skin", options: ["Strings", "Keys", "Vibrating skin", "Air"] },
  ],

  // ------------------------------
  // KIDS LEVEL 2 — MEDIUM (50 QUESTIONS)
  // ------------------------------
  kids_level2: [
    { q: "Who composed 'The Four Seasons'?", a: "Vivaldi", options: ["Mozart", "Bach", "Vivaldi", "Beethoven"] },
    { q: "What is the Italian word for 'very loud'?", a: "Fortissimo", options: ["Piano", "Forte", "Fortissimo", "Mezzo"] },
    { q: "How many flats are in the key of F major?", a: "1", options: ["0", "1", "2", "3"] },
    { q: "What is a musical work with singers and orchestra called?", a: "Opera", options: ["Symphony", "Opera", "Concerto", "Sonata"] },
    { q: "Which composer wrote 'The Magic Flute'?", a: "Mozart", options: ["Bach", "Mozart", "Handel", "Haydn"] },
    { q: "What does 'allegro' mean?", a: "Fast", options: ["Slow", "Fast", "Loud", "Soft"] },
    { q: "How many sharps are in G major?", a: "1", options: ["0", "1", "2", "3"] },
    { q: "What is the distance between two notes called?", a: "Interval", options: ["Scale", "Chord", "Interval", "Octave"] },
    { q: "Who is known as the 'Father of the Symphony'?", a: "Haydn", options: ["Mozart", "Haydn", "Bach", "Beethoven"] },
    { q: "What is a piece for solo instrument and orchestra?", a: "Concerto", options: ["Symphony", "Sonata", "Concerto", "Opera"] },
    
    { q: "Which family does the oboe belong to?", a: "Woodwind", options: ["String", "Brass", "Woodwind", "Percussion"] },
    { q: "What is the lowest female singing voice?", a: "Alto", options: ["Soprano", "Alto", "Tenor", "Bass"] },
    { q: "Who composed 'Für Elise'?", a: "Beethoven", options: ["Mozart", "Bach", "Beethoven", "Chopin"] },
    { q: "What does 'adagio' mean?", a: "Slow", options: ["Fast", "Slow", "Loud", "Soft"] },
    { q: "How many movements does a typical symphony have?", a: "4", options: ["2", "3", "4", "5"] },
    { q: "What is three or more notes played together?", a: "Chord", options: ["Scale", "Chord", "Melody", "Harmony"] },
    { q: "Which composer was deaf?", a: "Beethoven", options: ["Mozart", "Bach", "Beethoven", "Vivaldi"] },
    { q: "What is the highest male singing voice?", a: "Tenor", options: ["Bass", "Baritone", "Tenor", "Alto"] },
    { q: "What does 'crescendo' mean?", a: "Getting louder", options: ["Getting softer", "Getting louder", "Getting faster", "Getting slower"] },
    { q: "How many strings does a violin have?", a: "4", options: ["3", "4", "5", "6"] },
    
    { q: "Who composed 'The Nutcracker'?", a: "Tchaikovsky", options: ["Bach", "Mozart", "Tchaikovsky", "Chopin"] },
    { q: "What is the Italian word for 'very soft'?", a: "Pianissimo", options: ["Piano", "Mezzo piano", "Pianissimo", "Forte"] },
    { q: "Which instrument has a double reed?", a: "Oboe", options: ["Flute", "Clarinet", "Oboe", "Saxophone"] },
    { q: "What are the five lines music is written on called?", a: "Staff", options: ["Bar", "Staff", "Measure", "Clef"] },
    { q: "Who composed 'The Messiah'?", a: "Handel", options: ["Bach", "Handel", "Mozart", "Haydn"] },
    { q: "What does 'diminuendo' mean?", a: "Getting softer", options: ["Getting louder", "Getting softer", "Getting faster", "Getting slower"] },
    { q: "How many keys does a standard piano have?", a: "88", options: ["76", "85", "88", "92"] },
    { q: "What is the smallest interval?", a: "Half step", options: ["Quarter step", "Half step", "Whole step", "Octave"] },
    { q: "Which composer is known for waltzes?", a: "Strauss", options: ["Mozart", "Bach", "Strauss", "Brahms"] },
    { q: "What is the lowest male singing voice?", a: "Bass", options: ["Tenor", "Baritone", "Bass", "Alto"] },
    
    { q: "What does 'staccato' mean?", a: "Short and detached", options: ["Smooth", "Short and detached", "Loud", "Soft"] },
    { q: "Who wrote 'The Well-Tempered Clavier'?", a: "Bach", options: ["Bach", "Mozart", "Handel", "Vivaldi"] },
    { q: "What is a half step also called?", a: "Semitone", options: ["Tone", "Semitone", "Interval", "Octave"] },
    { q: "Which string instrument is held under the chin?", a: "Violin", options: ["Cello", "Violin", "Viola", "Bass"] },
    { q: "What does 'legato' mean?", a: "Smooth and connected", options: ["Short", "Smooth and connected", "Loud", "Fast"] },
    { q: "Who composed the 'Moonlight Sonata'?", a: "Beethoven", options: ["Mozart", "Beethoven", "Chopin", "Liszt"] },
    { q: "What is the highest woodwind instrument?", a: "Piccolo", options: ["Flute", "Piccolo", "Clarinet", "Oboe"] },
    { q: "How many black keys are in one octave?", a: "5", options: ["4", "5", "6", "7"] },
    { q: "What is a piece for solo piano called?", a: "Sonata", options: ["Symphony", "Concerto", "Sonata", "Opera"] },
    { q: "Who is known as the 'Waltz King'?", a: "Johann Strauss II", options: ["Mozart", "Johann Strauss II", "Brahms", "Schubert"] },
    
    { q: "What does 'andante' mean?", a: "Walking pace", options: ["Fast", "Slow", "Walking pace", "Very fast"] },
    { q: "Which composer wrote 'Carmen'?", a: "Bizet", options: ["Verdi", "Puccini", "Bizet", "Wagner"] },
    { q: "What is the symbol for sharp?", a: "#", options: ["♭", "#", "♮", "♯"] },
    { q: "How many strings does a cello have?", a: "4", options: ["3", "4", "5", "6"] },
    { q: "What does 'ritardando' mean?", a: "Slowing down", options: ["Speeding up", "Slowing down", "Getting louder", "Getting softer"] },
    { q: "Who composed 'Peter and the Wolf'?", a: "Prokofiev", options: ["Stravinsky", "Prokofiev", "Shostakovich", "Rachmaninoff"] },
    { q: "What is a musical scale with 5 notes called?", a: "Pentatonic", options: ["Major", "Minor", "Pentatonic", "Chromatic"] },
    { q: "Which instrument has a slide and is brass?", a: "Trombone", options: ["Trumpet", "Trombone", "French Horn", "Tuba"] },
    { q: "What does 'accelerando' mean?", a: "Speeding up", options: ["Speeding up", "Slowing down", "Getting louder", "Getting softer"] },
    { q: "Who wrote 'The Rite of Spring'?", a: "Stravinsky", options: ["Debussy", "Ravel", "Stravinsky", "Prokofiev"] },
  ],

  // ------------------------------
  // KIDS LEVEL 3 — HARD (50 QUESTIONS)
  // ------------------------------
  kids_level3: [
    { q: "What is a scale with all 12 chromatic notes called?", a: "Chromatic scale", options: ["Major scale", "Minor scale", "Pentatonic scale", "Chromatic scale"] },
    { q: "Who composed the '1812 Overture'?", a: "Tchaikovsky", options: ["Beethoven", "Tchaikovsky", "Wagner", "Brahms"] },
    { q: "What key has 4 sharps?", a: "E major", options: ["D major", "E major", "A major", "B major"] },
    { q: "What is the ornament that alternates between two notes?", a: "Trill", options: ["Trill", "Mordent", "Turn", "Appoggiatura"] },
    { q: "Who wrote 'The Planets' suite?", a: "Holst", options: ["Elgar", "Holst", "Vaughan Williams", "Britten"] },
    { q: "What does 'pizzicato' mean?", a: "Pluck the strings", options: ["Pluck the strings", "Bow the strings", "Mute the strings", "Hit the strings"] },
    { q: "How many symphonies did Beethoven write?", a: "9", options: ["8", "9", "10", "12"] },
    { q: "What is a chord with three notes called?", a: "Triad", options: ["Dyad", "Triad", "Tetrad", "Pentad"] },
    { q: "Who composed 'Rhapsody in Blue'?", a: "Gershwin", options: ["Copland", "Gershwin", "Bernstein", "Ellington"] },
    { q: "What key has 3 flats?", a: "E♭ major", options: ["B♭ major", "E♭ major", "A♭ major", "D♭ major"] },
    
    { q: "What is the lowest brass instrument?", a: "Tuba", options: ["Trombone", "French Horn", "Tuba", "Euphonium"] },
    { q: "Who wrote 'Bolero'?", a: "Ravel", options: ["Debussy", "Ravel", "Fauré", "Satie"] },
    { q: "What time signature has 3 beats per measure?", a: "3/4", options: ["2/4", "3/4", "4/4", "6/8"] },
    { q: "What is the technique of playing ahead of the beat?", a: "Anticipation", options: ["Syncopation", "Anticipation", "Rubato", "Fermata"] },
    { q: "Who composed 'Finlandia'?", a: "Sibelius", options: ["Grieg", "Nielsen", "Sibelius", "Dvorak"] },
    { q: "What does 'con brio' mean?", a: "With vigor", options: ["With feeling", "With vigor", "With sadness", "Slowly"] },
    { q: "How many operas did Mozart compose?", a: "22", options: ["18", "22", "26", "30"] },
    { q: "What is the inversion of a major chord called?", a: "First/second inversion", options: ["Minor chord", "Diminished chord", "First/second inversion", "Augmented chord"] },
    { q: "Who wrote the 'Brandenburg Concertos'?", a: "Bach", options: ["Handel", "Bach", "Vivaldi", "Telemann"] },
    { q: "What key has 6 sharps?", a: "F# major", options: ["E major", "F# major", "G# major", "C# major"] },
    
    { q: "What is the Renaissance vocal music called?", a: "Madrigal", options: ["Motet", "Madrigal", "Cantata", "Oratorio"] },
    { q: "Who composed 'Pictures at an Exhibition'?", a: "Mussorgsky", options: ["Borodin", "Mussorgsky", "Rimsky-Korsakov", "Tchaikovsky"] },
    { q: "What does 'col legno' mean?", a: "With the wood of the bow", options: ["With the bow", "With the wood of the bow", "Without bow", "With fingers"] },
    { q: "How many piano concertos did Beethoven write?", a: "5", options: ["4", "5", "6", "7"] },
    { q: "What is a scale that starts on the 6th degree called?", a: "Aeolian mode", options: ["Dorian mode", "Phrygian mode", "Lydian mode", "Aeolian mode"] },
    { q: "Who composed 'Ein Heldenleben'?", a: "Richard Strauss", options: ["Wagner", "Brahms", "Richard Strauss", "Mahler"] },
    { q: "What key has 5 flats?", a: "D♭ major", options: ["B♭ major", "E♭ major", "A♭ major", "D♭ major"] },
    { q: "What is the opposite of 'arco'?", a: "Pizzicato", options: ["Legato", "Staccato", "Pizzicato", "Tremolo"] },
    { q: "Who wrote 'Scheherazade'?", a: "Rimsky-Korsakov", options: ["Borodin", "Mussorgsky", "Rimsky-Korsakov", "Glinka"] },
    { q: "What does 'glissando' mean?", a: "Sliding between notes", options: ["Short notes", "Sliding between notes", "Loud notes", "Soft notes"] },
    
    { q: "How many violin concertos did Mozart write?", a: "5", options: ["4", "5", "6", "7"] },
    { q: "What is a chord with 4 notes called?", a: "Seventh chord", options: ["Triad", "Sixth chord", "Seventh chord", "Ninth chord"] },
    { q: "Who composed 'La Mer'?", a: "Debussy", options: ["Debussy", "Ravel", "Fauré", "Satie"] },
    { q: "What time signature has 6 beats per measure?", a: "6/8", options: ["3/4", "4/4", "6/8", "9/8"] },
    { q: "What is playing off the beat called?", a: "Syncopation", options: ["Anticipation", "Syncopation", "Rubato", "Ritardando"] },
    { q: "Who wrote 'The Firebird'?", a: "Stravinsky", options: ["Prokofiev", "Stravinsky", "Rachmaninoff", "Shostakovich"] },
    { q: "What key has 7 sharps?", a: "C# major", options: ["F# major", "G# major", "C# major", "D# major"] },
    { q: "What does 'tremolo' mean?", a: "Rapid repetition", options: ["Slow repetition", "Rapid repetition", "Sliding", "Plucking"] },
    { q: "Who composed 'Daphnis et Chloé'?", a: "Ravel", options: ["Debussy", "Ravel", "Fauré", "Saint-Saëns"] },
    { q: "What is the range of a soprano?", a: "High voice", options: ["Low voice", "Medium voice", "High voice", "Very low voice"] },
    
    { q: "How many piano sonatas did Beethoven write?", a: "32", options: ["28", "30", "32", "35"] },
    { q: "What is a scale starting on the 4th degree called?", a: "Lydian mode", options: ["Dorian mode", "Phrygian mode", "Lydian mode", "Mixolydian mode"] },
    { q: "Who composed 'Symphony of a Thousand'?", a: "Mahler", options: ["Bruckner", "Mahler", "Richard Strauss", "Wagner"] },
    { q: "What key has 7 flats?", a: "C♭ major", options: ["A♭ major", "D♭ major", "G♭ major", "C♭ major"] },
    { q: "What does 'sul ponticello' mean?", a: "Bow near the bridge", options: ["Bow near fingerboard", "Bow near the bridge", "Pluck strings", "Mute strings"] },
    { q: "Who wrote 'Enigma Variations'?", a: "Elgar", options: ["Elgar", "Holst", "Vaughan Williams", "Britten"] },
    { q: "What is a 12-tone composition technique called?", a: "Serialism", options: ["Impressionism", "Serialism", "Romanticism", "Minimalism"] },
    { q: "Who composed 'West Side Story'?", a: "Bernstein", options: ["Copland", "Gershwin", "Bernstein", "Barber"] },
    { q: "What does 'con sordino' mean?", a: "With mute", options: ["Without mute", "With mute", "With bow", "Without bow"] },
    { q: "Who wrote 'Appalachian Spring'?", a: "Copland", options: ["Copland", "Bernstein", "Gershwin", "Ives"] },
  ],

  // =========================================
  // ADVANCED MODE - Middle/High School
  // =========================================
  
  advanced_level1: [],
  advanced_level2: [],
  advanced_level3: [],
};

// For advanced mode, reuse the same questions for now
musicQuestions.advanced_level1 = musicQuestions.kids_level1;
musicQuestions.advanced_level2 = musicQuestions.kids_level2;
musicQuestions.advanced_level3 = musicQuestions.kids_level3;

export default musicQuestions;
