import i18n from "../i18n";

export enum typeEnum {
  userFlow = 100,
  wireFrame,
  app,
  prototype,
  landingPage,
  motionGraphics,
  animation3D,
  document,
  module,
  socialMedia,
  graphicDesign,
  group,
  location,
}

export const type = {
  userFlow: i18n.t("enum.projectsType.userFlow"),
  wireFrame: i18n.t("enum.projectsType.wireFrame"),
  app: i18n.t("enum.projectsType.app"),
  prototype: i18n.t("enum.projectsType.prototype"),
  landingPage: i18n.t("enum.projectsType.landingPage"),
  motionGraphics: i18n.t("enum.projectsType.motionGraphics"),
  animation3D: i18n.t("enum.projectsType.animation3D"),
  document: i18n.t("enum.projectsType.document"),
  module: i18n.t("enum.projectsType.module"),
  socialMedia: i18n.t("enum.projectsType.socialMedia"),
  graphicDesign: i18n.t("enum.projectsType.graphicDesign"),
  group: i18n.t("enum.projectsType.group"),
  location: i18n.t("enum.projectsType.location"),
};