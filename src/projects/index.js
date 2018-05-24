import cheat from "./cheat_3_2.png";
import cheatGif from "./cheat_3_2.gif";
import greedy from "./greedy_3_2.png";
import greedyGif from "./greedy_3_2.gif";
import safe from "./safe_3_2.png";
import safeGif from "./safe_3_2.gif";
import sog from "./sog_3_2.png";
import sogGif from "./sog_3_2.gif";
import sp4x from "./sp4x_3_2.png";
import sp4xGif from "./sp4x_3_2.gif";
import tiny from "./tiny_3_2.png";
import tinyGif from "./tiny_3_2.gif";

// Spells of Genesis: https://spellsofgenesis.com/
// Procedural Stellar System Generator: http://asteroidlab.com/demos/sp4x/
// Cheat N Teach: https://i3.itch.io/cheatnteach
// You re Safe Now: https://globalgamejam.org/2017/games/youre-safe-now
// Greedy Mummy II: https://ldjam.com/events/ludum-dare/40/greedy-mummy-ii
// Tiny Defender: https://ldjam.com/events/ludum-dare/38/tiny-defenders

const projects = [
  {
    title: "Spells of Genesis",
    description:
      "A deck-building & card-collecting mobile game with blockchain assets",
    image: sog,
    gif: sogGif,
    link: "https://spellsofgenesis.com",
    featured: true
  },
  {
    title: "Greedy Mummy II",
    description:
      "A web game where explore tombs for it's treasures but beware the mummies",
    image: greedy,
    gif: greedyGif,
    link: "https://ldjam.com/events/ludum-dare/40/greedy-mummy-ii",
    featured: true
  },
  {
    title: "Tiny Defender",
    description:
      "A web game where your defend you planet against incoming asteroids",
    image: tiny,
    gif: tinyGif,
    link: "https://ldjam.com/events/ludum-dare/38/tiny-defenders",
    featured: true
  },
  {
    title: "Procedural Stellar System Generator",
    description:
      "A procedural generator creating realistic and to real scale stellar systems",
    image: sp4x,
    gif: sp4xGif,
    link: "http://asteroidlab.com/demos/sp4x",
    featured: true
  },
  {
    title: "You're Safe Now",
    description:
      "A pc game where you fend off debries with a wave gun in space",
    image: safe,
    gif: safeGif,
    link: "https://globalgamejam.org/2017/games/youre-safe-now",
    featured: true
  },
  {
    title: "Cheat'n'Teach",
    description:
      "A 4-player game where you try to cheat and not get caught by the teacher",
    image: cheat,
    gif: cheatGif,
    link: "https://i3.itch.io/cheatnteach",
    featured: true
  }
];

export default projects;
