const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const models = require('../schemas and models/data-model.js');
var io = require('../sockets/io');
var methods = require("../methods/request-methods.js");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://stefan:stefan281195@ds129156.mlab.com:29156/macrop", {
    useMongoClient: true,
});

router.get("/getReport/:id", (req, res, next) => {
    let reportId = req.params.id;
    models.reports.findById(reportId, (err, report) => {
        if (err)
            res.send(err);
        else
            res.json(report);
    });
});

router.post("/getReportsOfLeaders", (req, res, next) => {
    let reports = req.body.reports;
    let results = new Array();
    reports.forEach(rep => {
        results.push(models.reports.findById(rep, (err, doc) => {
            if (err)
                res.send(err);
            else {
                return doc;
            }
        }));
    });
    Promise.all(results).then(result => {
        //console.log(result);
        res.json(result);
    });
});

router.post("/getReportsOfTeam/", (req, res, next) => {
    let reports = new Array();
    let result = new Array();
    reports = req.body.reports;
    reports.forEach(el => {
        result.push(models.reports.findById(el, (err, doc) => {
            if (err)
                res.send(err);
            else
                return el;
        }));
    });
    Promise.all(result).then(result => {
        //console.log(result);
        res.json(result);
    });
});

router.post("/getReport", (req, res, next) => {
    let owner = req.body.ownerId;
    let projectId = req.body.projectId;
    //let name = req.body.name;
    console.log(req.body);
    models.reports.findOne({ owner: owner, projectID: projectId }, (err, doc) => {
        if (err)
            res.send(err);
        else {
            res.json(doc);
        }
    });
});

router.post("/createReport", (req, res, next) => {
    let name = req.body.name;
    let owner = req.body.ownerId;
    let type = req.body.type;
    let reports = req.body.reports;
    let data = req.body.data;
    let projectId = req.body.projectId;
    //console.log(req.body);
    models.reports.create({ name: name, owner: owner, type: type, reports: reports, data: data, projectID: projectId }, (err, doc) => {
        if (err)
            res.send(err);
        else {
            console.log(doc.id);
            models.teams.findOne({ $and: [{ projectID: projectId }, { members: owner }] }, (err, team) => {
                if (err)
                    res.send(err);
                else {
                  //  if (team == null) return;
                    models.reports.findOne({
                        $and: [{ owner: team.leader },
                            { projectID: projectId }
                        ]
                    }, (err, report) => {
                        if (err)
                            res.send(err);
                        else {
                            // console.log(report);
                            if (report != null) {
                                report.reports.push(doc._id);
                                report.save();
                            } else {
                                models.reports.create({
                                    name: team.name,
                                    owner: team.leader,
                                    type: "teamReport",
                                    reports: [doc.id],
                                    data: "",
                                    projectID: projectId
                                }, (err, teamLeaderReport) => {
                                    if (err)
                                        res.send(err);
                                    else {
                                        models.reports.findOne({ $and: [{ type: "projectReport" }, { projectID: projectId }] }, (err, prorep) => {
                                            if (err)
                                                res.send(err);
                                            else {
                                                console.log(teamLeaderReport);
                                                if (prorep != null) {
                                                    prorep.reports.push(teamLeaderReport.id);
                                                    prorep.save();
                                                }
                                                else {
                                                    models.reports.create({
                                                        name: "",
                                                        owner: "",
                                                        type: "projectReport",
                                                        reports: [teamLeaderReport.id],
                                                        data: "",
                                                        projectID: projectId
                                                    }, (err, projrep) => {
                                                        if (err)
                                                            res.send(err);
                                                    });
                                                }
                                            }
                                        });
                                    }
                                });
                            }
                        }
                    });
                }
            });
            res.json(doc);
        }
    });
});

router.put("/updateReport", (req, res, next) => {
    let reportId = req.body.reportId;
    let name = req.body.name;
    let owner = req.body.ownerId;
    let type = req.body.type;
    let reports = req.body.reports;
    let data = req.body.data;
    let projectId = req.body.projectId;


    console.log(req.body);
    models.reports.findById(reportId, (err, doc) => {
        if (err)
            res.send(err);
        else {
            doc.name = name;
            doc.owner = owner;
            doc.type = type;
            doc.reports = reports;
            doc.data = data;
            doc.save();
            res.json(doc);
            io.emit("reportUpdated", doc);
        }
    });
});

router.delete("/deleteReport", (req, res, next) => {
    let reportId = req.body.reportId;
    //let name = req.body.name;
    //let projectId = req.body.projectId;
    models.reports.findByIdAndRemove(reportId, (err, doc) => {
        if (err)
            res.send(err);
        else {
            res.json(doc);
            io.emit("reportDeleted", doc);
        }
    });
});

module.exports = router;