import { createServer } from "miragejs";
import { moviesList } from "../data/movies";

export function makeServer() {
  const server = createServer({
    routes() {
      this.get("/recommendations", () => moviesList);
      this.put("/recommendations/:id/accept", (_schema, request) => {
        const id = request.params.id;
        return {id};
      });
      this.put("/recommendations/:id/reject", (_schema, request) => {
        const id = request.params.id;
        return {id};
      });
    },
  });

  return server;
}
