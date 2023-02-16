const mongoose = require("mongoose")

const StorageSchema = new mongoose.Schema(
    {
        url: {
            type: String
        },
        filename: {
            type: String
        }
    },
    {
        timestamp: true, // TODO createdAt, updatedAt
        versionKey: false
    }
)

module.exports = mongoose.model("storages", StorageSchema) // Nombre de la colección (o de la tabla en SQL)