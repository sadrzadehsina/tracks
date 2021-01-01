const { createServer, Model } = require("miragejs");

const makeServer = ({ environment }) => {
  const server = createServer({
    environment,

    models: {
      track: Model,
    },

    seeds(server) {
      server.create("track", {
        id: 1,
        title: "Don' Start Now",
        singer: "Dua Lipa",
        url: "https://download1644.mediafire.com/dfqhijt7qilg/vd8z53x9t7ffeao/HolFix+-+Basic+Fun.mp3",
				year: "2019",
				cover: "https://source.unsplash.com/200x200/?song",
      });
      server.create("track", {
        id: 2,
        title: "New Rules",
        singer: "Dua Lipa",
        url: "https://download1584.mediafire.com/f2xw1jqzgitg/b3kjnbev92qaiji/HolFix+-+Finally+Home.mp3",
				year: "2017",
				cover: "https://source.unsplash.com/200x200/?song",
      });
      server.create("track", {
        id: 3,
        title: "UN DIA",
        singer: "Dua Lipa",
        url: "https://download1481.mediafire.com/zrc2x53lyfyg/86ud296qa9s84ql/HolFix+-+Last+Stand.mp3",
				year: "2015",
				cover: "https://source.unsplash.com/200x200/?song",
      });
      server.create("track", {
        id: 4,
        title: "Break My Heart",
        singer: "Dua Lipa",
        url: "https://download1507.mediafire.com/atfr8ycbz90g/tp9kdy7euln9tgb/HolFix+-+Something+in+the+Wind.mp3",
				year: "2013",
				cover: "https://source.unsplash.com/200x200/?song",
      });
    },

    routes() {
      this.namespace = "api";

      this.passthrough('https://www.googleapis.com/**');
      this.passthrough('https://securetoken.googleapis.com/**');
      this.passthrough('https://play.google.com/**');
      this.passthrough('https://accounts.google.com/**');

      this.get("/tracks", (schema) => schema.tracks.all());
    },
  });

  return server;
};

export { makeServer };
