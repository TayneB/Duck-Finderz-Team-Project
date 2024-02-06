export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('Ducks').del()
  await knex('Ducks').insert([
    {
      id: 1,
      name: 'Gym Duck',
      image: '/images/gym-duck.png',
      rarity: 3,
      creator: 'Teancum',
      backstory:
        "In Pondlandia, Gym Duck, a legendary figure with vibrant feathers, inspired ducks of all kinds with daily fitness routines by the picturesque pond. Word spread, turning Pondlandia into a hub of positivity as ducks from neighboring ponds joined in, creating a united community. As the sun set, Gym Duck realized true legendary status was about fostering unity and well-being. Gym Duck's legacy became an inspiring tale of community and a shared pursuit of a healthier, happier life in Pondlandia.",
    },
    {
      id: 2,
      name: 'Bow Duck',
      image: '/images/bow-duck.png',
      rarity: 2,
      creator: 'Joana',
      backstory:
        'In the charming Duckshire, Penelope, a charismatic duck with a love for fashion, discovered a boutique run by Mrs. Robin. Enchanted by a delicate pink bow, she decided it would be her signature style. Adorned with the bow, Penelope became the belle of the meadow, drawing admiration from fellow ducks. Word spread, turning her stylish escapade into a cherished tale throughout Duckshire. Penelope continued waddling through life, her pink bow a symbol of embracing uniqueness and turning ordinary moments into extraordinary adventures.',
    },
    {
      id: 3,
      name: 'Default Duck',
      image: '/images/default-duck.png',
      rarity: 1,
      creator: 'Sam',
      backstory: "It's a duck.",
    },
    {
      id: 4,
      name: 'Fez Duck',
      image: '/images/fez-duck.png',
      rarity: 3,
      creator: 'Mike',
      backstory:
        "Fez Duck found a magical fez near the pond, granting him the ability to speak multiple languages. His linguistic talents turned him into an accidental ambassador, fostering friendships across the globe. From bustling cities to remote villages, Fez Duck bridged communication gaps among creatures. Despite his travels, he returned to share tales with his pond friends, inspiring new generations to explore beyond their cozy home. Fez Duck's legacy lived on as a tapestry of friendship and cultural exchange throughout the animal kingdom.",
    },
    {
      id: 5,
      name: 'Golden Duck',
      image: '/images/golden-duck.png',
      rarity: 3,
      creator: 'Sam',
      backstory:
        "In a remote pound surrounded by ancient willows, there lived a legendary golden duck named Lumina. Lumina's feathers glowed with a mesmerizing radiance that told a tale of ancient magic. It is said that those who hear Lumina's song will be granted wisdom beyond measure.",
    },
    {
      id: 6,
      name: 'Green Duck',
      image: '/images/green-duck.png',
      rarity: 1,
      creator: 'Sam',
      backstory:
        "Once upon a time in a nondescript pond, there was an unremarkable green duck named Harold. His dull routine consisted of nibbling on algae by the water's edge. One day, he found slightly greener algae, which briefly sparked mild interest. However, Harold's life remained monotonous, with no exciting adventures or noteworthy events. The end.",
    },
    {
      id: 7,
      name: 'Red Duck',
      image: '/images/red-duck.png',
      rarity: 1,
      creator: 'Sam',
      backstory:
        "In Quackington Pond, there was a red duck named Chuckles. With feathers brighter than a traffic cone, Chuckles turned heads and quacked up the whole community. His pals couldn't take him seriously, but Chuckles embraced the laughs, even hosting a `Duck-a-Licious Fashion Show` where he strutted his stuff. Chuckles, the pond's resident stand-up sensation, turned his quirky color into a daily dose of laughter for all his feathered friends.",
    },
    {
      id: 8,
      name: 'Knife Duck',
      image: '/images/knife-duck.png',
      rarity: 3,
      creator: 'Tayne',
      backstory:
        "In the outskirts of Oddington, there waddled a duck named Knife Duck. Sporting a tiny blade strapped to his feathered side, he became the unofficial guardian of the pond. While the other ducks quacked in caution, Knife Duck's keen instincts and tiny weapon deterred any potential threats, earning him a quirky reputation as the pond's unconventional protector. Oddington's residents marveled at how this seemingly unassuming duck could wield his knife with precision, ensuring the safety of the pond's feathery inhabitants. Knife Duck, though a bit of an oddity, carved out his own unique place in the quirky community as the pint-sized guardian with a beak-sharp edge.",
    },
    {
      id: 9,
      name: 'JoJo Duck',
      image: '/images/jojo_duck-removebg-preview.png',
      rarity: 2,
      creator: 'T',
      backstory:
        "In the eccentric realm of Pondopolis, there waddled a duck with an extraordinary spirit—Jojo Duck. Known for his flamboyant style and flair, Jojo Duck faced quacky adversaries with a confident quack and a pose that could rival the most dramatic of ducks. His adventures were filled with bizarre challenges, from battling menacing mallards to solving mysteries that befuddled even the wisest of waterfowl. Jojo Duck's signature move, the `Quackora Flap,` became legendary in Pondopolis, leaving onlookers in awe of his audacious antics. With each quack-filled chapter, Jojo Duck turned Pondopolis into a pond of peculiar wonders and quirkiness.",
    },
    {
      id: 10,
      name: 'Rubber Duck',
      image: '/images/rubber-duck.png',
      rarity: 2,
      creator: 'Sam',
      backstory:
        "In the serene waters of the bathtub kingdom, there floated a rubber duck named Quacky with dreams bigger than the bubbles around him. Quacky harbored a secret wish—to transform into a real duck and join his feathered friends outside the confines of the tub. As he bobbed in the warm water, Quacky daydreamed about soaring in the open sky and paddling in a real pond. Despite his synthetic nature, Quacky's determination to become a genuine waterfowl fueled his bathtub adventures, turning each ripple into a practice flight for his future duckly endeavors. The other bath toys cheered him on, hoping that one day, Quacky's dream of spreading his wings beyond the tub would come true.",
    },
    {
      id: 11,
      name: 'Zebra Duck',
      image: '/images/zebra-duck.png',
      rarity: 3,
      creator: 'Sam',
      backstory:
        "In the whimsical wetlands of Stripehaven, there strutted a duck unlike any other—a Zebra Duck named Ziggy. Ziggy's feathers were a mesmerizing blend of black and white, creating a striking resemblance to his savannah counterparts. The other ducks quacked in awe at Ziggy's unique appearance, dubbing him the `Dazzling Ducker of Stripehaven.` Ziggy, however, wasn't just about looks; he had an adventurous spirit that led him to explore uncharted pond territories, leaving a trail of quizzical footprints in his wake. The pond's residents marveled at Ziggy's zebra-inspired charm, turning Stripehaven into a haven of both wonder and wild quackery.",
    },
    {
      id: 12,
      name: 'Mike Duck',
      image: '/images/mike-duck.png',
      rarity: 2,
      creator: 'Mike',
      backstory:
        "In the serene pond of Featherdale, there paddled a duck named Mike. Mike was an unassuming mallard with a penchant for pebbles. Instead of joining the quacking competitions, Mike spent his days arranging pebble formations along the pond's edge. The other ducks couldn't understand his fascination, but little did they know that Mike's pebble patterns formed a secret code, decipherable only by his feathered friends. As ducks waddled over Mike's pebble messages, they discovered hidden treats and shared moments of delight. Mike, the unconventional communicator of Featherdale, turned the pond into a place where pebbles spoke louder than quacks.",
    },
    {
      id: 13,
      name: 'GoJo Duck',
      image: '/images/gojo-duck.png',
      rarity: 2,
      creator: 'T',
      backstory:
        "In the mystical marshlands of Jujuduck Kaisen, there glided a duck with unmatched charisma—GoJo Duck. With a blindfolded gaze and an aura of undeniable power, GoJo Duck possessed jujutsu-like abilities, effortlessly manipulating the currents of the pond with a mere quack. His presence alone sent ripples of awe through the feathered inhabitants of Jujuduck Kaisen. GoJo Duck's signature move, the `Infinite Quack,` became the stuff of legends as he defended the pond from curses and mysterious creatures. In every quack-filled encounter, GoJo Duck's enigmatic charm and unparalleled quacking skills turned Jujuduck Kaisen into a realm of magical marvels and feathery sorcery.",
    },
    {
      id: 14,
      name: 'Blue Mike Duck',
      image: '/images/blue-mike-duck.png',
      rarity: 2,
      creator: 'Mike',
      backstory:
        "On the tranquil shores of Azure Lake, there floated a duck named Blue Mike, adorned in feathers as vibrant as the cloudless sky. Blue Mike wasn't your typical quacker; he communicated through an array of brilliant blue feathers, each shade conveying a different emotion or message. As he navigated the water, his fellow ducks deciphered the hues of his plumage, turning Azure Lake into a living canvas of duck tales. Whether it was a royal blue for excitement or a softer hue for tranquility, Blue Mike's unconventional communication style added a splash of color and mystery to the daily quackery. The pond's residents soon embraced the art of reading Blue Mike's hues, transforming their interactions into a mesmerizing symphony of blue-feathered conversations.",
    },
  ])
}
