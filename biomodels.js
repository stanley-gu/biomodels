// Call biomodels api
var join = require('path').join;

var java = require("java");
java.classpath.push(join(__dirname,"jars/biomodels-wslib_standalone-1.21.jar"));
java.classpath.push(join(__dirname,"jars/MiriamJavaLib_standalone-1.1.5.jar"));

exports.BioModelsWSClient = java.newInstanceSync("uk.ac.ebi.biomodels.ws.BioModelsWSClient");
exports.MiriamLink = java.newInstanceSync('uk.ac.ebi.miriam.lib.MiriamLink');
