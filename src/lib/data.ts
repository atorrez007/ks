import { SocialType, ProjectType } from "@/types";
import { faker } from "@faker-js/faker";

function createRandomProject(): ProjectType {
  return {
    id: faker.number.int(),
    title: faker.company.name(),
    imgUrl: faker.image.urlLoremFlickr(),
    description: faker.commerce.productDescription(),
    tags: ["Tag1", "Tag2"],
    link: "https://example.com/project1",
  };
}
const projectSeekingFunds = createRandomProject();

export const links = [
  {
    name: "Home",
    source: "/",
  },

  {
    name: "Projects",
    source: "/projects",
  },
  { name: "Contact", source: "/contact" },
] as const;

export const socialData: SocialType[] = [
  {
    id: 0,
    name: "github",
    url: "https://github.com/atorrez007",
    target: "_blank",
    style: { height: 40, width: 40 },
  },
  {
    id: 1,
    name: "x",
    url: "https://x.com/atorrez_007",
    target: "_blank",
    style: { height: 40, width: 40 },
  },
];

export const projectsLinedUp = [
  {
    projectSeekingFunds,
  },
];

console.log(projectsLinedUp);

export const testProjectData: ProjectType[] = Array.from({ length: 12 }, () =>
  createRandomProject()
);

export const activeProjects: ProjectType[] = Array.from({ length: 6 }, () =>
  createRandomProject()
);

// export const activeProjects: ProjectType[] = [
//   {
//     id: 22,
//     title: "Project 22",
//     imgUrl: "https://example.com/image10.jpg",
//     description: "",
//     tags: ["Tag2", "Tag3", "Tag4"],
//     link: "https://example.com/project10",
//   },
//   {
//     id: 23,
//     title: "Project 23",
//     imgUrl: "https://example.com/image11.jpg",
//     description: "",
//     tags: ["Health", "Fitness", "Mobile"],
//     link: "https://example.com/project11",
//   },
//   {
//     id: 24,
//     title: "Project 24",
//     imgUrl: "https://example.com/image12.jpg",
//     description: "",
//     tags: ["E-commerce", "AI", "Web"],
//     link: "https://example.com/project12",
//   },
//   {
//     id: 25,
//     title: "Project 25",
//     imgUrl: "https://example.com/image13.jpg",
//     description: "",
//     tags: ["Finance", "Analytics", "Mobile"],
//     link: "https://example.com/project13",
//   },
//   {
//     id: 26,
//     title: "Project 26",
//     imgUrl: "https://example.com/image14.jpg",
//     description: "",
//     tags: ["Social", "Community", "Web"],
//     link: "https://example.com/project14",
//   },
//   {
//     id: 27,
//     title: "Project 27",
//     imgUrl: "https://example.com/image15.jpg",
//     description: "",
//     tags: ["Travel", "Sustainability", "Mobile"],
//     link: "https://example.com/project15",
//   },
// ];
