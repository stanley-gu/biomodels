// Call biomodels api

var java = require("java");
java.classpath.push("node_modules/biomodels/jars/biomodels-wslib_standalone-1.21.jar");
java.classpath.push("node_modules/biomodels/jars/MiriamJavaLib_standalone-1.1.5.jar");

exports.BioModelsWSClient = java.newInstanceSync("uk.ac.ebi.biomodels.ws.BioModelsWSClient");
exports.MiriamLink = java.newInstanceSync('uk.ac.ebi.miriam.lib.MiriamLink');
