const obj = {
    name: "huy"
}
obj.toString = null;
console.log("name" in obj);
console.log("toString" in obj);