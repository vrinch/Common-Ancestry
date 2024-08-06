function run(index1, index2) {
    // Make sure index1 is always less than or equal to index2
    if (index1 > index2) {
        [index1, index2] = [index2, index1];
    }

    let node1 = index1;
    let node2 = index2;

    // Move both nodes up until they are at the same level
    while (node1 !== node2) {
        if (node1 < node2) {
            node2 = Math.floor(node2 / 2);
        } else {
            node1 = Math.floor(node1 / 2);
        }
    }

    return node1;
}

module.exports = { run };
