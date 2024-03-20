const createTestCafe = require('testcafe');

// Print runtime arguments
const args = process.argv.slice(2);
console.log(args);

createTestCafe('localhost', 1600, 900).then(tc => {
    tc.createRunner()
        .concurrency(2)
        .filter((test, fixture) => {
            return test.includes('note');
        })
        .run()
        .then(nbFailedTests => {
            process.exit(nbFailedTests ? 1 : 0);
        });
});

