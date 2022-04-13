import helpers from "../modules/helpers";
import { projectsDB as rawDB } from "../db/projects";
import { groupsDB as rawGroupsDB } from "../db/groups";

export function sortByDate(a, b) {
  return helpers.dateToNumber(b.date) - helpers.dateToNumber(a.date);
}

/* ------------------------------------- */

function uncompressProjectsDBtoJSON(db) {
  const result = {};
  db.forEach(entry => {

    const disabled = entry.disabled ? true : false;
    const children = entry.children || [];

    const tools = entry.tools;

    const clients = entry.clients;

    const types = entry.types;

    let links = [];
    if (entry.links?.length > 0) {
      links = entry.links.map(
        link => {
          const params = link.params?.length ? `?${link.params.join("&")}` : '';
          const url = link.url;

          return {
            "url": `${url}${params}`,
            "text": link.text,
            "self": link.self,
          }
        }
      );
    }

    const project = {
      "title": entry.title,
      "clients": clients,
      "date": entry.date,
      "turingDate": helpers.turingDate(entry.date),
      "types": types,
      "links": links,
      "disabled": disabled,
      "tools": tools,
      "children": children,
      "group": false,
      "location": false,
      "image": entry.image,
    };

    const id = helpers.getNewID(project.clients[0], project.date);
    
    result[id] = project;
  });

  return result;
}

function uncompressGroupsDBtoJSON(groups) {
  const result = {};
  groups.forEach(group => {
    let position = { lat: '', lng: '' };
    
    if (group.location) {
      position = group.position;
    }

    const project = {
      "title": group.clients[0],
      "clients": group.clients,
      "date": group.date,
      "turingDate": helpers.turingDate(group.date),
      "types": undefined,
      "group": group.group,
      "location": group.location,
      "links": [],
      "disabled": group.disabled,
      "tools": group.tools,
      "children": group.children,
      "image": "",
      "position": position,
      "description": group.description,
      "list": group.list,
      "image": group.image,
    };

    const id = helpers.getNewID(project.clients[0], project.date);

    result[id + "_group"] = project;
  });

  return result;
}


/* ------------------------------------- */

export function allTools() {
  let tools = {};
  let result = [];

  projectsDBList.forEach((project) => {
    if (typeof project.tools !== "undefined") {
      project.tools.forEach((tool) => {
        if (typeof tools[tool] === "undefined") {
          tools[tool] = 1;
        } else {
          tools[tool]++;
        }
      });
    }
  });

  let keys = Object.keys(tools);
  let values = Object.values(tools);

  keys.forEach((key, index) => {
    let newItem = new Object();
    newItem["skill"] = key;
    newItem["total"] = values[index];
    result.push(newItem);
  });

  return result;
}

export function allDates() {
  let dates = {};
  let result = [];

  projectsDBList.forEach((project) => {
    if (typeof project.turingDate !== "undefined") {
      let key = project.turingDate.split(" ")[0].substring(1);

      if (typeof dates[key] === "undefined") {
        dates[key] = 1;
      } else {
        dates[key]++;
      }
    }
  });

  let keys = Object.keys(dates);
  let values = Object.values(dates);

  keys.forEach((key, index) => {
    let newItem = new Object();
    newItem["date"] = key;
    newItem["total"] = values[index];
    result.push(newItem);
  });

  return result;
}

/* ------------------------------------- */

export const projectsDBObj = uncompressProjectsDBtoJSON(rawDB);
export const projectsDBList = Object.values(projectsDBObj).sort(sortByDate);

export const groupsDBObj = uncompressGroupsDBtoJSON(rawGroupsDB);
export const groupsDBList = Object.values(groupsDBObj).sort(sortByDate);

export const locationsDBList = groupsDBList.filter((item) => item.location);
export const allDBObj = {...projectsDBObj, ...groupsDBObj};
export const allDBListVisible = Object.values(allDBObj).filter((item) => !item.disabled).sort(sortByDate);
