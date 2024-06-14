const projects: Projects = [
  [
    {
      id: 1,
      title: 'Promptopia',
      img: '/pet.png',
      alt: 'dog clipart',
      description:
        "This web application is under construction. It is a web application designed to record your pets' milestones. \n\n I have yet to deploy this project.",
      githubRepo: 'https://github.com/haruka-ogino/pet-blog',
    },
    {
      id: 2,
      title: "Lucas' Mansion",
      img: '/lucas-mansion.gif',
      alt: 'haunted mansion',
      description:
        'A browser escape room created as our final group project at the Dev Academy.',
      githubRepo: 'https://github.com/harakeke-2024/Lucas-Mansion',
      deployedLink: 'https://lucas-mansion.pushed.nz/',
    },
    {
      id: 3,
      title: 'All the Ghibli Things!',
      img: 'https://www.ghibli-museum.jp/en/img/mainimg.png',
      alt: 'ghibli character',
      description:
        'A fun full-stack web application I worked on using React and SQLite alongside Knex. \n\n While I have accomplished a lot of my goals for this app, I am still constantly working on it.\n\nLearn more about my goals on the GitHub repo.',
      githubRepo: 'https://github.com/haruka-ogino/Ghibli-Things',
      deployedLink: 'https://ghibli-things.pushed.nz/',
    },
    {
      id: 4,
      title: 'LyricSync',
      img: '/lyricsync.png',
      alt: 'lyricsync logo',
      description:
        'This web application is under construction. It is a full-stack application which allows its user to save the lyrics to their favourite songs.\n\n It was created in conjuction with a classmate from the Dev Academy Bootcamp.\n\nLearn more about my goals on the GitHub repo.',
      githubRepo: 'https://github.com/haruka-ogino/LyricSync',
    },
  ],
]

export async function getPuppies(): Promise<[]> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projects)
    }, 500)
  })
}
