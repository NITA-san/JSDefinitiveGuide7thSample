i_label: for (let i = 0; i < 5; i++) {
    j_label: for (let j = 0; j < 6; j++) {
        if (j === 2) {
            continue i_label;
        }
        console.log(i + ":" + j);
    }
}