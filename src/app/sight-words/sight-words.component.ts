
import { Component, OnInit } from '@angular/core';

/// Word list is coma delimited, and needs to be split
export const wordList = {
  // tslint:disable-next-line:max-line-length
  prek: 'a, and, away, big, blue, can, come, down, find, for, funny, go, help, here, I, in, is, it, jump, little, look, make, me, my, not, one, play, red, run, said, see, the, three, to, two, up, we, where, yellow, you',
  // tslint:disable-next-line:max-line-length
  k: 'all, am, are, at, ate, be, black, brown, but, came, did, do, eat, four, get, good, have, he, into, like, must, new, no, now, on, our, out, please, pretty, ran, ride, saw, say, she, so, soon, that, there, they, this, too, under, want, was, well, went, what, white, who, will, with, yes',
  // tslint:disable-next-line:max-line-length
  first: 'after, again, an, any, as, ask, by, could, every, fly, from, give, going, had, has, her, him, his, how, just, know, let, live, may, of, old, once, open, over, put, round, some, stop, take, thank, them, then, think, walk, were, when',
  // tslint:disable-next-line:max-line-length
  second: 'always, around, because, been, before, best, both, buy, call, cold, does, don’t, fast, first, five, found, gave, goes, green, its, made, many, off, or, pull, read, right, sing, sit, sleep, tell, their, these, those, upon, us, use, very, wash, which, why, wish, work, would, write, your',
  // tslint:disable-next-line:max-line-length
  third: 'about, better, bring, carry, clean, cut, done, draw, drink, eight, fall, far, full, got, grow, hold, hot, hurt, if, keep, kind, laugh, light, long, much, myself, never, only, own, pick, seven, shall, show, six, small, start, ten, today, together, try, warm',
  // tslint:disable-next-line:max-line-length
  noun: 'apple, baby, back, ball, bear, bed, bell, bird, birthday, boat, box, boy, bread, brother, cake, car, cat, chair, chicken, children, Christmas, coat, corn, cow, day, dog, doll, door, duck, egg, eye, farm, farmer, father, feet, fire, fish, floor, flower, game, garden, girl, goodbye, grass, ground, hand, head, hill, home, horse, house, kitty, leg, letter, man, men, milk, money, morning, mother, name, nest, night, paper, party, picture, pig, rabbit, rain, ring, robin, Santa Claus, school, seed, sheep, shoe, sister, snow, song, squirrel, stick, street, sun, table, thing, time, top, toy, tree, watch, water, way, wind, window, wood',
};

@Component({
  selector: 'app-sight-words',
  templateUrl: './sight-words.component.html',
  styleUrls: ['./sight-words.component.scss']
})
export class SightWordsComponent implements OnInit {
  word = '';
  list: Array<string>;
  index = -1;
  progress = 50;
  constructor() {
    this.list = wordList['prek'].split(', ');

  }

  ngOnInit() {
  }

  next(): void {
    this.word = this.list[++this.index];
  }

}
