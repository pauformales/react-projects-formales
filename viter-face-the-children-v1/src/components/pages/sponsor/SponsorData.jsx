const residentData = [
  {
    id: "1",
    name: "John Luke B",
    sponsored: "0.00%",
    img: "/img/sponsor-child/John-luke-b.jpg",
    age: "12",
    birthday: "Jul 3, 2013",
    story:
      "John Luke, or JL, as he is called by his friends was neglected and then abandoned by his parents.  When the mother and father separated JL and his siblings were in the care of their mother.  The mother went to work overseas and left them in the care of another man who abandoned them.  The mother does not respond to contact.  JL is enrolled in grade 3 at Frontline Christian Academy and is interacting well within Face the Children.",
  },
  {
    id: 2,
    name: "Ala D",
    sponsored: "5.00%",
    img: "/img/sponsor-child/ala-d.jpg",
    age: "10",
    birthday: "Jun 27, 2013",
    story:
      "Ala comes from a family of 5 siblings. Her parents struggle to provide for all of them, and Ala dreams of being able to study and have a better future. She loves playing with her friends and has a natural talent for art.",
  },
  {
    id: 3,
    name: "Angelita A",
    sponsored: "5.00%",
    img: "/img/sponsor-child/opt-angelica.jpg",
    age: "8",
    birthday: "Mar 10, 2017",
    story:
      "Angelita has a passion for dancing and enjoys participating in school activities. She lives with her single mother, who works hard to support her, but the family is struggling. Angelita dreams of becoming a teacher one day.",
  },
  {
    id: 4,
    name: "Minos D",
    sponsored: "5.00%",
    img: "/img/sponsor-child/minos-d.jpg",
    age: "9",
    birthday: "Feb 18, 2016",
    story:
      "Minos is an energetic child who enjoys sports, especially basketball. He lives with his father, who is a fisherman, but the family faces financial challenges. Minos hopes to one day help his father and provide for his family.",
  },
  {
    id: 5,
    name: "Angelita A",
    sponsored: "10.00%",
    img: "/img/sponsor-child/opt-angelica.jpg",
    age: "9",
    birthday: "Dec 25, 2016",
    story:
      "Angelita is a cheerful child with a love for singing. She was abandoned by her parents but was taken in by a kind-hearted aunt. Despite the hardships, Angelita remains positive and dreams of becoming a nurse to help others.",
  },
  {
    id: 6,
    name: "Mary Joy C.",
    sponsored: "17.50%",
    img: "/img/sponsor-child/opt-mary-joy.jpg",
    age: "13",
    birthday: "Sep 10, 2012",
    story:
      "Mary Joy is a hardworking and diligent student. She comes from a family with a single mother who is struggling to make ends meet. Mary Joy helps with chores at home and dreams of becoming a doctor to serve her community.",
  },
  {
    id: 7,
    name: "Carl Leam N.",
    sponsored: "25.00%",
    img: "/img/sponsor-child/opt-leam.jpg",
    age: "14",
    birthday: "Nov 7, 2011",
    story:
      "Carl Leam is a quiet and introspective child who loves reading books. He has a deep interest in science and aspires to become an engineer. His father is a mechanic, and Carl often helps him in his shop.",
  },
  {
    id: 8,
    name: "Charissa N.",
    sponsored: "25.00%",
    img: "/img/sponsor-child/opt-charisse.jpg",
    age: "12",
    birthday: "Jun 3, 2013",
    story:
      "Charissa is a kind and caring child who loves animals. She dreams of becoming a veterinarian. She lives with her grandparents, who have raised her since she was young. Despite their struggles, Charissa remains positive and hopeful.",
  },
  {
    id: 9,
    name: "Chelsey B",
    sponsored: "27.50%",
    img: "/img/sponsor-child/chelsey-b.jpg",
    age: "15",
    birthday: "Apr 19, 2010",
    story:
      "Chelsey is a resilient and determined girl who has faced many challenges in life. Her father is an overseas worker, and her mother stays at home to care for Chelsey and her siblings. Chelsey dreams of becoming a lawyer to help others in her community.",
  },
  {
    id: 10,
    name: "Shiela Mariel S",
    sponsored: "35.00%",
    img: "/img/sponsor-child/opt-shiela.jpg",
    age: "11",
    birthday: "Mar 5, 2014",
    story:
      "Shiela Mariel is an intelligent and hardworking child who excels in her studies. She comes from a family with financial struggles, but she is determined to succeed. She dreams of becoming a teacher to inspire other children.",
  },
  {
    id: 11,
    name: "Cielitahine D",
    sponsored: "37.50%",
    img: "/img/sponsor-child/opt-CIELITAHINE.jpg",
    age: "10",
    birthday: "Feb 2, 2015",
    story:
      "Cielitahine is a friendly and outgoing child who loves spending time with her friends. She comes from a large family, and her parents struggle to provide for all of them. She hopes to one day have a stable job to help her family.",
  },
  {
    id: 12,
    name: "Junior N",
    sponsored: "40.00%",
    img: "/img/sponsor-child/opt-junior.jpg",
    age: "13",
    birthday: "Jan 11, 2012",
    story:
      "Junior is a bright and creative boy who enjoys playing video games and drawing. He comes from a single-parent household, and his mother works hard to support him. Junior dreams of becoming a graphic designer to express his creativity.",
  },
  {
    id: 13,
    name: "Melquizedec D",
    sponsored: "40.00%",
    img: "/img/sponsor-child/opt-milquizedec.jpg",
    age: "12",
    birthday: "Oct 2, 2013",
    story:
      "Melquizedec is a calm and thoughtful child who enjoys reading and writing. He has a deep interest in history and dreams of becoming a historian to preserve important stories and information.",
  },
  {
    id: 14,
    name: "Karen D.",
    sponsored: "45.00%",
    img: "/img/sponsor-child/opt-keren.jpg",
    age: "14",
    birthday: "Jan 23, 2011",
    story:
      "Karen is a hardworking and ambitious girl who excels in school. She comes from a family that struggles financially, but Karen is determined to help her family break out of poverty. She dreams of becoming a social worker to help others.",
  },
  {
    id: 15,
    name: "Mary Ann V",
    sponsored: "50.00%",
    img: "/img/sponsor-child/opt-mary-ann.jpg",
    age: "16",
    birthday: "Jul 5, 2009",
    story:
      "Mary Ann is a bright and mature girl who is passionate about education. She loves helping her classmates and aspires to become a teacher. Despite the challenges she faces at home, she remains focused on her studies.",
  },
  {
    id: 16,
    name: "Michaela C",
    sponsored: "50.00%",
    img: "/img/sponsor-child/opt-mikaela.jpg",
    age: "17",
    birthday: "Sep 18, 2008",
    story:
      "Michaela is an independent and strong-willed young woman. She is determined to pursue her dreams of becoming a nurse despite the financial difficulties her family faces. Michaela is a leader at school and helps with organizing community events.",
  },
  {
    id: 17,
    name: "Sara A",
    sponsored: "50.00%",
    img: "/img/sponsor-child/opt-sarah.jpg",
    age: "13",
    birthday: "Oct 30, 2012",
    story:
      "Sara is a kind-hearted and responsible girl who takes care of her younger siblings. Her mother is a single parent, and Sara helps with household chores. She aspires to become a teacher and make a positive impact on her community.",
  },
  {
    id: 18,
    name: "Ricka",
    sponsored: "52.50%",
    img: "/img/sponsor-child/opt-ricka.jpg",
    age: "12",
    birthday: "Nov 23, 2013",
    story:
      "Ricka is a cheerful and optimistic girl who enjoys playing sports. She comes from a family with limited resources, but she never loses hope. Ricka dreams of becoming a doctor to help the people in her village.",
  },
  {
    id: 19,
    name: "Alden D.",
    sponsored: "57.00%",
    img: "/img/sponsor-child/opt-alden.jpg",
    age: "13",
    birthday: "Feb 15, 2012",
    story:
      "Alden is a curious and intelligent boy who loves learning. He excels in his studies and dreams of becoming an engineer. Alden comes from a family where both parents work hard to support him, but they still struggle to meet basic needs.",
  },
  {
    id: 20,
    name: "Andrea C",
    sponsored: "62.50%",
    img: "/img/sponsor-child/opt-andrea.jpg",
    age: "14",
    birthday: "Mar 7, 2011",
    story:
      "Andrea is a dedicated student who enjoys reading and participating in school activities. She hopes to become a doctor one day to help others. Andrea is determined to overcome the challenges she faces at home.",
  },
  {
    id: 21,
    name: "Cornelito D.",
    sponsored: "100.00%",
    img: "/img/sponsor-child/opt-cornilito.jpg",
    age: "17",
    birthday: "Jun 25, 2008",
    story:
      "Cornelito is a bright and driven young man who has excelled in his studies. He dreams of becoming a scientist and contributing to the betterment of society. Thanks to sponsorship, he is now able to pursue his dreams and help his family.",
  },
];

