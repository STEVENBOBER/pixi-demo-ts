import * as PIXI from "pixi.js";
import { Config } from "../scripts/game/Config";

// types for Loader.ts file

export type LoaderType = PIXI.Loader;

export type AssetType = typeof Config.loader[number];