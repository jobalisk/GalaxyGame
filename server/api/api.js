const { Router } = require("express");

let API = function() {
  const router = Router();

  router.get("/get", (req, res) => {
    console.log("get people");
  });

  // resources
  // players
  router.get("/player/overview/:playerID", (req, res) => {
    // gets resources
  });

  router.post("/upgrade/building", (req, res) => {});

  router.post("/build/fleet", (req, res) => {});

  router.post("/colonize/:playerId", (res, req) => {
    // call this when  
  })

  router.post("/research", (res, req) => {});
  router.post("/research", (res, req) => {});
  router.post("/research", (res, req) => {});


  return router;
}

modules.export = API;