function ballCount(input1, input2, len) {
    let b_count = 0;
    input1.forEach((data, idx1) => {
        input2.forEach((target, idx2) => {
            data == target && idx1 != idx2 ? b_count++ : null;
        });
    });

    return b_count;
}

function strikeCount(input1, input2, len) {
    let s_count = 0;
    input1.forEach((data, idx1) => {
        input2.forEach((target, idx2) => {
            data == target && idx1 == idx2 ? s_count++ : null;
        });
    });

    if (input1.length - s_count == 1 && input1.length > 2) {
        alertCommon(3, s_count);
    }

    return s_count;
}
