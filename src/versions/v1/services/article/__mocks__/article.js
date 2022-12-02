export const getArticles = () =>
  Promise.resolve([
    {
      id: 1,
      title: "JukeBox 1",
      category: 1,
      published: true,
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "JukeBox 2",
      category: 2,
      published: true,
      content: "Donec malesuada enim ac ipsum dictum placerat.",
    },
    {
      id: 3,
      title: "JukeBox 3",
      category: 1,
      published: false,
      content: "Phasellus sit amet bibendum augue.",
    },
  ]);
