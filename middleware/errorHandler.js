const constants = require ('../constants')
const errorHandler = (err, req, res, next) => { 
 const statusCode = res.statusCode ? res.statusCode : 500;
 switch (statusCode){ 
    case constants.VALIDATION_ERROR: 
      res.send({
        title: "Validation Failed",
        message: err.message, 
        stackTrace: err.stack
        });
       break;
    case constants.NOT_FOUND:   
      res.send({
        title: "Not Found", 
        message: err.message, 
        stackTrace: err.stack
       });
       case constants.UNAUTHORIZED:   
       res.send({
         title: "Unauthorized", 
         message: err.message, 
         stackTrace: err.stack
        });
        case constants.FORBIDDEN:   
        res.send({
          title: "Forbidden", 
          message: err.message, 
          stackTrace: err.stack
         });
         case constants.SEVER_ERROR:   
         res.send({
           title: "Server Error", 
           message: err.message, 
           stackTrace: err.stack
          });
    default:
      
    return res.send({
      success: false,
      message: err.message,
    });

      // break;
 }
};


// const errorHandler = (err, req, res, next) => {
//   res.status(403);
//   return res.send({ error: err.message });
 
//   // next(err);
// }

module.exports = errorHandler;
