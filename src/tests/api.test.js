const request = require("supertest");

const app = require("../app");

// Testing get all users endpoint
describe("POST /api", () => {
  it("respond with 202(Accepted), data send = {date:2022-10-12,period:monthly}", (done) => {
    const data = {
      date: "2022-10-12",
      period: "monthly",
    };
    request(app)
      .post("/api")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(202)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 202(Accepted), data send = {date:2022-10-12,period:weekly}", (done) => {
    const data = {
      date: "2022-10-12",
      period: "weekly",
    };
    request(app)
      .post("/api")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(202)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 202(Accepted), data send = {date:2022-10-12,period:daily}", (done) => {
    const data = {
      date: "2022-10-12",
      period: "daily",
    };
    request(app)
      .post("/api")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(202)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });

  it("respond with 202(Accepted), data send = {date:2022-10-26,period:monthly}", (done) => {
    const data = {
      date: "2022-10-26",
      period: "monthly",
    };
    request(app)
      .post("/api")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(202)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 202(Accepted), data send = {date:2022-10-26,period:weekly}", (done) => {
    const data = {
      date: "2022-10-26",
      period: "weekly",
    };
    request(app)
      .post("/api")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(202)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 202(Accepted), data send = {date:2022-10-26,period:daily}", (done) => {
    const data = {
      date: "2022-10-26",
      period: "daily",
    };
    request(app)
      .post("/api")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(202)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400(Bad request), data send = {date:2022-10-26,period:something}", (done) => {
    const data = {
      date: "2022-10-26",
      period: "something",
    };
    request(app)
      .post("/api")
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
  it("respond with 400(Bad request), no data send", (done) => {
    request(app)
      .post("/api")
      .set("Accept", "application/json")
      .expect("Content-type", /json/)
      .expect(400)
      .end((err) => {
        if (err) return done(err);
        done();
      });
  });
});

describe("GET /api/:date/:period", () => {
  it("respond with json containing a monthly energy consumption list , date used: 2022-10-12", (done) => {
    request(app)
      .get("/api/2022-10-12/monthly")
      .set("Accept", "/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("respond with json containing a weekly energy consumption list, date used: 2022-10-12", (done) => {
    request(app)
      .get("/api/2022-10-12/weekly")
      .set("Accept", "/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("respond with json containing a daily energy consumption list, date used: 2022-10-12", (done) => {
    request(app)
      .get("/api/2022-10-12/daily")
      .set("Accept", "/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("respond with json containing a monthly energy consumption list , date used: 2022-10-26", (done) => {
    request(app)
      .get("/api/2022-10-26/monthly")
      .set("Accept", "/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("respond with json containing a weekly energy consumption list, date used: 2022-10-26", (done) => {
    request(app)
      .get("/api/2022-10-26/weekly")
      .set("Accept", "/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("respond with json containing a daily energy consumption list, date used: 2022-10-26", (done) => {
    request(app)
      .get("/api/2022-10-26/daily")
      .set("Accept", "/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
  it("respond with json containing a message saying invalid period", (done) => {
    request(app)
      .get("/api/2022-10-26/something")
      .set("Accept", "/json")
      .expect("Content-Type", /json/)
      .expect(400, done);
  });
});
