
export function readSingleFile(input, func) {
    let file = input.target.files[0];
    let reader = new FileReader();
    reader.onload = function () {
        let contents = reader.result;
        func(contents);
    };
    reader.readAsText(file);
}