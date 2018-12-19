import axios from "axios";

axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization:
      "Client-ID c722fdd72f718c5ec7b3afc33c6ba15e3ab4a1bcd51b3b30e448e1f1dd0cbb48"
  }
});
