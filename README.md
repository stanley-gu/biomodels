# `biomodels`

A lightweight wrapper around the Java API for the BioModels and Miriam Registry
web services.

# Installation

1. `npm install biomodels`
2. In your code: `var biomodels = require('biomodels')`

# Usage

`biomodels` contains two main classes: `BioModelsWSClient` and `MiriamLink`.
The documentation for these classes are located
[here](http://www.ebi.ac.uk/biomodels/doc/webservices/index.html) and
[here](http://www.ebi.ac.uk/compneur-srv/miriam/static/main/lib-doc/index.html).

Since the Java functions are called through
[`node-java`](https://github.com/nearinfinity/node-java), the function names
are appended with "Sync" for a synchronous call and is a asynchronous call if
left unchanged. If an asynchronous call is used, an additional input of a
callback function is expected.

