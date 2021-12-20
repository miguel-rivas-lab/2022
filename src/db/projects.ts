import { toolEnum } from "mr-kernel/enums/tools";
import { roleEnum } from "mr-kernel/enums/roles";
import { typeEnum } from "mr-kernel/enums/types";
import { client, clientEnum } from "mr-kernel/enums/clients";
import { ProjectFirebase } from "mr-kernel/interfaces/project-firebase";
import { sortByDate } from "../modules/format-db";
import { users } from "./users";

import h from "mr-kernel/modules/helpers";

const linkWeb = (item) => `https://${users.media.github.production}.github.io/${item}`;
const linkGithub = (item) => `https://github.com/${users.media.github.production}/${item}`;
const linkCodepen = (item) => `https://codepen.io/${users.media.codepen.user}/pen/${item}`;
const linkVimeo = (id) => `https://player.vimeo.com/video/${id}`;
// const linkGithubDev = (item) => `https://github.com/${users.media.github.development}/${item}-dev`;


type ProjectsType = Array<ProjectFirebase>;

const projects: ProjectsType = [
  {
    date: "2004/01/01",
    title: "ATM",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2004/01/02",
    title: "Bubble Sort",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.pascal,
    ],
    links: [],
  },
  {
    date: "2004/01/03",
    title: "Infinite Menu",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2004/01/04",
    title: "Fibonacci Sequence",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2004/01/05",
    title: "Summatory / Accumulator",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2004/01/06",
    title: "Guessing Random Number",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.pascal,
    ],
    links: [
      {
        url: linkGithub("pascal-2004"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2005/01/01",
    title: "Pacman Pixel Draw",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.c,
    ],
    links: [],
    children: [
      h.getNewID(client.miguelRivas, "2021/11/08"),
    ],
  },
  {
    date: "2006/01/01",
    title: "Analog Clock",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.vb,
    ],
    links: [],
  },
  {
    date: "2006/01/02",
    title: "Tetravex",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.vb,
    ],
    links: [],
  },
  {
    date: "2006/01/03",
    title: "Minesweeper",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.vb,
    ],
    links: [],
  },
  {
    date: "2006/01/04",
    title: "Bouncing Shapes",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.vb,
    ],
    links: [],
    children: [
      h.getNewID(client.itesa, "2006/01/01"),
    ],
  },
  {
    date: "2006/01/05",
    title: "Falling Code / Matrix Effect",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.vb,
    ],
    links: [],
  },
  {
    date: "2006/01/06",
    title: "Falling Letters / Game",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.itesa,
    ],
    tools: [
      toolEnum.vb,
    ],
    links: [],
  },
  {
    date: "2013/12/06",
    title: "Pasteleria Del Jardin",
    types: [
      typeEnum.socialMedia,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.delJardin,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/8",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/06/18",
    title: "Lanza tu Promo",
    types: [
      typeEnum.socialMedia,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.highschool,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/10",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/05/28",
    title: "Audrey Hepburn",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.photoshop,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/12",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/03/21",
    title: "Audio 2",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/14",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/11/26",
    title: "Beauty is a Beast",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/16",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/10/24",
    title: "Linux Grub",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.freehand,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/24",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2019/07/10",
    title: "Play Sound",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.javascript,
    ],
    links: [
      {
        url: linkCodepen("bPzVPJ"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2020/08/08",
    title: "Switch",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.scss,
      toolEnum.slim,
    ],
    links: [
      {
        url: linkCodepen("LYNEwLZ"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2020/06/17",
    title: "Toggle Arrow",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.scss,
      toolEnum.slim,
    ],
    links: [
      {
        url: linkCodepen("VwembzX"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2020/08/18",
    title: "Range Slider",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.scss,
      toolEnum.slim,
    ],
    links: [
      {
        url: linkCodepen("qBZNMyQ"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2011/07/17",
    title: "Madre Naturaleza",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.sk1,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/40",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/04/24",
    title: "El Montaje",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.animation,
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.flash,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/42",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/02/22",
    title: "Transformer",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/44",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2009/04/27",
    title: "Flygon",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.fireworks,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/48",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/12/12",
    title: "Baká",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.indesign,
      toolEnum.pencil,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/16",
        text: "Document",
        self: false,
      },
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/28",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/06/14",
    title: "Le Machine",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/18",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/01/16",
    title: "Stars",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.inkscape,
      toolEnum.html,
      toolEnum.javascript,
      toolEnum.css,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/20",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/06/25",
    title: "Water Matters",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/24",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/06/21",
    title: "Wickhop",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/28",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/04/29",
    title: "Corel Draw",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.corelDraw,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/34",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/08/03",
    title: "MP4",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
      roleEnum.animation,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.flash,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/38",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/04/25",
    title: "Dream",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/40",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2010/12/27",
    title: "Lapices de Colores",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.fireworks,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/48",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/07/14",
    title: "Living Walls",
    types: [
      typeEnum.graphicDesign,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/42",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/08/23",
    title: "Tambora",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.inkscape,
      toolEnum.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/38",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/09/20",
    title: "T-Magazine",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.scribus,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/32",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/11/30",
    title: "AguacateKun Identidad",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.autocad,
      toolEnum.illustrator,
      toolEnum.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/14",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/01/20",
    title: "Libro de Cuentos",
    types: [
      typeEnum.graphicDesign,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.gimp,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/10",
        text: "Document",
        self: false,
      },
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/14",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/12/03",
    title: "Vacaciones Navideñas",
    types: [
      typeEnum.socialMedia,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.descubria,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/12",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/08/03",
    title: "Social Network Facebook",
    types: [
      typeEnum.socialMedia,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.socialNetwork,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/16",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/07/06",
    title: "Facebook App",
    types: [
      typeEnum.graphicDesign,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.tiempoExtra,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/18",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/07/05",
    title: "Home Gallery Facebook",
    types: [
      typeEnum.socialMedia,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.homeGallery,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/20",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/07/05",
    title: "SDQ Training Center Facebook",
    types: [
      typeEnum.socialMedia,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.sdq,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/22",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/06/27",
    title: "Harina Blaquita Facebook",
    types: [
      typeEnum.socialMedia,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.harinaBlanquita,
    ],
    tools: [
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/24",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/12/29",
    title: "Jenny Aquino",
    types: [
      typeEnum.graphicDesign,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/26",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/10/12",
    title: "Blindness Poster",
    types: [
      typeEnum.graphicDesign,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.photoshop,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/30",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/09/13",
    title: "Diseño de Productos",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/34",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/04/16",
    title: "Raspberry Pi C",
    types: [
      typeEnum.graphicDesign,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/44",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2012/02/28",
    title: "Maggiver",
    types: [
      typeEnum.document,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.mangoBajito,
    ],
    tools: [
      toolEnum.inkscape,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005/46",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2013/12/15",
    title: "Badges",
    types: [
      typeEnum.graphicDesign,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.cosplayDominicano,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000/8",
        text: "Document",
        self: false,
      },
    ],
  },

  {
    date: "2012/10/26",
    title: "Print Portfolio",
    types: [
      typeEnum.document,
    ],
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.indesign,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf3_005",
        text: "Portfolio 3",
        self: false,
      },
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf2_000",
        text: "Portfolio 2",
        self: false,
      },
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000",
        text: "Portfolio 1",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2009/04/27"),
      h.getNewID(client.itla, "2010/07/07"),
      h.getNewID(client.miguelRivas, "2010/12/27"),
      h.getNewID(client.itla, "2011/06/22"),
      h.getNewID(client.itla, "2011/02/22"),
      h.getNewID(client.itla, "2011/04/24"),
      h.getNewID(client.itla, "2011/04/25"),
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.miguelRivas, "2011/07/17"),
      h.getNewID(client.itla, "2011/07/25"),
      h.getNewID(client.itla, "2011/07/31"),
      h.getNewID(client.itla, "2011/08/03"),
      h.getNewID(client.itla, "2011/11/15"),
      h.getNewID(client.itla, "2011/11/18"),
      h.getNewID(client.itla, "2011/12/05"),
      h.getNewID(client.miguelRivas, "2012/01/16"),
      h.getNewID(client.mangoBajito, "2012/02/28"),
      h.getNewID(client.itla, "2012/04/16"),
      h.getNewID(client.miguelRivas, "2012/04/29"),
      h.getNewID(client.miguelRivas, "2012/06/14"),
      h.getNewID(client.miguelRivas, "2012/06/21"),
      h.getNewID(client.itla, "2012/06/25"),
      h.getNewID(client.miguelRivas, "2012/07/14"),
      h.getNewID(client.itla, "2012/07/24"),
      h.getNewID(client.miguelRivas, "2012/08/23"),
      h.getNewID(client.miguelRivas, "2012/09/26"),
      h.getNewID(client.itla, "2012/09/13"),
      h.getNewID(client.miguelRivas, "2012/09/20"),
      h.getNewID(client.itla, "2012/10/12"),
      h.getNewID(client.miguelRivas, "2012/10/24"),
      h.getNewID(client.miguelRivas, "2012/11/06"),
      h.getNewID(client.itla, "2012/11/26"),
      h.getNewID(client.miguelRivas, "2012/12/12"),
      h.getNewID(client.miguelRivas, "2012/12/29"),
      h.getNewID(client.miguelRivas, "2013/01/20"),
      h.getNewID(client.itla, "2013/03/21"),
      h.getNewID(client.miguelRivas, "2013/05/28"),
      h.getNewID(client.highschool, "2013/06/18"),
      h.getNewID(client.harinaBlanquita, "2013/06/27"),
      h.getNewID(client.sdq, "2013/07/05"),
      h.getNewID(client.homeGallery, "2013/07/05"),
      h.getNewID(client.tiempoExtra, "2013/07/06"),
      h.getNewID(client.socialNetwork, "2013/08/03"),
      h.getNewID(client.miguelRivas, "2013/11/30"),
      h.getNewID(client.descubria, "2013/12/03"),
      h.getNewID(client.delJardin, "2013/12/06"),
      h.getNewID(client.cosplayDominicano, "2013/12/15"),
      h.getNewID(client.miguelRivas, "2014/02/09"),
    ],
  },

  {
    date: "2015/01/03",
    title: "Mainfront",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("main-front"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("main-front"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/04/19",
    title: "CSS Study",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.angular,
      toolEnum.sweetAlert,
      toolEnum.illustrator,
      toolEnum.scss,
      toolEnum.pug,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("css-study"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("css-study"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2021/03/24",
    title: "Hello",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.vue,
      toolEnum.illustrator,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: [
      {
        url: `${linkWeb("hello")}`,
        text: "berlin",
        params: ["city=berlin"],
        self: false,
      },
      {
        url: `${linkWeb("hello")}`,
        text: "dusseldorf",
        params: ["city=dusseldorf"],
        self: false,
      },
      {
        url: `${linkWeb("hello")}`,
        text: "melbourne",
        params: ["city=melbourne"],
        self: false,
      },
      {
        url: `${linkWeb("hello")}`,
        text: "schwangau",
        params: ["city=schwangau"],
        self: false,
      },
      {
        url: `${linkWeb("hello")}`,
        text: "texas",
        params: ["city=texas"],
        self: false,
      },
      {
        url: linkGithub("hello"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/04/26",
    title: "Evolution of the Web",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.stellar,
      toolEnum.inkscape,
      toolEnum.pug,
      toolEnum.git,
      toolEnum.scss,
    ],
    links: [
      {
        url: linkWeb("evolution-web"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("evolution-web"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/05/14",
    title: "Robotic Screen",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.illustrator,
    ],
    links: [
      {
        url: linkCodepen("oXxPvw"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2015/05/23",
    title: "Mini Van",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    disabled: true,
    tools: [
      toolEnum.pug,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("VLKNBz"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2015/05/25",
    title: "Windows Form",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.scss,
      toolEnum.jade,
      toolEnum.illustrator,
    ],
    links: [
      { url: linkCodepen("PqbqpL"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2015/05/28",
    title: "Gear Builder",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.canvas,
      toolEnum.pug,
      toolEnum.scss,
    ],
    disabled: true,
    links: [
      { url: linkCodepen("yNJJpG"), text: "Codepen Prototype" },
    ],
    children: [
      h.getNewID(client.itesa, "2006/01/01"),
    ],
  },
  {
    date: "2015/12/07",
    title: "SVG 101",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.stellar,
      toolEnum.snapSVG,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("svg-101"),
        text: "Prototype",
        self: true,
      },
      {
        url: linkGithub("svg-101"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/12/22",
    title: "Tetravex",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.javascript,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.sizzle,
      toolEnum.lodash,
      toolEnum.velocity,
      toolEnum.illustrator,
      toolEnum.inkscape,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("tetravex"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("tetravex"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2017/02/20",
    title: "Pills",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.slim,
      toolEnum.scss,
    ],
    links: [
      { url: linkCodepen("qRzzmz"), text: "Codepen Prototype" },
    ],
  },
  {
    date: "2010/07/07",
    title: "French Toast",
    disabled: true,
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation,
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.flash,
    ],
    links: [
      {
        url: linkVimeo("224945169"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2012/07/24",
    title: "La Guerra de Vectores",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation,
    ],
    disabled: true,
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.flash,
    ],
    links: [
      {
        url: linkVimeo("175240185"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2016/11/21",
    title: "Wurlex",
    types: [
      typeEnum.animation3D,
    ],
    roles: [
      roleEnum.animation, roleEnum.design
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.unity,
      toolEnum.premiere,
    ],
    links: [
      {
        url: linkVimeo("224977703"),
        text: "Video",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.itla, "2011/04/25"),
    ],
  },
  {
    date: "2014/02/09",
    title: "Screens Portfolio",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("2014"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("2014"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2012/01/16"),
      h.getNewID(client.miguelRivas, "2015/05/14"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
    ],
  },
  {
    date: "2016/08/11",
    title: "Monster Portfolio",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("2016"),
        text: "App",
        self: false,
      },
      {
        url: linkGithub("2016"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2021/08/12",
    title: "Vue Portfolio",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.vue,
      toolEnum.vuex,
      toolEnum.vueRouter,
      toolEnum.typescript,
      toolEnum.three,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.chartJS,
      toolEnum.firebase,
      toolEnum.highlight,
      toolEnum.gmap,
      toolEnum.axios,
    ],
    links: [
      {
        url: linkWeb("2021-vue"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("2021-vue"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2012/11/06"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
      h.getNewID(client.miguelRivas, "2017/01/01"),
      h.getNewID(client.miguelRivas, "2018/06/27"),
      h.getNewID(client.miguelRivas, "2021/03/22"),
      h.getNewID(client.miguelRivas, "2021/09/12"),
      h.getNewID(client.miguelRivas, "2021/02/27"),
    ],
  },
  {
    date: "2018/01/01",
    title: "Grid Portfolio",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.angular,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("2018"),
        text: "Home",
        self: false,
      },
      {
        url: linkWeb("2018/drlogic.html"),
        text: "DrLogic",
        self: false,
      },
      {
        url: linkWeb("2018/apap.html"),
        text: "Apap",
        self: false,
      },
      {
        url: linkWeb("2018/bpr.html"),
        text: "BPR Bank",
        self: false,
      },
      {
        url: linkWeb("2018/presidente.html"),
        text: "Presidente",
        self: false,
      },
      {
        url: linkWeb("2018/tests.html"),
        text: "Tests",
        self: false,
      },
      {
        url: linkVimeo("260621089"),
        text: "Video",
        self: false,
      },
      {
        url: linkGithub("2018"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2021/03/24"),
    ]
  },
  {
    date: "2016/01/11",
    title: "HTML/LOVE",
    types: [
      typeEnum.landingPage,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.animate,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("html-love"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("html-love"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2021/03/22",
    title: "Nano Grid",
    types: [
      typeEnum.module,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.vue,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.typescript,
    ],
    disabled: true,
    links: [
      {
        url: "https://www.npmjs.com/package/nano-grid",
        text: "Node Module",
      },
      {
        url: linkGithub("nano-grid"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2019/07/10"),
      h.getNewID(client.miguelRivas, "2020/08/18"),
    ],
  },
  {
    date: "2021/09/12",
    title: "MR Kernel",
    types: [
      typeEnum.module,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [

      toolEnum.typescript,
      toolEnum.scss,
      toolEnum.git,
    ],
    links: [
      {
        url: "https://www.npmjs.com/package/mr-kernel",
        text: "Node Module",
      },
      {
        url: linkGithub("mr-kernel"),
        text: "Github",
        self: false,
      },
    ],
    disabled: true,
  },
  {
    date: "2012/09/26",
    title: "Tips of Design",
    types: [
      typeEnum.document,
    ],
    roles: [
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.indesign,
    ],
  },
  {
    date: "2017/03/05",
    title: "Art Direction",
    types: [
      typeEnum.document,
    ],
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.indesign,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    disabled: true,
  },
  {
    date: "2015/05/10",
    title: "Bootstrap Prototype",
    types: [
      typeEnum.landingPage,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.bootstrap,
      toolEnum.pug,
      toolEnum.illustrator,
      toolEnum.scss,
    ]
  },
  {
    date: "2021/03/26",
    title: "3D Viewer",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.design,
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.react,
      toolEnum.redux,
      toolEnum.three,
      toolEnum.firebase,
      toolEnum.scss,
      toolEnum.typescript,
      toolEnum.git,
    ],
    disabled: false,
    links: [
      {
        url: linkWeb("2021-react"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("2021-react"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2021/03/22"),
      h.getNewID(client.miguelRivas, "2021/09/12"),
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.itla, "2011/06/22"),
      h.getNewID(client.itla, "2011/07/25"),
    ],
  },
  {
    date: "2017/01/01",
    title: "FlatCSS",
    types: [
      typeEnum.module,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.css,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("flat-css"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("flat-css"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2020/10/04",
    title: "Fake Audience",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.kotlin,
      toolEnum.git,
    ],
    links: [
      {
        url: linkGithub("fake_audience"),
        text: "Github",
        self: false,
      }
    ],
  },
  {
    date: "2021/02/27",
    title: "3D Graph Colors",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.three,
    ],
    links: [
      {
        url: linkCodepen("dyOmXWO"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2020/05/09",
    title: "Animated SVG Header",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.tweenMax,
      toolEnum.html,
      toolEnum.scss,
    ],
    links: [
      {
        url: linkCodepen("zYvjwEM"),
        text: "Codepen Prototype",
      },
    ]
  },
  {
    date: "2020/03/23",
    title: "Xpinner",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: [
      {
        url: linkCodepen("VwLGgYv"),
        text: "Codepen Prototype",
      },
    ]
  },
  {
    date: "2018/06/27",
    title: "Color Wheel Creator",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.javascript,
      toolEnum.scss,
    ],
    links: [
      {
        url: linkCodepen("ERdMLO"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2018/09/11",
    title: "Movie projector",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: [
      {
        url: linkCodepen("rZdMYj"),
        text: "Codepen Prototype",
      },
    ]
  },
  {
    date: "2018/05/31",
    title: "Check Animation",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.svg,
      toolEnum.scss,
    ],
    links: [
      {
        url: linkCodepen("ZRGpbQ"),
        text: "Codepen Prototype",
      },
    ]
  },
  {
    date: "2018/03/28",
    title: "Bounce Animation",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.canvas,
    ],
    links: [
      {
        url: linkCodepen("GxyMMz"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2015/05/29",
    title: "Spinners",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.scss,
    ],
    links: [
      {
        url: linkCodepen("eNgRRe"),
        text: "Codepen Prototype",
      },
    ],
  },
  {
    date: "2012/11/06",
    title: "Drakkar",
    types: [
      typeEnum.animation3D,
    ],
    roles: [
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.blender,
    ],
    links: [
      {
        url: "https://sketchfab.com/3d-models/drakkar-d0f14c73155e460cb848a3db80e1cb07",
        text: "3D Model",
        self: false,
      },
    ],
  },
  {
    date: "2011/12/05",
    title: "Reloj",
    types: [
      typeEnum.animation3D,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/28",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/11/15",
    title: "Pencil Sharpener",
    types: [
      typeEnum.animation3D,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/30",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/11/18",
    title: "Batteries: depth of field",
    types: [
      typeEnum.animation3D,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/30",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/07/25",
    title: "Audi",
    types: [
      typeEnum.animation3D,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/32",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/07/31",
    title: "Mackbook Pro",
    types: [
      typeEnum.animation3D,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/34",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/06/22",
    title: "Backpack",
    types: [
      typeEnum.animation3D,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/36",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2011/07/06",
    title: "X-wing",
    types: [
      typeEnum.animation3D,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.itla,
    ],
    tools: [
      toolEnum.maya,
    ],
    links: [
      {
        url: "https://issuu.com/jemiguelrivas/docs/ptf1_000/38",
        text: "Document",
        self: false,
      },
    ],
  },
  {
    date: "2014/06/16",
    title: "Destapa el Coro",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend
    ],
    clients: [
      clientEnum.presidente,
    ],
    disabled: true,
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.css,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("presidente-destapa-coro"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("presidente-destapa-coro"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/03/30",
    title: "Pacman",
    disabled: true,
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation
    ],
    clients: [
      clientEnum.presidente,
    ],
    tools: [
      toolEnum.flash,
    ],
    links: [
      {
        url: linkVimeo("175240177"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2015/03/24",
    title: "BigPapi Selfie",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation
    ],
    clients: [
      clientEnum.pepsi,
    ],
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
    links: [
      {
        url: linkVimeo("175240184"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2015/04/18",
    title: "Carnaval Presidente 2015",
    types: [
      typeEnum.landingPage,
    ],
    roles: [
      roleEnum.frontend
    ],
    disabled: true,
    clients: [
      clientEnum.presidente,
    ],
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.scss,
      toolEnum.php,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("presidente-carnaval-2015/filter.html"),
        text: "Filter",
        self: true,
      },
      {
        url: linkWeb("presidente-carnaval-2015/home.html"),
        text: "Home",
        self: true,
      },
      {
        url: linkGithub("presidente-carnaval-2015"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/05/20",
    title: "Recarga Con RedRock",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation
    ],
    disabled: true,
    clients: [
      clientEnum.redRock,
    ],
    tools: [
      toolEnum.flash,
    ],
    links: [
      {
        url: linkVimeo("175240186"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2015/10/23",
    title: "Retrobrindis",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend
    ],
    clients: [
      clientEnum.presidente,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.php,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("presidente-retro-brindis"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("presidente-retro-brindis"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/11/12",
    title: "Mineriza a tu Familia",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend
    ],
    clients: [
      clientEnum.apap,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.jQuery,
      toolEnum.css,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("apap-mineriza-familia"),
        text: "App",
        self: true,
      },
      {
        url: linkGithub("apap-mineriza-familia"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2017/04/04"),
    ],
  },
  {
    date: "2017/04/04",
    title: "Promo",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.afterEffects,
      toolEnum.premiere,
    ],
    links: [
      {
        url: linkVimeo("211801157"),
        text: "Video",
        self: false,
      },
    ],
    disabled: true,
  },
  {
    date: "2015/12/16",
    title: "Verano Presidente 2015",
    types: [
      typeEnum.prototype,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend
    ],
    clients: [
      clientEnum.presidente,
    ],
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.css,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("presidente-verano-2015"),
        text: "Filter",
        self: true,
      },
      {
        url: linkWeb("presidente-loader"),
        text: "Loader",
        self: true,
      },
      {
        url: linkGithub("presidente-verano-2015"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2016/02/22",
    title: "Website",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend
    ],
    clients: [
      clientEnum.drLogic,
    ],
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.bootstrap,
      toolEnum.rails,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("drlogic/home.html"),
        text: "Home",
        self: true,
      },
      {
        url: linkWeb("drlogic/about-us.html"),
        text: "About Us",
        self: true,
      },
      {
        url: linkWeb("drlogic/contact-us.html"),
        text: "Contact Us",
        self: true,
      },
      {
        url: linkWeb("drlogic/portfolio.html"),
        text: "Portfolio",
        self: true,
      },
      {
        url: linkWeb("drlogic/404.html"),
        text: "404",
        self: true,
      },
      {
        url: linkGithub("drlogic"),
        text: "Github",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.drLogic, "2016/03/08"),
      h.getNewID(client.miguelRivas, "2017/03/06"),
    ],
  },
  {
    date: "2017/03/06",
    title: "Promo",
    types: [
      typeEnum.animation3D,
    ],
    roles: [
      roleEnum.animation,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.flash,
    ],
    links: [
      {
        url: linkVimeo("207152756"),
        text: "Video",
        self: false,
      },
    ],
    disabled: true,
  },
  {
    date: "2016/03/08",
    title: "Terms and Conditions",
    types: [
      typeEnum.document,
    ],
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.drLogic,
    ],
    tools: [
      toolEnum.indesign,
    ],
    disabled: true,
  },
  {
    date: "2016/06/16",
    title: "Server Prompt",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.pixelPerfectTree,
    ],
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.illustrator,
      toolEnum.rails,
      toolEnum.git,
    ],
    disabled: true,
    links: [
      {
        url: linkWeb("pixel-server-prompt/404"),
        text: "404",
        self: true,
      },
      {
        url: linkWeb("pixel-server-prompt/500"),
        text: "500",
        self: true,
      },
      {
        url: linkGithub("pixel-server-prompt"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2016/06/30",
    title: "Animated Header",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.voxel,
    ],
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.photoshop,
      toolEnum.rails,
      toolEnum.git,
    ],
    disabled: true,
    links: [
      {
        url: linkWeb("voxel-animation"),
        text: "Animated Header",
        self: true,
      },
      {
        url: linkGithub("voxel-animation"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/05/27",
    title: "Orange Reel",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation,
    ],
    clients: [
      clientEnum.orange,
    ],
    tools: [
      toolEnum.premiere,
    ],
    links: [
      {
        url: linkVimeo("212177083"),
        text: "Video",
        self: false,
      },
    ],
    children: [
      h.getNewID(client.orange, "2015/03/22"),
      h.getNewID(client.orange, "2015/03/24"),
      h.getNewID(client.orange, "2015/03/31"),
      h.getNewID(client.orange, "2015/04/24"),
      h.getNewID(client.orange, "2015/05/22"),
    ],
  },
  {
    date: "2015/03/22",
    title: "Essentials",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation,
    ],
    clients: [
      clientEnum.orange,
    ],
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/03/24",
    title: "Selfie",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation,
    ],
    clients: [
      clientEnum.orange,
    ],
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/04/24",
    title: "Café",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation,
    ],
    clients: [
      clientEnum.orange,
    ],
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/05/22",
    title: "Día de las Madres",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation,
    ],
    clients: [
      clientEnum.orange,
    ],
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2015/03/31",
    title: "Snorkeling",
    types: [
      typeEnum.motionGraphics,
    ],
    roles: [
      roleEnum.animation,
    ],
    clients: [
      clientEnum.orange,
    ],
    tools: [
      toolEnum.flash,
    ],
    disabled: true,
  },
  {
    date: "2014/01/14",
    title: "Descubria Website",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    disabled: true,
    clients: [
      clientEnum.descubria,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("descubria"),
        text: "Home",
        self: true,
      },
      {
        url: linkGithub("descubria"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2014/08/06",
    title: "Server Prompt",
    types: [
      typeEnum.prototype,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.capitalDBG,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    disabled: true,
    links: [
      {
        url: linkWeb("capital-dbg-server-prompt"),
        text: "Prototype",
        self: true,
      },
      {
        url: linkGithub("capital-dbg-server-prompt"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    date: "2015/10/28",
    title: "Test",
    types: [
      typeEnum.landingPage,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.pixelPerfectTree,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.git,
    ],
    links: [
      {
        url: linkWeb("test-pixel-perfect-tree"),
        text: "Test",
        self: true,
      },
      {
        url: linkGithub("test-pixel-perfect-tree"),
        text: "Github",
        self: false,
      },
    ],
  },
  {
    clients: [
      clientEnum.presidente,
    ],
    title: "Destapa el Coro: User Flow",
    date: "2014/06/02",
    tools: [
      toolEnum.illustrator,
    ],
    types: [
      typeEnum.userFlow,
    ],
    roles: [
      roleEnum.design,
    ],
    disabled: true,
  },
  {
    date: "2020/05/05",
    title: "Popkern",
    types: [
      typeEnum.app,
      typeEnum.module,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.enovational,
    ],
    tools: [
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.rails,
      toolEnum.slim,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.three,
      toolEnum.tweenMax,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2020/03/23"),
      h.getNewID(client.miguelRivas, "2020/05/09"),
      h.getNewID(client.miguelRivas, "2020/06/17"),
      h.getNewID(client.miguelRivas, "2020/08/18"),
    ],
    disabled: true,
  },
  {
    date: "2017/09/20",
    title: "Lemon Deal",
    types: [
      typeEnum.landingPage,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.plantTherapy,
    ],
    tools: [
      toolEnum.html,
      toolEnum.miva,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2017/12/01",
    title: "25 Days of Christmas",
    types: [
      typeEnum.landingPage,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.plantTherapy,
    ],
    tools: [
      toolEnum.html,
      toolEnum.miva,
      toolEnum.css,
      toolEnum.jQuery,
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2015/08/03",
    title: "SIP",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.capitalDBG,
    ],
    tools: [
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.jQuery,
    ],
    disabled: true,
  },
  {
    date: "2014/10/18",
    title: "Presidente Photo Assignmet",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.presidente,
    ],
    tools: [
      toolEnum.html,
      toolEnum.jQuery,
      toolEnum.grunt,
      toolEnum.php,
      toolEnum.scss,
    ],
    disabled: true,
  },
  {
    date: "2014/11/05",
    title: "Pronosticos: Wireframe",
    types: [
      typeEnum.wireFrame,
    ],
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.presidente,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2016/01/29",
    title: "Shop.pr",
    types: [
      typeEnum.document,
    ],
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.pixelPerfectTree,
    ],
    tools: [
      toolEnum.illustrator,
    ],
    disabled: true,
  },
  {
    date: "2017/08/04",
    title: "Chakras",
    disabled: true,
    types: [
      typeEnum.wireFrame,
    ],
    roles: [
      roleEnum.frontend,
      roleEnum.design,
    ],
    clients: [
      clientEnum.plantTherapy,
    ],
    tools: [
      toolEnum.illustrator,
    ]
  },
  {
    date: "2016/02/18",
    title: "BPR Bank",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend
    ],
    clients: [
      clientEnum.bprBank,
    ],
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.bootstrap,
      toolEnum.rails,
      toolEnum.git,
    ],
    disabled: true,
  },
  {
    date: "2016/06/24",
    title: "Social Media Posts",
    types: [
      typeEnum.socialMedia,
    ],
    disabled: true,
    roles: [
      roleEnum.design,
    ],
    clients: [
      clientEnum.voxel,
    ],
    tools: [
      toolEnum.photoshop,
      toolEnum.illustrator,
    ]
  },
  {
    date: "2019/01/01",
    title: "MSEC Financial Disclosures Portal",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.enovational,
    ],
    tools: [
      toolEnum.html,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    disabled: true,
    links: [
      {
        url: "https://efds.ethics.maryland.gov/",
        text: "Website",
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
    ],
  },
  {
    date: "2018/05/01",
    title: "MDA Vetboard Portal",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.enovational,
    ],
    tools: [
      toolEnum.html,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    disabled: true,
    links: [
      {
        url: "https://portal.mda.maryland.gov/",
        text: "Website"
      },
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
    ],
  },
  {
    date: "2018/06/25",
    title: "Maryland Onestop",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    disabled: true,
    clients: [
      clientEnum.enovational,
    ],
    tools: [
      toolEnum.vue,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    children: [
      h.getNewID(client.enovational, "2020/05/05"),
    ],
  },
  {
    date: "2018/09/04",
    title: "Formability",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    disabled: true,
    clients: [
      clientEnum.enovational,
    ],
    tools: [
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.rails,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.bootstrap,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2018/05/31"),
      h.getNewID(client.miguelRivas, "2018/06/27"),
      h.getNewID(client.miguelRivas, "2018/09/11"),
      h.getNewID(client.enovational, "2020/05/05"),
    ],
    links: [
      // {
      //   url: linkWeb("formability/demo"),
      //   text: "Demo",
      //   self: true,
      // },
      // {
      //   url: linkWeb("formability/401"),
      //   text: "401",
      //   self: true,
      // },
      // {
      //   url: linkWeb("formability/404"),
      //   text: "404",
      //   self: true,
      // },
      // {
      //   url: linkWeb("formability/500"),
      //   text: "500",
      //   self: true,
      // },
    ],
  },
  {
    date: "2021/06/21",
    title: "Connections Academy",
    types: [
      typeEnum.app,
    ],
    roles: [
      roleEnum.frontend,
    ],
    disabled: true,
    clients: [
      clientEnum.jellyfish,
    ],
    tools: [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.scss,
      toolEnum.git,
      toolEnum.grunt,
    ]
  },
  {
    date: "2021/11/08",
    title: "Bitmap Creator",
    types: [
      typeEnum.app,
    ],
    disabled: true,
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.python,
      toolEnum.tkinter,
    ],
    links: [
      {
        url: linkGithub("bitmap-creator"),
        text: "Github",
        self: false,
      },
      {
        url: linkVimeo("643739212"),
        text: "Video",
        self: false,
      },
    ],
  },
  {
    date: "2021/11/14",
    title: "Monster 3D",
    types: [
      typeEnum.animation3D,
    ],
    roles: [
      roleEnum.design,
    ],
    disabled: true,
    clients: [
      clientEnum.miguelRivas,
    ],
    tools: [
      toolEnum.blender,
    ],
    links: [
      {
        url: "https://sketchfab.com/3d-models/monster-3d-435d64cdb0a042dfba2ae21d7d5a6986",
        text: "Monster",
        self: false,
      },
      {
        url: "https://sketchfab.com/3d-models/404-section-4752fcc0d7714e7fbec4747a2fe10ba9",
        text: "404 section",
        self: false,
      },
    ],
  },
].sort(sortByDate);

export { projects as projectsDB };