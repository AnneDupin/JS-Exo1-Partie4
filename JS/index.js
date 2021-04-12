let array = ["PHP", "Java", "Bootstrap", "Ruby", "Vanilla"];
console.log(array);
document.getElementById("myId").innerHTML = array;

function addFirst() {
    array.push("SQL");
    document.getElementById("myId").innerHTML = array;
}