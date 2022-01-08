const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const request = require('request');
const fs = require('fs')
require('./Patient');

app.use(bodyParser.json());

const Patient = mongoose.model('patient');

const mongoUri =
    'mongodb+srv://medical:07wThdmDuzg202z8@cluster0.hbrud.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on('connected', () => { });

mongoose.connection.on('error', (err) => { });


app.post('/flask', function (req, res) {
    const x = req.body.id
    request({
        method: "post",
        //url: 'http://0.0.0.0:5000/predict',
        url: 'https://intense-forest-53481.herokuapp.com/predict',
        json: req.body
    }, function (error, response, body) {
        console.log('body:', body);
    }).pipe(
        fs.createWriteStream(x)).on('close', function (message) {
            res.send("Done")
        });


});




app.get('/', (req, res) => {
    Patient.find({})
        .then((data) => {
            res.send(data);
        })
        .catch((err) => { });
});

app.post('/create', (req, res) => {
    const patient = new Patient({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,

        housedust: req.body.housedust,
        cottondust: req.body.cottondust,
        aspergilus: req.body.aspergilus,
        pollen: req.body.pollen,
        parthenium: req.body.parthenium,
        cockroach: req.body.cockroach,
        catdander: req.body.catdander,
        dosfur: req.body.dosfur,
        roaddust: req.body.roaddust,
        olddust: req.body.olddust,
        psdust: req.body.psdust,

        milkp: req.body.milkp,
        milkc: req.body.milkc,
        curd: req.body.curd,
        coffee: req.body.coffee,
        tea: req.body.tea,
        beef: req.body.beef,
        chicken: req.body.chicken,
        mutton: req.body.mutton,
        egg: req.body.egg,
        fisha: req.body.fisha,
        fishb: req.body.fishb,
        crabs: req.body.crabs,
        prawns: req.body.prawns,
        shark: req.body.shark,

        avaraikai: req.body.avaraikai,
        banana: req.body.banana,
        beans: req.body.beans,
        beetroot: req.body.beetroot,
        brinjal: req.body.brinjal,
        cabbage: req.body.cabbage,
        capsicum: req.body.capsicum,
        chillie: req.body.chillie,
        cauliflower: req.body.cauliflower,
        carrot: req.body.carrot,
        chowchow: req.body.chowchow,
        corn: req.body.corn,
        cucumber: req.body.cucumber,
        drumstick: req.body.drumstick,
        greens: req.body.greens,
        gourds: req.body.gourds,
        kovaikai: req.body.kovaikai,
        kothavarai: req.body.kothavarai,
        lfinger: req.body.lfinger,
        malli: req.body.malli,
        mango: req.body.mango,
        mushroom: req.body.mushroom,
        nuckol: req.body.nuckol,
        onion: req.body.onion,
        peas: req.body.peas,
        potroot: req.body.potroot,
        paneer: req.body.paneer,
        potato: req.body.potato,
        pumkin: req.body.pumkin,
        pudina: req.body.pudina,
        radish: req.body.radish,
        tomato: req.body.tomato,
        tondaikai: req.body.tondaikai,
        vazpoo: req.body.vazpoo,
        yams: req.body.yams,

        gram: req.body.gram,
        channa: req.body.channa,
        dhaal: req.body.dhaal,
        maida: req.body.maida,
        oats: req.body.oats,
        ragi: req.body.ragi,
        rice: req.body.rice,
        wheat: req.body.wheat,
        coconut: req.body.coconut,
        oil: req.body.oil,
        garlic: req.body.garlic,
        ginger: req.body.ginger,
        pepper: req.body.pepper,
        tamarind: req.body.tamarind,
        aginomoto: req.body.aginomoto,
        spices: req.body.spices,
        coco: req.body.coco,
        horlicks: req.body.horlicks,
        boost: req.body.boost,
        nuts: req.body.nuts,

        runningnose: req.body.runningnose,
        sneeze: req.body.sneeze,
        cough: req.body.cough,
        wheeze: req.body.wheeze,
        headache: req.body.headache,
        itch: req.body.itch,
        swell: req.body.swell,
        redrashes: req.body.redrashes,
        familyhistory: req.body.familyhistory,

    })
    patient.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
        })
})


