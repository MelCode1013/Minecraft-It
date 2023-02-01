const multer = require('multer')
//multer.memoryStorage() allows us to store the image upload to be used later
const storage = multer.memoryStorage()

//multer({ storage }).single('image'); sets the storage option we’ll be using on the application while the .single('image'); specifies the field name multer should go to when it’s looking for the file.
const upload = multer({ storage }).single('image')


module.exports =  upload