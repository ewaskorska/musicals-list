const musicals = [
  {
    id: 1,
    title: "next to normal",
    tags: ["broadway", "drama"],
    img_small: "./images/next-to-normal-small.png",
    img_medium: "http://127.0.0.1:8887/next-to-normal-medium.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi doloremque assumenda, suscipit officia id quaerat dolore consequatur nisi facilis laudantium blanditiis nesciunt nihil perspiciatis enim, ipsa iste a officiis velit unde earum voluptatibus veniam accusantium. Quibusdam iusto molestias tempora minus, nemo aliquam optio, labore ad harum quos beatae? Dolorum quaerat eveniet quae aspernatur facilis labore similique pariatur quos rerum repudiandae. Inventore illo at cum perferendis maiores eum et natus sapiente?",
    actors: { 2: "Diana", 4: "Gabe", 6: "Dan", 7: "Natalie" },
  },
  {
    id: 2,
    title: "The Lion King",
    tags: ["broadway", "family"],
    img_small: "./images/the-lion-king-small.png",
    img_medium: "http://127.0.0.1:8887/the-lion-king-medium.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error quisquam, at ex soluta, cumque excepturi assumenda deleniti debitis perferendis non fugit aliquid recusandae quia commodi iste cum quasi pariatur voluptas veniam consequuntur culpa quod doloribus. Corporis fugit quibusdam voluptate aspernatur. Suscipit nostrum in inventore, consectetur adipisci voluptates dicta, quidem, libero molestias deleniti amet iste. Consequuntur iusto similique quibusdam doloremque?",
    actors: { 3: "Simba", 6: "Nala", 7: "Pumba" },
  },
  {
    id: 3,
    title: "Into The Woods",
    tags: ["broadway", "with movie adaptation", "Sondheim"],
    img_small: "./images/into-the-woods-small.png",
    img_medium: "http://127.0.0.1:8887/into-the-woods-medium.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi doloremque assumenda, suscipit officia id quaerat dolore consequatur nisi facilis laudantium blanditiis nesciunt nihil perspiciatis enim, ipsa iste a officiis velit unde earum voluptatibus veniam accusantium. Quibusdam iusto molestias tempora minus, nemo aliquam optio, labore ad harum quos beatae? Dolorum quaerat eveniet quae aspernatur facilis labore similique pariatur quos rerum repudiandae. Inventore illo at cum perferendis maiores eum et natus sapiente?",
    actors: { 5: "Witch", 7: "Baker", 6: "Baker's Wife" },
  },
  {
    id: 4,
    title: "Company",
    tags: ["broadway", "Sondheim", "comedy", "drama"],
    img_small: "./images/company-small.png",
    img_medium: "http://127.0.0.1:8887/company-medium.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error quisquam, at ex soluta, cumque excepturi assumenda deleniti debitis perferendis non fugit aliquid recusandae quia commodi iste cum quasi pariatur voluptas veniam consequuntur culpa quod doloribus. Corporis fugit quibusdam voluptate aspernatur. Suscipit nostrum in inventore, consectetur adipisci voluptates dicta, quidem, libero molestias deleniti amet iste. Consequuntur iusto similique quibusdam doloremque?",
    actors: { 4: "Robert", 6: "Sarah", 7: "Harry" },
  },
  {
    id: 5,
    title: "Dear Evan Hansen",
    tags: ["broadway", "with movie adaptation"],
    img_small: "./images/dear-evan-hansen-small.png",
    img_medium: "http://127.0.0.1:8887/dear-evan-hansen-medium.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi doloremque assumenda, suscipit officia id quaerat dolore consequatur nisi facilis laudantium blanditiis nesciunt nihil perspiciatis enim, ipsa iste a officiis velit unde earum voluptatibus veniam accusantium. Quibusdam iusto molestias tempora minus, nemo aliquam optio, labore ad harum quos beatae? Dolorum quaerat eveniet quae aspernatur facilis labore similique pariatur quos rerum repudiandae. Inventore illo at cum perferendis maiores eum et natus sapiente?",
    actors: { 5: "Evan Hansen", 6: "Connor", 7: "Zoe" },
  },
  {
    id: 6,
    title: "Falsettos",
    tags: ["broadway", "comedy", "drama"],
    img_small: "./images/falsettos-small.png",
    img_medium: "http://127.0.0.1:8887/falsettos-medium.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error quisquam, at ex soluta, cumque excepturi assumenda deleniti debitis perferendis non fugit aliquid recusandae quia commodi iste cum quasi pariatur voluptas veniam consequuntur culpa quod doloribus. Corporis fugit quibusdam voluptate aspernatur. Suscipit nostrum in inventore, consectetur adipisci voluptates dicta, quidem, libero molestias deleniti amet iste. Consequuntur iusto similique quibusdam doloremque?",
    actors: { 5: "Marvin", 4: "Trina", 6: "Jason", 7: "Whizzer" },
  },
  {
    id: 7,
    title: "Matilda",
    tags: ["broadway", "family", "comedy"],
    img_small: "./images/matilda-small.png",
    img_medium: "http://127.0.0.1:8887/matilda-medium.png",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi doloremque assumenda, suscipit officia id quaerat dolore consequatur nisi facilis laudantium blanditiis nesciunt nihil perspiciatis enim, ipsa iste a officiis velit unde earum voluptatibus veniam accusantium. Quibusdam iusto molestias tempora minus, nemo aliquam optio, labore ad harum quos beatae? Dolorum quaerat eveniet quae aspernatur facilis labore similique pariatur quos rerum repudiandae. Inventore illo at cum perferendis maiores eum et natus sapiente?",
    actors: { 7: "Matilda", 6: "Ms. Honney" },
  },
  {
    id: 8,
    title: "Sunday In The Park With George",
    tags: ["broadway", "drama", "Sondheim"],
    img_small: "./images/sunday-in-the-park-with-george-small.png",
    img_medium:
      "http://127.0.0.1:8887/sunday-in-the-park-with-george-medium.png",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla error quisquam, at ex soluta, cumque excepturi assumenda deleniti debitis perferendis non fugit aliquid recusandae quia commodi iste cum quasi pariatur voluptas veniam consequuntur culpa quod doloribus. Corporis fugit quibusdam voluptate aspernatur. Suscipit nostrum in inventore, consectetur adipisci voluptates dicta, quidem, libero molestias deleniti amet iste. Consequuntur iusto similique quibusdam doloremque?",
    actors: { 6: "Georges Seurat / George", 4: "Dot" },
  },
];

