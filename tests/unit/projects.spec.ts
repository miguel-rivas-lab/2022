import '@/modules/commons';

import { tool, toolEnum } from "mr-kernel/enums/tools";
import { role, roleEnum } from "mr-kernel/enums/roles";
import { client, clientEnum } from "mr-kernel/enums/clients";
import { type, typeEnum } from "mr-kernel/enums/types";

import { mount } from "@vue/test-utils";
import Gallery from "@/components/gallery.vue";

const users = {
  "name": "Jesus",
  "middleName": "Miguel",
  "lastName": "Rivas",
  "title": "Frontend Developer",
  "website": "miguel-rivas.github.io",
  "location": {
    "city": "Washington",
    "state": "DC"
  },
  "media": {
    "codepen": {
      "user": "planetwurlex"
    },
    "issuu": {
      "user": "jemiguelrivas"
    },
    "linkedin": {
      "user": "jemiguelrivas"
    },
    "github": {
      "user": "jemiguelrivas",
      "development": "miguel-rivas-lab",
      "production": "miguel-rivas"
    }
  }
};

const linkWeb = (item) => `https://${users.media.github.production}.github.io/${item}`;

describe('Gallery component unit tests: ', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Gallery, {
      propsData: {
        db: [
        {
          "title": "Destapa el Coro",
          "clients": [client[clientEnum.presidente]],
          "types": [type[typeEnum.graphicDesign]],
          "date": "2014/12/05",
          "disabled": false,
          "links": [
            { url: linkWeb("2018/presidente.html"), text: "Presidente" },
          ],
          "roles": [
            role[roleEnum.frontend],
          ],
          "tools": [
            tool[toolEnum.scss],
            tool[toolEnum.javascript],
          ],
          "image": "https://miguel-rivas.github.io/zapp/img/preview.png",
          "children": []
        },
        {
          "title": "Cover",
          "clients": [client[clientEnum.presidente]],
          "types": [type[typeEnum.landingPage]],
          "date": "2021/03/24",
          "disabled": true,
          "links": [],
          "roles": [
            role[roleEnum.frontend],
          ],
          "tools": [
            tool[toolEnum.scss],
            tool[toolEnum.typescript],
          ],
          "image": "https://miguel-rivas.github.io/zapp/img/preview.png",
          "children": []
        }
      ]
      },
    });
    console.log(wrapper.html());
    expect(wrapper.isVueInstance()).toBeTruthy();
    // expect(wrapper.html()).toMatchSnapshot();
  });
});