import { tool, toolEnum } from "../enums/tools";
import { roleEnum } from "../enums/roles";
import { typeEnum } from "../enums/types";
import { client, clientEnum } from "../enums/clients";
import { Group } from "../interfaces/project-firebase";
import { sortByDate } from "../modules/format-db";

import i18n from "../i18n";
import h from "../modules/helpers";

type GroupsType = Array<Group>;

const groups: GroupsType = [
  {
    date: "2004/09/20",
    disabled: false,
    clients: [
      clientEnum.itesa,
    ],
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.flash,
      toolEnum.fireworks,
      toolEnum.dreamweaver,
      toolEnum.pascal,
      toolEnum.c,
      toolEnum.vb,
      toolEnum.vfoxpro,
      toolEnum.bash,
      toolEnum.linux,
      toolEnum.excel,
      toolEnum.word,
      toolEnum.powerpoint,
      toolEnum.as2,
    ],
    children: [
      h.getNewID(client.itesa, "2005/09/28"),
      h.getNewID(client.itesa, "2005/10/01"),
      h.getNewID(client.itesa, "2005/10/02"),
      h.getNewID(client.itesa, "2005/10/03"),
      h.getNewID(client.itesa, "2005/10/04"),
      h.getNewID(client.itesa, "2005/10/05"),
      h.getNewID(client.itesa, "2006/01/05"),
      h.getNewID(client.itesa, "2007/09/04"),
      h.getNewID(client.itesa, "2008/05/16"),
      h.getNewID(client.itesa, "2008/05/17"),
      h.getNewID(client.itesa, "2008/05/18"),
      h.getNewID(client.itesa, "2008/11/11"),
      h.getNewID(client.itesa, "2008/12/05"),
    ],
    description: 'canvas.section.map.modal.itla.position',
    list: 'canvas.section.map.modal.itesa.summary',
    position: {
      x: -2269,
      y: -671,
    },
  },
  {
    date: "2015/05/13",
    types: [
      typeEnum.group,
    ],
    disabled: true,
    clients: [
      clientEnum.codepen,
    ],
    roles: [
      roleEnum.design,
    ],
    tools: [
      toolEnum.html,
      toolEnum.slim,
      toolEnum.haml,
      toolEnum.pug,
      toolEnum.css,
      toolEnum.scss,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.vue,
      toolEnum.three,
      toolEnum.tweenMax,
    ],
    children: [
      h.getNewID(client.miguelRivas, "2015/05/14"),
      h.getNewID(client.miguelRivas, "2015/05/23"),
      h.getNewID(client.miguelRivas, "2015/05/25"),
      h.getNewID(client.miguelRivas, "2015/05/28"),
      h.getNewID(client.miguelRivas, "2017/02/20"),
      h.getNewID(client.miguelRivas, "2021/02/27"),
    ],
  },
  {
    date: "2009/09/01",
    disabled: false,
    description: 'canvas.section.map.modal.itla.position',
    list: 'canvas.section.map.modal.itla.summary',
    position: {
      x: -2511,
      y: -806,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    clients: [
      clientEnum.itla,
    ],
    roles: [
      roleEnum.design,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.php,
      toolEnum.flash,
      toolEnum.premiere,
      toolEnum.afterEffects,
      toolEnum.maya,
      toolEnum.indesign,
      toolEnum.inkscape,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.fireworks,
      toolEnum.dreamweaver,
      toolEnum.as3,
    ],
    children: [
      h.getNewID(client.itla, "2010/07/07"),
      h.getNewID(client.itla, "2011/06/22"),
      h.getNewID(client.itla, "2011/02/22"),
      h.getNewID(client.itla, "2011/04/24"),
      h.getNewID(client.itla, "2011/04/25"),
      h.getNewID(client.itla, "2011/07/06"),
      h.getNewID(client.itla, "2011/07/25"),
      h.getNewID(client.itla, "2011/07/31"),
      h.getNewID(client.itla, "2011/08/03"),
      h.getNewID(client.itla, "2011/11/15"),
      h.getNewID(client.itla, "2011/11/18"),
      h.getNewID(client.itla, "2011/12/05"),
      h.getNewID(client.itla, "2012/04/16"),
      h.getNewID(client.itla, "2012/06/25"),
      h.getNewID(client.itla, "2012/07/24"),
      h.getNewID(client.itla, "2012/09/13"),
      h.getNewID(client.itla, "2012/10/12"),
      h.getNewID(client.itla, "2012/11/26"),
      h.getNewID(client.itla, "2013/03/21"),
    ],
  },
  {
    date: "2013/01/01",
    disabled: true,
    description: 'canvas.section.map.modal.several.position',
    types: [
      typeEnum.location,
    ],
    tools: [
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.indesign,
    ],
    clients: [
      clientEnum.studioSeveral,
    ],
    list: 'canvas.section.map.modal.several.summary',
    position: {
      x: -1945,
      y: -1000,
    },
  },
  {
    date: "2013/05/01",
    disabled: false,
    description: 'canvas.section.map.modal.social.position',
    list: 'canvas.section.map.modal.social.summary',
    position: {
      x: -1945,
      y: -1000,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    clients: [
      clientEnum.socialNetwork,
    ],
    roles: [
      roleEnum.frontend,
    ],
    tools: [
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.indesign,
    ],
    children: [
      h.getNewID(client.socialNetwork, "2013/08/03"),
      h.getNewID(client.tiempoExtra, "2013/07/06"),
      h.getNewID(client.homeGallery, "2013/07/05"),
      h.getNewID(client.sdq, "2013/07/05"),
      h.getNewID(client.harinaBlanquita, "2013/06/27"),
      h.getNewID(client.highschool, "2013/06/18"),
    ],
  },
  {
    date: "2014/06/01",
    disabled: false,
    types: [
      typeEnum.group,
    ],
    clients: [
      clientEnum.presidente,
    ],
    roles: [
      roleEnum.frontend,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.scss,
      toolEnum.jQuery,
      toolEnum.flash,
      toolEnum.grunt,
      toolEnum.php,
    ],
    children: [
      h.getNewID(client.presidente, "2014/06/02"),
      h.getNewID(client.presidente, "2014/06/16"),
      h.getNewID(client.presidente, "2014/10/18"),
      h.getNewID(client.presidente, "2014/11/05"),
      h.getNewID(client.presidente, "2015/03/30"),
      h.getNewID(client.presidente, "2015/04/18"),
      h.getNewID(client.presidente, "2015/10/23"),
      h.getNewID(client.presidente, "2015/12/16"),
    ],
  },
  {
    date: "2014/05/01",
    disabled: false,
    description: 'canvas.section.map.modal.capital.position',
    list: 'canvas.section.map.modal.capital.summary',
    position: {
      x: -1380,
      y: -856,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    clients: [
      clientEnum.capitalDBG,
    ],
    roles: [
      roleEnum.frontend,
    ],
    tools: [
      toolEnum.html,
      toolEnum.css,
      toolEnum.pug,
      toolEnum.scss,
      toolEnum.grunt,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.flash,
    ],
    children: [
      h.getNewID(client.presidente, "2014/06/02"),
      h.getNewID(client.presidente, "2014/06/16"),
      h.getNewID(client.presidente, "2015/04/18"),
      h.getNewID(client.capitalDBG, "2014/08/06"),
      h.getNewID(client.presidente, "2014/10/18"),
      h.getNewID(client.presidente, "2014/11/05"),
      h.getNewID(client.pepsi, "2015/03/24"),
      h.getNewID(client.presidente, "2015/03/30"),
      h.getNewID(client.redRock, "2015/05/20"),
      h.getNewID(client.orange, "2015/05/27"),
      h.getNewID(client.capitalDBG, "2015/08/03"),
      h.getNewID(client.presidente, "2015/10/23"),
      h.getNewID(client.apap, "2015/11/12"),
      h.getNewID(client.presidente, "2015/12/16"),
    ],
  },
  {
    date: "2016/01/01",
    disabled: false,
    description: 'canvas.section.map.modal.pixel.position',
    list: 'canvas.section.map.modal.pixel.summary',
    position: {
      x: -804,
      y: -1097,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    clients: [
      clientEnum.pixelPerfectTree,
    ],
    roles: [
      roleEnum.frontend,
    ],
    tools: [
      toolEnum.haml,
      toolEnum.scss,
      toolEnum.react,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.rails,
      toolEnum.bootstrap,
      toolEnum.git,
    ],
    children: [
      h.getNewID(client.pixelPerfectTree, "2015/10/28"),
      h.getNewID(client.pixelPerfectTree, "2016/01/29"),
      h.getNewID(client.bprBank, "2016/02/18"),
      h.getNewID(client.pixelPerfectTree, "2016/06/16"),
      h.getNewID(client.voxel, "2016/06/24"),
      h.getNewID(client.voxel, "2016/06/30"),
      h.getNewID(client.drLogic, "2016/02/22"),
    ],
  },
  {
    date: "2013/07/15",
    disabled: false,
    description: 'canvas.section.map.modal.avante.position',
    list: 'canvas.section.map.modal.avante.summary',
    position: {
      x: -1501,
      y: -1170,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.avante,
    ],
    tools: [
      toolEnum.php,
      toolEnum.wordpress,
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    children: [
      h.getNewID(client.descubria, "2013/12/03"),
      h.getNewID(client.delJardin, "2013/12/06"),
      h.getNewID(client.descubria, "2014/01/14"),
    ],
  },
  {
    date: "2017/07/01",
    disabled: false,
    description: 'canvas.section.map.modal.plantTherapy.position',
    list: 'canvas.section.map.modal.plantTherapy.summary',
    position: {
      x: -1230,
      y: -515,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.plantTherapy,
    ],
    tools: [
      toolEnum.php,
      toolEnum.miva,
      toolEnum.html,
      toolEnum.css,
      toolEnum.javascript,
      toolEnum.jQuery,
      toolEnum.illustrator,
      toolEnum.photoshop,
    ],
    children: [
      h.getNewID(client.plantTherapy, "2017/08/04"),
      h.getNewID(client.plantTherapy, "2017/09/20"),
      h.getNewID(client.plantTherapy, "2017/12/01"),

    ],
  },
  // {
  //   date: "2021/03/29",

  //   disabled: false,
  //   description: 'canvas.section.map.modal.jellyfish.position',
  //   list: 'canvas.section.map.modal.jellyfish.summary',
  //   position: {
  //     x: 0,
  //     y: 0,
  //   },
  //   types: [
  //     typeEnum.group,
  //     typeEnum.location,
  //   ],
  //   roles: [
  //     roleEnum.frontend,
  //   ],
  //   clients: [
  //     clientEnum.jellyfish,
  //   ],
  //   tools: [
  //     toolEnum.php,
  //     toolEnum.wordpress,
  //     toolEnum.html,
  //     toolEnum.scss,
  //     toolEnum.git,
  //     toolEnum.grunt,
  //     toolEnum.javascript,
  //     toolEnum.jQuery,
  //   ],
  //   children: [
  //     h.getNewID(client.jellyfish, "2021/06/21"),
  //   ],
  // },
  {
    date: "2018/04/01",
    disabled: false,
    description: 'canvas.section.map.modal.enovational.position',
    list: 'canvas.section.map.modal.enovational.summary',
    position: {
      x: -2368,
      y: -299,
    },
    types: [
      typeEnum.group,
      typeEnum.location,
    ],
    roles: [
      roleEnum.frontend,
    ],
    clients: [
      clientEnum.enovational,
    ],
    tools: [
      toolEnum.html,
      toolEnum.vue,
      toolEnum.vueRouter,
      toolEnum.vuex,
      toolEnum.scss,
      toolEnum.slim,
      toolEnum.git,
      toolEnum.rails,
      toolEnum.bootstrap,
      toolEnum.jQuery,
      toolEnum.three,
      toolEnum.svg,
      toolEnum.illustrator,
      toolEnum.photoshop,
      toolEnum.tweenMax,
    ],
    children: [
      h.getNewID(client.enovational, "2018/05/01"),
      h.getNewID(client.enovational, "2018/06/25"),
      h.getNewID(client.enovational, "2018/09/04"),
      h.getNewID(client.enovational, "2019/01/01"),
    ],
  },
].sort(sortByDate);

export { groups as groupsDB };