const express = require('express');
const app = express()
const loginRoute = require('./routes/loginRoute.js')
const feedRoute = require('./routes/routes.js')
const postRoute = require('./routes/routes.js')
//variables for image uploading, storage, and display
const upload = require('./middleware/multer')
const sharp = require('sharp')
const cloudinary = require('./middleware/cloudinaryConfig')
const { CloudinaryStorage } = require('multer-storage-cloudinary');



const connectDB = require('./config/database');


//env
require('dotenv').config({ path: './config/.env' })

//Database
connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())


//routes
app.get('/', function (req, res) {
    res.render('index', {
        pageTitle: "Minecraft IT"
    });
});
app.get('/upload', function (req, res) {
    res.render('post', {
        pageTitle: "Minecraft IT"
    });
});

app.get('/feed', (req,res,next) => {
    console.log('feed router is workin!')
    res.render('feed', {
        pageTitle: "Dashboard"
    })
})

// app.get('/my-uploads', (req,res,next) => {
//     res.render('user-uploads', {
//         pageTitle: "My uploads"
//     })
// })

// app.post('/my-uploads', multerUploads, (req, res) => {
//     res.render('user-uploads', {
//         pageTitle: "My Uploads"
//     })
// console.log('req.body :', req.body);
// });


//app.use(loginRoute)
app.use(feedRoute)

app.use(postRoute)


app.use((req, res, next) => {
    res.status(404).render('404', { pageTitle: 'Page Not Found' })
})

app.listen(process.env.PORT, () => {
    console.log('Your server is running, better go catch it!')
})

//Image handling

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpg', 'png', 'jpeg'],
    transformation: [{ width: 500, height: 500, crop: 'limit' }]
  }
})

// Route for handling image uploads
app.post('/upload', upload, async (req, res) => {
  try {
    // Use Sharp to resize and compress the image
    const result = await sharp(req.file.path)
      .resize(500, 500)
      .jpeg({ quality: 80 })
      .toBuffer();

    // Upload the processed image to Cloudinary
    const uploadResult = await cloudinary.uploader.upload(result, { folder: 'uploads' });

    // Delete the temporary file
    fs.unlinkSync(req.file.path);

    // Return the Cloudinary URL for the uploaded image
    res.json({ url: uploadResult.secure_url });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Route for displaying images
app.get('/image/:id', async (req, res) => {
  try {
    // Get the Cloudinary URL for the specified image ID
    const { id } = req.params;
    const url = cloudinary.url(id);

    // Redirect to the image URL
    res.redirect(url);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Something went wrong' });
  }
});

