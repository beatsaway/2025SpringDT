const festivalData = {
  'Eid': {
    colors: ['gold', 'green'],
    elements: ['crescent moons', 'lanterns', 'geometric patterns'],
    description: 'Eid celebrations feature crescent moons, lanterns, and geometric patterns in gold and green. This Islamic festival marks the end of Ramadan (Eid al-Fitr) or the end of pilgrimage season (Eid al-Adha). Visual elements symbolize light, guidance, and community as families gather in their finest clothes to celebrate with prayer, feasting, and gift-giving.'
  },
  'Chinese New Year': {
    colors: ['red', 'gold'],
    elements: ['lanterns', 'dragon imagery', 'zodiac animals', 'paper cuttings', 'auspicious characters', 'blooming flowers'],
    description: 'Chinese New Year displays vibrant reds and golds with lanterns, dragon imagery, and zodiac animals. This lunar festival celebrates renewal and good fortune with family reunions, festive meals, and red envelopes. Decorative elements include paper cuttings, auspicious characters, and blooming flowers that symbolize prosperity and new beginnings.'
  },
  'Halloween': {
    colors: ['orange', 'black', 'purple'],
    elements: ['pumpkins', 'ghosts', 'bats', 'jack-o-lanterns', 'spiderwebs', 'witches hats'],
    description: 'Halloween imagery features pumpkins, ghosts, and bats in orange, black, and purple. Originating from Celtic harvest festivals and the Christian All Saints Eve, Halloween\'s visual language portrays the supernatural and macabre. Jack-o-lanterns, spiderwebs, and witches\' hats create a spooky atmosphere for this night when the boundary between worlds thins.'
  },
  'Ramadan': {
    colors: ['jewel tones'],
    elements: ['crescents', 'stars', 'lanterns', 'Islamic calligraphy'],
    description: 'Ramadan visual elements include crescents, stars, lanterns, and Islamic calligraphy in jewel tones. This holy month of fasting in Islam focuses on spiritual reflection and community. Decorative elements symbolize light in darkness, with ornate lanterns (fanous) illuminating homes and streets as families gather for evening meals (iftar) and special prayers.'
  },
  'Christmas': {
    colors: ['red', 'green', 'gold'],
    elements: ['evergreen trees', 'stars', 'ornaments', 'gift boxes', 'holly', 'candles', 'twinkling lights'],
    description: 'Christmas imagery features evergreen trees, stars, ornaments, and gift boxes in red, green, and gold. This Christian celebration of Jesus\'s birth has evolved to include secular traditions worldwide. Visual elements like holly, candles, and twinkling lights symbolize hope and warmth during winter\'s darkest days, while Nativity scenes recall the holiday\'s religious origins.'
  },
  'Easter': {
    colors: ['pastel colors'],
    elements: ['eggs', 'rabbits', 'lilies', 'crosses'],
    description: 'Easter visuals include eggs, rabbits, lilies, and crosses in pastel colors. This Christian celebration of resurrection combines religious symbolism with spring renewal themes. Decorated eggs represent new life, while lilies symbolize purity. Visual elements balance sacred imagery like crosses with joyful spring motifs representing rebirth and hope.'
  },
  'Sakura Festival': {
    colors: ['pink'],
    elements: ['cherry blossoms', 'paper lanterns', 'traditional fans', 'flowing ribbons'],
    description: 'Cherry blossom (sakura) festival imagery features delicate pink flowers, paper lanterns, and traditional Japanese motifs. This springtime celebration honors the ephemeral beauty of cherry blossoms as symbols of life\'s fleeting nature. Visual elements include picnic scenes under blossoming trees, traditional fans, and flowing ribbons that capture the gentle poetry of this contemplative yet joyful season.'
  },
  'Diwali': {
    colors: ['jewel tones'],
    elements: ['oil lamps (diyas)', 'rangoli patterns', 'fireworks', 'lotus flowers', 'symbolic deities', 'geometric patterns'],
    description: 'Diwali designs showcase oil lamps (diyas), rangoli patterns, and fireworks in rich jewel tones. This Hindu festival of lights celebrates the triumph of light over darkness and knowledge over ignorance. Visual elements include lotus flowers, symbolic deities, and intricate geometric patterns that transform homes into beacons of warmth and welcome.'
  },
  'Nowruz': {
    colors: ['turquoise', 'gold'],
    elements: ['Haft-Seen table', 'hyacinths', 'goldfish', 'fire imagery', 'natural motifs', 'Persian calligraphy'],
    description: 'Nowruz (Persian New Year) features the "Haft-Seen" table display, hyacinths, goldfish, and fire imagery in turquoise and gold. This ancient celebration marks the spring equinox and new beginnings. Visual elements incorporate natural motifs, Persian calligraphy, and symbols of rebirth that honor this 3,000-year-old tradition celebrated across Central and Western Asia.'
  },
  'Sanrio Anniversary': {
    colors: ['pastel colors'],
    elements: ['Hello Kitty', 'Keroppi', 'ribbons', 'stars', 'rainbow patterns', 'gift boxes'],
    description: 'Sanrio Anniversary displays iconic characters like Hello Kitty and Keroppi amid ribbons, stars, and pastel colors. This Japanese pop culture celebration showcases kawaii (cute) aesthetics that have become globally influential. Visual elements include rainbow patterns, gift boxes, and friendship symbols that capture the brand\'s emphasis on happiness, connection, and gift-giving.'
  },
  'Fortnite Festival': {
    colors: ['blue', 'purple'],
    elements: ['llamas', 'battle buses', 'dancing characters', 'in-game items', 'victory royale symbols'],
    description: 'Fortnite Festival imagery features vibrant blues and purples with llamas, battle buses, and dancing characters. This gaming celebration brings the digital world into physical space with a bold, animated aesthetic. Visual elements include iconic in-game items, victory royale symbols, and dynamic action poses that capture the energy of this global gaming phenomenon.'
  },
  'International Cat Day': {
    colors: ['cozy colors'],
    elements: ['playful felines', 'paw prints', 'yarn balls', 'sleepy cat silhouettes', 'fish motifs', 'whisker patterns'],
    description: 'International Cat Day designs showcase playful felines, paw prints, and yarn balls in cozy colors. This global celebration honors our feline companions with a mix of realistic and whimsical cat imagery. Visual elements include sleepy cat silhouettes, fish motifs, and whisker patterns that capture cats\' mysterious yet endearing nature.'
  },
  'London Clown Festival': {
    colors: ['primary colors'],
    elements: ['red noses', 'oversized shoes', 'circus tents', 'bowler hats', 'polka dots', 'theatrical masks'],
    description: 'London Clown Festival features red noses, oversized shoes, and circus tents in primary colors. This performing arts celebration showcases physical comedy and theatrical traditions. Visual elements include bowler hats, polka dots, and theatrical masks that balance traditional circus imagery with contemporary London cultural references.'
  },
  'Philippine Independence Day': {
    colors: ['blue', 'red', 'yellow', 'white'],
    elements: ['stars', 'sun rays', 'native flowers', 'narra tree', 'sampaguita blossoms', 'tribal patterns', 'bamboo frames', 'Philippine eagles'],
    description: 'Philippine Independence Day displays the national flag colors (blue, red, yellow, white) with stars, sun rays, and native flowers. This celebration of freedom from Spanish colonial rule features cultural symbols like the narra tree and sampaguita blossoms. Visual elements include traditional tribal patterns, bamboo frames, and stylized Philippine eagles that honor the nation\'s rich cultural heritage.'
  },
  'African Party Festival': {
    colors: ['earth tones', 'vibrant accents'],
    elements: ['kente cloth patterns', 'adinkra symbols', 'drums', 'shield motifs', 'stylized wildlife', 'geometric patterns'],
    description: 'African Party Festival showcases kente cloth patterns, adinkra symbols, and drums in earth tones with vibrant accents. This celebration of pan-African culture features traditional and contemporary visual elements. Designs incorporate shield motifs, stylized wildlife, and geometric patterns that honor the diverse artistic traditions across the African continent.'
  }
}; 