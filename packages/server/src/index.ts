import { config } from "dotenv";
import { IS_IN_DEVELOPMENT } from "./consts.js";
config({
  path: IS_IN_DEVELOPMENT ? ".env.local.development" : ".env.local.production",
});
import express from "express";
import cors from "cors";
import { createServer } from "http";
import Bionify from "./classes/Bionify.js";

const PORT = process.env.PORT || 4000;
const app = express();
const httpServer = createServer(app);

app.use(cors());

const bionify = new Bionify(0.7);

app.get("/", (req, res) => {
  const bionifiedText = bionify.transform(`
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed enim ut sem viverra aliquet eget. Amet est placerat in egestas erat. Vel pharetra vel turpis nunc eget lorem. Eu sem integer vitae justo eget magna fermentum iaculis. Urna porttitor rhoncus dolor purus non enim praesent. Aliquet bibendum enim facilisis gravida neque convallis a cras. Purus in mollis nunc sed id semper risus. Enim ut tellus elementum sagittis vitae et. Lectus urna duis convallis convallis.

Neque sodales ut etiam sit amet nisl purus in. Tortor posuere ac ut consequat semper viverra nam libero. Scelerisque viverra mauris in aliquam sem fringilla. Augue neque gravida in fermentum et sollicitudin ac orci. Sed viverra ipsum nunc aliquet. In tellus integer feugiat scelerisque varius morbi enim. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus. Sodales ut eu sem integer vitae justo eget magna. Aliquet bibendum enim facilisis gravida. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Lacus sed turpis tincidunt id aliquet risus. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Libero nunc consequat interdum varius sit amet. Pellentesque adipiscing commodo elit at. Integer malesuada nunc vel risus commodo viverra maecenas accumsan. Eget egestas purus viverra accumsan in. Dolor sit amet consectetur adipiscing. Fames ac turpis egestas maecenas pharetra convallis. Ut enim blandit volutpat maecenas.

Phasellus faucibus scelerisque eleifend donec pretium. Enim facilisis gravida neque convallis a cras semper auctor neque. Faucibus in ornare quam viverra orci sagittis eu. Sit amet massa vitae tortor condimentum lacinia quis. Euismod elementum nisi quis eleifend. Nibh tortor id aliquet lectus proin. Ac odio tempor orci dapibus ultrices in iaculis nunc. Egestas diam in arcu cursus euismod quis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Et sollicitudin ac orci phasellus egestas tellus rutrum tellus. Sed adipiscing diam donec adipiscing tristique risus.

Ac feugiat sed lectus vestibulum mattis ullamcorper. Facilisis gravida neque convallis a. Egestas erat imperdiet sed euismod nisi. Ut eu sem integer vitae justo eget magna fermentum. Egestas fringilla phasellus faucibus scelerisque eleifend donec pretium vulputate sapien. Vehicula ipsum a arcu cursus vitae congue. Urna id volutpat lacus laoreet non curabitur gravida arcu ac. Suscipit adipiscing bibendum est ultricies integer quis auctor elit sed. Dui vivamus arcu felis bibendum ut tristique et. Nulla aliquet porttitor lacus luctus accumsan tortor posuere ac. Egestas congue quisque egestas diam. Id porta nibh venenatis cras sed felis. Semper eget duis at tellus at urna condimentum mattis. Egestas erat imperdiet sed euismod nisi. Fringilla phasellus faucibus scelerisque eleifend donec. Metus vulputate eu scelerisque felis imperdiet proin fermentum. Ullamcorper eget nulla facilisi etiam dignissim. Montes nascetur ridiculus mus mauris. Arcu cursus vitae congue mauris rhoncus aenean.

Consequat id porta nibh venenatis cras sed felis eget velit. Facilisis gravida neque convallis a cras semper auctor. Morbi leo urna molestie at elementum eu facilisis. Vestibulum lorem sed risus ultricies tristique nulla aliquet enim tortor. Nunc consequat interdum varius sit amet mattis. Id eu nisl nunc mi ipsum faucibus vitae. Interdum varius sit amet mattis vulputate enim nulla aliquet porttitor. Ultrices dui sapien eget mi proin sed libero enim. Malesuada bibendum arcu vitae elementum. Donec et odio pellentesque diam.
  `);

  let toSend =
    "<style>* { margin: 0; padding: 0; font-size: 1.1rem; } .big { font-size: 1.25rem; text-decoration: underline; } body { padding: 1rem; overflow: auto; whitespace: normal; word-break: break-words }</style> <p>";

  for (let idx = 0; idx < bionifiedText.length; ++idx) {
    toSend +=
      "<b class='big'>" +
      bionifiedText[idx].highlightedText +
      "</b>" +
      bionifiedText[idx].unhighlightedText +
      " ";
  }

  toSend += "</p>";

  res.send(toSend);
});

httpServer.listen(+PORT, IS_IN_DEVELOPMENT ? undefined : "0.0.0.0", () => {
  console.log(`Port is running on *:${PORT}`);
});