export const actors = [
  {
    id: 1,
    name: "Bernadette Peters",
    short:
      "An American actress, singer, and children's book author. Over a career spanning five decades, she has starred in musical theatre, television and film, performed in solo concerts and released recordings. She is a critically acclaimed Broadway performer, having received seven nominations for Tony Awards, winning two (plus an honorary award), and nine nominations for Drama Desk Awards, winning three. Four of the Broadway cast albums on which she has starred have won Grammy Awards.",
    img: "./actorImages/bernadette-peters.jpg",
  },
  {
    id: 2,
    name: "Alice Ripley",
    short:
      "An n American actress, singer, songwriter, and mixed media artist. She is known, in particular, for her various roles on Broadway in musicals, including the Pulitzer Prize-winning Next to Normal (2009 Tony Award, Best Actress in a Musical) and Side Show. She most recently played three roles in the short-lived Broadway musical, American Psycho. Alice Ripley has released albums with her band, RIPLEY, including the single, 'Beautiful Eyes', released in February 2012. She also performs as a solo artist, while in February 2011 she released Alice Ripley Daily Practice, Volume 1, a stripped-down collection of acoustic rock covers.",
    img: "./actorImages/alice-ripley.jpg",
  },
  {
    id: 3,
    name: "Kayi Ushe",
    short:
      "Kayi Ushe is an actor, known for Assassin's Creed: Origins (2017), World of Warcraft: Battle for Azeroth (2018) and World of Warcraft: Shadowlands (2020).",
    img: "./actorImages/kayi-ushe.jpg",
  },
  {
    id: 4,
    name: "Aaron Tviet",
    short:
      "An American actor and singer. He is known for originating the musical theatre roles of Gabe in Next to Normal, Frank Abagnale Jr. in the stage musical version of Catch Me If You Can, and Christian in Moulin Rouge! on Broadway, the latter for which he received a 2020 Tony Award nomination for Best Actor in a Leading Role in a Musical and a 2020 Grammy Award nomination for Best Musical Theater Album, as well as for his portrayal of Enjolras in the 2012 film adaptation of Les Misérables. Tveit is also known for his work in television, including the role as Tripp van der Bilt on The CW's series Gossip Girl, Mike Warren on the USA Network series Graceland, Danny Zuko in Grease: Live, Gareth Ritter in the CBS series BrainDead, and Danny Bailey in the Apple TV+ series Schmigadoon!.",
    img: "./actorImages/aaron-tveit.jpg",
  },
  {
    id: 5,
    name: "Ben Platt",
    short:
      "An American actress, singer, and children's book author. Over a career spanning five decades, she has starred in musical theatre, television and film, performed in solo concerts and released recordings. She is a critically acclaimed Broadway performer, having received seven nominations for Tony Awards, winning two (plus an honorary award), and nine nominations for Drama Desk Awards, winning three. Four of the Broadway cast albums on which she has starred have won Grammy Awards.",
    img: "./actorImages/ben-platt.jpg",
  },
  {
    id: 6,
    name: "Bugs Bunny",
    short:
      "An animated cartoon character, created in the late 1930s by Leon Schlesinger Productions (later Warner Bros. Cartoons) and voiced originally by Mel Blanc. Bugs is best known for his starring roles in the Looney Tunes and Merrie Melodies series of animated short films, produced by Warner Bros. Though a similar character first appeared in the WB cartoon Porky's Hare Hunt (1938) and a few subsequent shorts, the definitive characterization of Bugs Bunny is widely credited to have debuted in director Tex Avery's Oscar-nominated film A Wild Hare (1940).",
    img: "./actorImages/bugs-bunny.jpg",
  },
  {
    id: 7,
    name: "Daffy Duck",
    short:
      "An animated cartoon character created by Warner Bros. Styled as an anthropomorphic black duck, he has appeared in cartoon series such as Looney Tunes and Merrie Melodies, in which he is usually depicted as a foil for Bugs Bunny. He was one of the first of the new 'screwball' characters that emerged in the late 1930s to replace traditional everyman characters who were more popular earlier during the decade, such as Mickey Mouse and Popeye.",
    img: "./actorImages/daffy-duck.jpg",
  },
];

export default musicals;
