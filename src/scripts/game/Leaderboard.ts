import * as PIXI from 'pixi.js';
import { App } from "../system/App";
import { Scores } from "../system/Scores";


export class Leaderboard {
  public container: PIXI.Container;
  constructor() {
    this.container = new PIXI.Container();
    const entryStyle = new PIXI.TextStyle({
      fontFamily: 'Verdana',
      fontSize: 18,
      fill: 0xFF6229,
    });

    const playerScores = this.loadScores();

    // console.log(playerScores, `PS`)

    const sortedScores = Object.entries(playerScores).sort((
      [, scoreA], [, scoreB]) => (scoreB as number) - (scoreA as number)
    );
    // console.log(sortedScores, `sorted`)
    const entryCount: number = Math.min(sortedScores.length, 10);
    const entryHeight: number = 30;
    const leaderboardWidth: number = 170;
    const leaderboardX: number = window.innerWidth - leaderboardWidth - 10;

    const background: PIXI.Graphics = new PIXI.Graphics();
    background.beginFill(0xFFFFFF, 0.7);
    background.drawRect(0, 0, leaderboardWidth, entryCount * entryHeight);
    background.endFill();
    this.container.addChild(background);

    for (let i = 0; i < entryCount; i++) {
      const [playerName, score] = sortedScores[i];
      // console.log(score, `before update`)
      const entryText: PIXI.Text = new PIXI.Text(`${playerName}: ${score}`, entryStyle);
      entryText.anchor.set(0, 0.5);
      entryText.position.set(10, i * entryHeight + 10);
      this.container.addChild(entryText);
    }

    this.container.position.set(leaderboardX, window.innerHeight - entryCount * entryHeight - 10);
    this.container.width = leaderboardWidth;
    this.container.height = entryCount * entryHeight;
    this.container.visible = true;



    if (App.stage) {
      App.stage.addChild(this.container);
    }
  }

  loadScores() {
    return JSON.parse(localStorage.getItem('highscore')) || Scores;
  }

  updateScore(playerName: string, newScore: number) {
    const scores = this.loadScores();
    scores[playerName] = newScore;
    // console.log(scores, `score-updated`)
    localStorage.setItem('highscore', JSON.stringify(scores));
  }



  show() {
    this.container.visible = true;
  }
}