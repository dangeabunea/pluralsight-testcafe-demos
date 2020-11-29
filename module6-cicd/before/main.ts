const createTestCafe = require('testcafe');

// Print runtime arguments
const args = process.argv.slice(2);
console.log(args);

createTestCafe('localhost', 1337, 1338).then(tc => {
    tc.createRunner()
        .run()
        .then(nbFailedTests => {
            process.exit(nbFailedTests ? 1 : 0);
        });
});

