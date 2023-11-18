import supertest from "supertest";
import app from "../../app";

const api = supertest(app);

test("notes are returned as json", async () => {
  const response = await api
    .get("/api/v1/lobbies")
    .expect(200)
    .expect("Content-Type", /application\/json/);

  expect(response.body).toBeDefined();
});
