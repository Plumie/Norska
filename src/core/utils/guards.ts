import { Object3D } from "three";

export const isArray = (value: unknown): value is unknown[] => Array.isArray(value);

export const isObject = (value: unknown): value is Record<string, unknown> => value != null && value.constructor.name === "Object";

export const isObject3D = (value: unknown): value is Object3D => value instanceof Object3D;
