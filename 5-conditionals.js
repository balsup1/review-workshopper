let overOrUnder = 45

if (overOrUnder > 50) {
    console.log("Over 50")
} else if (overOrUnder < 50) {
    console.log("under 50")
}

if (overOrUnder < 33) {
    console.log("Bottom Third")
} else if (overOrUnder >= 33 && overOrUnder <= 66) {
    console.log("Middle Third")
} else {
    console.log("Top Third")
}

if (overOrUnder < 0 || overOrUnder > 100) {
    console.log("Outside Third")
}

