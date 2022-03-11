import Vue from 'vue';
import Vuex from 'vuex';

import { modalState } from '../store/modal';
import { avatarState } from '../store/avatar';
import { threeState } from '../store/three';
import { gridState } from '../store/grid';
import { gearState } from '../store/gear';
import { pixelState } from '../store/pixel';

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
    modalState,
    selection: {
      threeState,
      gridState,
      gearState,
      avatarState,
      pixelState,
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
        hue: 240,
      },
      projects3d: {
        rotationDelay: 200,
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
      state.selection.gridState.columns.push(payload);
    },
    removeColumn(state, index) {
      state.selection.gridState.columns.splice(index, 1);
    },
  },
  getters: {
    getGridSize: state => state.selection.pixelState.gridSize,
    getPanelVisibility: state => state.panel,
    getPanelSize: state => state.panelSize,
    getTheme: state => state.theme,
    getAlert: state => state.alert,
    getModal: state => state.modalState,
    getStargazeSelection: state => state.selection.stargaze,
    getGridSelection: state => state.selection.gridState,
    getGearSelection: state => state.selection.gearState,
    getWheelSelection: state => state.selection.wheel,
    getLocationSelection: state => state.selection.locations,
    getFilterData: state => state.selection.projects,
    getMeshSelection: state => state.selection.threeState,
    getProjects3DSelection: state => state.selection.projects3d,
    getAvatarSelection: state => state.selection.avatarState,
    getPixelSelection: state => state.selection.pixelState,
    getPixelGridSelection: state => state.selection.pixelState.pixelGrid,
    getLock: state => state.selection.pixelState.lock,
  }
});