app.post('/download', (req, res) => {
    Patient.findById(req.body.id)
        .then(data => {
            const pdfDocument = require('pdfkit')
            const fs = require('fs')
            const doc = new pdfDocument();
            const y = fs.readFileSync(`${data._id}`, 'utf8');
            doc.pipe(fs.createWriteStream(`./downloads/input_${data.name}_${data._id}.pdf`))
            {
                data ?
                    doc.fontSize(10).text(data) : doc.fontSize(10).text("Please predict before generating output", 100, 100)
            }
            doc.addPage()
            {
                y ?
                    doc.fontSize(10).text(JSON.stringify(y)) : doc.fontSize(10).text("Please predict before generating output", 100, 100)
            }
            doc.end()
            var nodemailer = require('nodemailer')
            var transporter = nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: 'clinicbphc864@gmail.com',
                    pass: 'medicalnode'
                }
            })
            var mailoptions = {
                from: 'clinicbphc864@gmail.com',
                to: `${data.email}`,
                subject: 'Sending Email',
                text: `PDF file of
                Report`,
                attachments: [
                    {
                        filename: `input_${data.name}_${data._id}.pdf`,
                        path: `./downloads/input_${data.name}_${data._id}.pdf`,
                    },
                ],
            };

            transporter.sendMail(mailoptions, function (error, info) {
                if (error) {
                    console.log(error);
                } else {
                    console.log(info.response);
                }
            });
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        });
});

app.post('/update', (req, res) => {
    Patient.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email,
        address: req.body.address,
        age: req.body.age,
        gender: req.body.gender,

        housedust: req.body.housedust,
        cottondust: req.body.cottondust,
        aspergilus: req.body.aspergilus,
        pollen: req.body.pollen,
        parthenium: req.body.parthenium,
        cockroach: req.body.cockroach,
        catdander: req.body.catdander,
        dosfur: req.body.dosfur,
        roaddust: req.body.roaddust,
        olddust: req.body.olddust,
        psdust: req.body.psdust,

        milkp: req.body.milkp,
        milkc: req.body.milkc,
        curd: req.body.curd,
        coffee: req.body.coffee,
        tea: req.body.tea,
        beef: req.body.beef,
        chicken: req.body.chicken,
        mutton: req.body.mutton,
        egg: req.body.egg,
        fisha: req.body.fisha,
        fishb: req.body.fishb,
        crabs: req.body.crabs,
        prawns: req.body.prawns,
        shark: req.body.shark,

        avaraikai: req.body.avaraikai,
        banana: req.body.banana,
        beans: req.body.beans,
        beetroot: req.body.beetroot,
        brinjal: req.body.brinjal,
        cabbage: req.body.cabbage,
        capsicum: req.body.capsicum,
        chillie: req.body.chillie,
        cauliflower: req.body.cauliflower,
        carrot: req.body.carrot,
        chowchow: req.body.chowchow,
        corn: req.body.corn,
        cucumber: req.body.cucumber,
        drumstick: req.body.drumstick,
        greens: req.body.greens,
        gourds: req.body.gourds,
        kovaikai: req.body.kovaikai,
        kothavarai: req.body.kothavarai,
        lfinger: req.body.lfinger,
        malli: req.body.malli,
        mango: req.body.mango,
        mushroom: req.body.mushroom,
        nuckol: req.body.nuckol,
        onion: req.body.onion,
        peas: req.body.peas,
        potroot: req.body.potroot,
        paneer: req.body.paneer,
        potato: req.body.potato,
        pumkin: req.body.pumkin,
        pudina: req.body.pudina,
        radish: req.body.radish,
        tomato: req.body.tomato,
        tondaikai: req.body.tondaikai,
        vazpoo: req.body.vazpoo,
        yams: req.body.yams,

        gram: req.body.gram,
        channa: req.body.channa,
        dhaal: req.body.dhaal,
        maida: req.body.maida,
        oats: req.body.oats,
        ragi: req.body.ragi,
        rice: req.body.rice,
        wheat: req.body.wheat,
        coconut: req.body.coconut,
        oil: req.body.oil,
        garlic: req.body.garlic,
        ginger: req.body.ginger,
        pepper: req.body.pepper,
        tamarind: req.body.tamarind,
        aginomoto: req.body.aginomoto,
        spices: req.body.spices,
        coco: req.body.coco,
        horlicks: req.body.horlicks,
        boost: req.body.boost,
        nuts: req.body.nuts,

        runningnose: req.body.runningnose,
        sneeze: req.body.sneeze,
        cough: req.body.cough,
        wheeze: req.body.wheeze,
        headache: req.body.headache,
        itch: req.body.itch,
        swell: req.body.swell,
        redrashes: req.body.redrashes,
        familyhistory: req.body.familyhistory,

    })
        .then(data => {
            res.send(data)
        })
        .catch(err => {
        })
})

app.post('/delete', (req, res) => {
    Patient.findByIdAndRemove(req.body.id)
        .then((data) => {
            res.send(data);
        })
        .catch((err) => { });
});

app.listen(process.env.PORT || 3000, () => {

});