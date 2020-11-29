// Extract arguments from node process
// Testcafe must be executes under a node process programmatically,
// otherwise the arguments will not be picked up
export function getFromArgs(args: any, argName: string, defaultValue?: any) {
    for (let i = 0; i < args.length; i++) {
        /*
        Finds pairs like -arg=value in the arguments string
        For a given argument it returns the value or the default
         */

        let keyValueString = args[i].replace("-", "");
        let keyValuePair = keyValueString.split("=");

        const KEY_INDEX = 0;
        const VAL_INDEX = 1;

        if (keyValuePair[KEY_INDEX] === argName) {
            return keyValuePair[VAL_INDEX];
        }
    }

    return defaultValue;
}
