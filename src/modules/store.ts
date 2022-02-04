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
        sceneRotation: 1,
        grid: true,
        object: "spirit",
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
      cube: {
        cubeRotation: 3,
        pause: false,
        grid: true,
        lines: false,
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
    getCubeSelection: state => state.selection.cube,
    getGearSelection: state => state.selection.gear,
    getWheelSelection: state => state.selection.wheel,
    getLocationSelection: state => state.selection.locations,
    getFilterData: state => state.selection.projects,
    getMeshSelection: state => state.selection.mesh,
    getProjects3DSelection: state => state.selection.projects3d,
  }
});