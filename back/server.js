const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const axios = require("axios");
const bodyParser = require("body-parser");
const multer = require('multer');
const fs = require('fs');
const path = require('path');

require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());


// Connect to MongoDB Compass (Replace `<your_database_name>` with your actual database name)
mongoose
    .connect(process.env.MONG)
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Login Route
app.post("/login", async(req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {


        if (email == "a@a.com" && password == "a") {
            res.status(200).json({ message: "r4y378f8wr84tg78egwnif9" });
        } else {
            res.status(401).json({ message: "Invalid email or password" });
        }
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
app.post("/chack", async(req, res) => {
    const { cock } = req.body;

    if (cock == "r4y378f8wr84tg78egwnif9") {
        return res.status(200).json({ message: false });
    } else {
        return res.status(200).json({ message: true });
    }
});
// Start Server
app.get("/get/:id", async(req, res) => {
    const id = req.params.id;

    try {
        const data = await mongoose.connection.collection("srgp").findOne({ _id: new mongoose.Types.ObjectId(id) });

        if (!data) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
app.post("/update/:id", async(req, res) => {
    const id = req.params.id;
    const { update,href, auth } = req.body;

    if (!update) {
        return res.status(400).json({ message: "Update text is required" });
    }
    if (auth != "r4y378f8wr84tg78egwnif9") {
        return res.status(400).json({ message: "Wronge credenditails" });
    }

    try {
        const result = await mongoose.connection.collection("srgp").updateOne({ _id: new mongoose.Types.ObjectId(id) }, { $set: { update: update,href:href } });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Document not found" });
        }

        res.status(200).json({ message: "Update successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
app.post("/updateIMG/:id", async(req, res) => {
    const id = req.params.id;
    const { fi, si, ti, auth } = req.body;

    if (!fi & !si & !ti) {
        return res.status(400).json({ message: "Update text is required" });
    }
    if (auth != "r4y378f8wr84tg78egwnif9") {
        return res.status(400).json({ message: "Wronge credenditails" });
    }
    try {
        const result = await mongoose.connection.collection("srgp").updateOne({ _id: new mongoose.Types.ObjectId(id) }, {
            $set: {
                first_img: fi,
                secande_img: si,
                therd_img: ti
            }
        });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Document not found" });
        }

        res.status(200).json({ message: "Update successful" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});

const DataSchemaTable = new mongoose.Schema({

    table: String
});

// Create Model
const DataModel = mongoose.model("table", DataSchemaTable);

// POST API to store data
app.post("/api/store-table", async(req, res) => {
    try {
        const { table, auth } = req.body;
        if (auth != "r4y378f8wr84tg78egwnif9") {
            return res.status(400).json({ message: "Wronge credenditails" });
        }
        const newData = new DataModel({ table });
        await newData.save();

        res.status(201).json({ message: "Data saved successfully" });
    } catch (error) {
        res.status(500).json({ error: "Failed to save data" });
    }
});
app.get("/api/Table", async(req, res) => {
    try {

        // Generate the collection name based on email
        const collectionName = "tables";

        // Check if the collection exists in MongoDB
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionExists = collections.some(col => col.name === collectionName);

        if (!collectionExists) {
            return res.status(200).json({ table: [] }); // Return empty array instead of error
        }

        // Check if model exists in Mongoose cache
        let TableModel;
        if (mongoose.models[collectionName]) {
            TableModel = mongoose.models[collectionName]; // Use existing model
        } else {
            // Define a schema dynamically if not defined
            const tablechema = new mongoose.Schema({
                table: String
            }, { collection: collectionName });

            TableModel = mongoose.model(collectionName, tablechema);
        }

        // Fetch table from the user-specific collection
        const table = await TableModel.find();

        return res.status(200).json(table);
    } catch (error) {
        console.error("Error retrieving table:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.get("/api/Event", async(req, res) => {
    try {

        // Generate the collection name based on email
        const collectionName = "events";

        // Check if the collection exists in MongoDB
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionExists = collections.some(col => col.name === collectionName);

        if (!collectionExists) {
            return res.status(200).json({ event: [] }); // Return empty array instead of error
        }

        // Check if model exists in Mongoose cache
        let eventModel;
        if (mongoose.models[collectionName]) {
            eventModel = mongoose.models[collectionName]; // Use existing model
        } else {
            // Define a schema dynamically if not defined
            const eventchema = new mongoose.Schema({
                img: String,
                had: String,
                p: String
            }, { collection: collectionName });

            eventModel = mongoose.model(collectionName, eventchema);
        }

        // Fetch event from the user-specific collection
        const event = await eventModel.find();

        return res.status(200).json(event);
    } catch (error) {
        console.error("Error retrieving event:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.get("/api/news", async(req, res) => {
    try {

        // Generate the collection name based on email
        const collectionName = "newss";

        // Check if the collection exists in MongoDB
        const collections = await mongoose.connection.db.listCollections().toArray();
        const collectionExists = collections.some(col => col.name === collectionName);

        if (!collectionExists) {
            return res.status(200).json({ news: [] }); // Return empty array instead of error
        }

        // Check if model exists in Mongoose cache
        let newsModel;
        if (mongoose.models[collectionName]) {
            newsModel = mongoose.models[collectionName]; // Use existing model
        } else {
            // Define a schema dynamically if not defined
            const newschema = new mongoose.Schema({
                img: String,
                had: String,
                p: String
            }, { collection: collectionName });

            newsModel = mongoose.model(collectionName, newschema);
        }

        // Fetch news from the user-specific collection
        const news = await newsModel.find();

        return res.status(200).json(news);
    } catch (error) {
        console.error("Error retrieving news:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.get("/api/news/:id", async(req, res) => {
    const id = req.params.id;

    try {
        const data = await mongoose.connection.collection("newss").findOne({ _id: new mongoose.Types.ObjectId(id) });

        if (!data) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
app.get("/api/event/:id", async(req, res) => {
    const id = req.params.id;

    try {
        const data = await mongoose.connection.collection("events").findOne({ _id: new mongoose.Types.ObjectId(id) });

        if (!data) {
            return res.status(404).json({ message: "Data not found" });
        }

        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
});
app.post('/api/addevent', async(req, res) => {
    const ContentSchema = new mongoose.Schema({
        img: String,
        had: String,
        p: String
    });
    const Content = mongoose.models.events || mongoose.model('events', ContentSchema);
    try {
        const { auth, img, had, p } = req.body;
        if (auth != "r4y378f8wr84tg78egwnif9") {
            return res.status(400).json({ message: "Wronge credenditails" });
        }
        const newContent = new Content({ img, had, p });

        await newContent.save();
        res.status(201).json({ message: 'Content saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save content' });
    }
});
app.post('/api/addnews', async(req, res) => {
    const ContentSchema = new mongoose.Schema({
        img: String,
        had: String,
        p: String
    });
    const Content = mongoose.models.newss || mongoose.model('newss', ContentSchema);
    try {
        const { auth, img, had, p } = req.body;
        if (auth != "r4y378f8wr84tg78egwnif9") {
            return res.status(400).json({ message: "Wronge credenditails" });
        }
        const newContent = new Content({ img, had, p });

        await newContent.save();
        res.status(201).json({ message: 'Content saved successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to save content' });
    }
});
app.put('/api/eventup/:id', async(req, res) => {
    try {
        const { cookieValue, image, title, description } = req.body;
        if (cookieValue != "r4y378f8wr84tg78egwnif9") {
            return res.status(400).json({ message: "Wronge credenditails" });
        }

        const result = await mongoose.connection.collection("events").updateOne({ _id: new mongoose.Types.ObjectId(req.params.id) }, { $set: { img: image, had: title, p: description } })
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.json({ message: 'Content updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update content' });
    }
});
app.put('/api/newsup/:id', async(req, res) => {
    try {
        const { cookieValue, image, title, description } = req.body;
        if (cookieValue != "r4y378f8wr84tg78egwnif9") {
            return res.status(400).json({ message: "Wronge credenditails" });
        }

        const result = await mongoose.connection.collection("newss").updateOne({ _id: new mongoose.Types.ObjectId(req.params.id) }, { $set: { img: image, had: title, p: description } })
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Document not found" });
        }
        res.json({ message: 'Content updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update content' });
    }
});
app.delete("/api/delevent/:id/:auth", async(req, res) => {
    try {
        const { id, auth } = req.params;
        // Generate the collection name based on user email
        const collectionName = "events"
        if (auth != "r4y378f8wr84tg78egwnif9") {
            return res.status(400).json({ message: "Wronge credenditails" });
        }
        // Check if model already exists in Mongoose
        let ChatbotModel;
        if (mongoose.models[collectionName]) {
            ChatbotModel = mongoose.models[collectionName]; // Use existing model
        } else {
            // Define schema dynamically
            const chatbotSchema = new mongoose.Schema({
                img: String,
                had: String,
                p: String,
            }, { collection: collectionName });
            ChatbotModel = mongoose.model(collectionName, chatbotSchema);
        }

        // Delete chatbot by ID
        const deletedChatbot = await ChatbotModel.findByIdAndDelete(id);

        if (!deletedChatbot) {
            return res.status(404).json({ message: "Chatbot not found!" });
        }

        res.status(200).json({ message: "Chatbot deleted successfully!" });
    } catch (error) {
        console.error("Error deleting chatbot:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.delete("/api/delnews/:id/:auth", async(req, res) => {
    try {
        const { id, auth } = req.params;
        // Generate the collection name based on user email
        const collectionName = "newss"
        if (auth != "r4y378f8wr84tg78egwnif9") {
            return res.status(400).json({ message: "Wronge credenditails" });
        }
        // Check if model already exists in Mongoose
        let ChatbotModel;
        if (mongoose.models[collectionName]) {
            ChatbotModel = mongoose.models[collectionName]; // Use existing model
        } else {
            // Define schema dynamically
            const chatbotSchema = new mongoose.Schema({
                img: String,
                had: String,
                p: String,
            }, { collection: collectionName });
            ChatbotModel = mongoose.model(collectionName, chatbotSchema);
        }

        // Delete chatbot by ID
        const deletedChatbot = await ChatbotModel.findByIdAndDelete(id);

        if (!deletedChatbot) {
            return res.status(404).json({ message: "Chatbot not found!" });
        }

        res.status(200).json({ message: "Chatbot deleted successfully!" });
    } catch (error) {
        console.error("Error deleting chatbot:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});
app.use(express.json());
// Serve static files from the public directory
app.use('/timetables', express.static(path.join(__dirname, '../public/timetables')));

// Ensure the directory exists
const timetableDir = path.join(__dirname, '../public/timetables');
if (!fs.existsSync(timetableDir)) {
    fs.mkdirSync(timetableDir, { recursive: true });
}

// Multer setup for file upload
const storages = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, timetableDir);
    },
    filename: (req, file, cb) => {

        const dept = req.body.department?.replace(/\s+/g, '-'); // Replace spaces with _
        cb(null, `${dept}-timetable.pdf`);
    }
});
const upload = multer({ storage:storages });

app.post('/api/upload-timetable', (req,res)=>{
    const auth = req.headers.authorization;

    if (auth !== "r4y378f8wr84tg78egwnif9") {
        return res.status(400).json({ message: "Wrong credentials" });
    }
    upload.single('timetable')(req, res,(err) => {
     if (err instanceof multer.MulterError) {
            return res.status(500).json({ message: 'Multer error occurred.', error: err.message });
        } else if (err) {
            return res.status(400).json({ message: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        res.status(200).json({ message: 'Syllabus uploaded successfully.' });
    });
});

// Serve static files from the public/syllabus directory
app.use('/syllabus', express.static(path.join(__dirname, '../public/syllabus')));

// Ensure the syllabus directory exists
const syllabusDir = path.join(__dirname, '../public/syllabus');
if (!fs.existsSync(syllabusDir)) {
    fs.mkdirSync(syllabusDir, { recursive: true });
}

// Multer setup for syllabus upload
const syllabusStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, syllabusDir);
    },
    filename: (req, file, cb) => {
        const dept = req.body.department?.replace(/\s+/g, '-');
        cb(null, `${dept}-syllabus.pdf`);
    }
});
const syllabusUpload = multer({ storage: syllabusStorage });

app.post('/api/upload-syllabus', (req, res) => {
    const auth = req.headers.authorization;

    if (auth !== "r4y378f8wr84tg78egwnif9") {
        return res.status(400).json({ message: "Wrong credentials" });
    }

    syllabusUpload.single('syllabus')(req, res, (err) => {
        if (err instanceof multer.MulterError) {
            return res.status(500).json({ message: 'Multer error occurred.', error: err.message });
        } else if (err) {
            return res.status(400).json({ message: err.message });
        }

        if (!req.file) {
            return res.status(400).json({ message: 'No file uploaded.' });
        }

        res.status(200).json({ message: 'Syllabus uploaded successfully.' });
    });
});

// Department Materials Schema
const MaterialSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true,
        enum: ['PDF', 'Video', 'Document']
    },
    fileUrl: {
        type: String,
        required: true
    }
});

const DepartmentMaterialSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    materials: [MaterialSchema]
});

// Add pre-save middleware to clean empty materials
DepartmentMaterialSchema.pre('save', function(next) {
    if (this.materials) {
        this.materials = this.materials.filter(material => 
            material && material.title && material.type && material.fileUrl
        );
    }
    next();
});

const DepartmentMaterial = mongoose.models.department_materials || mongoose.model('department_materials', DepartmentMaterialSchema);

// Get all department materials
app.get('/api/department-materials', async (req, res) => {
    try {
        const materials = await DepartmentMaterial.find();
        res.status(200).json(materials);
    } catch (error) {
        res.status(500).json({ message: "Error fetching department materials", error: error.message });
    }
});

// Add new department material
app.post('/api/department-materials', async (req, res) => {
    const auth = req.headers.authorization;
    if (auth !== "r4y378f8wr84tg78egwnif9") {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const { name, icon, materials } = req.body;
        const newMaterial = new DepartmentMaterial({
            name,
            icon,
            materials
        });
        await newMaterial.save();
        res.status(201).json({ message: "Department material added successfully", data: newMaterial });
    } catch (error) {
        res.status(500).json({ message: "Error adding department material", error: error.message });
    }
});

// Update department material
app.put('/api/department-materials/:id', async (req, res) => {
    const auth = req.headers.authorization;
    if (auth !== "r4y378f8wr84tg78egwnif9") {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const { name, icon, materials } = req.body;
        const updatedMaterial = await DepartmentMaterial.findByIdAndUpdate(
            req.params.id,
            { name, icon, materials },
            { new: true }
        );
        if (!updatedMaterial) {
            return res.status(404).json({ message: "Department material not found" });
        }
        res.status(200).json({ message: "Department material updated successfully", data: updatedMaterial });
    } catch (error) {
        res.status(500).json({ message: "Error updating department material", error: error.message });
    }
});

// Delete department material
app.delete('/api/department-materials/:id', async (req, res) => {
    const auth = req.headers.authorization;
    if (auth !== "r4y378f8wr84tg78egwnif9") {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        const deletedMaterial = await DepartmentMaterial.findByIdAndDelete(req.params.id);
        if (!deletedMaterial) {
            return res.status(404).json({ message: "Department material not found" });
        }
        res.status(200).json({ message: "Department material deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting department material", error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));