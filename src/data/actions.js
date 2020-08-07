import {
  GET_OVERVIEW,
  TEST_CONSTANT_VAR,
  GET_PIE,
  GET_LINE,
} from "./constants";

export function checkMyAction() {
  return { type: TEST_CONSTANT_VAR };
}
export function getOverview(params) {
  return { type: GET_OVERVIEW, payload: params };
}
export function getPie(params) {
  return { type: GET_PIE, payload: params };
}
export function getLine(params) {
  return { type: GET_LINE, payload: params };
}
