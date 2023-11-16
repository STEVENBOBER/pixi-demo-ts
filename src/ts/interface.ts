import { GameScene } from "../scripts/game/GameScene";
import { Diamond } from "../scripts/game/Diamond";
import { Hero } from "../scripts/game/Hero";
import { Platform } from "../scripts/game/Platform";
import { Slime } from "../scripts/game/Slime";

// interfaces for Config.ts file

interface ScoreConfig {
  x: number;
  y: number;
  anchor: number;
  style: {
    fontFamily: string;
    fontWeight: any;
    fontSize: number;
    fill: string[];
  };
}

// string

interface ChanceOffsetConfig {
  chance: number;
  offset: {
    min: number;
    max: number;
  };
}

interface PlatformConfig {
  moveSpeed: number;
  ranges: {
    rows: {
      min: number;
      max: number;
    };
    cols: {
      min: number;
      max: number;
    };
    offset: {
      min: number;
      max: number;
    };
  };
}

interface HeroConfig {
  jumpSpeed: number;
  maxJumps: number;
  position: {
    x: number;
    y: number;
  };
}

interface ScenesConfig {
  [key: string]: typeof GameScene;
}

export interface ConfigType {
  loader: any;
  bgSpeed: number;
  score: ScoreConfig;
  diamonds: ChanceOffsetConfig;
  slimes: ChanceOffsetConfig;
  platforms: PlatformConfig;
  hero: HeroConfig;
  scenes: ScenesConfig;
}

// interfaces for Diamond.ts file

export interface ExtendedBodyDiamond extends Matter.Body {
  gameDiamond?: Diamond;
}

// interfaces for GameScene.ts file

export interface ExtendedBodyGameScene extends Matter.Body {
  gameHero?: Hero;
  gamePlatform?: Platform;
  gameSlime?: Slime;
  gameDiamond?: Diamond;
}


// interfaces for Hero.ts file

export interface ExtendedBodyHero extends Matter.Body {
  gameHero?: Hero;
}

export interface IDiamond {
  destroy(): void;
}

export interface ISlime {
  destroy(): void;
}

// interfaces for Platform.ts file

export interface ExtendedBodyPlatform extends Matter.Body {
  gamePlatform?: Platform;
}

// interfaces for Platforms.ts file

export interface PlatformData {
  rows: number;
  cols: number;
  x: number;
}

export interface Range {
  min: number;
  max: number;
}

export interface PlatformRanges {
  offset: Range;
  cols: Range;
  rows: Range;
}

// interfaces for Slime.ts file

export interface ExtendedBodySlime extends Matter.Body {
  gameSlime?: Slime;
}