const nonResidentData = [
  {
    id: 22,
    name: "Trixie Mae N",
    sponsored: "37.50%",
    img: "/img/sponsor-child/trixie.jpg",
    age: "11",
    birthday: "Mar 17, 2014",
    story:
      "Trixie Mae is a compassionate and caring girl who enjoys helping others. She comes from a family with financial struggles, but she remains optimistic. Trixie dreams of becoming a nurse to take care of people.",
  },
  {
    id: 23,
    name: "Danica V",
    sponsored: "40.00%",
    img: "/img/sponsor-child/danica.jpg",
    age: "10",
    birthday: "Aug 21, 2015",
    story:
      "Danica is a bright student who enjoys reading and learning. Her parents are both working hard to support the family, but they face many challenges. Danica wants to become a teacher to help children like her.",
  },
  {
    id: 24,
    name: "Rose Mae N",
    sponsored: "40.00%",
    img: "/img/sponsor-child/rosemae.jpg",
    age: "12",
    birthday: "Oct 14, 2013",
    story:
      "Rose Mae is a hardworking and friendly girl who loves singing and dancing. She comes from a single-parent household and helps her mother with household chores. Rose Mae dreams of becoming a doctor to help those in need.",
  },
  {
    id: 25,
    name: "Rachelle M",
    sponsored: "42.00%",
    img: "/img/sponsor-child/opt-rachelle.jpg",
    age: "10",
    birthday: "Sep 1, 2015",
    story:
      "Rachelle is a sweet and caring child who enjoys playing with her siblings. She lives with her parents, who are struggling to support their family. Rachelle dreams of becoming a nurse to take care of others.",
  },
  {
    id: 26,
    name: "Richard T",
    sponsored: "45.00%",
    img: "/img/sponsor-child/opt-don.jpg",
    age: "13",
    birthday: "Apr 5, 2012",
    story:
      "Richard is an energetic and outgoing boy who enjoys playing football. He lives with his father, who works as a construction worker, and his mother stays at home. Richard dreams of becoming a professional athlete.",
  },
  {
    id: 27,
    name: "Mary Grace V ",
    sponsored: "50.00%",
    img: "/img/sponsor-child/marygrace.jpg",
    age: "14",
    birthday: "Jun 28, 2011",
    story:
      "Mary Grace is a dedicated student who loves reading and writing. She comes from a family of six and her parents work hard to support them. Mary Grace dreams of becoming a writer and sharing her stories with the world.",
  },
  {
    id: 28,
    name: "Eugene Lance D",
    sponsored: "52.50%",
    img: "/img/sponsor-child/eugene.jpg",
    age: "12",
    birthday: "Jul 4, 2015",
    story:
      "Eugene Lance is a shy but intelligent boy who enjoys reading books and solving puzzles. He comes from a family with financial struggles, but he is determined to make a better life for himself and his family.",
  },
  {
    id: 29,
    name: "Gladys T",
    sponsored: "57.50%",
    img: "/img/sponsor-child/opt-gladays.jpg",
    age: "13",
    birthday: "May 21, 2012",
    story:
      "Gladys is a hardworking and respectful girl who loves to help her parents. She dreams of becoming a teacher to share her knowledge and help others. Gladys remains positive despite the challenges she faces at home.",
  },
  {
    id: 30,
    name: "Julie Ann T",
    sponsored: "60.00%",
    img: "/img/sponsor-child/julieann.jpg",
    age: "15",
    birthday: "Feb 12, 2010",
    story:
      "Julie Ann is a mature and responsible young woman. She helps her family with household chores and takes care of her younger siblings. Julie Ann dreams of becoming a doctor to help people in need.",
  },
  {
    id: 31,
    name: "Mark John B",
    sponsored: "85.00%",
    img: "/img/sponsor-child/opt-mark.jpg",
    age: "16",
    birthday: "Nov 4, 2009",
    story:
      "Mark John is a passionate and driven student who excels in his studies. He dreams of becoming an engineer to help his family and his community. He is determined to overcome all obstacles in his path.",
  },
  {
    id: 32,
    name: "Marian Nhicole B",
    sponsored: "100.00%",
    img: "/img/sponsor-child/opt-marian.jpg",
    age: "17",
    birthday: "Jan 30, 2008",
    story:
      "Marian is an intelligent and determined young woman. She has overcome many challenges to get to where she is today. Marian dreams of becoming a scientist and helping others with her research.",
  },
];

export { residentData, nonResidentData };
