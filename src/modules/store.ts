import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    panel: false,
    panelSize: ['300', '100%-350'],
    theme: false,
    alert: {
      message: "",
      status: "",
    },
    modal: {
      hidden: true,
      data: {
        title: "",
        description: "",
        date: "",
        image: "",
        list: [],
        tools: [],
      },
    },
    selection: {
      locations: {
        mapCenter: {
          x: 0,
          y: 0,
        },
      },
      avatar: {
        height: 0.9,
        shirt: true,
        pants: true,
        shoes: true,
        beard: true,
        topHair: true,
        sideHair: true,
        rightPocket: true,
        leftPocket: true,
        buttons: true,
        belt: true,
        skinColor: {hex8: "#daad7fff"},
        skinColor2: {hex8: "#d28d5fff"},
        lipsColor: {hex8: "#d28d5fff"},
        shirtColor: {hex8: "#333333ff"},
        armSleeveColor: {hex8: "#333333ff"},
        pantsColor: {hex8: "#939393ff"},
        pantsLegColor: {hex8: "#939393ff"},
        shoeColor: {hex8: "#222222ff"},
        beardColor: {hex8: "#6d5542ff"},
        hairColor: {hex8: "#6d5542ff"},
        hairSideColor: {hex8: "#6d5542ff"},
        beltColor: {hex8: "#111111ff"},
        pocketColor: {hex8: "#44444440" },
        armSleeveLengthPercent: 95 / 100,
        shirtLengthPercent: 100 / 100,
        pantsLegLengthPercent: 100 / 100,
        pantsFit: 0,
        happiness: 5,
      },
      projects: {
        filterData: 'all',
        currentLink: {
          src: "",
          frameborder: "0",
          allowfullscreen: true
        },
      },
      stargaze: {
        hue: 220,
      },
      mesh: {
        grid: true,
        sceneRotation: 3,
        pause: false,
        lines: false,
        bookletOpening: 1,
      },
      projects3d: {
        rotationDelay: 200,
      },
      grid: {
        row: "Row",
        integrate: false,
        breakpoint: "-",
        spacing: 0,
        columns: [],
      },
      gear: {
        cornerAmount: 40,
        outterCircleRadius: 50,
        innerCircleRadius: 45,
        mainPerforationRadius: 5,
        sidePerforationAmount: 4,
        sidePerforationRadius: 12,
        sidePerforationDistance: 25,
      },
      wheel: {
        colors: 12,
      }
    },
  },
  mutations: {
    setValue(state, payload) {
      state[payload.name] = payload.value;
    },
    setProject(state, payload) {
      state.selection.projects.currentLink.src = payload.value;
    },
    centerMap(state, payload) {
      state.selection.locations.mapCenter = payload.position;
    },
    toggleValue(state, payload) {
      state[payload] = !state[payload];
    },
    addColumn(state, payload) {
      state.selection.grid.columns.push(payload);
    },
    removeColumn(state, index) {
      state.selection.grid.columns.splice(index, 1);
    },
  },
  getters: {
    getPanelVisibility: state => state.panel,
    getPanelSize: state => state.panelSize,
    getTheme: state => state.theme,
    getAlert: state => state.alert,
    getModal: state => state.modal,
    getStargazeSelection: state => state.selection.stargaze,
    getGridSelection: state => state.selection.grid,
    getGearSelection: state => state.selection.gear,
    getWheelSelection: state => state.selection.wheel,
    getLocationSelection: state => state.selection.locations,
    getFilterData: state => state.selection.projects,
    getMeshSelection: state => state.selection.mesh,
    getProjects3DSelection: state => state.selection.projects3d,
    getAvatarSelection: state => state.selection.avatar,
  }
});