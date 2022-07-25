const mongoose = require("mongoose");

const zoneSchema = new mongoose.Schema(
    {
        timezone: {
            type: String,
            required: true,
            uppercase: true
       }
    })


const zoneModel = mongoose.model("zoneModel", zoneSchema);

module.exports = zoneModel;
















