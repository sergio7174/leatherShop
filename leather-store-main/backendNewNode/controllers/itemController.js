const Item = require('../models/itemModel');
const factory = require('./handlerFactory');
const multer = require('multer');
const sharp = require('sharp');
const AppError = require('../utils/appError');
const catchAsync = require('../utils/catchAsync');
const path = require('path');



const multerStorage = multer.diskStorage({
    
    destination: function (req, file, cb) {
        console.log("Estoy en itemController - line 14");
      const rootDir = path.dirname(require.main.filename);
      cb(null, path.join(rootDir, "public/images"));
    },
    
    

    filename: function (req, file, cb) {
      
      const extension = file.mimetype.split("/")[1];
      //req.files.imageCover = `${Date.now()}-${(file.originalname)}`;
      //req.files.imageCover = `${Date.now()}-${(id)}`;
        imageCoverNew = `${Date.now()}`+'.'+extension;
      //cb(null, (req.files.imageCover));
      cb(null, imageCoverNew);
    },
  });
  
  /* "fileFilter" specifies which types of files can be uploaded. */
  const filefilter = (req, file, cb) => {
    let allowedMimeTypes = ["image/jpg", "image/gif", "image/jpeg", "image/png"];
  
    if (!allowedMimeTypes.includes(file.mimetype)) {
      return cb("Error", false);
    }
    return cb(null, true);
  };
  

/*const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image!', 404), false);
  }
};*/

const upload = multer({
  storage: multerStorage,
  fileFilter: filefilter,
});


exports.uploadImages = upload.fields([
  //{ name: 'imageCover', maxCount: 1 },
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 },
]);


/*exports.resizeImages = catchAsync(async (req, res, next) => {
  if (!req.files.imageCover || !req.files.images) return next();
 
  req.body.imageCover = `${req.params.id || 'item'}-${Date.now()}-cover.jpeg`;
  console.log('EStoy en itemController - line 33 - req.body.imageCover: '+ req.body.imageCover);
  await sharp(req.files.imageCover[0].buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`frontend/src/assets/img/items/${req.body.imageCover}`);

  //images
  req.body.images = [];
  await Promise.all(
    req.files.images.map(async (file, i) => {
      const filename = `${req.params.id || 'item'}-${Date.now()}-${i + 1}.jpeg`;

      await sharp(file.buffer)
        .resize(500, 500)
        .toFormat('jpeg')
        .jpeg({ quality: 90 })
        .toFile(`frontend/src/assets/img/items/${filename}`);

      req.body.images.push(filename);
    })
  );

  next();
});*/

exports.getItemBySlug = async (req, res, next) => {
  const doc = await Item.findOne({ slug: req.params.slug });
  if (!doc) {
    return next(new AppError('No document found with that id!', 404));
  }
  res.status(200).json({
    status: 'success',
    data: {
      data: doc,
    },
  });
};

exports.getAllItems = factory.getAll(Item);


exports.createItem = async (req, res, next) => {
    console.log("Estoy en itemController - line 104 - createItem")
    
    //req.body.imageCover = req.files.imageCover;
    ImageCover = imageCoverNew;

    console.log("Estoy en itemController - line 108 - ImageCover: "+ ImageCover);
const getItemsParams = body =>   {
    return {
      name: body.name,
      type: body.type,
      description: body.description,
      price: body.price,
      imageCover: ImageCover
    };
  };
  

  let Items = new Item(getItemsParams(req.body) );

  const newDoc = await Item.create(Items);
  res.status(201).json({
    status: 'success',
    data: { data: newDoc },
  });

//exports.createItem = factory.createOne(Items);
};






// exports.getItemById = factory.getOne(Item);
exports.updateItem = factory.updateOne(Item);
exports.deleteItem = factory.deleteOne(Item);
  