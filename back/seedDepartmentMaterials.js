const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/srgp")
    .then(() => console.log("MongoDB Connected"))
    .catch((err) => console.log(err));

// Department Materials Schema
const MaterialSchema = new mongoose.Schema({
    title: String,
    type: String,
    fileUrl: String
});

const DepartmentMaterialSchema = new mongoose.Schema({
    name: String,
    icon: String,
    materials: [MaterialSchema]
});

const DepartmentMaterial = mongoose.model('department_materials', DepartmentMaterialSchema);

// Dummy data
const departmentMaterials = [
    {
        name: 'Architecture & Interior Design',
        icon: '🏛️',
        materials: [
            {
                title: 'Design Principles',
                type: 'PDF',
                fileUrl: '/materials/architecture/design-principles.pdf'
            },
            {
                title: 'Interior Design Basics',
                type: 'Video',
                fileUrl: '/materials/architecture/interior-design-basics.mp4'
            },
            {
                title: 'Architecture History',
                type: 'Document',
                fileUrl: '/materials/architecture/history.docx'
            }
        ]
    },
    {
        name: 'Computer Science',
        icon: '💻',
        materials: [
            {
                title: 'Programming Fundamentals',
                type: 'PDF',
                fileUrl: '/materials/cs/programming-basics.pdf'
            },
            {
                title: 'Data Structures',
                type: 'Video',
                fileUrl: '/materials/cs/data-structures.mp4'
            },
            {
                title: 'Web Development',
                type: 'Document',
                fileUrl: '/materials/cs/web-dev.docx'
            }
        ]
    },
    {
        name: 'Electronics & Telecommunication',
        icon: '📡',
        materials: [
            {
                title: 'Circuit Design',
                type: 'PDF',
                fileUrl: '/materials/electronics/circuit-design.pdf'
            },
            {
                title: 'Digital Electronics',
                type: 'Video',
                fileUrl: '/materials/electronics/digital-electronics.mp4'
            },
            {
                title: 'Communication Systems',
                type: 'Document',
                fileUrl: '/materials/electronics/communication.docx'
            }
        ]
    },
    {
        name: 'Fashion Technology',
        icon: '👗',
        materials: [
            {
                title: 'Fashion Design Basics',
                type: 'PDF',
                fileUrl: '/materials/fashion/design-basics.pdf'
            },
            {
                title: 'Textile Technology',
                type: 'Video',
                fileUrl: '/materials/fashion/textile-tech.mp4'
            },
            {
                title: 'Pattern Making',
                type: 'Document',
                fileUrl: '/materials/fashion/pattern-making.docx'
            }
        ]
    },
    {
        name: 'Modern Office Management',
        icon: '📊',
        materials: [
            {
                title: 'Office Administration',
                type: 'PDF',
                fileUrl: '/materials/mom/office-admin.pdf'
            },
            {
                title: 'Business Communication',
                type: 'Video',
                fileUrl: '/materials/mom/business-comm.mp4'
            },
            {
                title: 'Management Principles',
                type: 'Document',
                fileUrl: '/materials/mom/management.docx'
            }
        ]
    }
];

// Function to seed the database
const seedDatabase = async () => {
    try {
        // Clear existing data
        await DepartmentMaterial.deleteMany({});
        console.log('Cleared existing department materials');

        // Insert new data
        const result = await DepartmentMaterial.insertMany(departmentMaterials);
        console.log('Successfully seeded department materials:', result.length, 'departments added');

        // Close the connection
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding database:', error);
        mongoose.connection.close();
    }
};

// Run the seed function
seedDatabase(); 