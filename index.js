// FIRST APPROACH
// const superbowlWin = (record) => {
//     const res = record.find( elem => elem.result === "W")
//     if (res){
//         return res.year
//     } else {
//         return undefined
//     }
// }

// SECOND APPROACH
// function isWin(elem) {
//     return elem.result === "W"
// }
// function superbowlWin(record){
//     if (record.find(isWin)){
//         return record.find(isWin).year
//     } else {
//         return undefined
//     }
// }

// THIRD APPROACH
const superbowlWin = (record) => {
    const res = record.find(e => e.result === "W")
    return res ? res.year : undefined
}