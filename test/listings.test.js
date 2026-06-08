const request = require("supertest");
const mongoose = require("mongoose");
const { MongoMemoryServer } = require("mongodb-memory-server");

jest.setTimeout(120000);

let mongoServer;
let app;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();

  process.env.NODE_ENV = "test";
  process.env.ATLASDB_URL = mongoServer.getUri();
  process.env.SECRET_CODE = "test-secret";

  app = require("../app");

  // Wait until app.js finishes connecting.
  await mongoose.connection.asPromise();
});

afterAll(async () => {
  await mongoose.disconnect();

  if (mongoServer) {
    await mongoServer.stop();
  }
});

describe("Listings routes", () => {
  test("GET /listings returns success", async () => {
    const response = await request(app).get("/listings");
    expect(response.statusCode).toBe(200);
  });

  test("GET unknown route returns 404", async () => {
    const response = await request(app).get("/unknown-page");
    expect(response.statusCode).toBe(404);
  });

  test("GET /listings/new redirects guests to login", async () => {
    const response = await request(app).get("/listings/new");
    expect(response.statusCode).toBe(302);
    expect(response.headers.location).toBe("/login");
  });
});